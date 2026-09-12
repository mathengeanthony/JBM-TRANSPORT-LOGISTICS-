#!/bin/bash
cat << 'INNER_EOF' > replacement.txt
            <div className="relative w-full h-[550px] bg-gray-200 dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/10 rounded-[2rem] p-2 shadow-2xl overflow-hidden ring-1 ring-gray-200 dark:ring-white/5 transition-colors">
              <div className="bg-white dark:bg-[#050505] w-full h-full rounded-[1.8rem] flex flex-row relative overflow-hidden transition-colors border border-gray-100 dark:border-white/5">
                
                {/* Sidebar */}
                <div className="hidden sm:flex w-16 bg-gray-50 dark:bg-[#0a0a0a] border-r border-gray-200 dark:border-white/5 flex-col items-center py-6 gap-8 z-10 shrink-0">
                  <div className="w-8 h-8 rounded bg-orange-500 flex items-center justify-center font-bold text-black text-xs">JBM</div>
                  <div className="flex flex-col gap-6 text-gray-400 dark:text-gray-500">
                    <i className="fa-solid fa-border-all hover:text-orange-500 cursor-pointer text-orange-500"></i>
                    <i className="fa-solid fa-truck-fast hover:text-orange-500 cursor-pointer"></i>
                    <i className="fa-solid fa-warehouse hover:text-orange-500 cursor-pointer"></i>
                    <i className="fa-solid fa-file-invoice-dollar hover:text-orange-500 cursor-pointer"></i>
                    <i className="fa-solid fa-chart-pie hover:text-orange-500 cursor-pointer"></i>
                  </div>
                  <div className="mt-auto">
                    <i className="fa-solid fa-gear text-gray-400 dark:text-gray-500 hover:text-orange-500 cursor-pointer"></i>
                  </div>
                </div>

                {/* Main Area */}
                <div className="flex-1 flex flex-col overflow-hidden">
                  {/* Header */}
                  <div className="h-14 border-b border-gray-200 dark:border-white/5 flex items-center justify-between px-4 md:px-6 bg-white/50 dark:bg-[#050505]/50 backdrop-blur shrink-0">
                    <div className="text-[9px] md:text-[10px] font-mono text-gray-500 tracking-widest font-bold">CLIENT_PORTAL // KILINDINI_CORP</div>
                    <div className="flex items-center gap-4">
                      <div className="hidden md:flex items-center gap-2 bg-gray-100 dark:bg-white/5 px-3 py-1.5 rounded-full border border-gray-200 dark:border-white/10">
                        <i className="fa-solid fa-search text-[10px] text-gray-400"></i>
                        <span className="text-[10px] text-gray-400">Search BL, Container...</span>
                      </div>
                      <div className="relative">
                        <i className="fa-solid fa-bell text-gray-500 hover:text-orange-500 cursor-pointer text-xs"></i>
                        <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full border border-white dark:border-[#050505]"></span>
                      </div>
                      <div className="w-6 h-6 rounded-full bg-gray-200 dark:bg-white/10 flex items-center justify-center border border-gray-300 dark:border-white/20">
                        <i className="fa-solid fa-user text-[10px] text-gray-600 dark:text-gray-300"></i>
                      </div>
                    </div>
                  </div>

                  {/* Dashboard Content */}
                  <div className="flex-1 overflow-y-auto p-4 md:p-6 flex flex-col gap-4">
                    
                    {/* KPI Row */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 shrink-0">
                      {[
                        { label: "Active Shipments", value: "24", icon: "fa-truck-fast", trend: "+3 this week", color: "text-blue-500" },
                        { label: "Customs Cleared", value: "18", icon: "fa-file-circle-check", trend: "Last 24hrs", color: "text-green-500" },
                        { label: "Warehouse Util.", value: "86%", icon: "fa-cubes-stacked", trend: "Nairobi Hub", color: "text-orange-500" },
                        { label: "Pending Invoices", value: "$14.2k", icon: "fa-file-invoice", trend: "2 Due Today", color: "text-red-500" },
                      ].map((kpi, i) => (
                        <div key={i} className="bg-gray-50 dark:bg-[#0a0a0a] p-3 md:p-4 rounded-xl border border-gray-200 dark:border-white/5 flex flex-col justify-between">
                          <div className="flex justify-between items-start mb-2">
                            <span className="text-[9px] font-bold uppercase tracking-wider text-gray-500 line-clamp-1">{kpi.label}</span>
                            <i className={`fa-solid ${kpi.icon} ${kpi.color} text-[10px] hidden sm:block`}></i>
                          </div>
                          <div className="text-lg md:text-xl font-extrabold text-JBM-charcoal dark:text-white">{kpi.value}</div>
                          <div className="text-[8px] text-gray-400 mt-1">{kpi.trend}</div>
                        </div>
                      ))}
                    </div>

                    {/* Middle Row */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 min-h-[220px] shrink-0">
                      
                      {/* Live Tracking Map/Timeline */}
                      <div className="md:col-span-2 bg-gray-50 dark:bg-[#0a0a0a] rounded-xl border border-gray-200 dark:border-white/5 p-4 flex flex-col relative overflow-hidden">
                        <div className="flex justify-between items-center mb-4 relative z-10">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-JBM-charcoal dark:text-white">Active Transit Timeline</span>
                          <span className="text-[8px] bg-orange-500/10 text-orange-500 px-2 py-1 rounded-full font-bold">BL-88492001</span>
                        </div>
                        
                        {/* Minimalist Timeline */}
                        <div className="flex-1 flex items-center px-4 relative z-10 mt-2">
                           <div className="w-full flex justify-between items-center relative">
                             {/* Connecting Line */}
                             <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 dark:bg-white/10 -translate-y-1/2 z-0"></div>
                             <div className="absolute top-1/2 left-0 w-[60%] h-0.5 bg-green-500 -translate-y-1/2 z-0 shadow-[0_0_8px_rgba(34,197,94,0.5)]"></div>
                             
                             {/* Points */}
                             <div className="relative z-10 flex flex-col items-center gap-2">
                               <div className="w-3 h-3 rounded-full bg-green-500 border-2 border-white dark:border-[#0a0a0a]"></div>
                               <div className="text-[8px] font-bold text-gray-500 text-center">MOMBASA<br/>PORT</div>
                             </div>
                             <div className="relative z-10 flex flex-col items-center gap-2">
                               <div className="w-3 h-3 rounded-full bg-green-500 border-2 border-white dark:border-[#0a0a0a]"></div>
                               <div className="text-[8px] font-bold text-gray-500 text-center">KRA<br/>CUSTOMS</div>
                             </div>
                             <div className="relative z-10 flex flex-col items-center gap-2">
                               <div className="w-4 h-4 rounded-full bg-orange-500 border-2 border-white dark:border-[#0a0a0a] flex items-center justify-center animate-pulse shadow-[0_0_10px_rgba(249,115,22,0.4)]">
                                 <i className="fa-solid fa-truck text-[7px] text-white"></i>
                               </div>
                               <div className="text-[8px] font-bold text-orange-500 text-center">IN TRANSIT<br/>MTITO ANDEI</div>
                             </div>
                             <div className="relative z-10 flex flex-col items-center gap-2 opacity-40">
                               <div className="w-3 h-3 rounded-full bg-gray-300 dark:bg-gray-600 border-2 border-white dark:border-[#0a0a0a]"></div>
                               <div className="text-[8px] font-bold text-gray-500 text-center">NAIROBI<br/>ICD</div>
                             </div>
                           </div>
                        </div>

                        {/* Faint map background effect */}
                        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at center, #000 1px, transparent 1px)", backgroundSize: "10px 10px" }}></div>
                      </div>

                      {/* Docs / Compliance */}
                      <div className="bg-gray-50 dark:bg-[#0a0a0a] rounded-xl border border-gray-200 dark:border-white/5 p-4 flex flex-col">
                        <div className="flex justify-between items-center mb-4">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-JBM-charcoal dark:text-white">Recent Documents</span>
                        </div>
                        <div className="flex flex-col gap-2 flex-1">
                          {[
                            { name: "Invoice_v2.pdf", type: "INV", status: "Verified", color: "text-green-500", bg: "bg-green-500/10" },
                            { name: "Bill_of_Lading.pdf", type: "BOL", status: "Action Required", color: "text-orange-500", bg: "bg-orange-500/10" },
                            { name: "Phyto_Cert.pdf", type: "CRT", status: "Verified", color: "text-green-500", bg: "bg-green-500/10" },
                            { name: "Port_Clear.pdf", type: "CLR", status: "Pending", color: "text-gray-500", bg: "bg-gray-500/10" }
                          ].map((doc, i) => (
                            <div key={i} className="flex items-center justify-between p-2 rounded-lg bg-white dark:bg-[#111] border border-gray-100 dark:border-white/5">
                              <div className="flex items-center gap-2 overflow-hidden">
                                <div className={`text-[7px] font-bold ${doc.color} ${doc.bg} px-1.5 py-0.5 rounded`}>{doc.type}</div>
                                <span className="text-[9px] text-gray-600 dark:text-gray-300 truncate max-w-[100px]">{doc.name}</span>
                              </div>
                              <i className="fa-solid fa-download text-[9px] text-gray-400 hover:text-orange-500 cursor-pointer shrink-0"></i>
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>

                  </div>
                </div>
              </div>
            </div>
INNER_EOF

# Replace lines 151 to 273 in src/components/SectionProperties.tsx
sed -i '151,273c\
'"$(cat replacement.txt | sed 's/$/\\/')" src/components/SectionProperties.tsx

# Fix the trailing backslash on the last line that sed 'c' command leaves sometimes
sed -i 's/\\$//' src/components/SectionProperties.tsx

