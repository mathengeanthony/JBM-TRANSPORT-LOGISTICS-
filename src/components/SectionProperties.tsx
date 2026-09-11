import { useState, useEffect } from "react";

export function SectionProperties({ onMenuClick }: { onMenuClick: () => void }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [iconIndex, setIconIndex] = useState(0);
  const slides = [
    { url: "/images/cold.jpg", label: "Palletized Racking" },
    { url: "/images/cold.jpg", label: "Cold Chain Storage" },
    { url: "/images/cold.jpg", label: "Automated Retrieval" },
    { url: "/images/cold.jpg", label: "Bonded Facilities" }
  ];

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    
    const iconTimer = setInterval(() => {
      setIconIndex((prev) => (prev + 1) % 4);
    }, 2000);
    
    return () => {
      clearInterval(slideTimer);
      clearInterval(iconTimer);
    };
  }, [slides.length]);

  return (
    <div
      className=" bg-[#f8f8f8] dark:bg-JBM-black transition-colors duration-500 overflow-x-hidden flex flex-col"
      id="section-properties"
    >
      <section className="w-full py-4 md:py-6 px-4 md:px-12 max-w-[1600px] mx-auto flex flex-col relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#f8f8f8] via-transparent to-[#f8f8f8] dark:bg-gradient-to-b dark:from-JBM-black dark:via-transparent dark:to-JBM-black"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start relative z-10 mb-6">
          
          <div className="lg:col-span-5 flex flex-col gap-8 pt-4">
            
            {/* Image Slideshow */}
            <div className="relative w-full h-48 md:h-64 rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 group mb-2">
              <div className="absolute inset-0 flex transition-transform duration-1000 ease-in-out" style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
                 {slides.map((slide, index) => (
                    <div key={index} className="w-full h-full flex-shrink-0 relative">
                       <img src={slide.url} alt={slide.label} className="w-full h-full object-cover" />
                       <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                       <div className="absolute bottom-4 left-4">
                           <span className="text-[10px] font-bold text-orange-500 uppercase tracking-widest block mb-1">Facility Option</span>
                           <h4 className="text-sm font-bold text-white uppercase">{slide.label}</h4>
                       </div>
                    </div>
                 ))}
              </div>
              <div className="absolute bottom-4 right-4 flex gap-2 z-10">
                 {slides.map((_, index) => (
                    <button 
                       key={index} 
                       onClick={() => setActiveSlide(index)}
                       className={`w-2 h-2 rounded-full transition-all ${activeSlide === index ? 'bg-orange-500 w-4' : 'bg-white/50 hover:bg-white'}`}
                    />
                 ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse-fast"></div>
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-gray-500 dark:text-gray-400 font-mono">
                  System Status: Active
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase tracking-tighter leading-[0.9] text-JBM-black dark:text-white mb-6 transition-colors">
                Warehousing <br />{" "}
                <span className="text-gray-500 dark:text-gray-600">Distribution</span>
              </h2>
              <p className="text-xs font-medium text-gray-600 dark:text-gray-400 leading-relaxed border-l-2 border-orange-500 pl-4 md:pl-6 transition-colors">
                Secure, scalable, and intelligent warehousing solutions. We combine advanced inventory tracking
                with high-efficiency distribution technology.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <h3 className="text-sm font-bold uppercase tracking-widest text-JBM-charcoal dark:text-white border-b border-gray-200 dark:border-white/10 pb-2">
                Key Feature Highlights
              </h3>
              
              <div className="flex flex-col gap-6">
                <div className="flex gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center flex-shrink-0 group-hover:border-orange-500 transition-colors">
                    <i className="fa-solid fa-box-open text-orange-500"></i>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-JBM-charcoal dark:text-white uppercase mb-1">Custom Storage Environments</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                      From standard palletized warehousing to climate-controlled zones and bonded facilities, designed to handle diverse cargo specifications safely.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center flex-shrink-0 group-hover:border-orange-500 transition-colors">
                    <i className="fa-solid fa-satellite-dish text-orange-500"></i>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-JBM-charcoal dark:text-white uppercase mb-1">Real-Time Admin Tracking</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                      Integrated inventory control systems that give your operations team instant visibility into stock levels, dispatch updates, and order fulfillment.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center flex-shrink-0 group-hover:border-orange-500 transition-colors">
                    <i className="fa-solid fa-map-location-dot text-orange-500"></i>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-JBM-charcoal dark:text-white uppercase mb-1">Pan-African Distribution</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                      Strategic hub placement across Kenya and major African transit routes, ensuring reduced transit times and seamless last-mile execution.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="bg-gray-100 dark:bg-JBM-charcoal/30 border border-gray-200 dark:border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-sm relative overflow-hidden transition-colors">
              <h3 className="text-2xl md:text-3xl font-extrabold uppercase tracking-tight text-JBM-charcoal dark:text-white mb-4">
                Complete Control Over <br/><span className="text-orange-500">Every Pallet, Every Route, Every Minute.</span>
              </h3>
              <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl mb-6">
                Streamline your supply chain operations using our dedicated client portal. Monitor incoming shipments, manage stock movement across regional hubs, and access automated reporting on demand.
              </p>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <a href="#" className="bg-orange-500 text-black px-6 py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-orange-400 transition-colors shadow-lg font-bold uppercase tracking-widest text-[10px]">
                  Explore Storage Units Catalogue
                  <i className="fa-solid fa-arrow-right"></i>
                </a>
                <div className="flex items-center gap-2 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 px-3 py-2 rounded-lg shadow-sm">
                  <div className="relative w-4 h-4 overflow-hidden flex items-center justify-center">
                    <i className={`fa-solid ${["fa-warehouse", "fa-box-open", "fa-temperature-low", "fa-truck-ramp-box"][iconIndex]} text-orange-500 text-sm transition-all duration-300`}></i>
                  </div>
                  <span className="text-[9px] font-bold text-JBM-charcoal dark:text-white uppercase tracking-widest">Live Availability</span>
                </div>
              </div>
            </div>

            <div className="relative w-full h-[450px] bg-gray-200 dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/10 rounded-[2rem] p-2 shadow-2xl overflow-hidden ring-1 ring-gray-200 dark:ring-white/5 transition-colors">
              <div className="bg-gray-50 dark:bg-[#050505] w-full h-full rounded-[1.8rem] flex flex-col relative overflow-hidden transition-colors">
                <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200 dark:border-white/5 bg-gray-100 dark:bg-[#0a0a0a] z-20">
                  <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-[9px] font-mono text-gray-500 tracking-widest">
                    JBM_PORTAL // CLIENT_ADMIN
                  </div>
                  <div className="flex gap-4">
                    <i className="fa-solid fa-bell text-gray-500 text-xs hover:text-orange-500 cursor-pointer transition-colors relative">
                      <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                    </i>
                    <i className="fa-solid fa-user text-gray-500 text-xs"></i>
                  </div>
                </div>

                <div className="grid grid-cols-2 grid-rows-2 h-full gap-px bg-gray-300 dark:bg-white/5 p-px">
                  
                  <div className="bg-gray-100 dark:bg-[#080808] p-5 flex flex-col justify-between relative overflow-hidden transition-colors">
                    <div>
                      <p className="text-[9px] font-mono text-gray-500 uppercase">
                        Live Stock Metrics
                      </p>
                      <h3 className="text-xl font-bold text-JBM-charcoal dark:text-white mt-1">
                        14,250 <span className="text-sm font-normal text-gray-500">Pallets</span>
                      </h3>
                      <p className="text-[9px] text-green-500 font-mono mt-1">
                        98% Capacity Optimization
                      </p>
                    </div>
                    <div className="flex items-end gap-2 h-20 mt-4">
                      {[40, 55, 45, 70, 85, 95].map((h, i) => (
                        <div
                          key={i}
                          className={`w-1/6 rounded-t-sm ${i === 5 ? 'bg-orange-500' : 'bg-JBM-charcoal/20 dark:bg-white/10'}`}
                          style={{ height: `${h}%` }}
                        ></div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gray-100 dark:bg-[#080808] p-5 flex flex-col transition-colors relative overflow-hidden">
                    <p className="text-[9px] font-mono text-gray-500 uppercase mb-4">
                      Active Delivery Routes
                    </p>
                    <div className="flex flex-col gap-3">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                          <span className="text-[10px] font-bold text-JBM-charcoal dark:text-white">Route A4 (Nairobi-Mombasa)</span>
                        </div>
                        <span className="text-[9px] text-gray-500 font-mono">In Transit</span>
                      </div>
                      <div className="w-full h-1 bg-gray-200 dark:bg-white/5 rounded-full overflow-hidden">
                        <div className="w-[75%] h-full bg-green-500"></div>
                      </div>
                      
                      <div className="flex justify-between items-center mt-2">
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
                          <span className="text-[10px] font-bold text-JBM-charcoal dark:text-white">Route B2 (Kigali Hub)</span>
                        </div>
                        <span className="text-[9px] text-gray-500 font-mono">Loading</span>
                      </div>
                      <div className="w-full h-1 bg-gray-200 dark:bg-white/5 rounded-full overflow-hidden">
                        <div className="w-[15%] h-full bg-yellow-500"></div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-100 dark:bg-[#080808] p-5 overflow-hidden transition-colors">
                     <p className="text-[9px] font-mono text-gray-500 uppercase mb-3">
                      Automated Reorder Alerts
                    </p>
                    <div className="flex flex-col gap-3">
                      <div className="bg-orange-500/10 border border-orange-500/20 p-3 rounded-lg flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <i className="fa-solid fa-triangle-exclamation text-orange-500 text-xs"></i>
                          <div>
                            <p className="text-[10px] font-bold text-JBM-charcoal dark:text-white">SKU-8921 Low Stock</p>
                            <p className="text-[8px] text-gray-500">Threshold: 500 units</p>
                          </div>
                        </div>
                        <button className="text-[8px] uppercase font-bold bg-orange-500 text-black px-2 py-1 rounded">Reorder</button>
                      </div>
                      <div className="bg-gray-200/50 dark:bg-white/5 border border-gray-200 dark:border-white/10 p-3 rounded-lg flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <i className="fa-solid fa-check-circle text-green-500 text-xs"></i>
                          <div>
                            <p className="text-[10px] font-bold text-JBM-charcoal dark:text-white">SKU-1102 Replenished</p>
                            <p className="text-[8px] text-gray-500">Arrived 2 hours ago</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-100 dark:bg-[#080808] relative overflow-hidden group">
                    <div
                      className="absolute inset-0 bg-cover bg-center grayscale opacity-50 group-hover:opacity-80 transition-opacity"
                      style={{
                        backgroundImage:
                          "url('/images/urban.jpg')",
                      }}
                    ></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                    <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-black/60 px-2 py-1 rounded backdrop-blur-md border border-white/10">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-[8px] font-bold text-white">ZONE 4 ACTIVE</span>
                    </div>
                    <div className="absolute bottom-3 left-3">
                      <p className="text-[9px] font-mono text-white">
                        HUB: NAIROBI CROSS-DOCK
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="mt-2 relative z-10 flex flex-col lg:flex-row justify-between items-center gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
            <a
              href="#"
              className="w-full sm:w-auto bg-orange-500 text-black px-8 py-4 rounded-xl flex items-center justify-center gap-3 hover:scale-105 hover:bg-orange-400 transition-all shadow-lg font-bold uppercase tracking-widest text-xs"
            >
              Explore Client's Portal/Dashboard
              <i className="fa-solid fa-arrow-right"></i>
            </a>
            
            <div className="flex items-center justify-center gap-3 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 px-4 py-3 rounded-xl w-full sm:w-auto">
              <span className="text-[10px] font-bold text-JBM-charcoal dark:text-white uppercase tracking-widest">Download JBM App</span>
              <div className="flex gap-2.5 border-l border-gray-300 dark:border-white/10 pl-3">
                <a href="#" className="text-gray-500 hover:text-orange-500 transition-colors"><i className="fa-brands fa-apple text-lg"></i></a>
                <a href="#" className="text-gray-500 hover:text-orange-500 transition-colors"><i className="fa-brands fa-google-play text-sm"></i></a>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-3 text-sm font-medium">
            <span className="text-gray-600 dark:text-gray-400">Already a partner?</span>
            <a href="#" className="text-JBM-charcoal dark:text-white font-bold hover:text-orange-500 transition-colors border-b border-JBM-charcoal dark:border-white hover:border-orange-500 pb-0.5">
              Log In to Client Portal
            </a>
          </div>
        </div>

      </section>
    </div>
  );
}
