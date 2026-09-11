export function SectionESG() {
  return (
    <div className="w-full py-12 md:py-20 bg-[#f4f4f4] dark:bg-[#151515] transition-colors duration-500 overflow-hidden flex flex-col border-y border-gray-200 dark:border-white/5">
      <section className="w-full px-6 md:px-12 max-w-[1600px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        
        {/* Left Side: Images & Badges (col-span-5) */}
        <div className="order-2 lg:order-1 lg:col-span-5 relative rounded-[2rem] overflow-hidden aspect-square md:aspect-[4/3] lg:aspect-square w-full group shadow-2xl">
            <img src="/images/green.jpg" alt="Green Logistics" className="absolute inset-0 w-full h-full object-cover grayscale opacity-90 group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#052e16] via-[#052e16]/60 to-transparent mix-blend-multiply"></div>
            
            {/* Top left badge */}
            <div className="absolute top-6 left-6 bg-white dark:bg-black/80 backdrop-blur-md px-4 py-2 rounded-full border border-green-500/30 flex items-center gap-2 shadow-lg">
               <i className="fa-solid fa-certificate text-green-600"></i>
               <span className="text-[9px] font-bold uppercase tracking-widest text-JBM-charcoal dark:text-white mt-0.5">ISO 14001 Certified</span>
            </div>

            {/* Bottom card */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/10 dark:bg-black/40 backdrop-blur-md border border-white/20 p-5 rounded-2xl text-white shadow-2xl">
                <h4 className="text-xs md:text-sm font-bold uppercase tracking-widest mb-3 flex items-center gap-2">
                  <i className="fa-solid fa-leaf text-green-400"></i> Net-Zero Pathway 2040
                </h4>
                <div className="w-full bg-white/20 h-1.5 rounded-full mb-3 overflow-hidden">
                   <div className="w-[40%] h-full bg-green-500 rounded-full relative">
                      <div className="absolute right-0 top-0 bottom-0 w-4 bg-white/50 blur-[2px]"></div>
                   </div>
                </div>
                <div className="flex justify-between items-end mb-2">
                    <span className="text-[10px] font-bold text-green-400 uppercase tracking-widest">Progress Goal</span>
                    <span className="text-[10px] font-bold text-white">40% by 2028</span>
                </div>
                <p className="text-[10px] md:text-xs text-gray-200 leading-relaxed font-medium">
                  Transitioning our last-mile fleet to electric, supported by solar-powered regional hubs and green warehousing protocols.
                </p>
            </div>
        </div>

        {/* Right Side: Content & Bento Grid (col-span-7) */}
        <div className="order-1 lg:order-2 lg:col-span-7 flex flex-col">
           <div className="flex items-center gap-3 mb-3">
              <i className="fa-solid fa-globe text-green-600 dark:text-green-500 animate-pulse"></i>
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-gray-500 dark:text-gray-400">
                ESG & Sustainability
              </span>
           </div>
           <h2 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tighter leading-[0.9] text-JBM-black dark:text-white mb-4">
              Future-Proof <br />
              <span className="text-green-700 dark:text-green-500">Green Logistics</span>
           </h2>
           <p className="text-xs md:text-sm font-medium text-gray-600 dark:text-gray-400 leading-relaxed mb-8 max-w-2xl">
              Global trade shouldn't cost the earth. We actively partner with enterprise clients to reduce Scope 3 emissions through intelligent routing, Euro 6 compliant fleets, and verifiable carbon-offset programs. Our commitment to the environment is measurable and integrated into every supply chain we manage.
           </p>

           {/* Bento Grid */}
           <div className="grid grid-cols-2 gap-3 md:gap-4">
              {/* Card 1 */}
              <div className="bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-white/10 p-4 md:p-5 rounded-xl md:rounded-2xl flex flex-col justify-between group hover:border-green-500/50 transition-colors shadow-sm">
                 <div className="flex justify-between items-start mb-4 md:mb-6">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-green-500/10 flex items-center justify-center">
                       <i className="fa-solid fa-truck-fast text-green-600 dark:text-green-400 text-sm md:text-base"></i>
                    </div>
                    <span className="text-[9px] font-bold bg-gray-100 dark:bg-white/5 px-2 py-1 rounded text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-white/10 mt-1">100% COMPLIANT</span>
                 </div>
                 <div>
                    <h4 className="text-base md:text-lg font-extrabold text-JBM-charcoal dark:text-white mb-1">Euro 6 Fleet</h4>
                    <p className="text-[10px] md:text-xs text-gray-500 dark:text-gray-400 leading-relaxed">Ultra-low emissions standards across our entire heavy-haulage network.</p>
                 </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-white/10 p-4 md:p-5 rounded-xl md:rounded-2xl flex flex-col justify-between group hover:border-green-500/50 transition-colors shadow-sm">
                 <div className="flex justify-between items-start mb-4 md:mb-6">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-green-500/10 flex items-center justify-center">
                       <i className="fa-solid fa-route text-green-600 dark:text-green-400 text-sm md:text-base"></i>
                    </div>
                    <span className="text-[9px] font-bold bg-gray-100 dark:bg-white/5 px-2 py-1 rounded text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-white/10 mt-1">-14% FUEL USE</span>
                 </div>
                 <div>
                    <h4 className="text-base md:text-lg font-extrabold text-JBM-charcoal dark:text-white mb-1">AI Routing</h4>
                    <p className="text-[10px] md:text-xs text-gray-500 dark:text-gray-400 leading-relaxed">Eco-optimized pathing reduces fuel consumption and idle times significantly.</p>
                 </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-white/10 p-4 md:p-5 rounded-xl md:rounded-2xl flex flex-col justify-between group hover:border-green-500/50 transition-colors shadow-sm">
                 <div className="flex justify-between items-start mb-4 md:mb-6">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-green-500/10 flex items-center justify-center">
                       <i className="fa-solid fa-solar-panel text-green-600 dark:text-green-400 text-sm md:text-base"></i>
                    </div>
                    <span className="text-[9px] font-bold bg-gray-100 dark:bg-white/5 px-2 py-1 rounded text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-white/10 mt-1">2.4MW CAPACITY</span>
                 </div>
                 <div>
                    <h4 className="text-base md:text-lg font-extrabold text-JBM-charcoal dark:text-white mb-1">Solar Hubs</h4>
                    <p className="text-[10px] md:text-xs text-gray-500 dark:text-gray-400 leading-relaxed">Warehouses powered by massive rooftop solar arrays with battery storage.</p>
                 </div>
              </div>

              {/* Card 4 */}
              <div className="bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-white/10 p-4 md:p-5 rounded-xl md:rounded-2xl flex flex-col justify-between group hover:border-green-500/50 transition-colors shadow-sm">
                 <div className="flex justify-between items-start mb-4 md:mb-6">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-green-500/10 flex items-center justify-center">
                       <i className="fa-solid fa-tree text-green-600 dark:text-green-400 text-sm md:text-base"></i>
                    </div>
                    <span className="text-[9px] font-bold bg-gray-100 dark:bg-white/5 px-2 py-1 rounded text-gray-500 dark:text-gray-400 border border-gray-200 dark:border-white/10 mt-1">GOLD STANDARD</span>
                 </div>
                 <div>
                    <h4 className="text-base md:text-lg font-extrabold text-JBM-charcoal dark:text-white mb-1">Carbon Offsets</h4>
                    <p className="text-[10px] md:text-xs text-gray-500 dark:text-gray-400 leading-relaxed">Partnerships with verified reforestation projects across East Africa.</p>
                 </div>
              </div>
           </div>

        </div>
      </section>
    </div>
  );
}
