export function SectionCTA() {
  return (
    <div className="w-full py-24 md:py-32 bg-orange-500 text-black flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.1)_0%,transparent_100%)] pointer-events-none"></div>
      
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold uppercase tracking-tighter leading-[0.9] mb-8">
          Architect Your <br/> Supply Chain
        </h2>
        <p className="text-sm md:text-base font-bold text-black/70 max-w-2xl mx-auto mb-10">
          Ready to eliminate friction from your cross-border operations? Connect with our logistics architects for a bespoke route pricing matrix and infrastructure audit.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="px-8 py-4 bg-black text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-gray-900 transition-colors flex items-center justify-center gap-3 group shadow-2xl">
            Commission a Freight Audit
            <i className="fa-solid fa-arrow-right group-hover:translate-x-2 transition-transform"></i>
          </button>
          <button className="px-8 py-4 bg-transparent border-2 border-black text-black text-xs font-bold uppercase tracking-widest rounded-full hover:bg-black/5 transition-colors flex items-center justify-center gap-3">
            Talk to an Architect
          </button>
        </div>
      </div>
    </div>
  );
}
