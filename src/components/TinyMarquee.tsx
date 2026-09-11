import React from 'react';

export function TinyMarquee() {
  return (
    <div className="w-full overflow-hidden border-y border-orange-500/10 bg-white/1 dark:bg-black/10 backdrop-blur-md py-1.5 md:py-2">
      <div className="flex w-max animate-scroll-ticker opacity-70 hover:opacity-100 transition-opacity">
        <div className="flex items-center gap-4 md:gap-8 px-4 md:px-8 text-[8px] md:text-[10px] font-mono tracking-[0.3em] uppercase text-orange-500/80 whitespace-nowrap">
          <span>Precision Cargo Operations</span> •{" "}
          <span>Predictive Global Trade Analytics</span> •{" "}
          <span>Bespoke Logistics Solutions</span> •{" "}
          <span>Next-Gen Warehousing</span> •{" "}
          <span>Customs Compliance</span> •{" "}
          <span>Dynamic Routing Algorithms</span> •{" "}
          <span>Trans-African Networks</span> •{" "}
        </div>
        <div className="flex items-center gap-4 md:gap-8 px-4 md:px-8 text-[8px] md:text-[10px] font-mono tracking-[0.3em] uppercase text-orange-500/80 whitespace-nowrap">
          <span>Precision Cargo Operations</span> •{" "}
          <span>Predictive Global Trade Analytics</span> •{" "}
          <span>Bespoke Logistics Solutions</span> •{" "}
          <span>Next-Gen Warehousing</span> •{" "}
          <span>Customs Compliance</span> •{" "}
          <span>Dynamic Routing Algorithms</span> •{" "}
          <span>Trans-African Networks</span> •{" "}
        </div>
      </div>
    </div>
  );
}
