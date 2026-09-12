import { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, CircleMarker } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const globalMarkers = [
  { name: "Shanghai", pos: [31.2304, 121.4737] },
  { name: "Singapore", pos: [1.3521, 103.8198] },
  { name: "Rotterdam", pos: [51.9225, 4.47917] },
  { name: "Los Angeles", pos: [33.7288, -118.2620] },
  { name: "Dubai", pos: [25.2048, 55.2708] },
  { name: "New York", pos: [40.7128, -74.0060] },
  { name: "Panama Canal", pos: [9.1416, -79.6902] },
  { name: "Suez Canal", pos: [30.5852, 32.2654] },
  { name: "Mombasa", pos: [-4.0435, 39.6682] },
  { name: "Santos", pos: [-23.9618, -46.3322] }
];

export function SectionLand({ onMenuClick }: { onMenuClick: () => void }) {
  const counterRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const maxScroll = scrollWidth - clientWidth;
      const progress = maxScroll > 0 ? (scrollLeft / maxScroll) * 100 : 0;
      setScrollProgress(progress);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLSpanElement;
            const target = parseInt(el.getAttribute("data-target") || "0", 10);
            const duration = 5000;
            const increment = target / (duration / 16);
            let current = 0;

            const updateCounter = () => {
              current += increment;
              if (current < target) {
                el.innerText = Math.ceil(current).toString();
                requestAnimationFrame(updateCounter);
              } else {
                el.innerText = target.toString();
              }
            };
            updateCounter();
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.5 }
    );

    counterRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className=" bg-[#f8f8f8] dark:bg-JBM-black transition-colors duration-500 overflow-x-hidden flex flex-col"
      id="section-land"
    >
      <section className="w-full py-4 md:py-6 px-4 md:px-8 max-w-[1600px] mx-auto flex flex-col">
        <div className="relative overflow-hidden rounded-[2rem] border border-gray-200 dark:border-white/10 shadow-xl mb-6 group h-[200px] md:h-[280px] w-full z-10">
          <MapContainer
            center={[20, 0]}
            zoom={2.2}
            zoomControl={false}
            scrollWheelZoom={false}
            dragging={false}
            doubleClickZoom={false}
            className="w-full h-full bg-[#f8f8f8] dark:bg-[#1a1a1a] z-0"
          >
            <TileLayer
              url={`https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png${import.meta.env.VITE_CARTO_API_KEY ? `?key=${import.meta.env.VITE_CARTO_API_KEY}` : ""}`}
              className="dark:hidden"
            />
            <TileLayer
              url={`https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png${import.meta.env.VITE_CARTO_API_KEY ? `?key=${import.meta.env.VITE_CARTO_API_KEY}` : ""}`}
              className="hidden dark:block"
            />
            {globalMarkers.map((m, i) => (
              <CircleMarker
                key={i}
                center={m.pos as [number, number]}
                radius={4}
                fillColor="#ff6a00"
                color="#ff6a00"
                weight={2}
                fillOpacity={0.8}
              />
            ))}
          </MapContainer>
          <div className="absolute inset-0 border-[3px] border-transparent group-hover:border-orange-500/20 transition-colors pointer-events-none rounded-[2rem] z-10"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-end mb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <i className="fa-solid fa-globe text-orange-500 text-xs animate-pulse"></i>
              <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-gray-500 dark:text-gray-400">
                THE GLOBAL FREIGHT NETWORK
              </span>
            </div>
            <div className="flex items-center gap-4">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold uppercase tracking-tighter leading-[0.9] text-JBM-black dark:text-white transition-colors">
                END-TO-END <br />{" "}
                <span className="text-gray-500 dark:text-gray-600">
                  MULTIMODAL TRANSPORT
                </span>
              </h2>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-full">
            <p className="text-[10px] md:text-xs font-medium text-gray-600 dark:text-gray-400 leading-relaxed text-left lg:text-right max-w-xl lg:ml-auto transition-colors border-l-2 lg:border-l-0 lg:border-r-2 border-orange-500 pl-3 lg:pl-0 lg:pr-3">
              Bridging international supply chains with seamless land, air, and sea connectivity. We manage the entire freight lifecycle—from supplier pick-up and customs clearance to port handling and final doorstep or warehouse delivery.
            </p>
            <div
              id="land-counter-section"
              className="grid grid-cols-2 md:grid-cols-3 gap-y-4 gap-x-2 border-t border-gray-300 dark:border-white/10 pt-4"
            >
              <div className="text-left">
                <div className="flex items-center gap-2 mb-0.5">
                  <i className="fa-solid fa-clock-rotate-left text-orange-500 text-[10px] md:text-xs"></i>
                  <span className="text-xl md:text-2xl font-bold text-JBM-charcoal dark:text-white block whitespace-nowrap">
                    <span
                      className="counter"
                      data-target="99"
                      ref={(el) => (counterRefs.current[0] = el)}
                    >
                      0
                    </span>
                    .4%
                  </span>
                </div>
                <span className="text-[8px] uppercase tracking-widest text-orange-500">
                  ON-TIME DELIVERY
                </span>
              </div>
              <div className="text-left border-l border-gray-300 dark:border-white/10 pl-2 md:pl-4">
                <div className="flex items-center gap-2 mb-0.5">
                  <i className="fa-solid fa-shield-halved text-orange-500 text-[10px] md:text-xs"></i>
                  <span className="text-xl md:text-2xl font-bold text-JBM-charcoal dark:text-white block">
                    <span
                      className="counter"
                      data-target="100"
                      ref={(el) => (counterRefs.current[1] = el)}
                    >
                      0
                    </span>
                    %
                  </span>
                </div>
                <span className="text-[8px] uppercase tracking-widest text-orange-500">
                  INSURED & TRACKED
                </span>
              </div>
              <div className="text-left md:border-l border-gray-300 dark:border-white/10 pt-4 md:pt-0 md:pl-4">
                <div className="flex items-center gap-2 mb-0.5">
                  <i className="fa-solid fa-anchor text-orange-500 text-[10px] md:text-xs"></i>
                  <span className="text-xl md:text-2xl font-bold text-JBM-charcoal dark:text-white block">
                    <span
                      className="counter"
                      data-target="45"
                      ref={(el) => (counterRefs.current[2] = el)}
                    >
                      0
                    </span>
                    +
                  </span>
                </div>
                <span className="text-[8px] uppercase tracking-widest text-orange-500">
                  PORTS CONNECTED
                </span>
              </div>
              <div className="text-left border-t md:border-t-0 border-l md:border-l-0 border-gray-300 dark:border-white/10 pt-4 md:pt-0 pl-2 md:pl-0">
                <div className="flex items-center gap-2 mb-0.5">
                  <i className="fa-solid fa-truck-fast text-orange-500 text-[10px] md:text-xs"></i>
                  <span className="text-xl md:text-2xl font-bold text-JBM-charcoal dark:text-white block whitespace-nowrap">
                    &lt;{" "}
                    <span
                      className="counter"
                      data-target="24"
                      ref={(el) => (counterRefs.current[3] = el)}
                    >
                      0
                    </span>
                    hr
                  </span>
                </div>
                <span className="text-[8px] uppercase tracking-widest text-orange-500">
                  PORT-TO-DEPOT
                </span>
              </div>
              <div className="text-left border-t md:border-t-0 border-gray-300 dark:border-white/10 pt-4 md:pt-0 md:border-l md:pl-4">
                <div className="flex items-center gap-2 mb-0.5">
                  <i className="fa-solid fa-route text-orange-500 text-[10px] md:text-xs"></i>
                  <span className="text-xl md:text-2xl font-bold text-JBM-charcoal dark:text-white block whitespace-nowrap">
                    <span
                      className="counter"
                      data-target="15"
                      ref={(el) => (counterRefs.current[4] = el)}
                    >
                      0
                    </span>
                    +
                  </span>
                </div>
                <span className="text-[8px] uppercase tracking-widest text-orange-500">
                  TRADE CORRIDORS
                </span>
              </div>
              <div className="text-left border-t md:border-t-0 border-l border-gray-300 dark:border-white/10 pt-4 md:pt-0 pl-2 md:pl-4">
                <div className="flex items-center gap-2 mb-0.5">
                  <i className="fa-solid fa-boxes-stacked text-orange-500 text-[10px] md:text-xs"></i>
                  <span className="text-xl md:text-2xl font-bold text-JBM-charcoal dark:text-white block whitespace-nowrap">
                    <span
                      className="counter"
                      data-target="50"
                      ref={(el) => (counterRefs.current[5] = el)}
                    >
                      0
                    </span>
                    K+
                  </span>
                </div>
                <span className="text-[8px] uppercase tracking-widest text-orange-500">
                  TEU CAPACITY
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <div className="w-full mb-3">
            <div className="w-full h-[2px] bg-gray-300 dark:bg-white/10 rounded-full overflow-hidden relative">
              <div 
                className="absolute top-0 left-0 h-full w-1/4 bg-orange-500 rounded-full"
                style={{ transform: `translateX(${scrollProgress * 3}%)`, transition: 'transform 0.1s ease-out' }}
              ></div>
            </div>
          </div>
          <div 
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto gap-4 py-4 hide-scroll snap-x snap-mandatory"
          >
            {[
              {
                img: "/images/plane.jpg",
                type: "Express Air",
                title: "Express Air Freight & Airport Shuttle",
                specs: "Temperature-Controlled Hold | Time-Critical Goods | Dedicated Ramp Handling",
                coverage: "Direct connections across East Africa, Middle East, Europe & Asia",
                capability: "Same-day airport dispatch & cross-dock transfer",
                icon: "fa-plane-departure"
              },
              {
                img: "/images/plane.jpg",
                type: "Ocean Freight",
                title: "Ocean Freight & Port Drayage",
                specs: "FCL & LCL | Heavy Haulage | Flatbed Fleets",
                coverage: "Port of Mombasa to Regional Inland Depots",
                capability: "Immediate off-shipment pickup and port-to-warehouse drayage",
                icon: "fa-ship"
              },
              {
                img: "/images/ship.jpg",
                type: "Customs",
                title: "Customs & Bonded Transit",
                specs: "KRA Customs Bonded Storage | Duty Tax Settlement | Immediate Clearance",
                coverage: "Air & Ocean Border Terminals",
                capability: "Expedited documentation & real-time border compliance",
                icon: "fa-file-signature"
              },
              {
                img: "/images/urban.jpg",
                type: "Last Mile",
                title: "Last-Mile Doorstep Distribution",
                specs: "GPS-Monitored Vans | ePOD | Live Telematics",
                coverage: "Kenya Nationwide & Regional Urban Centers",
                capability: "Direct-to-door, direct-to-retail, or warehouse drops",
                icon: "fa-truck-fast"
              },
            ].map((card, i) => (
              <div
                key={i}
                className="snap-center shrink-0 w-[280px] sm:w-[320px] md:w-[360px] h-[300px] rounded-3xl relative overflow-hidden group zoom-card border border-gray-200 dark:border-white/10 bg-white dark:bg-JBM-panel transition-colors flex flex-col justify-end"
              >
                <div
                  className="absolute inset-0 bg-image bg-cover bg-center"
                  style={{ backgroundImage: `url('${card.img}')` }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/20 opacity-90"></div>
                
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur rounded-full w-8 h-8 flex items-center justify-center border border-white/20">
                  <i className={`fa-solid ${card.icon} text-orange-500 text-xs`}></i>
                </div>
                
                <div className="relative z-10 p-5 flex flex-col gap-1.5">
                  <span className="text-[8px] font-bold text-orange-500 uppercase tracking-widest block">
                    {card.type}
                  </span>
                  <h4 className="text-lg font-bold text-white leading-tight mb-1">
                    {card.title}
                  </h4>
                  
                  <div className="flex flex-col gap-1 border-t border-white/10 pt-2 mt-1">
                    <p className="text-[10px] text-gray-300 leading-snug">
                      <strong className="text-white">Specs:</strong> {card.specs}
                    </p>
                    <p className="text-[10px] text-gray-300 leading-snug">
                      <strong className="text-white">Coverage:</strong> {card.coverage}
                    </p>
                    <p className="text-[10px] text-gray-300 leading-snug text-orange-400">
                      <strong className="text-white">Capability:</strong> {card.capability}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xs font-bold uppercase tracking-widest text-JBM-charcoal dark:text-white mb-4 border-b border-gray-200 dark:border-white/10 pb-2">
            End-to-End Transit Architecture
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                step: "1",
                title: "Origin Pick-Up & Consolidation",
                desc: "First-mile collection directly from manufacturer facilities, local suppliers, or regional consolidation hubs."
              },
              {
                step: "2",
                title: "Multimodal Air & Sea Freight",
                desc: "High-priority air cargo via major hubs (JKIA, Dubai, European gateways) or bulk ocean freight (Port of Mombasa, Dar es Salaam, international maritime routes)."
              },
              {
                step: "3",
                title: "Port & Airport Ground Operations",
                desc: "On-site cargo breakdown, terminal handling, off-vessel retrieval, and automated customs brokerage."
              },
              {
                step: "4",
                title: "Last-Mile Delivery",
                desc: "Dedicated road haulage directly from port/airport to your specified warehouse, retail node, or end-client doorstep."
              }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col gap-2 group">
                <div className="w-6 h-6 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center text-[10px] font-bold text-orange-500 group-hover:bg-orange-500 group-hover:text-black transition-colors">
                  {item.step}
                </div>
                <h4 className="text-[11px] font-bold text-JBM-charcoal dark:text-white uppercase">{item.title}</h4>
                <p className="text-[10px] md:text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8 bg-gray-100 dark:bg-JBM-panel rounded-3xl p-5 md:p-6 border border-gray-200 dark:border-white/10">
          <h3 className="text-xs font-bold uppercase tracking-widest text-JBM-charcoal dark:text-white mb-4 flex items-center gap-2">
             <i className="fa-solid fa-map-location-dot text-orange-500 text-sm"></i> Active Transit Corridors & Port Hubs
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <div className="flex flex-col gap-3">
              <h4 className="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest border-b border-gray-300 dark:border-white/10 pb-2">Kenyan Gateways</h4>
              <ul className="text-xs text-JBM-charcoal dark:text-gray-300 space-y-2 leading-relaxed">
                <li className="flex gap-2"><i className="fa-solid fa-check text-orange-500 mt-0.5 text-[10px]"></i> Nairobi (JKIA Air Cargo Center)</li>
                <li className="flex gap-2"><i className="fa-solid fa-check text-orange-500 mt-0.5 text-[10px]"></i> Mombasa Ocean Port</li>
                <li className="flex gap-2"><i className="fa-solid fa-check text-orange-500 mt-0.5 text-[10px]"></i> Naivasha Inland Container Depot</li>
                <li className="flex gap-2"><i className="fa-solid fa-check text-orange-500 mt-0.5 text-[10px]"></i> Athi River EPZ</li>
                <li className="flex gap-2"><i className="fa-solid fa-check text-orange-500 mt-0.5 text-[10px]"></i> Eldoret International Airport</li>
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest border-b border-gray-300 dark:border-white/10 pb-2">Cross-Border Routes</h4>
              <ul className="text-xs text-JBM-charcoal dark:text-gray-300 space-y-2 leading-relaxed">
                <li className="flex gap-2"><i className="fa-solid fa-route text-orange-500 mt-0.5 text-[10px]"></i> Kampala Corridor (Uganda)</li>
                <li className="flex gap-2"><i className="fa-solid fa-route text-orange-500 mt-0.5 text-[10px]"></i> Namanga Gateway (Tanzania)</li>
                <li className="flex gap-2"><i className="fa-solid fa-route text-orange-500 mt-0.5 text-[10px]"></i> Kigali Transit Hub (Rwanda)</li>
                <li className="flex gap-2"><i className="fa-solid fa-route text-orange-500 mt-0.5 text-[10px]"></i> Malaba Border Post</li>
              </ul>
            </div>
            <div className="flex flex-col gap-3">
              <h4 className="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest border-b border-gray-300 dark:border-white/10 pb-2">Global Trade Lanes</h4>
              <ul className="text-xs text-JBM-charcoal dark:text-gray-300 space-y-2 leading-relaxed">
                <li className="flex gap-2"><i className="fa-solid fa-earth-americas text-orange-500 mt-0.5 text-[10px]"></i> Middle East (Dubai DWC/DXB)</li>
                <li className="flex gap-2"><i className="fa-solid fa-earth-europe text-orange-500 mt-0.5 text-[10px]"></i> Europe (Rotterdam/Frankfurt)</li>
                <li className="flex gap-2"><i className="fa-solid fa-earth-asia text-orange-500 mt-0.5 text-[10px]"></i> Asia-Pacific Corridors</li>
              </ul>
            </div>
          </div>
        </div>



        <div className="w-full bg-orange-500 border border-orange-600 rounded-[2rem] p-6 flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-sm relative overflow-hidden transition-colors shadow-2xl shadow-orange-500/20">
          <div className="flex flex-col gap-3 w-full md:w-auto z-10 max-w-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <i className="fa-solid fa-headset text-white text-lg"></i>
              </div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wide">
                Need a Customized Solution?
              </h4>
            </div>
            <p className="text-[11px] md:text-xs text-orange-100 font-medium leading-relaxed">
              Consult our specialists for accurate, customized quotes for any and all your logistics needs.
            </p>
          </div>
          <div className="bg-white dark:bg-JBM-black/90 border border-white/20 rounded-2xl p-4 flex items-center gap-4 hover:scale-105 transition-all cursor-pointer group z-10 shadow-xl">
            <div className="relative">
              <img
                src="https://i.pravatar.cc/100?u=surveyor"
                alt="Logistics Director"
                className="w-10 h-10 rounded-full border border-gray-200 dark:border-white/20 grayscale group-hover:grayscale-0 transition-all"
              />
              <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white dark:border-black animate-pulse"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-[9px] font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">
                Logistics Director
              </span>
              <span className="text-xs font-bold text-JBM-charcoal dark:text-white group-hover:text-orange-500 transition-colors">
                Online • Consult Now
              </span>
            </div>
            <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center border border-gray-200 dark:border-white/10 group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500 transition-colors">
              <i className="fa-solid fa-phone text-xs text-JBM-charcoal dark:text-white group-hover:text-white"></i>
            </div>
          </div>
          <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/20 rounded-full blur-[60px] pointer-events-none"></div>
        </div>
      </section>
    </div>
  );
}
