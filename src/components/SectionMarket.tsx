import { useState } from "react";

export function SectionMarket({ onMenuClick }: { onMenuClick: () => void }) {
  return (
    <div
      className=" bg-[#f8f8f8] dark:bg-JBM-black transition-colors duration-500 overflow-x-hidden flex flex-col"
      id="section-market"
    >
      <section className="w-full py-2 md:py-4 px-4 md:px-12 max-w-[1600px] mx-auto flex-grow flex flex-col relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-30"></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8 items-start relative z-10 mt-2">
          <div className="lg:col-span-4 flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <i className="fa-solid fa-layer-group text-orange-500 animate-pulse"></i>
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-gray-500 dark:text-gray-400 font-mono transition-colors">
                JBM Intelligence Bureau
              </span>
            </div>

            <div className="flex items-end gap-4 mb-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase tracking-tighter leading-[0.9] text-JBM-charcoal dark:text-white transition-colors">
                Global Trade <br />{" "}
                <span className="text-gray-500 dark:text-gray-600">Alpha</span>
              </h2>
              <div className="relative w-16 h-16 md:w-20 md:h-20 flex-shrink-0 mb-1">
                <svg
                  className="absolute w-full h-full animate-spin-slow text-orange-500"
                  viewBox="0 0 100 100"
                >
                  <path
                    id="curveIntel"
                    d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    fill="transparent"
                  />
                  <text
                    fontSize="11"
                    fontWeight="bold"
                    fill="currentColor"
                    letterSpacing="2"
                  >
                    <textPath href="#curveIntel">
                      • INTELLIGENCE • LIVE DATA •
                    </textPath>
                  </text>
                </svg>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-JBM-charcoal dark:text-white transition-colors">
                  <i className="fa-solid fa-bolt text-lg"></i>
                </div>
              </div>
            </div>

            <p className="text-xs md:text-[13px] text-gray-600 dark:text-gray-400 font-medium leading-relaxed border-l-2 border-orange-500 pl-3 md:pl-4 mb-5 max-w-sm transition-colors">
              Decode the signals behind the noise. We provide institutional-grade
              intelligence on logistics trends, trans-African cross-border legalities,
              supply chain technology, and global trade hacks.
            </p>

            <div className="flex mb-6">
              <a href="#" className="bg-JBM-charcoal dark:bg-white text-white dark:text-black px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-orange-500 hover:text-black transition-colors flex items-center gap-2 shadow-lg">
                 Trade Intelligence <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>

            <div className="flex flex-wrap gap-2">
              <button className="filter-pill-intel active px-4 py-2 rounded-full border border-orange-500 text-[10px] font-bold uppercase tracking-widest">
                All Intel
              </button>
              <button className="filter-pill-intel px-4 py-2 rounded-full border border-JBM-charcoal/30 dark:border-white/20 text-gray-500 text-[10px] font-bold uppercase tracking-widest">
                Global Macro
              </button>
              <button className="filter-pill-intel px-4 py-2 rounded-full border border-JBM-charcoal/30 dark:border-white/20 text-gray-500 text-[10px] font-bold uppercase tracking-widest">
                Trans-Africa
              </button>
              <button className="filter-pill-intel px-4 py-2 rounded-full border border-JBM-charcoal/30 dark:border-white/20 text-gray-500 text-[10px] font-bold uppercase tracking-widest">
                Legal & Tech
              </button>
            </div>
          </div>

          <div className="lg:col-span-8 w-full flex flex-col justify-between h-full pl-0 md:pl-8">
            <div className="hidden lg:block w-full flex-grow relative rounded-[2rem] overflow-hidden border border-gray-200 dark:border-white/10 shadow-2xl group mb-4 min-h-[250px]">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage:
                    "url('/images/ship.jpg')",
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <p className="text-white text-xs font-bold uppercase tracking-widest mb-1">
                  Global Trade Pulse
                </p>
                <p className="text-white text-xl font-serif italic">
                  AfCFTA Corridor Analysis
                </p>
              </div>
            </div>

            <div className="w-full overflow-hidden ticker-mask bg-gray-100 dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/10 rounded-xl h-16 flex items-center relative shadow-2xl transition-colors">
              <div className="flex items-center gap-4 absolute left-4 z-20 bg-gray-100 dark:bg-[#0a0a0a] pr-4 border-r border-gray-200 dark:border-white/10 h-full shadow-[10px_0_20px_rgba(0,0,0,0.05)] dark:shadow-[10px_0_20px_#0a0a0a] transition-colors">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-JBM-charcoal dark:text-white transition-colors">
                  Live Index
                </span>
              </div>

              <div className="flex whitespace-nowrap animate-scroll-ticker pl-32 items-center w-max">
                {[1, 2].map((idx) => (
                  <div
                    key={idx}
                    className="flex gap-8 text-[10px] font-mono text-gray-600 dark:text-gray-400 px-8"
                  >
                    <span className="flex items-center gap-2">
                      <strong className="text-JBM-charcoal dark:text-white">
                        GLOBAL FREIGHT
                      </strong>{" "}
                      <span className="text-green-500">▲ +2.4%</span>
                    </span>
                    <span className="flex items-center gap-2">
                      <strong className="text-JBM-charcoal dark:text-white">
                        MOMBASA WAIT
                      </strong>{" "}
                      <span className="text-green-500">▼ -12hr</span>
                    </span>
                    <span className="flex items-center gap-2">
                      <strong className="text-JBM-charcoal dark:text-white">
                        FUEL SURCHARGE
                      </strong>{" "}
                      <span className="text-red-500">▲ +1.2%</span>
                    </span>
                    <span className="flex items-center gap-2">
                      <strong className="text-JBM-charcoal dark:text-white">
                        CUSTOMS CLEAR
                      </strong>{" "}
                      <span className="text-green-500">▼ -4hr</span>
                    </span>
                    <span className="flex items-center gap-2">
                      <strong className="text-JBM-charcoal dark:text-white">
                        SUEZ VOLUMES
                      </strong>{" "}
                      <span className="text-orange-500">▼ -15%</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8 relative z-10">
          <div className="lg:col-span-7 flex h-full">
            <a
              href="#"
              className="relative flex flex-col justify-end w-full min-h-[380px] md:min-h-[400px] rounded-[2rem] overflow-hidden group article-card border border-gray-200 dark:border-white/10 bg-gray-100 dark:bg-[#0a0a0a] transition-colors p-6 md:p-10"
            >
              <div
                className="article-img absolute inset-0 bg-cover bg-center opacity-80"
                style={{
                  backgroundImage:
                    "url('/images/urban.jpg')",
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent"></div>

              <div className="absolute top-6 left-6 md:top-8 md:left-8 flex gap-3 z-10">
                <span className="bg-orange-500 text-black px-3 py-1 rounded text-[9px] font-bold uppercase tracking-widest font-mono border border-orange-500">
                  Analysis
                </span>
                <span className="backdrop-blur-md bg-white/10 text-white px-3 py-1 rounded text-[9px] font-bold uppercase tracking-widest font-mono border border-white/20">
                  <i className="fa-solid fa-clock mr-1"></i> 5 Min Read
                </span>
              </div>

              <div className="relative z-10 mt-auto">
                <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-3 group-hover:text-gray-200 transition-colors">
                  The Automation of <br className="hidden md:block" /> Port Terminals
                </h3>
                <div className="border-l-2 border-orange-500 pl-4 mb-5 backdrop-blur-sm">
                  <p className="text-xs md:text-sm text-gray-300 max-w-lg leading-relaxed font-medium">
                    How new terminal technologies are cutting vessel turnaround times by 40%. A deep dive into global port automation and what it means for East African supply chains.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <button className="bg-white text-black px-5 py-2.5 rounded-full text-[9px] md:text-[10px] font-bold uppercase tracking-widest hover:bg-orange-500 transition-colors flex items-center gap-2">
                    Unlock Dossier <i className="fa-solid fa-lock-open"></i>
                  </button>
                  <div className="flex items-center gap-2 text-[9px] font-mono text-gray-400 uppercase mt-1 sm:mt-0">
                    <span>Author: Dr. K. Mwangi</span>
                    <img
                      src="https://i.pravatar.cc/100?u=analyst"
                      alt=""
                      className="w-5 h-5 rounded-full grayscale border border-white/20"
                    />
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-3 h-full">
            <div className="flex justify-between items-end pb-2 border-b border-gray-300 dark:border-white/10 px-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 dark:text-gray-500 transition-colors">
                Recent Briefings
              </span>
              <a
                href="#"
                className="text-[9px] font-bold uppercase text-orange-500 hover:text-JBM-charcoal hover:dark:text-white transition-colors"
              >
                View Archive -&gt;
              </a>
            </div>

            <a
              href="#"
              className="group flex flex-col justify-center flex-1 min-h-[160px] bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/10 rounded-2xl p-6 hover:border-orange-500/50 transition-all hover:bg-gray-50 dark:hover:bg-[#111] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                <i className="fa-solid fa-arrow-right -rotate-45 text-orange-500 text-xl"></i>
              </div>
              <div className="flex items-center gap-3 mb-3">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                <span className="text-[9px] font-mono font-bold uppercase text-blue-400">
                  Legal & Customs
                </span>
              </div>
              <h4 className="text-xl font-bold text-JBM-charcoal dark:text-white mb-2 leading-tight group-hover:text-orange-500 transition-colors">
                2026 AfCFTA Cross-Border Regulations: What Shippers Need to Know
              </h4>
              <p className="text-[10px] text-gray-500 dark:text-gray-500 font-mono">
                24 Hours Ago • Compliance Dept.
              </p>
            </a>

            <a
              href="#"
              className="group flex flex-col justify-center flex-1 min-h-[160px] bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/10 rounded-2xl p-6 hover:border-orange-500/50 transition-all hover:bg-gray-50 dark:hover:bg-[#111] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                <i className="fa-solid fa-arrow-right -rotate-45 text-orange-500 text-xl"></i>
              </div>
              <div className="flex items-center gap-3 mb-3">
                <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                <span className="text-[9px] font-mono font-bold uppercase text-purple-400">
                  Supply Chain Tech
                </span>
              </div>
              <h4 className="text-xl font-bold text-JBM-charcoal dark:text-white mb-2 leading-tight group-hover:text-orange-500 transition-colors">
                AI in Route Optimization: Beating the Nairobi-Kampala Traffic
              </h4>
              <p className="text-[10px] text-gray-500 dark:text-gray-500 font-mono">
                2 Days Ago • Tech Logistics Team
              </p>
            </a>

            <a
              href="#"
              className="group flex flex-col justify-center flex-1 min-h-[160px] bg-white dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/10 rounded-2xl p-6 hover:border-orange-500/50 transition-all hover:bg-gray-50 dark:hover:bg-[#111] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                <i className="fa-solid fa-arrow-right -rotate-45 text-orange-500 text-xl"></i>
              </div>
              <div className="flex items-center gap-3 mb-3">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
                <span className="text-[9px] font-mono font-bold uppercase text-green-400">
                  Hacks & Finance
                </span>
              </div>
              <h4 className="text-xl font-bold text-JBM-charcoal dark:text-white mb-2 leading-tight group-hover:text-orange-500 transition-colors">
                Tariff Hacks & Hedging: Navigating the KES/USD Shift in Freight
              </h4>
              <p className="text-[10px] text-gray-500 dark:text-gray-500 font-mono">
                1 Week Ago • Strategy Desk
              </p>
            </a>
          </div>
        </div>

        <div className="w-full bg-gray-100 dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/10 rounded-3xl md:rounded-[2.5rem] p-8 md:p-10 relative overflow-hidden group shadow-2xl transition-colors">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/5 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center gap-3 justify-center md:justify-start mb-4">
                <i className="fa-solid fa-shield-halved text-orange-500 animate-pulse-slow"></i>
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-JBM-charcoal dark:text-white transition-colors">
                  Restricted Access
                </span>
              </div>
              <h3 className="text-4xl md:text-5xl font-extrabold uppercase tracking-tighter text-JBM-charcoal dark:text-white mb-4 transition-colors">
                Unlock The <span className="text-gray-500 dark:text-gray-600">Alpha Report</span>
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 max-w-md leading-relaxed mx-auto md:mx-0 font-mono transition-colors">
                Join 12,000+ logistics professionals. Get the{" "}
                <strong className="text-JBM-charcoal dark:text-white">
                  Q1 2026 Global Trade Analysis
                </strong>{" "}
                and exclusive cross-border transit hacks delivered to your secure inbox.
              </p>
            </div>

            <div className="w-full md:w-auto">
              <form
                className="flex flex-col gap-4"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="flex flex-col md:flex-row gap-0 bg-white dark:bg-black border border-gray-300 dark:border-white/20 rounded-xl overflow-hidden group-focus-within:border-orange-500 transition-colors w-full md:w-[450px]">
                  <div className="bg-gray-100 dark:bg-[#1a1a1a] px-4 py-4 flex items-center border-r border-gray-200 dark:border-white/10 transition-colors">
                    <span className="text-orange-500 text-xs font-mono font-bold">
                      &gt;_
                    </span>
                  </div>
                  <input
                    type="email"
                    placeholder="ENTER_EMAIL_ADDRESS"
                    className="cmd-input w-full bg-white dark:bg-black text-JBM-charcoal dark:text-white text-xs font-mono px-4 py-4 placeholder-gray-400 dark:placeholder-gray-700 uppercase blinking-cursor border-none transition-colors outline-none"
                  />
                  <button className="bg-JBM-charcoal dark:bg-white text-white dark:text-black px-8 py-4 text-[10px] font-bold uppercase tracking-widest hover:bg-orange-500 hover:text-black transition-colors border-l border-gray-200 dark:border-white/10">
                    Execute
                  </button>
                </div>
                <div className="flex items-center gap-4 justify-center md:justify-start opacity-60">
                  <div className="flex items-center gap-2">
                    <i className="fa-solid fa-lock text-[10px] text-gray-500"></i>
                    <span className="text-[8px] uppercase tracking-widest text-gray-500">
                      SSL Encrypted
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="fa-solid fa-ban text-[10px] text-gray-500"></i>
                    <span className="text-[8px] uppercase tracking-widest text-gray-500">
                      No Spam
                    </span>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <span className="absolute -bottom-6 -left-6 text-[12rem] font-bold text-JBM-charcoal dark:text-white opacity-[0.03] dark:opacity-[0.01] pointer-events-none select-none">
            CONFIDENTIAL
          </span>
        </div>
      </section>
    </div>
  );
}
