import { useState } from "react";
import { PageLayout } from "../components/PageLayout";
import { 
  BookOpen, Globe, Map as MapIcon, Globe2, 
  Search, CheckCircle2, FileText, Download, 
  Mail, Settings, ShieldAlert, BookMarked
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { TinyMarquee } from "../components/TinyMarquee";

type ScopeType = "kenya" | "eac" | "trans_african" | "global";
type CategoryType = "ALL RESOURCES" | "LEGAL & CUSTOMS REGULATORY" | "LOGISTICS TECH & AUTOMATION" | "OPERATIONAL HOW-TO GUIDES" | "AfCFTA & MARKET ADVISORY" | "POLICY WHITEPAPERS";

const SCOPES = [
  { id: "kenya", label: "🇰🇪 KENYA TRADE", icon: BookOpen },
  { id: "eac", label: "🌍 EAC REGIONAL", icon: Globe },
  { id: "trans_african", label: "🛣️ TRANS-AFRICAN", icon: MapIcon },
  { id: "global", label: "🌐 GLOBAL MARITIME & AIR", icon: Globe2 },
] as const;

const CATEGORIES: CategoryType[] = [
  "ALL RESOURCES", 
  "LEGAL & CUSTOMS REGULATORY", 
  "LOGISTICS TECH & AUTOMATION", 
  "OPERATIONAL HOW-TO GUIDES", 
  "AfCFTA & MARKET ADVISORY", 
  "POLICY WHITEPAPERS"
];

const METRICS = [
  { value: "WEEKLY", label: "CUSTOMS & TARIFF REGULATORY BRIEFINGS" },
  { value: "100+", label: "OPERATIONAL HOW-TO GUIDES & CHECKLISTS" },
  { value: "AfCFTA READY", label: "TRADE POLICY & RULES OF ORIGIN ANALYSIS" },
  { value: "REAL-TIME", label: "CORRIDOR & BORDER DELAY ALERTS" }
];

const RESOURCES = [
  {
    title: "KRA iCMS Tariff Adjustments & Duty Exemption Guide",
    category: "LEGAL & CUSTOMS REGULATORY",
    scope: "global",
    region: "Kenya Domestic & Global Imports",
    summary: "Comprehensive breakdown of the latest KRA duty adjustments, IDF/RDL rate applications, and step-by-step tax exemption filing for EPZ/NGO shipments.",
    format: "Policy Briefing",
    readTime: "⏱️ 6 Min Read / PDF"
  },
  {
    title: "Navigating AfCFTA Protocol Phase II: Rules of Origin Simplified",
    category: "AfCFTA & MARKET ADVISORY",
    scope: "trans_african",
    region: "Trans-African Corridors",
    summary: "How regional manufacturers can leverage AfCFTA preferential tariff treatments across East, West, and Southern Africa trade corridors.",
    format: "Trade Guide",
    readTime: "⏱️ 10 Min Read / PDF"
  },
  {
    title: "Step-by-Step Guide: Clearing GDP Pharma at JKIA Ramp",
    category: "OPERATIONAL HOW-TO GUIDES",
    scope: "kenya",
    region: "Kenya Air Freight Node",
    summary: "Step-by-step checklist for temperature-sensitive pharmaceutical imports, covering Pharmacy and Poisons Board (PPB) releases and cold-bay handovers.",
    format: "Checklist / How-To",
    readTime: "⏱️ 4 Min Read + Template"
  },
  {
    title: "AI Route Telematics & Smart Locks on the Northern Corridor",
    category: "LOGISTICS TECH & AUTOMATION",
    scope: "eac",
    region: "EAC Regional (KE, UG, RW)",
    summary: "How IoT geofencing, electronic cargo tracking systems (RECTS), and smart locks reduce transit friction and transit insurance premiums.",
    format: "Tech Whitepaper",
    readTime: "⏱️ 8 Min Read / Technical"
  },
  {
    title: "Mastering OSBP Fast-Tracking: Malaba & Namanga Border Playbook",
    category: "OPERATIONAL HOW-TO GUIDES",
    scope: "eac",
    region: "EAC Cross-Border",
    summary: "Practical operational steps to reduce border dwell times to under 45 minutes using Single Customs Territory (SCT) pre-declarations.",
    format: "Field Manual",
    readTime: "⏱️ 5 Min Read + Flowchart"
  }
];

export function TradeAdvisoryPage() {
  const [activeScope, setActiveScope] = useState<ScopeType>("kenya");
  const [activeCategory, setActiveCategory] = useState<CategoryType>("ALL RESOURCES");
  const [searchQuery, setSearchQuery] = useState("");
  
  const ActiveIcon = SCOPES.find(s => s.id === activeScope)?.icon || BookOpen;

  // Interactive Advisory Tool State
  const [advCargo, setAdvCargo] = useState("Agricultural Exports");
  const [advCorridor, setAdvCorridor] = useState("Mombasa to Kigali");
  const [advOutput, setAdvOutput] = useState("Customs Clearance Checklist");
  const [isGenerated, setIsGenerated] = useState(false);

  const handleGenerate = () => {
    setIsGenerated(false);
    setTimeout(() => setIsGenerated(true), 600);
  };

  const filteredResources = RESOURCES.filter(res => {
    const matchesScope = activeScope === "global" ? true : res.scope === activeScope;
    const matchesCategory = activeCategory === "ALL RESOURCES" || res.category === activeCategory;
    const matchesSearch = res.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          res.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesScope && matchesCategory && matchesSearch;
  });

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="w-full bg-white dark:bg-JBM-black text-JBM-charcoal dark:text-white pt-6 md:pt-10 pb-8 md:pb-12 relative border-b border-gray-200 dark:border-white/10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-orange-500/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 relative z-10">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4 md:mb-6">
              <div className="w-8 h-px bg-orange-500"></div>
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] text-orange-500">Trade Advisory & Knowledge Hub</span>
            </div>
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold uppercase tracking-tighter leading-[0.9] max-w-4xl">
              Trade Intelligence <br />
              <span className="text-gray-400">& Insights Hub</span>
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

          <div className="mt-6 md:mt-8 relative overflow-hidden rounded-2xl -ml-4 sm:-ml-6 md:-ml-8 p-4 sm:p-6 md:p-8 border border-orange-500/10 shadow-xl max-w-4xl group">
            <div className="absolute inset-0 bg-[url('/images/bg_trade_advisory.jpg')] bg-cover bg-center opacity-90 transition-opacity duration-700"></div>
            <div className="absolute inset-0 bg-[#0a0a0a]/40"></div>
            <div className="relative z-10">
              <h2 className="text-lg md:text-2xl font-extrabold uppercase tracking-tight text-orange-500">
                Real-time regulatory & operational updates
              </h2>
              <p className="mt-2 text-[10px] md:text-sm text-white drop-shadow-md leading-snug md:leading-normal font-medium">
                Real-time regulatory updates, supply chain technology briefings, cross-border legal compliance guides, and operational trade playbooks engineered to keep shippers, freight forwarders, and enterprise supply chain directors ahead of African and global market shifts.
              </p>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mt-6 md:mt-8 border-t border-gray-200 dark:border-white/10 pt-4 md:pt-6">
            {METRICS.map((metric, idx) => (
              <div key={idx} className="flex flex-col gap-0 md:gap-1">
                <span className="text-xl md:text-3xl font-extrabold text-orange-500">{metric.value}</span>
                <span className="text-[9px] md:text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 leading-tight md:leading-normal">{metric.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <TinyMarquee />

      {/* Featured Template Spotlight */}
      <section className="py-8 md:py-16 max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 w-full">
        <div className="bg-JBM-charcoal dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/10 rounded-3xl overflow-hidden shadow-2xl relative">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[80px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="p-8 md:p-12 relative z-10 flex flex-col md:flex-row gap-8 md:gap-12">
            <div className="flex-1 flex flex-col justify-center">
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[9px] font-bold uppercase tracking-widest rounded-full">
                  OPERATIONAL HOW-TO GUIDE
                </span>
                <span className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[9px] font-bold uppercase tracking-widest rounded-full">
                  EAC CROSS-BORDER
                </span>
                <span className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[9px] font-bold uppercase tracking-widest rounded-full flex items-center gap-1">
                  <ShieldAlert className="w-3 h-3 text-orange-500" /> VERIFIED BY CUSTOMS LEGAL TEAM
                </span>
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase tracking-tighter text-white leading-[0.9] mb-4">
                The Definitive Cross-Border Shipping Guide: Kenya to Uganda via Malaba OSBP
              </h2>
              
              <div className="flex flex-col gap-1 mb-6">
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Author / Desk</span>
                <span className="text-sm font-bold text-orange-500">Trade & Regulatory Compliance Advisory Group</span>
              </div>
              
              <div className="flex flex-col gap-1 mb-6">
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Target Audience</span>
                <span className="text-sm font-bold text-white">Supply Chain Managers, Import/Export Logistics Leads, Freight Brokers</span>
              </div>
            </div>

            <div className="flex-1 flex flex-col justify-center bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
              <h3 className="text-lg font-extrabold uppercase tracking-tight text-white mb-4 border-b border-white/10 pb-4">
                Executive Summary & Key Takeaways
              </h3>
              <ul className="flex flex-col gap-4 mb-6">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-300"><span className="font-bold text-white">Pre-Arrival Documentation:</span> Required Single Customs Territory (SCT) C-17B declarations and phytosanitary certificates before truck dispatch.</p>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-300"><span className="font-bold text-white">Comesa Yellow Card Integration:</span> How to automate regional third-party motor insurance validation at the border.</p>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-300"><span className="font-bold text-white">Avoiding Common Penalties:</span> Top 5 documentation mistakes that cause customs holds at Malaba and how to resolve them digitally.</p>
                </li>
              </ul>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="flex-1 py-3 px-4 rounded-xl bg-orange-500 text-white font-extrabold uppercase tracking-widest text-[10px] hover:bg-orange-600 transition-colors text-center shadow-[0_0_15px_rgba(249,115,22,0.3)]">
                  Read Full Article
                </button>
                <button className="flex-1 py-3 px-4 rounded-xl bg-transparent border border-white/20 text-white font-extrabold uppercase tracking-widest text-[10px] hover:bg-white/10 transition-colors text-center flex items-center justify-center gap-2">
                  <Download className="w-3 h-3" /> Download Bundle
                </button>
              </div>
              
              <div className="mt-4 flex flex-wrap gap-3 text-[9px] font-bold uppercase tracking-widest text-gray-400">
                <span>📄 Malaba OSBP Clearance Checklist</span>
                <span>📄 EAC SCT Pre-Arrival Template</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resource Filter & Directory */}
      <section className="py-8 md:py-16 max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 w-full">
        
        <div className="flex flex-col gap-4 mb-8 md:mb-12">
          {/* Search Bar */}
          <div className="relative w-full max-w-2xl">
            <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search guides, tariff updates, HS code changes, or transit protocols (e.g., iCMS, OSBP)..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-100 dark:bg-white/5 border border-orange-500/30 rounded-full py-3 pl-10 pr-4 text-xs md:text-sm text-JBM-charcoal dark:text-white focus:outline-none focus:border-orange-500 transition-colors font-medium shadow-[0_0_15px_rgba(249,115,22,0.2)] focus:shadow-[0_0_25px_rgba(249,115,22,0.5)] focus:ring-1 focus:ring-orange-500 transition-all"
            />
          </div>
          
          {/* Filters */}
          <div className="flex flex-wrap items-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 md:px-4 md:py-2 rounded-full text-[8px] md:text-[9px] font-bold uppercase tracking-widest transition-all ${
                  activeCategory === cat 
                    ? "bg-JBM-charcoal text-white dark:bg-white dark:text-black shadow-lg" 
                    : "bg-gray-100 text-gray-500 hover:bg-gray-200 dark:bg-white/5 dark:text-gray-400 dark:hover:bg-white/10 dark:hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Resources Matrix List */}
        <div className="flex flex-col gap-4">
          <div className="hidden lg:grid grid-cols-12 gap-4 px-6 py-3 text-[10px] font-bold uppercase tracking-widest text-gray-500 border-b border-gray-200 dark:border-white/10">
            <div className="col-span-5">Title & Category</div>
            <div className="col-span-2">Scope & Region</div>
            <div className="col-span-3">Executive Summary</div>
            <div className="col-span-2 text-right">Format</div>
          </div>

          <AnimatePresence>
            {filteredResources.map((res, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6 p-6 bg-gray-50 dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/5 rounded-2xl hover:border-orange-500 transition-colors group cursor-pointer items-center"
              >
                <div className="lg:col-span-5 flex flex-col">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-orange-500 mb-1">{res.category}</span>
                  <h4 className="text-base md:text-lg font-extrabold uppercase tracking-tight text-JBM-charcoal dark:text-white group-hover:text-orange-500 transition-colors leading-tight">
                    {res.title}
                  </h4>
                </div>
                <div className="lg:col-span-2 flex flex-col">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 lg:hidden mb-1">Region</span>
                  <span className="text-xs font-bold text-JBM-charcoal dark:text-white">{res.region}</span>
                </div>
                <div className="lg:col-span-3 flex flex-col">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 lg:hidden mb-1">Summary</span>
                  <span className="text-xs text-gray-600 dark:text-gray-400 line-clamp-2 md:line-clamp-3 leading-relaxed">{res.summary}</span>
                </div>
                <div className="lg:col-span-2 flex flex-col lg:items-end lg:text-right">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 lg:hidden mb-1">Format</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-JBM-charcoal dark:text-white mb-1 px-2 py-1 bg-gray-200 dark:bg-white/10 rounded w-max lg:ml-auto">{res.format}</span>
                  <span className="text-[9px] font-bold uppercase tracking-widest text-orange-500">{res.readTime}</span>
                </div>
              </motion.div>
            ))}
            {filteredResources.length === 0 && (
              <div className="py-12 text-center text-gray-500 font-bold uppercase tracking-widest text-xs">
                No resources found matching your criteria.
              </div>
            )}
          </AnimatePresence>
        </div>

      </section>

      {/* Interactive Custom Trade Advisory & Checklist Generator */}
      <section className="py-12 md:py-24 max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 w-full">
        <div className="bg-JBM-charcoal dark:bg-black border border-gray-200 dark:border-white/10 rounded-[2rem] p-6 md:p-12 overflow-hidden relative shadow-2xl">
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 -translate-x-1/2"></div>
          
          <div className="relative z-10 flex flex-col lg:flex-row gap-12 lg:gap-20">
            
            {/* Form Left Side */}
            <div className="lg:w-1/2 flex flex-col gap-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-6 h-px bg-orange-500"></div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-orange-500">Transform Passive Reading</span>
                </div>
                <h3 className="text-2xl md:text-4xl font-extrabold uppercase tracking-tighter text-white leading-tight mb-2">
                  Custom Trade Advisory <br/>& Checklist Generator
                </h3>
                <p className="text-sm text-gray-400 font-medium">
                  Transform passive reading into personalized compliance checklists. Generate a custom operational trade briefing tailored exactly to your shipment profile.
                </p>
              </div>

              <div className="flex flex-col gap-6 bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
                
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Cargo Category</label>
                  <select 
                    className="w-full bg-black/50 border border-white/20 rounded-xl py-3 px-4 text-xs font-bold text-white focus:border-orange-500 outline-none transition-colors appearance-none"
                    value={advCargo}
                    onChange={(e) => setAdvCargo(e.target.value)}
                  >
                    <option>Agricultural Exports</option>
                    <option>Pharmaceuticals</option>
                    <option>Industrial Machinery</option>
                    <option>FMCG</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Origin & Destination Corridor</label>
                  <select 
                    className="w-full bg-black/50 border border-white/20 rounded-xl py-3 px-4 text-xs font-bold text-white focus:border-orange-500 outline-none transition-colors appearance-none"
                    value={advCorridor}
                    onChange={(e) => setAdvCorridor(e.target.value)}
                  >
                    <option>Mombasa to Kigali</option>
                    <option>Nairobi to Kampala</option>
                    <option>Global Air to JKIA</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Required Output</label>
                  <select 
                    className="w-full bg-black/50 border border-white/20 rounded-xl py-3 px-4 text-xs font-bold text-white focus:border-orange-500 outline-none transition-colors appearance-none"
                    value={advOutput}
                    onChange={(e) => setAdvOutput(e.target.value)}
                  >
                    <option>Customs Clearance Checklist</option>
                    <option>Required Regulatory Permits (KEBS, KEPHIS, PPB)</option>
                    <option>Estimated Route Dwell-Time Risks</option>
                  </select>
                </div>

                <button 
                  onClick={handleGenerate}
                  className="w-full mt-2 py-4 rounded-xl bg-orange-500 text-white font-extrabold uppercase tracking-widest text-[10px] sm:text-xs hover:bg-orange-600 transition-colors flex items-center justify-center gap-2"
                >
                  <Settings className="w-4 h-4" /> Compile Custom Briefing
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
                        <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-1">Generated Briefing</span>
                        <span className="text-xs font-mono font-bold text-JBM-charcoal dark:text-white">{advCargo.substring(0, 15).toUpperCase()} / {advCorridor.split(' ')[0].toUpperCase()}</span>
                      </div>
                      <div className="flex items-center gap-2 text-orange-500 bg-orange-500/10 px-3 py-1 rounded-full">
                        <CheckCircle2 className="w-3 h-3" />
                        <span className="text-[9px] font-bold uppercase tracking-widest">Ready</span>
                      </div>
                    </div>

                    <div className="flex flex-col gap-6">
                      <div>
                        <span className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">Step-by-Step Instructions</span>
                        <p className="text-xs font-medium text-JBM-charcoal dark:text-white leading-relaxed">
                          Your tailored {advOutput.toLowerCase()} has been compiled. It includes specific requirements for {advCargo.toLowerCase()} moving via {advCorridor}.
                        </p>
                      </div>

                      <div>
                        <span className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">Mandatory Templates</span>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-2 py-1 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-[10px] font-bold uppercase text-JBM-charcoal dark:text-white rounded">Pre-Arrival Declaration</span>
                          {advCargo.includes("Pharma") && <span className="px-2 py-1 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-[10px] font-bold uppercase text-JBM-charcoal dark:text-white rounded">PPB Release Auth</span>}
                          {advCargo.includes("Agricultural") && <span className="px-2 py-1 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-[10px] font-bold uppercase text-JBM-charcoal dark:text-white rounded">KEPHIS Phyto Cert</span>}
                        </div>
                      </div>

                      <div>
                        <span className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">On-Ground Support</span>
                        <span className="text-sm font-bold text-JBM-charcoal dark:text-white flex items-center gap-2">
                          <BookMarked className="w-4 h-4 text-orange-500" /> Dedicated Border Liaison Contacts Included
                        </span>
                      </div>
                    </div>

                    <button className="w-full mt-8 py-4 rounded-xl bg-JBM-charcoal dark:bg-white text-white dark:text-black font-extrabold uppercase tracking-widest text-[10px] sm:text-xs hover:bg-orange-500 dark:hover:bg-orange-500 transition-colors flex items-center justify-center gap-2 shadow-lg">
                      <Download className="w-4 h-4" /> Download PDF Packet
                    </button>

                  </motion.div>
                ) : (
                  <motion.div 
                    key="placeholder"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="h-full min-h-[300px] border-2 border-dashed border-white/20 rounded-3xl flex flex-col items-center justify-center text-center p-8"
                  >
                    <FileText className="w-12 h-12 text-white/20 mb-4" />
                    <p className="text-xs font-bold uppercase tracking-widest text-gray-500 max-w-xs">
                      Select your operational parameters to generate a custom trade advisory packet.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-12 md:py-24 max-w-[800px] mx-auto px-4 sm:px-6 w-full text-center">
        <span className="inline-block px-4 py-1.5 bg-orange-500/10 border border-orange-500/20 text-orange-500 text-[10px] font-bold uppercase tracking-widest rounded-full mb-6">
          NEVER MISS A TARIFF CHANGE OR BORDER ALERT
        </span>
        <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tighter text-JBM-charcoal dark:text-white mb-6">
          Stay Ahead of African & Global Logistics Regulations
        </h2>
        <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 font-medium mb-10 max-w-2xl mx-auto leading-relaxed">
          Receive concise, weekly intelligence briefings on KRA policy updates, EAC border dwell-time reports, AfCFTA tariff changes, and corridor technology directly in your inbox.
        </p>
        
        <form className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto" onSubmit={(e) => e.preventDefault()}>
          <div className="relative flex-grow">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input 
              type="email" 
              placeholder="Enter Corporate Email Address" 
              required
              className="w-full bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl py-4 pl-12 pr-4 text-sm font-bold text-JBM-charcoal dark:text-white focus:border-orange-500 outline-none transition-colors" 
            />
          </div>
          <button 
            type="submit"
            className="shrink-0 py-4 px-8 rounded-xl bg-JBM-charcoal dark:bg-white text-white dark:text-black font-extrabold uppercase tracking-widest text-[10px] sm:text-xs hover:bg-orange-500 dark:hover:bg-orange-500 transition-colors shadow-lg"
          >
            Subscribe
          </button>
        </form>
      </section>

    </PageLayout>
  );
}
