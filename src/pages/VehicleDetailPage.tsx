import { useParams, Link, Navigate } from "react-router-dom";
import { PageLayout } from "../components/PageLayout";
import { fleetData } from "../data/fleetData";
import { TinyMarquee } from "../components/TinyMarquee";

export function VehicleDetailPage() {
  const { id } = useParams<{ id: string }>();
  
  const vehicle = fleetData.find(v => v.id === id);

  if (!vehicle) {
    return <Navigate to="/fleet" replace />;
  }

  return (
    <PageLayout>
      {/* Hero Header */}
      <section className="relative w-full h-[50vh] md:h-[60vh] min-h-[400px] bg-JBM-charcoal overflow-hidden">
        <img 
          src={vehicle.image} 
          alt={vehicle.name} 
          className="absolute inset-0 w-full h-full object-cover mix-blend-luminosity opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-JBM-charcoal dark:from-JBM-black via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-JBM-charcoal/80 dark:from-JBM-black/80 via-transparent to-transparent"></div>
        
        <div className="absolute inset-0 max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 flex flex-col justify-end pb-12 md:pb-20">
          <Link to="/fleet" className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-orange-500 hover:text-white transition-colors mb-6 w-max">
            <i className="fa-solid fa-arrow-left"></i> Back to Fleet
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            {vehicle.badges.map((badge, idx) => (
              <span key={idx} className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold uppercase tracking-widest rounded-full">
                {badge}
              </span>
            ))}
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold uppercase tracking-tighter text-white mb-2 leading-[0.9] max-w-4xl">
            {vehicle.title}
          </h1>
          <p className="text-sm md:text-lg font-bold uppercase tracking-widest text-gray-400 mt-2">
            {vehicle.categoryTag}
          </p>
        </div>
      </section>
      <TinyMarquee />

      {/* Main Content Grid */}
      <section className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 py-16 md:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Left Column: Specs Panel */}
          <div className="lg:col-span-4 flex flex-col order-2 lg:order-1">
            <div className="bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-[2rem] p-8 md:p-10 sticky top-32">
              <h3 className="text-lg font-extrabold uppercase tracking-tight text-JBM-charcoal dark:text-white mb-8 border-b border-gray-200 dark:border-white/10 pb-4">
                Specs Grid
              </h3>
              
              <div className="flex flex-col gap-6">
                {vehicle.specs.map((spec, idx) => (
                  <div key={idx} className="flex flex-col gap-1">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">{spec.label}</span>
                    <span className="text-lg font-extrabold text-JBM-charcoal dark:text-white leading-tight">{spec.value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-gray-200 dark:border-white/10 flex flex-col gap-4">
                <Link to="/architect" className="w-full flex items-center justify-center bg-JBM-charcoal dark:bg-white text-white dark:text-black font-extrabold uppercase tracking-widest text-xs py-4 rounded-full hover:bg-orange-500 dark:hover:bg-orange-500 transition-colors shadow-lg">
                  Request Fleet Quote
                </Link>
                <button className="w-full flex items-center justify-center bg-transparent border border-gray-300 dark:border-white/20 text-JBM-charcoal dark:text-white font-extrabold uppercase tracking-widest text-xs py-4 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors">
                  <i className="fa-solid fa-file-pdf mr-2"></i> Download Spec Sheet
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Descriptions & Details */}
          <div className="lg:col-span-8 flex flex-col gap-16 order-1 lg:order-2">
            
            {/* Overview */}
            <div className="flex flex-col">
              <h2 className="text-2xl md:text-3xl font-extrabold uppercase tracking-tighter text-JBM-charcoal dark:text-white mb-6">
                Asset Overview
              </h2>
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
                {vehicle.description}
              </p>
            </div>

            {/* Operational Range */}
            <div className="flex flex-col">
              <h2 className="text-2xl md:text-3xl font-extrabold uppercase tracking-tighter text-JBM-charcoal dark:text-white mb-6">
                Coverage Corridor
              </h2>
              <div className="p-6 bg-orange-500/5 border border-orange-500/20 rounded-xl">
                <div className="flex items-start gap-4">
                  <i className="fa-solid fa-route text-orange-500 text-xl mt-1"></i>
                  <span className="text-lg font-bold text-JBM-charcoal dark:text-white">
                    {vehicle.operationalRange}
                  </span>
                </div>
              </div>
            </div>

            {/* Key Features */}
            <div className="flex flex-col">
              <h2 className="text-2xl md:text-3xl font-extrabold uppercase tracking-tighter text-JBM-charcoal dark:text-white mb-6">
                Key Tech & Features
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {vehicle.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-5 bg-white dark:bg-[#0a0a0a] border border-gray-100 dark:border-white/5 rounded-xl">
                    <div className="mt-0.5 w-6 h-6 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center shrink-0">
                      <i className="fa-solid fa-check text-[10px] text-orange-500"></i>
                    </div>
                    <span className="text-sm font-bold text-JBM-charcoal dark:text-white leading-tight">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>
    </PageLayout>
  );
}
