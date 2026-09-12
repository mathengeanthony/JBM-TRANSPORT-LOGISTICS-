import React, { useEffect, useRef, useState } from "react";
import { PageLayout } from "../components/PageLayout";
import * as d3 from "d3";
import { Activity, Truck, AlertTriangle, CheckCircle2, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";

interface NodeData extends d3.SimulationNodeDatum {
  id: string;
  name: string;
  rx: number; // Relative x (0 to 1)
  ry: number; // Relative y (0 to 1)
  x?: number;
  y?: number;
}

interface LinkData extends d3.SimulationLinkDatum<NodeData> {
  source: string | NodeData;
  target: string | NodeData;
}

const INITIAL_NODES: NodeData[] = [
  { id: 'MBA', name: 'Mombasa', rx: 0.85, ry: 0.25 },
  { id: 'NBO', name: 'Nairobi', rx: 0.70, ry: 0.20 },
  { id: 'KLA', name: 'Kampala', rx: 0.40, ry: 0.15 },
  { id: 'KGL', name: 'Kigali', rx: 0.30, ry: 0.25 },
  { id: 'FIH', name: 'Kinshasa', rx: 0.10, ry: 0.40 },
  { id: 'DAR', name: 'Dar es Salaam', rx: 0.85, ry: 0.45 },
  { id: 'LUN', name: 'Lusaka', rx: 0.55, ry: 0.65 },
  { id: 'GBE', name: 'Gaborone', rx: 0.50, ry: 0.80 },
  { id: 'JNB', name: 'Johannesburg', rx: 0.60, ry: 0.95 }
];

const INITIAL_LINKS: LinkData[] = [
  { source: 'MBA', target: 'NBO' },
  { source: 'NBO', target: 'KLA' },
  { source: 'KLA', target: 'KGL' },
  { source: 'NBO', target: 'DAR' },
  { source: 'DAR', target: 'LUN' },
  { source: 'LUN', target: 'GBE' },
  { source: 'GBE', target: 'JNB' },
  { source: 'KGL', target: 'FIH' },
  { source: 'LUN', target: 'FIH' },
  { source: 'MBA', target: 'DAR' }
];

export function LogisticsDashboardPage() {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeTrucks, setActiveTrucks] = useState(142);
  const [alerts, setAlerts] = useState(2);

  useEffect(() => {
    if (!svgRef.current || !containerRef.current) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove(); // Clear on re-render

    const containerWidth = containerRef.current.clientWidth;
    const containerHeight = containerRef.current.clientHeight || 600;

    svg.attr("width", containerWidth).attr("height", containerHeight);

    // Map relative coordinates to actual pixels
    const margin = { top: 40, right: 40, bottom: 40, left: 60 };
    const w = containerWidth - margin.left - margin.right;
    const h = containerHeight - margin.top - margin.bottom;

    const nodes = INITIAL_NODES.map(d => ({
      ...d,
      x: margin.left + d.rx * w,
      y: margin.top + d.ry * h,
      fx: margin.left + d.rx * w,
      fy: margin.top + d.ry * h
    }));

    const links = INITIAL_LINKS.map(d => ({ ...d }));

    // Simulation for links resolution
    const simulation = d3.forceSimulation<NodeData>(nodes)
      .force("link", d3.forceLink<NodeData, LinkData>(links).id(d => d.id).distance(100))
      .stop();

    // Run simulation synchronously to resolve links
    simulation.tick(1); 

    const g = svg.append("g");

    // Draw Links
    const link = g.append("g")
      .attr("stroke", "rgba(156, 163, 175, 0.2)")
      .attr("stroke-width", 2)
      .selectAll("line")
      .data(links)
      .join("line")
      .attr("x1", d => (d.source as NodeData).x!)
      .attr("y1", d => (d.source as NodeData).y!)
      .attr("x2", d => (d.target as NodeData).x!)
      .attr("y2", d => (d.target as NodeData).y!)
      .attr("stroke-dasharray", "4,4");

    // Pulse animation for links
    d3.timer((elapsed) => {
      link.attr("stroke-dashoffset", -elapsed / 20);
    });

    // Draw Nodes
    const node = g.append("g")
      .selectAll("g")
      .data(nodes)
      .join("g")
      .attr("transform", d => `translate(${d.x},${d.y})`);

    // Node outer glow
    node.append("circle")
      .attr("r", 12)
      .attr("fill", "rgba(255, 106, 0, 0.2)")
      .attr("class", "animate-pulse");

    // Node core
    node.append("circle")
      .attr("r", 5)
      .attr("fill", "#ff6a00")
      .attr("stroke", "#050505")
      .attr("stroke-width", 2);

    // Node labels
    node.append("text")
      .attr("x", 15)
      .attr("y", 4)
      .text(d => d.name)
      .attr("font-size", "10px")
      .attr("font-weight", "bold")
      .attr("fill", "#9ca3af")
      .attr("class", "tracking-widest uppercase");

    // Live vehicles simulation
    const vehiclesGroup = g.append("g");

    const spawnVehicle = () => {
      const randomLink = links[Math.floor(Math.random() * links.length)];
      const source = randomLink.source as NodeData;
      const target = randomLink.target as NodeData;

      // Ensure valid coordinates
      if (source.x === undefined || target.x === undefined) return;

      const duration = 3000 + Math.random() * 4000;
      
      const vehicle = vehiclesGroup.append("circle")
        .attr("r", 3)
        .attr("fill", "#fff")
        .attr("cx", source.x)
        .attr("cy", source.y)
        .attr("filter", "drop-shadow(0 0 4px #fff)");

      vehicle.transition()
        .duration(duration)
        .ease(d3.easeLinear)
        .attr("cx", target.x)
        .attr("cy", target.y)
        .on("end", function() {
          d3.select(this).remove();
        });
    };

    // Spawn vehicles randomly
    const interval = setInterval(() => {
      spawnVehicle();
      // Randomly update dashboard metrics slightly to look alive
      if (Math.random() > 0.5) {
        setActiveTrucks(prev => prev + (Math.random() > 0.5 ? 1 : -1));
      }
    }, 600);

    return () => {
      clearInterval(interval);
    };

  }, []);

  return (
    <PageLayout>
      <div className="bg-[#f8f8f8] dark:bg-JBM-black min-h-screen pt-4 md:pt-8 pb-12">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-px bg-orange-500"></div>
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] text-orange-500">Live Command Center</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tighter leading-[0.9] text-JBM-charcoal dark:text-white">
                Logistics Network <br />
                <span className="text-gray-400">Real-Time Dashboard</span>
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 px-4 py-2 rounded-full">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-JBM-charcoal dark:text-white">System Online</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            
            {/* LEFT METRICS */}
            <div className="lg:col-span-1 flex flex-col gap-4">
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/10 rounded-2xl p-6 shadow-xl">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 bg-orange-500/10 rounded-lg">
                    <Truck className="w-5 h-5 text-orange-500" />
                  </div>
                  <Activity className="w-4 h-4 text-green-500 animate-pulse" />
                </div>
                <h3 className="text-3xl font-extrabold text-JBM-charcoal dark:text-white">{activeTrucks}</h3>
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mt-1">Active Fleet En-Route</p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/10 rounded-2xl p-6 shadow-xl">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 bg-blue-500/10 rounded-lg">
                    <ShieldCheck className="w-5 h-5 text-blue-500" />
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-blue-500" />
                </div>
                <h3 className="text-3xl font-extrabold text-JBM-charcoal dark:text-white">99.8%</h3>
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mt-1">Transit Compliance</p>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/10 rounded-2xl p-6 shadow-xl">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 bg-red-500/10 rounded-lg">
                    <AlertTriangle className="w-5 h-5 text-red-500" />
                  </div>
                  <span className="text-[10px] font-bold bg-red-500 text-white px-2 py-0.5 rounded-full">{alerts}</span>
                </div>
                <h3 className="text-3xl font-extrabold text-JBM-charcoal dark:text-white">{alerts}</h3>
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mt-1">OSBP Border Delays</p>
                <div className="mt-3 text-xs text-red-500 font-medium bg-red-500/10 px-3 py-2 rounded-lg">
                  Malaba OSBP: Scanner Maintenance
                </div>
              </motion.div>
            </div>

            {/* MAIN D3 VISUALIZATION */}
            <div className="lg:col-span-3 bg-white dark:bg-[#050505] border border-gray-200 dark:border-white/10 rounded-3xl p-2 md:p-6 shadow-2xl relative min-h-[500px] flex flex-col">
              <div className="absolute top-6 left-6 z-10 pointer-events-none">
                <h2 className="text-xs font-bold uppercase tracking-widest text-JBM-charcoal dark:text-white">Pan-African Network</h2>
                <p className="text-[9px] font-medium text-gray-500 mt-1">D3.js Data-Driven Simulation</p>
              </div>
              
              <div className="absolute top-6 right-6 z-10 flex flex-col gap-2 pointer-events-none text-right">
                <div className="flex items-center gap-2 justify-end">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-gray-500">Hub</span>
                  <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                </div>
                <div className="flex items-center gap-2 justify-end">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-gray-500">Active Cargo</span>
                  <div className="w-2 h-2 rounded-full bg-white shadow-[0_0_5px_rgba(255,255,255,0.8)]"></div>
                </div>
              </div>

              {/* D3 Container */}
              <div ref={containerRef} className="w-full h-full flex-grow relative overflow-hidden rounded-2xl bg-[#0a0a0a] map-bg-grid">
                <svg ref={svgRef} className="w-full h-full absolute inset-0"></svg>
              </div>
            </div>

          </div>
        </div>
      </div>

      <style>{`
        .map-bg-grid {
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
          background-size: 40px 40px;
        }
        html:not(.dark) .map-bg-grid {
          background-image: 
            linear-gradient(rgba(0, 0, 0, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 0, 0, 0.03) 1px, transparent 1px);
        }
      `}</style>
    </PageLayout>
  );
}
