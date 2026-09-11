import { useState } from "react";
import { PageLayout } from "../components/PageLayout";
import { Shield, Globe, Map as MapIcon, Globe2, CheckCircle2, FileCheck2, HardHat, FileText, FileSpreadsheet, Download, Leaf, Flame, Activity } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { TinyMarquee } from "../components/TinyMarquee";

type ScopeType = "kenya" | "eac" | "trans_african" | "global";

const SCOPES = [
  { id: "kenya", label: "🇰🇪 KENYA DOMESTIC", icon: Shield },
  { id: "eac", label: "🌍 EAC REGIONAL", icon: Globe },
  { id: "trans_african", label: "🌍 TRANS-AFRICAN", icon: MapIcon },
  { id: "global", label: "🌐 GLOBAL STANDARDS", icon: Globe2 },
] as const;

// The prompt stated: Selecting a scope dynamically updates the regulatory frameworks...
// To ensure it works as requested, we'll vary some data based on scope, although 
// the prompt listed the same global metrics and matrices. Let's make the sub-heading dynamic.

const SCOPE_DATA = {
  kenya: {
    subheading: "KRA National AEO accreditation, NTSA compliance, and domestic transit goods licensing for seamless countrywide operations.",
    matrixHighlight: "KRA National AEO",
  },
  eac: {
    subheading: "East African Community Mutual Recognition Agreements, OSBP express clearance, and Single Customs Territory (SCT) bonds.",
    matrixHighlight: "EAC Regional AEO Status",
  },
  trans_african: {
    subheading: "SADC and COMESA Yellow Card integration, cross-border axle load compliance, and Trans-African security protocols.",
    matrixHighlight: "AfCFTA & COMESA Trade Passport",
  },
  global: {
    subheading: "WCO SAFE Framework alignment, FIATA membership, and global maritime/air freight liability underwriting.",
    matrixHighlight: "WCO SAFE Framework & C-TPAT",
  }
};

const GLOBAL_METRICS = [
  { value: "KRA AEO CERTIFIED", label: "GREEN-CHANNEL PRIORITY CLEARANCE STATUS" },
  { value: "$10M+ USD", label: "COMPREHENSIVE GIT & LIABILITY UNDERWRITING" },
  { value: "ISO TRIPLE-CERTIFIED", label: "ISO 9001 (QUALITY), 14001 (ENVIRONMENT), 45001 (SAFETY)" },
  { value: "EURO 5 / 6 FLEET", label: "ESG-COMPLIANT LOW-EMISSION & TELEMATICS FLEET" }
];

const MATRICES = [
  {
    title: "KRA National AEO",
    subtitle: "(Authorized Economic Operator)",
    scope: "Kenya Domestic & Import Gateways",
    privileges: "Direct Green-Channel clearance, immediate cargo release, deferred duty payment privileges, zero physical inspections on compliant lanes.",
    authority: "Kenya Revenue Authority (KRA) Customs & Border Control"
  },
  {
    title: "EAC Regional AEO Status",
    subtitle: "Mutual Recognition Agreement",
    scope: "East African Community (KE, UG, TZ, RW, SS, BI, DRC)",
    privileges: "Mutual Recognition Agreement (MRA) across border posts, priority lane access at Malaba, Namanga & Busia OSBPs, simplified SCT manifest processing.",
    authority: "EAC Directorate of Customs / Partner State Revenue Authorities"
  },
  {
    title: "AfCFTA & COMESA Trade Passport",
    subtitle: "Trans-African Corridors",
    scope: "SADC, COMESA, AfCFTA Corridors",
    privileges: "Fast-tracked cross-border transit permits, standardized regional vehicle dimension compliance, COMESA Yellow Card automated processing.",
    authority: "African Continental Free Trade Area Secretariat / COMESA"
  },
  {
    title: "WCO SAFE Framework & C-TPAT",
    subtitle: "Global Import / Export",
    scope: "Global Air & Maritime Gateways",
    privileges: "High-security supply chain validation, tamper-evident smart seal protocol compliance, fast-track ocean vessel discharge at Kilindini Port.",
    authority: "World Customs Organization (WCO) Standards"
  }
];

export function CompliancePage() {
  const [activeScope, setActiveScope] = useState<ScopeType>("kenya");
  const data = SCOPE_DATA[activeScope];
  const ActiveIcon = SCOPES.find(s => s.id === activeScope)?.icon || Shield;

  // Utility State
  const [cargoValue, setCargoValue] = useState("$50k - $500k");
  const [cargoClass, setCargoClass] = useState("General Dry");
  const [auditScope, setAuditScope] = useState("Domestic Kenya");
  const [isGenerated, setIsGenerated] = useState(false);

  const handleGenerate = () => {
    setIsGenerated(false);
    setTimeout(() => setIsGenerated(true), 600);
  };

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="w-full bg-white dark:bg-JBM-black text-JBM-charcoal dark:text-white pt-6 md:pt-10 pb-8 md:pb-12 relative border-b border-gray-200 dark:border-white/10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-orange-500/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 relative z-10">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <div className="w-8 h-px bg-orange-500"></div>
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] text-orange-500">Enterprise Governance & Risk Management</span>
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold uppercase tracking-tighter leading-[0.9] max-w-4xl">
              AEO Trust, HSE <br />
              <span className="text-gray-400">& Compliance Center</span>
            </h1>
          </div>

          <div className="flex flex-wrap items-center gap-2 mt-4 md:mt-6">
            {SCOPES.map((scope) => (
              <button
                key={scope.id}
                onClick={() => setActiveScope(scope.id as ScopeType)}
                className={`px-4 py-2 rounded-full text-[9px] md:text-[10px] font-bold uppercase tracking-widest transition-all ${
                  activeScope === scope.id 
                    ? "bg-orange-500 text-white shadow-[0_0_15px_rgba(249,115,22,0.4)]" 
                    : "bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-white/10 hover:text-JBM-charcoal dark:hover:text-white"
                }`}
              >
                {scope.label}
              </button>
            ))}
          </div>
          
          <AnimatePresence mode="wait">
            <motion.div 
              key={`desc-${activeScope}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="mt-6 md:mt-8 relative overflow-hidden rounded-2xl -ml-4 sm:-ml-6 md:-ml-8 p-4 sm:p-6 md:p-8 border border-orange-500/10 shadow-xl max-w-4xl group"
            >
              <div className="absolute inset-0 bg-[url('/images/bg_compliance.jpg')] bg-cover bg-center opacity-90 transition-opacity duration-700"></div>
            <div className="absolute inset-0 bg-[#0a0a0a]/40"></div>
              <div className="relative z-10">
                <h2 className="text-lg md:text-2xl font-extrabold uppercase tracking-tight text-orange-500">
                  Institutional trade compliance & risk backing
                </h2>
                <p className="mt-2 text-[10px] md:text-sm text-white drop-shadow-md leading-snug md:leading-normal font-medium">
                  {data.subheading}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mt-6 md:mt-8 border-t border-gray-200 dark:border-white/10 pt-4 md:pt-6">
            {GLOBAL_METRICS.map((metric, idx) => (
              <div key={idx} className="flex flex-col gap-0 md:gap-1">
                <span className="text-xl md:text-3xl font-extrabold text-orange-500">{metric.value}</span>
                <span className="text-[9px] md:text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 leading-tight md:leading-normal">{metric.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <TinyMarquee />

      {/* Customs Trust & AEO Accreditation Matrix */}
      <section className="py-12 md:py-20 max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 w-full">
        <div className="flex items-center gap-3 mb-8 md:mb-12">
          <FileCheck2 className="w-6 h-6 md:w-8 md:h-8 text-orange-500" />
          <h2 className="text-2xl md:text-4xl font-extrabold uppercase tracking-tighter text-JBM-charcoal dark:text-white">
            Customs Trust & Accreditation Matrix
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {MATRICES.map((matrix, idx) => {
            const isHighlight = matrix.title.includes(data.matrixHighlight);
            return (
              <div 
                key={idx} 
                className={`flex flex-col bg-gray-50 dark:bg-white/5 border rounded-3xl p-6 md:p-8 transition-all duration-300 ${
                  isHighlight 
                    ? "border-orange-500 shadow-[0_0_20px_rgba(249,115,22,0.15)] -translate-y-1" 
                    : "border-gray-200 dark:border-white/10"
                }`}
              >
                <h3 className="text-xl font-extrabold uppercase tracking-tight text-JBM-charcoal dark:text-white leading-tight mb-1">
                  {matrix.title}
                </h3>
                <span className="text-[9px] font-bold uppercase tracking-widest text-gray-500 mb-6">{matrix.subtitle}</span>
                
                <div className="flex flex-col gap-4 flex-grow">
                  <div className="flex flex-col gap-1">
                    <span className="text-[9px] font-bold uppercase tracking-widest text-gray-400">Operational Scope</span>
                    <span className="text-xs font-bold text-JBM-charcoal dark:text-white">{matrix.scope}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <span className="text-[9px] font-bold uppercase tracking-widest text-gray-400">Priority Privileges</span>
                    <span className="text-xs font-medium text-gray-600 dark:text-gray-400 leading-relaxed">{matrix.privileges}</span>
                  </div>
                  <div className="flex flex-col gap-1 mt-auto pt-4 border-t border-gray-200 dark:border-white/10">
                    <span className="text-[9px] font-bold uppercase tracking-widest text-gray-400">Verification Authority</span>
                    <span className="text-xs font-bold text-orange-500 leading-tight">{matrix.authority}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Spec Card Showcase */}
      <section className="py-12 md:py-20 bg-gray-50 dark:bg-[#0a0a0a] border-y border-gray-200 dark:border-white/10">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 w-full">
          <div className="bg-white dark:bg-black border border-gray-200 dark:border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
            
            <div className="p-8 md:p-12 lg:w-1/2 flex flex-col justify-center bg-JBM-charcoal relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
              
              <div className="relative z-10 flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[9px] font-bold uppercase tracking-widest rounded-full">
                  KRA AEO GREEN-CHANNEL
                </span>
                <span className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[9px] font-bold uppercase tracking-widest rounded-full">
                  ISO TRIPLE CERTIFIED
                </span>
                <span className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[9px] font-bold uppercase tracking-widest rounded-full">
                  LLOYD'S UNDERWRITTEN
                </span>
              </div>

              <h3 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tighter text-white mb-2">
                KRA Authorized Economic Operator
              </h3>
              <span className="text-orange-500 font-bold uppercase tracking-widest text-xs md:text-sm mb-8 block">
                Tier-3 Enterprise Status
              </span>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Issuing Authority</span>
                  <span className="text-sm font-bold">Kenya Revenue Authority & EAC Customs Directorate</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Applicable Zones</span>
                  <span className="text-sm font-bold">All Domestic Ports, ICDs, OSBP Borders, Regional Corridors</span>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12 lg:w-1/2 flex flex-col justify-center bg-white dark:bg-black">
              <h4 className="text-lg font-extrabold uppercase tracking-tight text-JBM-charcoal dark:text-white mb-6 border-b border-gray-200 dark:border-white/10 pb-4">
                Enterprise SLA Snapshot
              </h4>
              <ul className="flex flex-col gap-4 mb-8">
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-widest text-gray-500">Border Dwell Time Reduction</span>
                    <span className="block text-sm font-bold text-JBM-charcoal dark:text-white">75% faster clearance at EAC One-Stop Border Posts</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-widest text-gray-500">Physical Inspection Rate</span>
                    <span className="block text-sm font-bold text-JBM-charcoal dark:text-white">&lt; 1% (Green-Channel Direct Clearance)</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-widest text-gray-500">Customs Duty Processing</span>
                    <span className="block text-sm font-bold text-JBM-charcoal dark:text-white">Automated deferred duty settlement accounting</span>
                  </div>
                </li>
              </ul>

              <div className="flex flex-col sm:flex-row gap-3">
                <button className="flex-1 py-3 px-4 rounded-full bg-JBM-charcoal dark:bg-white text-white dark:text-black font-extrabold uppercase tracking-widest text-[10px] hover:bg-orange-500 dark:hover:bg-orange-500 transition-colors text-center">
                  Request Compliance Audit Packet
                </button>
                <button className="flex-1 py-3 px-4 rounded-full bg-transparent border border-gray-300 dark:border-white/20 text-JBM-charcoal dark:text-white font-extrabold uppercase tracking-widest text-[10px] hover:bg-gray-100 dark:hover:bg-white/10 transition-colors text-center">
                  Verify Credential Authenticity
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HSE, ESG & Fleet Sustainability Blueprint */}
      <section className="py-12 md:py-20 max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          
          {/* HSE Protocols */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-8">
              <HardHat className="w-6 h-6 md:w-8 md:h-8 text-orange-500" />
              <h2 className="text-2xl md:text-4xl font-extrabold uppercase tracking-tighter text-JBM-charcoal dark:text-white">
                Health, Safety & Environment Protocols
              </h2>
            </div>
            
            <div className="flex flex-col gap-6">
              <div className="p-6 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl">
                <h4 className="text-sm font-extrabold uppercase tracking-widest text-JBM-charcoal dark:text-white mb-2">Zero-Harm Driver Policy</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                  Mandatory 8-hour driving caps, dual-driver long-haul staging on Northern Corridor routes, and fatigue-detecting cabin telematics.
                </p>
              </div>
              <div className="p-6 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl">
                <h4 className="text-sm font-extrabold uppercase tracking-widest text-JBM-charcoal dark:text-white mb-2">Certified Cargo Handling</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                  All terminal personnel are certified in heavy-lift rigging, container securing, and dangerous goods (IATA/IMDG HAZMAT) handling.
                </p>
              </div>
              <div className="p-6 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl">
                <h4 className="text-sm font-extrabold uppercase tracking-widest text-JBM-charcoal dark:text-white mb-2">Emergency Response Readiness</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                  Dedicated 24/7 route patrol units and hazardous material containment teams stationed at key corridor nodes (Mombasa, Nairobi, Nakuru, Eldoret, Malaba).
                </p>
              </div>
            </div>
          </div>

          {/* ESG Commitments */}
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-8">
              <Leaf className="w-6 h-6 md:w-8 md:h-8 text-orange-500" />
              <h2 className="text-2xl md:text-4xl font-extrabold uppercase tracking-tighter text-JBM-charcoal dark:text-white">
                ESG & Sustainability Commitments
              </h2>
            </div>
            
            <div className="flex flex-col gap-6">
              <div className="p-6 bg-orange-500/5 border border-orange-500/20 rounded-2xl">
                <h4 className="text-sm font-extrabold uppercase tracking-widest text-JBM-charcoal dark:text-white mb-2">Low-Emission Fleet Standard</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                  100% of long-haul prime movers meet Euro 4/5/6 emission standards to minimize environmental impact across transit operations.
                </p>
              </div>
              <div className="p-6 bg-orange-500/5 border border-orange-500/20 rounded-2xl">
                <h4 className="text-sm font-extrabold uppercase tracking-widest text-JBM-charcoal dark:text-white mb-2">Carbon Footprint Telematics</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                  Automated CO₂ emissions tracking per ton-kilometer (gCO₂/t-km), generating verifiable ESG carbon reports for corporate procurement clients.
                </p>
              </div>
              <div className="p-6 bg-orange-500/5 border border-orange-500/20 rounded-2xl">
                <h4 className="text-sm font-extrabold uppercase tracking-widest text-JBM-charcoal dark:text-white mb-2">Waste & Fuel Management</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                  Closed-loop lubricant recycling, eco-driving telematics scoring, and route-optimization software to reduce idle fuel consumption.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Interactive Enterprise Audit Readiness Utility */}
      <section className="py-12 md:py-24 max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 w-full">
        <div className="bg-JBM-charcoal dark:bg-black border border-gray-200 dark:border-white/10 rounded-[2rem] p-6 md:p-12 overflow-hidden relative shadow-2xl">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-20">
            
            {/* Form Left Side */}
            <div className="lg:w-1/2 flex flex-col gap-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-6 h-px bg-orange-500"></div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-orange-500">Corporate Tender Evaluations</span>
                </div>
                <h3 className="text-2xl md:text-4xl font-extrabold uppercase tracking-tighter text-white leading-tight mb-2">
                  Enterprise Audit Readiness Utility
                </h3>
                <p className="text-sm text-gray-400 font-medium">
                  Simplify your procurement process. Select your risk profile to instantly generate mapped compliance credentials, insurance limits, and downloadable RFP packets.
                </p>
              </div>

              <div className="flex flex-col gap-6 bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
                
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Cargo Value Range (USD)</label>
                  <select 
                    className="w-full bg-black/50 border border-white/20 rounded-xl py-3 px-4 text-xs font-bold text-white focus:border-orange-500 outline-none transition-colors appearance-none"
                    value={cargoValue}
                    onChange={(e) => setCargoValue(e.target.value)}
                  >
                    <option>&lt; $50k</option>
                    <option>$50k - $500k</option>
                    <option>$500k - $2M</option>
                    <option>$2M+</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Cargo Classification</label>
                  <select 
                    className="w-full bg-black/50 border border-white/20 rounded-xl py-3 px-4 text-xs font-bold text-white focus:border-orange-500 outline-none transition-colors appearance-none"
                    value={cargoClass}
                    onChange={(e) => setCargoClass(e.target.value)}
                  >
                    <option>General Dry</option>
                    <option>Cold-Chain Pharma</option>
                    <option>HAZMAT</option>
                    <option>OOG Heavy Infrastructure</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Operational Scope</label>
                  <select 
                    className="w-full bg-black/50 border border-white/20 rounded-xl py-3 px-4 text-xs font-bold text-white focus:border-orange-500 outline-none transition-colors appearance-none"
                    value={auditScope}
                    onChange={(e) => setAuditScope(e.target.value)}
                  >
                    <option>Domestic Kenya</option>
                    <option>EAC Regional</option>
                    <option>Trans-African SADC</option>
                    <option>Global Import/Export</option>
                  </select>
                </div>

                <button 
                  onClick={handleGenerate}
                  className="w-full mt-2 py-4 rounded-xl bg-orange-500 text-white font-extrabold uppercase tracking-widest text-[10px] sm:text-xs hover:bg-orange-600 transition-colors flex items-center justify-center gap-2"
                >
                  <Activity className="w-4 h-4" /> Generate Audit Map
                </button>
              </div>
            </div>

            {/* Results Right Side */}
            <div className="lg:w-1/2 flex flex-col justify-center">
              <AnimatePresence mode="wait">
                {isGenerated ? (
                  <motion.div 
                    key="results"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/10 rounded-3xl p-6 md:p-10 shadow-2xl"
                  >
                    <div className="flex justify-between items-center border-b border-gray-100 dark:border-white/10 pb-6 mb-6">
                      <div className="flex flex-col">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-1">RFP Compliance Match</span>
                        <span className="text-xs font-mono font-bold text-JBM-charcoal dark:text-white">Profile: {cargoClass.substring(0, 8).toUpperCase()}-{cargoValue.replace(/[^0-9]/g, '')}</span>
                      </div>
                      <div className="flex items-center gap-2 text-green-500 bg-green-500/10 px-3 py-1 rounded-full">
                        <CheckCircle2 className="w-3 h-3" />
                        <span className="text-[9px] font-bold uppercase tracking-widest">100% Compliant</span>
                      </div>
                    </div>

                    <div className="flex flex-col gap-6">
                      <div>
                        <span className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">Required Credentials</span>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-2 py-1 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-[10px] font-bold uppercase text-JBM-charcoal dark:text-white rounded">KRA AEO Cert</span>
                          {auditScope.includes("EAC") && <span className="px-2 py-1 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-[10px] font-bold uppercase text-JBM-charcoal dark:text-white rounded">EAC Customs MRA</span>}
                          {cargoClass.includes("Pharma") && <span className="px-2 py-1 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-[10px] font-bold uppercase text-JBM-charcoal dark:text-white rounded">GDP Compliance</span>}
                          {cargoClass.includes("HAZMAT") && <span className="px-2 py-1 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-[10px] font-bold uppercase text-JBM-charcoal dark:text-white rounded">IMDG / IATA HAZMAT</span>}
                        </div>
                      </div>

                      <div>
                        <span className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">Insurance Limits Mapped</span>
                        <span className="text-sm font-extrabold text-JBM-charcoal dark:text-white">
                          {cargoValue === "$2M+" ? "$10M+ USD Premium GIT Cover" : "$2M USD Standard GIT Cover"}
                        </span>
                      </div>

                      <div>
                        <span className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">HSE Protocols Mapped</span>
                        <span className="text-sm font-bold text-JBM-charcoal dark:text-white flex items-center gap-2">
                          <Shield className="w-4 h-4 text-orange-500" /> Armed Escort & 24/7 Patrol Dispatch
                        </span>
                      </div>
                    </div>

                    <button className="w-full mt-8 py-4 rounded-xl bg-JBM-charcoal dark:bg-white text-white dark:text-black font-extrabold uppercase tracking-widest text-[10px] sm:text-xs hover:bg-orange-500 dark:hover:bg-orange-500 transition-colors flex items-center justify-center gap-2 shadow-lg">
                      <Download className="w-4 h-4" /> Download RFP Risk Packet
                    </button>
                    
                    <div className="mt-4 flex flex-wrap justify-center gap-3 text-[9px] font-bold uppercase tracking-widest text-gray-400">
                      <span>📄 KRA Validation Letter</span>
                      <span>📄 Policy Schedules</span>
                      <span>📄 Driver Safety Manuals</span>
                    </div>

                  </motion.div>
                ) : (
                  <motion.div 
                    key="placeholder"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="h-full min-h-[300px] border-2 border-dashed border-white/20 rounded-3xl flex flex-col items-center justify-center text-center p-8"
                  >
                    <FileSpreadsheet className="w-12 h-12 text-white/20 mb-4" />
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-500 max-w-xs">
                      Configure your risk profile to generate a customized compliance packet.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>
        </div>
      </section>

    </PageLayout>
  );
}
