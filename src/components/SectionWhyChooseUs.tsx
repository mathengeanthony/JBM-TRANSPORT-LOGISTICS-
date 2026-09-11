import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export function SectionWhyChooseUs({ onMenuClick }: { onMenuClick?: () => void }) {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const storiesData = [
    {
      id: 0,
      client: "Global Pharma Distributor",
      service: "Cold Chain & Express Air",
      story: "Required immediate scale-up for temperature-controlled vaccine distribution across East Africa. We deployed dedicated reefer trucks and expedited customs clearance, cutting average transit times by 40% and ensuring zero spoilage.",
    },
    {
      id: 1,
      client: "Mining Conglomerate (DRC)",
      service: "Heavy Haulage & Security",
      story: "Needed a reliable partner for Out-of-Gauge (OOG) mining equipment and secure mineral transport from Lualaba to Dar es Salaam. Our armed escort and reinforced multi-axle lowbeds ensured 100% safe, on-time delivery despite challenging terrain.",
    },
    {
      id: 2,
      client: "Agri-Export Cooperative",
      service: "Ocean Freight & Consolidation",
      story: "Struggling with inconsistent shipping schedules for perishable exports. We established a consolidated weekly LCL feeder network, providing predictable port drayage and maximizing their global market reach.",
    },
    {
      id: 3,
      client: "FMCG Retail Chain",
      service: "Last-Mile Distribution",
      story: "Faced stockouts due to inefficient urban routing. We integrated our A.I. Freight Scout and live telematics into their supply chain, enabling direct-to-retail deliveries that boosted their on-shelf availability to 99.8%.",
    },
    {
      id: 4,
      client: "Cross-Border E-Commerce",
      service: "Bonded Transit & OSBP",
      story: "Experienced heavy delays at border crossings. By utilizing our 100% OSBP pre-clearance capabilities and KRA bonded storage, their goods now move seamlessly between Kenya, Uganda, and Rwanda with zero friction.",
    },
  ];

  const reviews = [
    "JBM transformed our African supply chain. Unmatched reliability.",
    "The fastest cross-border clearance we've ever experienced.",
    "Exceptional cold chain logistics. Zero product loss.",
    "Their heavy haulage fleet navigated the DRC terrain effortlessly.",
    "Highly professional, transparent, and strictly on time.",
    "A game-changer for our East African distribution network.",
    "JBM's tech integration provides total visibility over our freight.",
    "The absolute standard for logistics excellence in the region.",
  ];

  return (
    <div
      className="w-full pb-16 md:pb-24 bg-white dark:bg-[#111111] transition-colors duration-500 overflow-hidden flex flex-col"
      id="section-why-choose-us"
    >
      <section className="w-full px-4 md:px-8 max-w-[1600px] mx-auto flex flex-col">
        
        {/* Hero Image Box */}
        <div className="w-full h-[200px] md:h-[300px] rounded-[2rem] overflow-hidden relative mb-8 border border-gray-200 dark:border-white/10 shadow-2xl group">
          <img src="/images/green.jpg" alt="JBM Logistics Operations" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-6 md:p-12">
            <h3 className="text-xl md:text-4xl font-extrabold text-white uppercase tracking-tighter leading-[1.1] md:leading-tight max-w-2xl mb-2">
              Engineering the Continent's Most <span className="text-orange-500">Dependable</span> Framework
            </h3>
            <p className="text-[10px] md:text-xs text-gray-300 font-medium tracking-wide max-w-xl">
              Moving cargo is physical; enabling commerce is foundational.
            </p>
          </div>
        </div>

        {/* Brands Marquee */}
        <div className="w-full mb-10 md:mb-16 flex flex-col items-center">
           <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-gray-400 block text-center mb-4">Trusted by Regional & Global Leaders</span>
           <div className="relative w-full flex overflow-hidden">
             <div className="absolute top-0 left-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent dark:from-[#111111] dark:to-transparent z-10"></div>
             <div className="absolute top-0 right-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent dark:from-[#111111] dark:to-transparent z-10"></div>
             
             <div className="flex w-max animate-infinite-scroll gap-12 md:gap-24 opacity-50 hover:opacity-100 transition-opacity duration-300">
                {[
                  { name: "MAERSK", icon: "fa-anchor" },
                  { name: "UNILEVER", icon: "fa-leaf" },
                  { name: "SAFARICOM", icon: "fa-signal" },
                  { name: "TOYOTA", icon: "fa-car" },
                  { name: "NESTLÉ", icon: "fa-mug-hot" },
                  { name: "BAMBURI CEMENT", icon: "fa-trowel-bricks" },
                  { name: "DP WORLD", icon: "fa-ship" },
                  { name: "EAST AFRICAN BREWERIES", icon: "fa-beer-mug-empty" },
                ].map((brand, i) => (
                  <div key={i} className="flex items-center gap-3 grayscale">
                    <i className={`fa-solid ${brand.icon} text-lg md:text-2xl text-JBM-charcoal dark:text-white`}></i>
                    <span className="text-sm md:text-xl font-black uppercase tracking-tighter text-JBM-charcoal dark:text-white">{brand.name}</span>
                  </div>
                ))}
                {[
                  { name: "MAERSK", icon: "fa-anchor" },
                  { name: "UNILEVER", icon: "fa-leaf" },
                  { name: "SAFARICOM", icon: "fa-signal" },
                  { name: "TOYOTA", icon: "fa-car" },
                  { name: "NESTLÉ", icon: "fa-mug-hot" },
                  { name: "BAMBURI CEMENT", icon: "fa-trowel-bricks" },
                  { name: "DP WORLD", icon: "fa-ship" },
                  { name: "EAST AFRICAN BREWERIES", icon: "fa-beer-mug-empty" },
                ].map((brand, i) => (
                  <div key={i + 10} className="flex items-center gap-3 grayscale">
                    <i className={`fa-solid ${brand.icon} text-lg md:text-2xl text-JBM-charcoal dark:text-white`}></i>
                    <span className="text-sm md:text-xl font-black uppercase tracking-tighter text-JBM-charcoal dark:text-white">{brand.name}</span>
                  </div>
                ))}
             </div>
           </div>
        </div>

        {/* Ethos & Goals */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-gray-500 dark:text-gray-400">
                WHY CHOOSE JBM
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-tighter leading-[0.9] text-JBM-black dark:text-white mb-4">
              Our Ethos & <br />
              <span className="text-gray-500 dark:text-gray-600">Principles</span>
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-6 font-medium max-w-xl">
              We are a pan-African logistics powerhouse driven by a singular mission: to eliminate the friction of cross-border trade. Our ethos is built on relentless reliability, absolute transparency, and a commitment to technological superiority in freight management.
            </p>
            <div className="flex flex-row items-center gap-4 mb-8">
              <Link
                to="/fleet"
                className="bg-JBM-black text-white dark:bg-white dark:text-black px-6 py-3 rounded-full flex items-center gap-2 hover:scale-105 transition-transform shadow-lg whitespace-nowrap"
              >
                <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-widest">
                  Our Fleet
                </span>
                <i className="fa-solid fa-arrow-right -rotate-45 text-xs"></i>
              </Link>
              <Link
                to="/warehousing"
                className="bg-orange-500 text-black px-6 py-3 rounded-full flex items-center gap-2 hover:scale-105 transition-transform shadow-lg whitespace-nowrap"
              >
                <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-widest">
                  View Storage Units
                </span>
                <i className="fa-solid fa-arrow-right -rotate-45 text-xs"></i>
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200 dark:border-white/10">
              <div className="flex flex-col gap-2">
                <i className="fa-solid fa-shield-halved text-orange-500 text-xl"></i>
                <h4 className="text-xs font-bold text-JBM-charcoal dark:text-white uppercase tracking-widest mt-2">Zero-Risk Protocol</h4>
                <p className="text-[10px] text-gray-500">100% bonded, insured, and tracked freight.</p>
              </div>
              <div className="flex flex-col gap-2">
                <i className="fa-solid fa-route text-orange-500 text-xl"></i>
                <h4 className="text-xs font-bold text-JBM-charcoal dark:text-white uppercase tracking-widest mt-2">Pan-African Reach</h4>
                <p className="text-[10px] text-gray-500">Seamless border crossings across the continent.</p>
              </div>
              <div className="flex flex-col gap-2">
                <i className="fa-solid fa-scale-balanced text-orange-500 text-xl"></i>
                <h4 className="text-xs font-bold text-JBM-charcoal dark:text-white uppercase tracking-widest mt-2">Regulatory Mastery</h4>
                <p className="text-[10px] text-gray-500">Deep expertise in local customs & tariffs.</p>
              </div>
              <div className="flex flex-col gap-2">
                <i className="fa-solid fa-leaf text-orange-500 text-xl"></i>
                <h4 className="text-xs font-bold text-JBM-charcoal dark:text-white uppercase tracking-widest mt-2">Sustainable Fleet</h4>
                <p className="text-[10px] text-gray-500">Committed to Net-Zero emissions by 2040.</p>
              </div>
            </div>
          </div>

          {/* Customer Stories Accordion */}
          <div className="flex flex-col bg-gray-50 dark:bg-JBM-panel p-6 md:p-8 rounded-[2rem] border border-gray-200 dark:border-white/10">
             <h3 className="text-sm font-bold uppercase tracking-widest text-JBM-charcoal dark:text-white mb-6 border-b border-gray-200 dark:border-white/10 pb-4">
              Customer Success Stories
            </h3>
            {storiesData.map((item) => (
              <div
                key={item.id}
                className={`accordion-item group border-b border-gray-300 dark:border-white/10 pb-4 mb-4 cursor-pointer ${
                  activeAccordion === item.id ? "active" : ""
                }`}
                onClick={() => toggleAccordion(item.id)}
              >
                <div className="flex justify-between items-center py-2">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-orange-500 tracking-wider mb-1">
                      {item.service}
                    </span>
                    <h4 className="text-sm md:text-base font-bold text-JBM-charcoal dark:text-white group-hover:text-gray-500 transition-colors">
                      {item.client}
                    </h4>
                  </div>
                  <i className={`accordion-icon fa-solid fa-plus text-sm text-gray-400 transition-transform ${activeAccordion === item.id ? 'rotate-45 text-orange-500' : ''}`}></i>
                </div>
                <div className={`accordion-content overflow-hidden transition-all duration-300 ${activeAccordion === item.id ? 'max-h-40 mt-2 opacity-100' : 'max-h-0 opacity-0'}`}>
                   <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed border-l-2 border-orange-500 pl-3 py-1">
                    "{item.story}"
                   </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>

      {/* Power Metrics */}
      <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 mt-4 mb-16 flex justify-center gap-12 md:gap-24">
        <div className="flex flex-col items-center justify-center">
          <span className="text-5xl md:text-6xl font-black text-JBM-charcoal dark:text-white tracking-tighter">450+</span>
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-orange-500 mt-2 text-center">Enterprise Clients</span>
        </div>
        <div className="w-px h-16 md:h-20 bg-gray-200 dark:bg-white/10"></div>
        <div className="flex flex-col items-center justify-center">
          <span className="text-5xl md:text-6xl font-black text-JBM-charcoal dark:text-white tracking-tighter">1.2M+</span>
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-orange-500 mt-2 text-center">Trips Completed</span>
        </div>
      </div>

      {/* Infinite Scrolling Reviews Carousel */}
      <div className="w-full border-y border-gray-200 dark:border-white/10 py-10 bg-gray-50 dark:bg-[#151515] overflow-hidden flex flex-col items-center">
        <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-gray-500 dark:text-gray-400 mb-8">
          Global Partner Testimonials
        </span>
        
        <div className="relative w-full flex overflow-hidden">
           {/* Gradient overlays for smooth fade effect */}
           <div className="absolute top-0 left-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-gray-50 to-transparent dark:from-[#151515] dark:to-transparent z-10"></div>
           <div className="absolute top-0 right-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-gray-50 to-transparent dark:from-[#151515] dark:to-transparent z-10"></div>
           
           <div className="flex w-max animate-infinite-scroll hover:[animation-play-state:paused]">
             {/* Render reviews twice for seamless looping */}
             {[...reviews, ...reviews].map((review, i) => (
                <div key={i} className="flex-shrink-0 mx-4 md:mx-6 flex items-center gap-4 border border-gray-200 dark:border-white/10 rounded-full px-6 py-3 bg-white dark:bg-JBM-black/50 backdrop-blur-sm shadow-sm">
                   <i className="fa-solid fa-quote-left text-orange-500 opacity-50 text-xs"></i>
                   <p className="text-xs font-bold text-JBM-charcoal dark:text-white whitespace-nowrap">
                     {review}
                   </p>
                </div>
             ))}
           </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-2">
          <div className="flex gap-1.5 text-orange-500 text-sm md:text-base drop-shadow-sm">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </div>
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">All Rated 5 Stars</span>
        </div>
      </div>

    </div>
  );
}
