import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { PageLayout } from "../components/PageLayout";
import { fleetData, VehicleCategory } from "../data/fleetData";
import { Truck, Plane, Ship, Train } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { TinyMarquee } from "../components/TinyMarquee";

const icons = [Truck, Plane, Ship, Train];

export function FleetPage() {
  const [filter, setFilter] = useState<VehicleCategory | "All">("All");
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("q") || "";
  
  const [currentIcon, setCurrentIcon] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIcon((prev) => (prev + 1) % icons.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const CurrentIconComponent = icons[currentIcon];

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      setSearchParams({ q: e.target.value });
    } else {
      setSearchParams({});
    }
  };

  const filteredFleet = fleetData.filter(v => {
    const matchesCategory = filter === "All" || v.category === filter;
    const matchesSearch = v.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          v.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          v.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="w-full bg-white dark:bg-JBM-black text-JBM-charcoal dark:text-white pt-2 md:pt-4 pb-4 md:pb-8 relative border-b border-gray-200 dark:border-white/10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-orange-500/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 relative z-10">
          <div className="flex justify-between items-center gap-2 md:gap-4">
            <div>
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div className="w-8 h-px bg-orange-500"></div>
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] text-orange-500">Our Fleet</span>
              </div>
              <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold uppercase tracking-tighter leading-[0.9] max-w-4xl">
                The Assets <br />
                <span className="text-gray-400">Of Trade</span>
              </h1>
            </div>

            <div className="shrink-0 flex items-center justify-center w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 rounded-full bg-orange-500/10 text-orange-500 border border-orange-500/20 overflow-hidden shadow-[0_0_30px_rgba(249,115,22,0.15)]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIcon}
                  initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.8, rotate: 10 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center justify-center"
                >
                  <CurrentIconComponent className="w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20" strokeWidth={1.5} />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
          <div className="mt-6 md:mt-8 relative overflow-hidden rounded-2xl -ml-4 sm:-ml-6 md:-ml-8 p-4 sm:p-6 md:p-8 border border-orange-500/10 shadow-xl max-w-4xl group">
            <div className="absolute inset-0 bg-[url('/images/bg_fleet.jpg')] bg-cover bg-center opacity-90 transition-opacity duration-700"></div>
            <div className="absolute inset-0 bg-[#0a0a0a]/40"></div>
            <div className="relative z-10">
              <p className="text-[10px] md:text-sm text-white drop-shadow-md leading-snug md:leading-normal font-medium">
                Explore our multi-modal catalog of logistics assets. From heavy-haulage terrestrial units navigating Northern Corridor highways to intercontinental air freighters and ocean container feeders, we operate the physical machinery required to move global cargo smoothly.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mt-4 md:mt-6 border-t border-gray-200 dark:border-white/10 pt-3 md:pt-6">
            <div className="flex flex-col gap-0 md:gap-1">
              <span className="text-xl md:text-3xl font-extrabold text-orange-500">650+</span>
              <span className="text-[9px] md:text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 leading-tight md:leading-normal">Active Land Rigs & Prime Movers</span>
            </div>
            <div className="flex flex-col gap-0 md:gap-1">
              <span className="text-xl md:text-3xl font-extrabold text-orange-500">12</span>
              <span className="text-[9px] md:text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 leading-tight md:leading-normal">Dedicated Cargo Aircraft & Holds</span>
            </div>
            <div className="flex flex-col gap-0 md:gap-1">
              <span className="text-xl md:text-3xl font-extrabold text-orange-500">12,000+</span>
              <span className="text-[9px] md:text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 leading-tight md:leading-normal">TEU Ocean Container Capacity</span>
            </div>
            <div className="flex flex-col gap-0 md:gap-1">
              <span className="text-xl md:text-3xl font-extrabold text-orange-500">99.8%</span>
              <span className="text-[9px] md:text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 leading-tight md:leading-normal">Fleet Telematics & GPS Uptime</span>
            </div>
          </div>
        </div>
      </section>
      <TinyMarquee />

      {/* Catalog Section */}
      <section className="py-6 md:py-24 max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 w-full">
        
        {/* Search & Filters */}
        <div className="flex flex-col gap-4 mb-6 md:mb-12">
          {/* Search Bar */}
          <div className="relative w-full max-w-md">
            <i className="fa-solid fa-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xs"></i>
            <input 
              type="text" 
              placeholder="Search assets (e.g., Scania, Boeing)..." 
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full bg-gray-100 dark:bg-white/5 border border-orange-500/30 rounded-full py-2.5 pl-10 pr-4 text-[10px] md:text-xs text-JBM-charcoal dark:text-white focus:outline-none focus:border-orange-500 transition-colors shadow-[0_0_15px_rgba(249,115,22,0.2)] focus:shadow-[0_0_25px_rgba(249,115,22,0.5)] focus:ring-1 focus:ring-orange-500 transition-all"
            />
          </div>
          
          {/* Filters */}
          <div className="flex flex-wrap items-center gap-1.5 md:gap-3">
            {["All", "Land Haulage", "Air Freight", "Ocean & Port", "Cold Chain & Hazmat", "Project Cargo", "Urban Logistics"].map((cat) => {
              const displayLabel = cat === "All" ? "ALL (850+)" : cat.toUpperCase();
              return (
                <button
                  key={cat}
                  onClick={() => setFilter(cat as any)}
                  className={`px-3 py-1.5 md:px-5 md:py-2.5 rounded-full text-[8px] md:text-[9px] font-bold uppercase tracking-widest transition-all ${
                    filter === cat 
                      ? "bg-JBM-charcoal text-white dark:bg-white dark:text-black shadow-lg" 
                      : "bg-gray-100 text-gray-500 hover:bg-gray-200 dark:bg-white/5 dark:text-gray-400 dark:hover:bg-white/10 dark:hover:text-white"
                  }`}
                >
                  {displayLabel}
                </button>
              );
            })}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          {filteredFleet.map((vehicle) => (
            <Link 
              to={`/fleet/${vehicle.id}`} 
              key={vehicle.id}
              className="group flex flex-col bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-[2rem] overflow-hidden hover:border-orange-500 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-xl dark:hover:shadow-orange-500/10"
            >
              {/* Image Container */}
              <div className="h-48 sm:h-72 w-full relative overflow-hidden bg-JBM-charcoal">
                <img 
                  src={vehicle.image} 
                  alt={vehicle.name} 
                  className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-80 group-hover:scale-105 group-hover:mix-blend-normal group-hover:opacity-100 transition-all duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute top-6 left-6 flex flex-wrap gap-2">
                  {vehicle.badges.slice(0, 1).map((badge, idx) => (
                    <span key={idx} className="px-3 py-1 bg-white/20 backdrop-blur-md border border-white/20 text-white text-[9px] font-bold uppercase tracking-widest rounded-full">
                      {badge}
                    </span>
                  ))}
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-extrabold uppercase text-white tracking-tight mb-1">{vehicle.name}</h3>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-orange-500">{vehicle.title}</p>
                </div>
              </div>

              {/* Specs Snippet */}
              <div className="p-6 md:p-8 flex flex-col flex-grow bg-white dark:bg-transparent">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {vehicle.specs.slice(0, 2).map((spec, idx) => (
                    <div key={idx} className="flex flex-col gap-1">
                      <span className="text-[9px] font-bold uppercase tracking-widest text-gray-400 truncate">{spec.label}</span>
                      <span className="text-sm font-extrabold text-JBM-charcoal dark:text-white line-clamp-2" title={spec.value}>{spec.value}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-auto flex items-center justify-between border-t border-gray-100 dark:border-white/10 pt-6">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 group-hover:text-JBM-charcoal dark:group-hover:text-white transition-colors">View Specifications</span>
                  <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-white/5 flex items-center justify-center text-gray-400 group-hover:bg-orange-500 group-hover:text-white transition-all">
                    <i className="fa-solid fa-arrow-right text-xs"></i>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </section>
    </PageLayout>
  );
}
