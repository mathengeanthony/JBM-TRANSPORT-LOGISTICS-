import { useState } from "react";
import { PageLayout } from "../components/PageLayout";
import { 
  Shield, Leaf, HardHat, Activity, 
  CheckCircle2, XCircle, Download, FileText, 
  ArrowRight, Cog, Globe, Scale,
  BookMarked
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { TinyMarquee } from "../components/TinyMarquee";

type PriorityType = "compliance" | "carbon" | "hse" | "risk";

const BENCHMARKS = [
  { value: "99.8%", label: "ON-TIME CORRIDOR DELIVERY RATE" },
  { value: "ZERO-TOLERANCE", label: "NON-COMPLIANCE & BRIBERY PROTOCOLS" },
  { value: "100% TELEMATICS", label: "SATELLITE VISIBILITY ACROSS FLEET & FACILITY" },
  { value: "NET-ZERO 2040", label: "FLEET DECARBONIZATION & ESG COMMITMENT" }
];

const PILLARS = [
  {
    icon: Cog,
    title: "1. Industrial Engineering Discipline in Motion",
    description: "Logistics is not just moving trucks; it is dynamic systems engineering. We treat route planning, axle-load calculations, and warehouse racking velocity with mathematical precision to eliminate demurrage, transit friction, and dwell-time waste."
  },
  {
    icon: Globe,
    title: "2. Pan-African Trade Integration (AfCFTA First)",
    description: "We believe economic sovereignty across Africa relies on seamless inter-state mobility. We actively build assets, border links, and digital clearance workflows designed to dismantle trade barriers along the Northern and Central Corridors."
  },
  {
    icon: Scale,
    title: "3. Radical Transparency & Uncompromising Compliance",
    description: "Hidden fees, border bribes, and ambiguous transit times have hindered African trade for decades. Our ethos dictates 100% upfront landed-cost modeling, full KRA/AEO regulatory compliance, and real-time client visibility into every mile traveled."
  },
  {
    icon: Leaf,
    title: "4. Environmental & Human Safety Stewardship",
    description: "High-volume haulage must not come at the expense of human lives or local ecosystems. We enforce strict driver rest mandates, invest exclusively in low-emission engine technologies, and maintain active spill-response readiness on all transit lanes."
  }
];

const COMPARISON = [
  {
    axis: "Route Pricing",
    standard: "Variable, post-transit surcharges, hidden border expenses",
    ours: "100% Upfront Landed-Cost Guaranteed Rates"
  },
  {
    axis: "Border Processing",
    standard: "Manual paperwork at gates, high border dwell times (>24 hrs)",
    ours: "AEO SCT Pre-Clearance & OSBP Fast-Tracking (<45 mins)"
  },
  {
    axis: "Fleet Monitoring",
    standard: "Intermittent phone check-ins with drivers",
    ours: "24/7 Live Satellite Telematics, Geofencing & Smart Locks"
  },
  {
    axis: "Safety & HSE",
    standard: "Basic insurance, reactive accident management",
    ours: "Lloyd's Underwritten $10M GIT + Active Spill/Escort Patrols"
  },
  {
    axis: "Environmental Impact",
    standard: "Older diesel engines, unmeasured carbon output",
    ours: "Euro 5/6 Fleet Standard + Automated CO₂/Ton-KM Reporting"
  }
];

const PRIORITIES = [
  { id: "compliance", label: "Anti-Corruption & Compliance Rigor", icon: Shield },
  { id: "carbon", label: "Carbon Reduction & ESG Metrics", icon: Leaf },
  { id: "hse", label: "Driver Welfare & HSE Safety", icon: HardHat },
  { id: "risk", label: "Supply Chain Risk & Insurance Backing", icon: Activity }
] as const;

const UTILITY_DATA: Record<PriorityType, any> = {
  compliance: {
    title: "Anti-Corruption & Compliance Rigor",
    policies: ["Anti-Bribery & Trade Ethics Code", "KRA AEO Regulatory Framework"],
    certs: ["ISO 9001:2015 Quality Management", "AEO Tier-3 Certificate", "Trace Anti-Bribery Certified"],
    metrics: ["0 Non-Compliance Incidents (YTD)", "100% Automated Duty Settlement"]
  },
  carbon: {
    title: "Carbon Reduction & ESG Metrics",
    policies: ["ESG Carbon Offset Framework", "Fleet Decarbonization Roadmap 2040"],
    certs: ["ISO 14001:2015 Environmental Management", "Euro 6 Fleet Compliance Cert"],
    metrics: ["Automated CO₂/Ton-KM Reporting", "98% Route Efficiency Index"]
  },
  hse: {
    title: "Driver Welfare & HSE Safety",
    policies: ["Driver Safety & Rest Mandate", "Zero-Harm Operations Handbook"],
    certs: ["ISO 45001:2018 Occupational Health & Safety", "HAZMAT IMDG Handling Cert"],
    metrics: ["0 Lost Time Injuries (YTD)", "100% Dual-Driver Long Hauls"]
  },
  risk: {
    title: "Supply Chain Risk & Insurance Backing",
    policies: ["Goods-In-Transit Risk Protocol", "Emergency Route Patrol Operations"],
    certs: ["Lloyd's Syndicate Insurance Underwriting", "C-TPAT Security Alignment"],
    metrics: ["$10M+ USD GIT Policy Value", "24/7 Satellite Telematics Uptime"]
  }
};

export function EthosPage() {
  const [activePriority, setActivePriority] = useState<PriorityType>("compliance");
  const activeData = UTILITY_DATA[activePriority];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="w-full bg-white dark:bg-JBM-black text-JBM-charcoal dark:text-white pt-16 md:pt-24 pb-16 md:pb-24 relative border-b border-gray-200 dark:border-white/10 overflow-hidden">
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-orange-500/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 -translate-x-1/3"></div>
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 relative z-10">
          
          <div className="flex items-center gap-3 mb-6 md:mb-8">
            <div className="w-8 h-px bg-orange-500"></div>
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] text-orange-500">Our Purpose & Operational Philosophy</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-extrabold uppercase tracking-tighter leading-[0.9] max-w-5xl mb-8">
            Our Ethos & <br />
            <span className="text-gray-400">Architecture of Trust</span>
          </h1>
          
          <div className="relative overflow-hidden rounded-2xl -ml-4 sm:-ml-6 md:-ml-8 p-4 sm:p-6 md:p-8 border border-orange-500/10 shadow-xl max-w-4xl group">
            <div className="absolute inset-0 bg-[url('/images/bg_ethos.jpg')] bg-cover bg-center opacity-90 transition-opacity duration-700"></div>
            <div className="absolute inset-0 bg-[#0a0a0a]/40"></div>
            <div className="relative z-10">
              <p className="text-sm md:text-lg text-white drop-shadow-md leading-relaxed font-medium">
                Moving cargo is physical; enabling commerce is foundational. We combine industrial engineering discipline, Pan-African trade vision, radical tariff transparency, and uncompromising environmental stewardship to build the continent's most dependable logistics framework.
              </p>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-12 md:mt-16 pt-8 md:pt-12 border-t border-gray-200 dark:border-white/10">
            {BENCHMARKS.map((metric, idx) => (
              <div key={idx} className="flex flex-col gap-1">
                <span className="text-2xl md:text-4xl font-extrabold text-orange-500">{metric.value}</span>
                <span className="text-[9px] md:text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 leading-tight md:leading-normal">{metric.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <TinyMarquee />

      {/* The Four Foundational Pillars */}
      <section className="py-16 md:py-24 max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 w-full">
        <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tighter text-JBM-charcoal dark:text-white mb-12">
          The Four Foundational Pillars
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div key={idx} className="flex flex-col p-8 md:p-12 bg-gray-50 dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/10 rounded-3xl hover:border-orange-500/50 transition-colors">
                <Icon className="w-10 h-10 md:w-12 md:h-12 text-orange-500 mb-6" strokeWidth={1.5} />
                <h3 className="text-xl md:text-2xl font-extrabold uppercase tracking-tight text-JBM-charcoal dark:text-white mb-4 leading-tight">
                  {pillar.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 font-medium leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Operational Mindset Matrix */}
      <section className="py-16 md:py-24 max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 w-full">
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tighter text-JBM-charcoal dark:text-white mb-4">
            Operational Mindset Matrix
          </h2>
          <p className="text-sm md:text-base text-gray-500 font-bold uppercase tracking-widest">
            Conventional Transporters vs. Our Standard
          </p>
        </div>

        <div className="w-full overflow-x-auto hide-scrollbar rounded-3xl border border-gray-200 dark:border-white/10 shadow-xl bg-white dark:bg-black">
          <table className="w-full text-left min-w-[800px] border-collapse">
            <thead>
              <tr className="border-b border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5">
                <th className="p-6 md:p-8 text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-500 w-1/4">Operational Axis</th>
                <th className="p-6 md:p-8 text-[10px] md:text-xs font-bold uppercase tracking-widest text-gray-500 w-3/8">Standard Market Transporters</th>
                <th className="p-6 md:p-8 text-[10px] md:text-xs font-bold uppercase tracking-widest text-orange-500 w-3/8">Our Enterprise Standard</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON.map((row, idx) => (
                <tr key={idx} className="border-b border-gray-100 dark:border-white/5 hover:bg-gray-50/50 dark:hover:bg-white/[0.02] transition-colors group">
                  <td className="p-6 md:p-8 text-xs md:text-sm font-bold uppercase tracking-widest text-JBM-charcoal dark:text-white align-top">
                    {row.axis}
                  </td>
                  <td className="p-6 md:p-8 text-xs md:text-sm text-gray-500 dark:text-gray-400 font-medium align-top">
                    <div className="flex items-start gap-3">
                      <XCircle className="w-4 h-4 text-red-500/70 shrink-0 mt-0.5" />
                      <span className="leading-snug">{row.standard}</span>
                    </div>
                  </td>
                  <td className="p-6 md:p-8 text-xs md:text-sm text-JBM-charcoal dark:text-white font-extrabold align-top bg-orange-50/50 dark:bg-orange-500/5 group-hover:bg-orange-50 dark:group-hover:bg-orange-500/10 transition-colors">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                      <span className="leading-snug">{row.ours}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Ethos Card Showcase */}
      <section className="py-16 md:py-24 bg-gray-50 dark:bg-[#0a0a0a] border-y border-gray-200 dark:border-white/10">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 w-full">
          
          <div className="bg-JBM-charcoal border border-gray-200 dark:border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row relative">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-500 via-transparent to-transparent pointer-events-none"></div>
            
            <div className="p-8 md:p-14 lg:w-1/2 flex flex-col justify-center relative z-10 border-b lg:border-b-0 lg:border-r border-white/10">
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[9px] font-bold uppercase tracking-widest rounded-full">
                  OPERATIONAL DISCIPLINE
                </span>
                <span className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[9px] font-bold uppercase tracking-widest rounded-full">
                  PAN-AFRICAN INTEGRATION
                </span>
                <span className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[9px] font-bold uppercase tracking-widest rounded-full">
                  ZERO FRICTION
                </span>
              </div>

              <h3 className="text-3xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-tighter text-white mb-6 leading-[0.9]">
                The Zero-Demurrage Imperative
              </h3>
              
              <div className="p-6 bg-white/5 border border-white/10 rounded-2xl mb-8">
                <span className="block text-[10px] font-bold uppercase tracking-widest text-orange-500 mb-2">Core Commitment</span>
                <span className="block text-sm font-bold text-white leading-relaxed">
                  Guaranteeing rapid vessel-to-gate discharge and border clearance across all East African trade nodes.
                </span>
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Why This Matters to Enterprise Clients</span>
                <p className="text-sm text-gray-300 font-medium leading-relaxed">
                  Every hour a container sits idle at Mombasa Port or Malaba OSBP eats directly into a client's operating margins. We integrate pre-arrival manifests, KRA iCMS green-channel routing, and dedicated port drayage rigs to ensure zero avoidable dwell time.
                </p>
              </div>
            </div>

            <div className="p-8 md:p-14 lg:w-1/2 flex flex-col justify-center bg-black/40 backdrop-blur-sm relative z-10">
              <h4 className="text-lg font-extrabold uppercase tracking-tight text-white mb-6 flex items-center gap-3">
                <FileText className="w-5 h-5 text-orange-500" /> Included Governance Documents
              </h4>
              
              <div className="flex flex-col gap-4 mb-10">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-orange-500/50 transition-colors group cursor-pointer">
                  <Download className="w-4 h-4 text-gray-400 group-hover:text-orange-500 transition-colors shrink-0" />
                  <span className="text-xs font-bold uppercase tracking-widest text-white">Anti-Bribery & Trade Ethics Code (PDF)</span>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-orange-500/50 transition-colors group cursor-pointer">
                  <Download className="w-4 h-4 text-gray-400 group-hover:text-orange-500 transition-colors shrink-0" />
                  <span className="text-xs font-bold uppercase tracking-widest text-white">Driver Safety & Rest Mandate</span>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-orange-500/50 transition-colors group cursor-pointer">
                  <Download className="w-4 h-4 text-gray-400 group-hover:text-orange-500 transition-colors shrink-0" />
                  <span className="text-xs font-bold uppercase tracking-widest text-white">ESG Carbon Offset Framework</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                <button className="flex-1 py-4 px-6 rounded-xl bg-orange-500 text-white font-extrabold uppercase tracking-widest text-[10px] hover:bg-orange-600 transition-colors text-center shadow-lg">
                  Explore Governance Standards
                </button>
                <button className="flex-1 py-4 px-6 rounded-xl bg-transparent border border-white/20 text-white font-extrabold uppercase tracking-widest text-[10px] hover:bg-white/10 transition-colors text-center flex items-center justify-center gap-2">
                  Download Corporate Profile
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Interactive Governance & Ethos Alignment Utility */}
      <section className="py-16 md:py-24 max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 w-full">
        <div className="bg-JBM-charcoal dark:bg-black border border-gray-200 dark:border-white/10 rounded-[2rem] p-6 md:p-12 overflow-hidden relative shadow-2xl flex flex-col xl:flex-row gap-12 lg:gap-20">
          
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
          
          {/* Left Side: Selectors */}
          <div className="xl:w-2/5 flex flex-col relative z-10">
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-6 h-px bg-orange-500"></div>
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-orange-500">Alignment Utility</span>
              </div>
              <h3 className="text-2xl md:text-4xl font-extrabold uppercase tracking-tighter text-white leading-tight mb-4">
                Governance & Ethos Alignment
              </h3>
              <p className="text-sm text-gray-400 font-medium">
                Demonstrating corporate alignment with enterprise client procurement requirements. Select your primary organizational priority to review our matching protocols.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">Select Enterprise Priority</span>
              {PRIORITIES.map((priority) => {
                const Icon = priority.icon;
                const isActive = activePriority === priority.id;
                return (
                  <button
                    key={priority.id}
                    onClick={() => setActivePriority(priority.id as PriorityType)}
                    className={`flex items-center gap-4 p-4 rounded-2xl border transition-all text-left ${
                      isActive 
                        ? "bg-white/10 border-orange-500 shadow-[0_0_20px_rgba(249,115,22,0.15)]" 
                        : "bg-black/30 border-white/10 hover:bg-white/5 hover:border-white/20"
                    }`}
                  >
                    <Icon className={`w-5 h-5 shrink-0 ${isActive ? "text-orange-500" : "text-gray-400"}`} />
                    <span className={`text-xs font-bold uppercase tracking-widest ${isActive ? "text-white" : "text-gray-400"}`}>
                      {priority.label}
                    </span>
                    {isActive && <ArrowRight className="w-4 h-4 ml-auto text-orange-500" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Side: Results Dossier */}
          <div className="xl:w-3/5 flex flex-col relative z-10">
            <AnimatePresence mode="wait">
              <motion.div 
                key={activePriority}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl h-full flex flex-col"
              >
                <div className="flex items-center justify-between border-b border-gray-100 dark:border-white/10 pb-6 mb-8">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-1">Generated Output Map</span>
                    <span className="text-sm font-extrabold uppercase text-JBM-charcoal dark:text-white">{activeData.title}</span>
                  </div>
                  <div className="hidden sm:flex items-center gap-2 text-orange-500 bg-orange-500/10 px-3 py-1.5 rounded-full">
                    <CheckCircle2 className="w-4 h-4" />
                    <span className="text-[9px] font-bold uppercase tracking-widest">Aligned</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 flex-grow">
                  
                  <div className="flex flex-col gap-6">
                    <div>
                      <span className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-4 flex items-center gap-2">
                        <BookMarked className="w-3 h-3" /> Exact Policies Applied
                      </span>
                      <ul className="flex flex-col gap-3">
                        {activeData.policies.map((policy: string, i: number) => (
                          <li key={i} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-1.5 shrink-0"></div>
                            <span className="text-xs font-bold text-JBM-charcoal dark:text-white leading-relaxed">{policy}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <span className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-4 flex items-center gap-2">
                        <Activity className="w-3 h-3" /> Operational Metrics
                      </span>
                      <ul className="flex flex-col gap-3">
                        {activeData.metrics.map((metric: string, i: number) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                            <span className="text-xs font-bold text-JBM-charcoal dark:text-white leading-relaxed">{metric}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-col">
                    <span className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-4 flex items-center gap-2">
                      <Shield className="w-3 h-3" /> Third-Party Inspection Certificates
                    </span>
                    <div className="flex flex-col gap-3">
                      {activeData.certs.map((cert: string, i: number) => (
                        <div key={i} className="p-4 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl">
                          <span className="text-[10px] font-bold uppercase tracking-widest text-orange-500 block mb-1">Verified Audit</span>
                          <span className="text-xs font-bold text-JBM-charcoal dark:text-white block">{cert}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>

                <button className="w-full mt-auto py-5 rounded-xl bg-JBM-charcoal dark:bg-white text-white dark:text-black font-extrabold uppercase tracking-widest text-[10px] sm:text-xs hover:bg-orange-500 dark:hover:bg-orange-500 transition-colors flex items-center justify-center gap-3 shadow-lg">
                  <Download className="w-5 h-5" /> Download Corporate Ethos & Governance Audit Dossier
                </button>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </section>

    </PageLayout>
  );
}
