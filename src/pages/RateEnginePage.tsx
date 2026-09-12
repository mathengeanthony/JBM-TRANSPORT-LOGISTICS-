import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { PageLayout } from "../components/PageLayout";
import { Calculator, Truck, Globe, Map as MapIcon, Ship, ArrowRight, ShieldCheck, Clock, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { TinyMarquee } from "../components/TinyMarquee";

type ScopeType = "kenya" | "eac" | "sadc" | "global";

const SCOPES = [
  { id: "kenya", label: "🇰🇪 KENYA DOMESTIC", icon: Truck },
  { id: "eac", label: "🌍 EAC CROSS-BORDER", icon: Globe },
  { id: "sadc", label: "🛣️ SADC TRANSIT", icon: MapIcon },
  { id: "global", label: "🚢 GLOBAL IMPORTS", icon: Ship },
] as const;

const SCOPE_DATA = {
  kenya: {
    title: "Kenya Domestic Logistics",
    subheading: "Inter-county point-to-point freight, city-to-city distribution corridors, and local short-haul dispatch.",
    metrics: [
      { value: "< 12 HOURS", label: "Express Interstate Transit" },
      { value: "47 COUNTIES", label: "Door-to-Door Nationwide Reach" },
      { value: "500+ VEHICLES", label: "Ready Dispatch Tonnage" },
      { value: "100% LIVE", label: "GPS Route Tracking" }
    ]
  },
  eac: {
    title: "EAC Cross-Border Trade",
    subheading: "Frictionless regional trade execution across the East African Community via One-Stop Border Posts (OSBPs) and Single Customs Territory (SCT) protocols.",
    metrics: [
      { value: "< 45 MINS", label: "Average OSBP Border Dwell Time" },
      { value: "6 COUNTIES", label: "EAC Member State Coverage" },
      { value: "COMESA", label: "Integrated Regional Insurance" },
      { value: "24/7", label: "On-Ground Border Liaison Teams" }
    ]
  },
  sadc: {
    title: "SADC Trans African & Heavy Lift",
    subheading: "Long-haul southern corridor freight, heavy-lift transport, and multi-country overland transit security.",
    metrics: [
      { value: "3,000+ KM", label: "Long-Haul Transit Capability" },
      { value: "45-TON", label: "Heavy Lift & OOG Capacity" },
      { value: "100% CONVOY", label: "Satellite & Armed Escort Staging" },
      { value: "0 DELAYS", label: "Pre-Cleared Transit Permits" }
    ]
  },
  global: {
    title: "Global Transit & Tariffs",
    subheading: "Port-of-entry vessel discharge, KRA customs-bonded holding, airport cold-chain handling, and tariff compliance.",
    metrics: [
      { value: "< 24 HOURS", label: "Vessel-to-Gate Container Discharge" },
      { value: "< 4 HOURS", label: "Air Cargo Clearance & Ramp Transfer" },
      { value: "25,000 m²", label: "KRA Customs-Bonded Yard Footprint" },
      { value: "100% iCMS", label: "Live KRA System Integration" }
    ]
  }
};

export function RateEnginePage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const initialScope = (searchParams.get("scope") as ScopeType) || "kenya";
  const [activeScope, setActiveScope] = useState<ScopeType>(initialScope);
  
  useEffect(() => {
    const scope = searchParams.get("scope") as ScopeType;
    if (scope && ["kenya", "eac", "sadc", "global"].includes(scope)) {
      setActiveScope(scope);
    }
  }, [searchParams]);
  const data = SCOPE_DATA[activeScope];
  const ActiveIcon = SCOPES.find(s => s.id === activeScope)?.icon || Calculator;

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="w-full bg-white dark:bg-JBM-black text-JBM-charcoal dark:text-white pt-6 md:pt-10 pb-8 md:pb-12 relative border-b border-gray-200 dark:border-white/10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-orange-500/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 relative z-10">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <div className="w-8 h-px bg-orange-500"></div>
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] text-orange-500">Dynamic Rate & Tariff Engine</span>
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold uppercase tracking-tighter leading-[0.9] max-w-4xl">
              Logistics Cost <br />
              <span className="text-gray-400">& Tariff Calculator</span>
            </h1>
          </div>
          
          <div className="flex flex-wrap items-center gap-2 mt-4 md:mt-6">
            {SCOPES.map((scope) => (
              <button
                key={scope.id}
                onClick={() => setActiveScope(scope.id as ScopeType)}
                className={`px-4 py-2 rounded-full text-[9px] md:text-[10px] font-bold uppercase tracking-widest transition-all ${
                  activeScope === scope.id 
                    ? "bg-orange-500 text-white shadow-[0_0_15px_rgba(249,115,22,0.4)]" 
                    : "bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-white/10 hover:text-JBM-charcoal dark:hover:text-white"
                }`}
              >
                {scope.label}
              </button>
            ))}
          </div>
          
          <AnimatePresence mode="wait">
            <motion.div 
              key={`desc-${activeScope}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="mt-6 md:mt-8 relative overflow-hidden rounded-2xl -ml-4 sm:-ml-6 md:-ml-8 p-4 sm:p-6 md:p-8 border border-orange-500/10 shadow-xl max-w-4xl group"
            >
              <div className="absolute inset-0 bg-[url('/images/bg_rate_engine.jpg')] bg-cover bg-center opacity-90 transition-opacity duration-700"></div>
            <div className="absolute inset-0 bg-[#0a0a0a]/40"></div>
              <div className="relative z-10">
                <h2 className="text-lg md:text-2xl font-extrabold uppercase tracking-tight text-orange-500">
                  Mode: {data.title}
                </h2>
                <p className="mt-2 text-[10px] md:text-sm text-white drop-shadow-md leading-snug md:leading-normal font-medium">
                  {data.subheading}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mt-6 md:mt-8 border-t border-gray-200 dark:border-white/10 pt-4 md:pt-6">
            <AnimatePresence mode="wait">
              {data.metrics.map((metric, idx) => (
                <motion.div 
                  key={`${activeScope}-metric-${idx}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2, delay: idx * 0.05 }}
                  className="flex flex-col gap-0 md:gap-1"
                >
                  <span className="text-xl md:text-3xl font-extrabold text-orange-500">{metric.value}</span>
                  <span className="text-[9px] md:text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 leading-tight md:leading-normal">{metric.label}</span>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          {/* Dynamic Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8 md:mt-12 flex-wrap">
            <button
              onClick={() => {
                document.getElementById('calculator-section')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group bg-orange-500 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl flex items-center justify-between hover:bg-orange-600 transition-all shadow-md w-full sm:w-auto flex-1 min-w-0"
            >
              <div className="flex items-center gap-3">
                <Calculator className="w-4 h-4 md:w-5 md:h-5" />
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest truncate">
                  Start calculating quote estimate
                </span>
              </div>
              <ArrowRight className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all shrink-0 ml-2" />
            </button>
            <button
              onClick={() => {
                if (activeScope === 'kenya') navigate('/fleet');
                else if (activeScope === 'eac') navigate('/#section-commercial'); // Third section mapped to commercial
                else navigate('/#section-land'); // Fourth section mapped to global freight network
              }}
              className="group bg-JBM-charcoal dark:bg-white text-white dark:text-black px-6 md:px-8 py-3 md:py-4 rounded-xl flex items-center justify-between hover:bg-orange-500 hover:text-white transition-all shadow-md w-full sm:w-auto flex-1 min-w-0"
            >
              <div className="flex items-center gap-3">
                <i className="fa-solid fa-graduation-cap text-sm md:text-base"></i>
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest truncate">
                  {activeScope === 'kenya' && "Kenyan Transport Knowledge"}
                  {activeScope === 'eac' && "EAC Cross Border Knowledge"}
                  {activeScope === 'sadc' && "SADC Transport Knowledge"}
                  {activeScope === 'global' && "Global Imports Knowledge"}
                </span>
              </div>
              <i className="fa-solid fa-arrow-right -rotate-45 text-[10px] opacity-50 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all shrink-0 ml-2"></i>
            </button>
            <button
              className="group bg-white dark:bg-transparent border border-gray-300 dark:border-white/20 text-JBM-charcoal dark:text-white px-6 md:px-8 py-3 md:py-4 rounded-xl flex items-center justify-between hover:border-orange-500 hover:text-orange-500 transition-all shadow-md w-full sm:w-auto flex-1 min-w-0"
            >
              <div className="flex items-center gap-3">
                <i className="fa-solid fa-scale-balanced text-sm md:text-base"></i>
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest truncate">
                  Compliance and Info
                </span>
              </div>
              <i className="fa-solid fa-arrow-right -rotate-45 text-[10px] opacity-50 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all shrink-0 ml-2"></i>
            </button>
          </div>

        </div>
      </section>
      <TinyMarquee />

      {/* Interactive Calculator Section */}
      <section id="calculator-section" className="py-6 md:py-16 max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 w-full">
        
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* LEFT COL: Inputs */}
          <div className="w-full lg:w-7/12 flex flex-col gap-6">
            
            <div className="flex items-center gap-3 mb-2">
              <i className="fa-solid fa-sliders text-orange-500"></i>
              <h3 className="text-xl md:text-2xl font-extrabold uppercase tracking-tight text-JBM-charcoal dark:text-white">
                Configuration Engine
              </h3>
            </div>

            <AnimatePresence mode="wait">
              <motion.div 
                key={`inputs-${activeScope}`}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.3 }}
                className="bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-3xl p-6 md:p-8 flex flex-col gap-6"
              >
                {/* DYNAMIC INPUTS BASED ON SCOPE */}
                
                {/* KENYA DOMESTIC */}
                {activeScope === "kenya" && (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Origin City/Town</label>
                        <div className="relative">
                          <i className="fa-solid fa-location-dot absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
                          <input type="text" placeholder="e.g., Nairobi" className="w-full bg-white dark:bg-black border border-gray-200 dark:border-white/10 rounded-xl py-3 pl-10 pr-4 text-xs font-bold text-JBM-charcoal dark:text-white focus:border-orange-500 outline-none transition-colors" />
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Destination City/Town</label>
                        <div className="relative">
                          <i className="fa-solid fa-flag-checkered absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
                          <input type="text" placeholder="e.g., Mombasa" className="w-full bg-white dark:bg-black border border-gray-200 dark:border-white/10 rounded-xl py-3 pl-10 pr-4 text-xs font-bold text-JBM-charcoal dark:text-white focus:border-orange-500 outline-none transition-colors" />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Quick Corridors</label>
                      <div className="flex flex-wrap gap-2">
                        {["Nairobi ➔ Mombasa", "Naivasha ➔ Nakuru", "Nairobi ➔ Eldoret"].map(route => (
                          <button key={route} className="px-3 py-1.5 bg-gray-200 dark:bg-white/10 rounded-lg text-[10px] font-bold text-JBM-charcoal dark:text-white hover:bg-orange-500 hover:text-white transition-colors">
                            {route}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Truck Class / Tonnage</label>
                      <select className="w-full bg-white dark:bg-black border border-gray-200 dark:border-white/10 rounded-xl py-3 px-4 text-xs font-bold text-JBM-charcoal dark:text-white focus:border-orange-500 outline-none transition-colors appearance-none">
                        <option>Canter (4-Ton)</option>
                        <option>Rigid Box (10-Ton)</option>
                        <option>Prime Mover (28-Ton)</option>
                      </select>
                    </div>
                  </>
                )}

                {/* EAC CROSS-BORDER */}
                {activeScope === "eac" && (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Origin Country & City</label>
                        <div className="relative">
                          <i className="fa-solid fa-earth-africa absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
                          <input type="text" placeholder="e.g., Nairobi, KE" className="w-full bg-white dark:bg-black border border-gray-200 dark:border-white/10 rounded-xl py-3 pl-10 pr-4 text-xs font-bold text-JBM-charcoal dark:text-white focus:border-orange-500 outline-none transition-colors" />
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Destination Country & City</label>
                        <div className="relative">
                          <i className="fa-solid fa-location-crosshairs absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
                          <input type="text" placeholder="e.g., Kampala, UG" className="w-full bg-white dark:bg-black border border-gray-200 dark:border-white/10 rounded-xl py-3 pl-10 pr-4 text-xs font-bold text-JBM-charcoal dark:text-white focus:border-orange-500 outline-none transition-colors" />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Target OSBP (Border Post)</label>
                      <div className="flex flex-wrap gap-2">
                        {["Malaba OSBP", "Namanga OSBP", "Busia OSBP", "Taveta OSBP"].map(route => (
                          <button key={route} className="px-3 py-1.5 bg-gray-200 dark:bg-white/10 rounded-lg text-[10px] font-bold text-JBM-charcoal dark:text-white hover:bg-orange-500 hover:text-white transition-colors">
                            {route}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Cargo Type</label>
                      <select className="w-full bg-white dark:bg-black border border-gray-200 dark:border-white/10 rounded-xl py-3 px-4 text-xs font-bold text-JBM-charcoal dark:text-white focus:border-orange-500 outline-none transition-colors appearance-none">
                        <option>Standard Freight (SCT Cleared)</option>
                        <option>Agricultural / Phytosanitary</option>
                        <option>Cold Chain / Perishables</option>
                      </select>
                    </div>
                  </>
                )}

                {/* SADC TRANSIT */}
                {activeScope === "sadc" && (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Origin Hub</label>
                        <div className="relative">
                          <i className="fa-solid fa-truck-fast absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
                          <input type="text" placeholder="e.g., Mombasa Port" className="w-full bg-white dark:bg-black border border-gray-200 dark:border-white/10 rounded-xl py-3 pl-10 pr-4 text-xs font-bold text-JBM-charcoal dark:text-white focus:border-orange-500 outline-none transition-colors" />
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Destination SADC Node</label>
                        <div className="relative">
                          <i className="fa-solid fa-map-pin absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
                          <input type="text" placeholder="e.g., Lusaka, Zambia" className="w-full bg-white dark:bg-black border border-gray-200 dark:border-white/10 rounded-xl py-3 pl-10 pr-4 text-xs font-bold text-JBM-charcoal dark:text-white focus:border-orange-500 outline-none transition-colors" />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Cargo Specification</label>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                        {["Standard Containerized", "Out-of-Gauge / Heavy", "Bulk Freight"].map(route => (
                          <button key={route} className="px-3 py-2 bg-gray-200 dark:bg-white/10 rounded-lg text-[10px] font-bold text-JBM-charcoal dark:text-white hover:bg-orange-500 hover:text-white transition-colors text-left sm:text-center leading-tight">
                            {route}
                          </button>
                        ))}
                      </div>
                    </div>
                  </>
                )}

                {/* GLOBAL IMPORTS */}
                {activeScope === "global" && (
                  <>
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Port, Airport, or Bonded Yard</label>
                      <div className="relative">
                        <i className="fa-solid fa-anchor absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
                        <input type="text" placeholder="e.g., Kilindini Terminal, JKIA Ramp, Embakasi ICD" className="w-full bg-white dark:bg-black border border-gray-200 dark:border-white/10 rounded-xl py-3 pl-10 pr-4 text-xs font-bold text-JBM-charcoal dark:text-white focus:border-orange-500 outline-none transition-colors" />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Facility / Storage Need</label>
                      <div className="flex flex-wrap gap-2">
                        {["Customs Bonded", "GDP Cold Storage", "EPZ / SEZ Yards"].map(route => (
                          <button key={route} className="px-3 py-1.5 bg-gray-200 dark:bg-white/10 rounded-lg text-[10px] font-bold text-JBM-charcoal dark:text-white hover:bg-orange-500 hover:text-white transition-colors">
                            {route}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">HS Code (Optional)</label>
                        <input type="text" placeholder="e.g., 8704.22.90" className="w-full bg-white dark:bg-black border border-gray-200 dark:border-white/10 rounded-xl py-3 px-4 text-xs font-bold text-JBM-charcoal dark:text-white focus:border-orange-500 outline-none transition-colors" />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">CIF / FOB Value (USD)</label>
                        <input type="number" placeholder="e.g., 45000" className="w-full bg-white dark:bg-black border border-gray-200 dark:border-white/10 rounded-xl py-3 px-4 text-xs font-bold text-JBM-charcoal dark:text-white focus:border-orange-500 outline-none transition-colors" />
                      </div>
                    </div>
                  </>
                )}

                <button className="w-full mt-2 py-4 rounded-xl bg-JBM-charcoal dark:bg-white text-white dark:text-black font-extrabold uppercase tracking-widest text-[10px] sm:text-xs hover:bg-orange-500 dark:hover:bg-orange-500 transition-colors flex items-center justify-center gap-2 shadow-lg">
                  Generate Live Estimate <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT COL: Output Matrix / Utility */}
          <div className="w-full lg:w-5/12 flex flex-col gap-6">
            
            <div className="flex items-center gap-3 mb-2">
              <i className="fa-solid fa-file-invoice-dollar text-orange-500"></i>
              <h3 className="text-xl md:text-2xl font-extrabold uppercase tracking-tight text-JBM-charcoal dark:text-white">
                Live Projection
              </h3>
            </div>

            <div className="bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/10 rounded-3xl p-6 md:p-8 flex flex-col shadow-xl">
              
              <div className="flex justify-between items-start border-b border-gray-100 dark:border-white/10 pb-6 mb-6">
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-1">Projection ID</span>
                  <span className="text-xs font-mono font-bold text-JBM-charcoal dark:text-white">PRJ-{Math.floor(Math.random() * 100000)}-{activeScope.toUpperCase()}</span>
                </div>
                <div className="flex items-center gap-2 text-green-500 bg-green-500/10 px-3 py-1 rounded-full">
                  <CheckCircle2 className="w-3 h-3" />
                  <span className="text-[9px] font-bold uppercase tracking-widest">Live Rates</span>
                </div>
              </div>

              {/* Dynamic Readout based on scope */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`output-${activeScope}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col gap-5 flex-grow"
                >
                  {activeScope === "kenya" && (
                    <>
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-bold text-gray-500 dark:text-gray-400">Est. Transit Hours</span>
                        <span className="text-sm font-extrabold text-JBM-charcoal dark:text-white">8 - 12 Hrs</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-bold text-gray-500 dark:text-gray-400">Corridor Route</span>
                        <span className="text-sm font-extrabold text-JBM-charcoal dark:text-white">A104 Highway</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-bold text-gray-500 dark:text-gray-400">Vehicle Assignment</span>
                        <span className="text-sm font-extrabold text-JBM-charcoal dark:text-white">28-Ton Prime Mover</span>
                      </div>
                    </>
                  )}

                  {activeScope === "eac" && (
                    <>
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-bold text-gray-500 dark:text-gray-400">OSBP Border Dwell</span>
                        <span className="text-sm font-extrabold text-JBM-charcoal dark:text-white">~ 45 Mins (SCT Cleared)</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-bold text-gray-500 dark:text-gray-400">Transit Permits</span>
                        <span className="text-sm font-extrabold text-JBM-charcoal dark:text-white">COMESA Yellow Card Inc.</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-bold text-gray-500 dark:text-gray-400">Compliance Required</span>
                        <span className="text-sm font-extrabold text-JBM-charcoal dark:text-white">Phytosanitary Cert</span>
                      </div>
                    </>
                  )}

                  {activeScope === "sadc" && (
                    <>
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-bold text-gray-500 dark:text-gray-400">Overland Mileage</span>
                        <span className="text-sm font-extrabold text-JBM-charcoal dark:text-white">~ 2,450 km</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-bold text-gray-500 dark:text-gray-400">Security Protocol</span>
                        <span className="text-sm font-extrabold text-JBM-charcoal dark:text-white">Armed Convoy Required</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-bold text-gray-500 dark:text-gray-400">Multi-Country Tolls</span>
                        <span className="text-sm font-extrabold text-JBM-charcoal dark:text-white">Included in Tariff</span>
                      </div>
                    </>
                  )}

                  {activeScope === "global" && (
                    <>
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-bold text-gray-500 dark:text-gray-400">Customs Duty (Import)</span>
                        <span className="text-sm font-extrabold text-JBM-charcoal dark:text-white">Pending HS Code</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-bold text-gray-500 dark:text-gray-400">VAT (16%)</span>
                        <span className="text-sm font-extrabold text-JBM-charcoal dark:text-white">Calculated on CIF</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-bold text-gray-500 dark:text-gray-400">RDL & IDF Levies</span>
                        <span className="text-sm font-extrabold text-JBM-charcoal dark:text-white">Standard 3.5% Applied</span>
                      </div>
                    </>
                  )}
                  
                  <div className="mt-auto pt-6 border-t border-gray-100 dark:border-white/10">
                    <div className="flex justify-between items-end">
                      <span className="text-xs font-bold text-gray-500 dark:text-gray-400">Estimated Total Rate</span>
                      <div className="text-right">
                        <span className="text-3xl font-extrabold text-orange-500">USD ---</span>
                        <span className="block text-[9px] font-bold uppercase tracking-widest text-gray-400 mt-1">Awaiting Form Input</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

            </div>
          </div>
        </div>

      </section>
    </PageLayout>
  );
}
