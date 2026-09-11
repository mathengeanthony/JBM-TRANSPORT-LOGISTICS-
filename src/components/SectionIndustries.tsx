import { useState } from "react";

export function SectionIndustries() {
  const [activeIndex, setActiveIndex] = useState(0);

  const industries = [
    {
      id: "01",
      title: "Pharma, Healthcare & Cold Chain",
      icon: "fa-temperature-low",
      capabilities: "End-to-end temperature-controlled transport (2°C to 8°C and deep freeze), GDP-compliant handling, and emergency medical air charter service.",
      cargo: "Pharmaceuticals, vaccines, diagnostic reagents, and surgical equipment.",
      tech: "Real-time IoT temperature telemetry, active data loggers, and KPA/KRA priority customs fast-tracking.",
      img: "/images/cold.jpg"
    },
    {
      id: "02",
      title: "Horticulture, Agriculture & Fresh Produce",
      icon: "fa-leaf",
      capabilities: "High-speed cold-chain export corridors linking Kenyan farms to JKIA cargo terminals and Mombasa Reefers.",
      cargo: "Fresh cut flowers, avocado exports, fresh herbs, and perishable produce.",
      tech: "KEPHIS compliance, MAF & EU export certification support, unbroken cold chain monitoring.",
      img: "/images/ship.jpg"
    },
    {
      id: "03",
      title: "Heavy Machinery, Mining & Project Cargo",
      icon: "fa-truck-ramp-box",
      capabilities: "Out-of-Gauge (OOG) transport, heavy lift operations, escort vehicle routing, and specialized multi-axle lowbeds.",
      cargo: "Excavators, industrial generators, mining plant components, and structural steel.",
      tech: "Multi-jurisdiction route clearance permits, police escorts, and route surveys across Northern Corridor roads.",
      img: "/images/trade.jpg"
    },
    {
      id: "04",
      title: "FMCG, Retail & High-Velocity Supply Chains",
      icon: "fa-boxes-stacked",
      capabilities: "Cross-docking, high-density warehousing, split-shipment regional distribution, and micro-fulfillment.",
      cargo: "Packaged foods, beverages, personal care items, and consumer electronics.",
      tech: "WMS inventory integration, automated pick-and-pack, and same-day urban distribution hubs.",
      img: "/images/plane.jpg"
    },
    {
      id: "05",
      title: "Automotive & Spare Parts Logistics",
      icon: "fa-gears",
      capabilities: "Expedited air-freight parts delivery, bulk sea-freight containerization, and just-in-time (JIT) depot distribution.",
      cargo: "OEM vehicle components, engine blocks, heavy equipment spares, and aftermarket accessories.",
      tech: "SKU-level barcode tracking, urgent counter-to-counter dispatch, and cross-border customs bonding.",
      img: "/images/warehouse.jpg"
    },
    {
      id: "06",
      title: "Energy, Oil & Gas & Renewable Infrastructure",
      icon: "fa-bolt",
      capabilities: "Specialized transport for heavy power infrastructure, hazardous energy materials across urban and remote energy sites.",
      cargo: "Solar panels, wind turbine blades, transformers, drilling equipment, lubricants, and LPG infrastructure.",
      tech: "Rigorous HSE compliance, HAZMAT certifications, GPS route surveying for remote site access.",
      img: "/images/trade.jpg"
    },
    {
      id: "07",
      title: "E-Commerce & Omni-Channel Fulfillment",
      icon: "fa-cart-flatbed",
      capabilities: "High-speed micro-fulfillment, last-mile direct-to-consumer delivery, integrated COD reconciliation, and reverse logistics.",
      cargo: "Fashion, lifestyle goods, consumer tech, packaged cosmetics, and home appliances.",
      tech: "Real-time API integration with Shopify/WooCommerce, automated SMS tracking notifications, ePOD.",
      img: "/images/warehouse.jpg"
    },
    {
      id: "08",
      title: "Humanitarian, NGO & Aid Relief Logistics",
      icon: "fa-hand-holding-heart",
      capabilities: "Rapid emergency response deployment, bulk emergency relief staging, and last-mile delivery into remote/hardship zones.",
      cargo: "Emergency food rations, water purification units, field hospital equipment, shelter kits, medical supplies.",
      tech: "UN/NGO tax-exemption clearance protocols, priority customs processing, satellite-monitored fleet tracking.",
      img: "/images/warehouse.jpg"
    },
    {
      id: "09",
      title: "Industrial Chemicals & Manufacturing Materials",
      icon: "fa-flask",
      capabilities: "Class-certified HAZMAT storage, specialized liquid bulk transport, and raw material batch delivery for regional plants.",
      cargo: "Industrial polymers, fertilizers, industrial solvents, raw plastics, and water treatment chemicals.",
      tech: "MSDS compliance, leak-proof specialized ISO tanks, continuous chemical spill response readiness.",
      img: "/images/trade.jpg"
    },
    {
      id: "10",
      title: "Textiles, Apparel & Garments (EPZ/AGOA)",
      icon: "fa-shirt",
      capabilities: "Garment-on-Hanger (GOH) container transport, bonded Export Processing Zone logistics, and fast-track clearance.",
      cargo: "Raw fabric rolls, finished apparel, footwear, and industrial textiles.",
      tech: "EPZ/SEZ customs clearance, anti-moisture container lining, direct JKIA or Mombasa port transfer.",
      img: "/images/ship.jpg"
    }
  ];

  const marqueeItems = [
    { label: "PHARMA", desc: "COLD CHAIN LOGISTICS", icon: "fa-temperature-low" },
    { label: "AGRICULTURE", desc: "FRESH PRODUCE EXPORT", icon: "fa-leaf" },
    { label: "MACHINERY", desc: "PROJECT CARGO", icon: "fa-truck-ramp-box" },
    { label: "FMCG", desc: "HIGH-VELOCITY SUPPLY", icon: "fa-boxes-stacked" },
    { label: "ENERGY", desc: "INFRASTRUCTURE", icon: "fa-bolt" },
    { label: "E-COMMERCE", desc: "OMNI-CHANNEL FULFILLMENT", icon: "fa-cart-flatbed" }
  ];

  const activeInd = industries[activeIndex];

  return (
    <div className="w-full bg-white dark:bg-[#111111] transition-colors duration-500 flex flex-col pt-0 pb-4 md:pb-8">
      
      {/* Marquee */}
      <div className="w-full bg-JBM-charcoal dark:bg-black py-1.5 border-b border-gray-800 dark:border-white/10 flex overflow-hidden mb-8 md:mb-12">
        <div className="flex w-max animate-infinite-scroll">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
            <div key={i} className="flex items-center gap-3 px-6 md:px-12 border-r border-gray-700 dark:border-white/10 last:border-none">
               <i className={`fa-solid ${item.icon} text-orange-500 text-sm`}></i>
               <div className="flex flex-col">
                 <span className="text-[10px] font-bold text-white tracking-widest leading-none mb-0.5">{item.label}</span>
                 <span className="text-[7px] text-gray-400 uppercase tracking-widest whitespace-nowrap leading-none">{item.desc}</span>
               </div>
            </div>
          ))}
        </div>
      </div>

      <section className="w-full px-6 md:px-12 max-w-[1600px] mx-auto flex flex-col">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-6 mb-4 md:mb-6">
          <div>
             <div className="flex items-center gap-3 mb-3">
              <i className="fa-solid fa-industry text-orange-500"></i>
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-gray-500 dark:text-gray-400">
                Specialized Verticals
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tighter leading-[0.9] text-JBM-black dark:text-white">
              Industries <span className="text-gray-500 dark:text-gray-600">Served</span>
            </h2>
          </div>
          <p className="text-[10px] md:text-xs font-medium text-gray-600 dark:text-gray-400 leading-relaxed max-w-lg border-l-2 border-orange-500 pl-3 md:pl-4">
            Customized logistics architectures engineered for industry-specific compliance, strict temperature stability, and high-velocity supply chains.
          </p>
        </div>

        {/* Compact Interactive Split View */}
        <div className="flex flex-row gap-2 md:gap-6 h-[600px] md:h-[550px]">
          
          {/* Left: Scrollable Industry List */}
          <div className="w-[35%] md:w-1/3 flex flex-col gap-2 overflow-y-auto pr-1 md:pr-2 custom-scrollbar h-full">
            {industries.map((ind, idx) => (
              <button
                key={ind.id}
                onClick={() => setActiveIndex(idx)}
                className={`flex items-start md:items-center text-left gap-2 p-2 md:gap-4 md:p-4 rounded-xl transition-all border ${
                  activeIndex === idx 
                    ? "bg-gray-100 dark:bg-JBM-charcoal/50 border-orange-500/50 shadow-sm" 
                    : "bg-transparent border-transparent hover:bg-gray-50 dark:hover:bg-white/5"
                }`}
              >
                <div className={`w-6 h-6 md:w-8 md:h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors mt-0.5 md:mt-0 ${
                  activeIndex === idx ? "bg-orange-500 text-black" : "bg-gray-200 dark:bg-white/10 text-gray-500 dark:text-gray-400"
                }`}>
                  <i className={`fa-solid ${ind.icon} text-[8px] md:text-[10px]`}></i>
                </div>
                <div className="flex flex-col overflow-hidden">
                  <span className={`text-[8px] md:text-[10px] font-bold tracking-widest uppercase mb-0.5 md:mb-1 transition-colors ${
                    activeIndex === idx ? "text-orange-500" : "text-gray-400"
                  }`}>{ind.id}</span>
                  <span className={`text-[9px] md:text-xs font-bold leading-tight transition-colors line-clamp-3 md:line-clamp-none ${
                    activeIndex === idx ? "text-JBM-charcoal dark:text-white" : "text-gray-600 dark:text-gray-400"
                  }`}>{ind.title}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Right: Rich Detail Display */}
          <div className="w-[65%] md:w-2/3 relative rounded-2xl md:rounded-3xl overflow-hidden h-full border border-gray-200 dark:border-white/10 group flex flex-col">
             {/* Background Image that crossfades on change */}
             <img 
               key={activeInd.id} 
               src={activeInd.img} 
               alt={activeInd.title} 
               className="absolute inset-0 w-full h-full object-cover animate-fade-in" 
             />
             <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-t from-black/95 via-black/70 to-black/20 md:from-black/95 md:via-black/60 md:to-black/20"></div>
             
             {/* Content Overlay */}
             <div className="absolute inset-0 p-4 md:p-10 flex flex-col justify-start md:justify-end animate-fade-in-up overflow-y-auto hide-scroll">
                <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-orange-500 flex items-center justify-center mb-3 md:mb-6 shadow-lg shadow-orange-500/20 flex-shrink-0 mt-0 md:mt-auto">
                  <i className={`fa-solid ${activeInd.icon} text-black text-sm md:text-xl`}></i>
                </div>
                <h3 className="text-lg md:text-4xl font-extrabold text-white uppercase tracking-tight leading-[1.1] md:leading-[0.9] mb-4 md:mb-8">
                  {activeInd.title}
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl md:rounded-2xl p-3 md:p-6 flex-shrink-0">
                   <div className="flex flex-col gap-1.5 md:gap-2">
                     <span className="text-[8px] md:text-[10px] font-bold text-orange-500 uppercase tracking-widest border-b border-white/10 pb-1 md:pb-2">Capabilities</span>
                     <p className="text-[9px] md:text-xs text-gray-300 leading-relaxed">{activeInd.capabilities}</p>
                   </div>
                   <div className="flex flex-col gap-1.5 md:gap-2">
                     <span className="text-[8px] md:text-[10px] font-bold text-orange-500 uppercase tracking-widest border-b border-white/10 pb-1 md:pb-2">Key Cargo</span>
                     <p className="text-[9px] md:text-xs text-gray-300 leading-relaxed">{activeInd.cargo}</p>
                   </div>
                   <div className="flex flex-col gap-1.5 md:gap-2">
                     <span className="text-[8px] md:text-[10px] font-bold text-orange-500 uppercase tracking-widest border-b border-white/10 pb-1 md:pb-2">Compliance & Tech</span>
                     <p className="text-[9px] md:text-xs text-gray-300 leading-relaxed">{activeInd.tech}</p>
                   </div>
                </div>
             </div>
          </div>
        </div>

        {/* Bottom CTA Area */}
        <div className="mt-8 bg-gray-50 dark:bg-JBM-panel border border-gray-200 dark:border-white/10 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
           <div className="flex flex-col gap-2 max-w-2xl">
             <h4 className="text-sm md:text-base font-bold uppercase tracking-widest text-JBM-charcoal dark:text-white">
               Require specialized handling or custom transit protocols for your sector?
             </h4>
           </div>
           <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
             <button className="px-6 py-3 bg-orange-500 text-black text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-orange-400 transition-colors flex items-center justify-center gap-2">
               Request Industry Consult
             </button>
             <button className="px-6 py-3 bg-transparent border border-gray-300 dark:border-white/20 text-JBM-charcoal dark:text-white text-[10px] font-bold uppercase tracking-widest rounded-full hover:border-orange-500 transition-colors flex items-center justify-center gap-2">
               <i className="fa-solid fa-download"></i> Download Sector Compliance Sheets
             </button>
           </div>
        </div>

      </section>
    </div>
  );
}
