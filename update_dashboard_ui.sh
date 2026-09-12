#!/bin/bash
cat << 'INNER_EOF' > replacement2.txt
            <div className="relative w-full h-[750px] bg-gray-200 dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/10 rounded-[2rem] p-2 shadow-2xl overflow-hidden ring-1 ring-gray-200 dark:ring-white/5 transition-colors">
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
                    <div className="flex items-center gap-4">
                       <div className="text-[9px] md:text-[10px] font-mono text-gray-500 tracking-widest font-bold hidden sm:block">CLIENT_PORTAL // KILINDINI_CORP</div>
                       {/* Dashboard Sub-tabs */}
                       <div className="hidden lg:flex items-center gap-4 ml-4 px-4 border-l border-gray-200 dark:border-white/10">
                         <span className="text-[10px] font-bold text-orange-500 uppercase cursor-pointer">Overview</span>
                         <span className="text-[10px] font-bold text-gray-400 hover:text-JBM-charcoal dark:hover:text-white uppercase cursor-pointer transition-colors">Live Map</span>
                         <span className="text-[10px] font-bold text-gray-400 hover:text-JBM-charcoal dark:hover:text-white uppercase cursor-pointer transition-colors">Finance</span>
                         <span className="text-[10px] font-bold text-gray-400 hover:text-JBM-charcoal dark:hover:text-white uppercase cursor-pointer transition-colors">Reports</span>
                       </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="hidden md:flex items-center gap-2 bg-gray-100 dark:bg-white/5 px-3 py-1.5 rounded-full border border-gray-200 dark:border-white/10">
                        <i className="fa-solid fa-search text-[10px] text-gray-400"></i>
                        <input type="text" placeholder="Search BL, Container..." className="bg-transparent border-none outline-none text-[10px] text-gray-600 dark:text-white w-24 md:w-32 placeholder-gray-400" />
                        <div className="px-1.5 py-0.5 rounded bg-gray-200 dark:bg-white/10 text-[8px] font-mono text-gray-500">⌘K</div>
                      </div>
                      <div className="relative">
                        <i className="fa-solid fa-bell text-gray-500 hover:text-orange-500 cursor-pointer text-xs"></i>
                        <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full border border-white dark:border-[#050505] animate-pulse"></span>
                      </div>
                      <div className="flex items-center gap-2 cursor-pointer pl-2 border-l border-gray-200 dark:border-white/10">
                        <div className="text-right hidden sm:block">
                          <p className="text-[9px] font-bold text-JBM-charcoal dark:text-white leading-none">James M.</p>
                          <p className="text-[8px] text-gray-400 mt-0.5">Logistics Mgr</p>
                        </div>
                        <div className="w-7 h-7 rounded-full bg-gray-200 dark:bg-white/10 flex items-center justify-center border border-gray-300 dark:border-white/20">
                          <i className="fa-solid fa-user text-[10px] text-gray-600 dark:text-gray-300"></i>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Dashboard Content */}
                  <div className="flex-1 overflow-y-auto p-4 md:p-6 flex flex-col gap-4 hide-scroll bg-[#fafafa] dark:bg-[#020202]">
                    
                    {/* KPI Row */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 shrink-0">
                      {[
                        { label: "Active Shipments", value: "32", icon: "fa-truck-fast", trend: "+12% MoM", trendIcon: "fa-arrow-trend-up", color: "text-blue-500", bg: "bg-blue-500/10" },
                        { label: "Awaiting Clearance", value: "4", icon: "fa-file-circle-exclamation", trend: "Action Required", trendIcon: "fa-circle-exclamation", color: "text-orange-500", bg: "bg-orange-500/10" },
                        { label: "Warehouse Util.", value: "86%", icon: "fa-cubes-stacked", trend: "Nairobi Hub", trendIcon: "fa-location-dot", color: "text-green-500", bg: "bg-green-500/10" },
                        { label: "Pending Invoices", value: "$14.2k", icon: "fa-file-invoice-dollar", trend: "2 Due Today", trendIcon: "fa-clock", color: "text-red-500", bg: "bg-red-500/10" },
                      ].map((kpi, i) => (
                        <div key={i} className="bg-white dark:bg-[#0a0a0a] p-4 rounded-xl border border-gray-200 dark:border-white/5 flex flex-col justify-between shadow-sm group hover:border-orange-500/50 transition-colors">
                          <div className="flex justify-between items-start mb-3">
                            <div className={`w-7 h-7 rounded-lg ${kpi.bg} flex items-center justify-center`}>
                              <i className={`fa-solid ${kpi.icon} ${kpi.color} text-[11px]`}></i>
                            </div>
                            <i className="fa-solid fa-ellipsis-vertical text-gray-400 hover:text-orange-500 cursor-pointer"></i>
                          </div>
                          <div>
                            <span className="text-[9px] font-bold uppercase tracking-wider text-gray-500 line-clamp-1 mb-1">{kpi.label}</span>
                            <div className="text-xl md:text-2xl font-extrabold text-JBM-charcoal dark:text-white">{kpi.value}</div>
                          </div>
                          <div className="flex items-center gap-1.5 mt-2">
                            <i className={`fa-solid ${kpi.trendIcon} text-[9px] ${i === 1 || i === 3 ? 'text-red-500' : 'text-gray-400'}`}></i>
                            <div className={`text-[9px] font-medium ${i === 1 || i === 3 ? 'text-red-500' : 'text-gray-500'}`}>{kpi.trend}</div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Middle Row (2/3 Timeline & Telematics, 1/3 Docs & Actions) */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 shrink-0">
                      
                      {/* Main Column (2/3 width) */}
                      <div className="lg:col-span-2 flex flex-col gap-4">
                        
                        {/* Live Tracking Map/Timeline */}
                        <div className="bg-white dark:bg-[#0a0a0a] rounded-xl border border-gray-200 dark:border-white/5 p-5 flex flex-col relative overflow-hidden shadow-sm">
                          <div className="flex justify-between items-center mb-6 relative z-10">
                            <div className="flex items-center gap-3">
                              <span className="text-[11px] font-bold uppercase tracking-wider text-JBM-charcoal dark:text-white">Live Transit Command</span>
                              <span className="text-[8px] bg-green-500/10 border border-green-500/20 text-green-500 px-2 py-0.5 rounded-full font-bold flex items-center gap-1">
                                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span> GPS ACTIVE
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                               <select className="bg-gray-50 dark:bg-black border border-gray-200 dark:border-white/10 text-[9px] text-gray-600 dark:text-gray-300 rounded px-2 py-1 outline-none">
                                 <option>Shipment: BL-88492001 (NBO)</option>
                                 <option>Shipment: BL-88492002 (KGL)</option>
                               </select>
                               <button className="bg-gray-100 dark:bg-white/10 hover:bg-orange-500 hover:text-white text-gray-600 dark:text-gray-300 text-[10px] px-2 py-1 rounded transition-colors">
                                 <i className="fa-solid fa-expand"></i>
                               </button>
                            </div>
                          </div>
                          
                          {/* Timeline & Map Layout */}
                          <div className="flex flex-col gap-6 relative z-10">
                            
                            {/* Advanced Timeline */}
                            <div className="w-full flex justify-between items-center relative px-2">
                               <div className="absolute top-1/2 left-0 w-full h-[3px] bg-gray-100 dark:bg-white/5 -translate-y-1/2 z-0 rounded-full"></div>
                               <div className="absolute top-1/2 left-0 w-[60%] h-[3px] bg-gradient-to-r from-orange-500 to-yellow-400 -translate-y-1/2 z-0 rounded-full shadow-[0_0_10px_rgba(249,115,22,0.4)]"></div>
                               
                               <div className="relative z-10 flex flex-col items-center gap-2">
                                 <div className="w-4 h-4 rounded-full bg-orange-500 border-[3px] border-white dark:border-[#0a0a0a] flex items-center justify-center"><i className="fa-solid fa-check text-[7px] text-white"></i></div>
                                 <div className="text-[9px] font-bold text-gray-600 dark:text-gray-300 text-center leading-tight">MOMBASA<br/><span className="text-[8px] text-gray-400 font-normal">Discharged 08:00</span></div>
                               </div>
                               <div className="relative z-10 flex flex-col items-center gap-2">
                                 <div className="w-4 h-4 rounded-full bg-orange-500 border-[3px] border-white dark:border-[#0a0a0a] flex items-center justify-center"><i className="fa-solid fa-check text-[7px] text-white"></i></div>
                                 <div className="text-[9px] font-bold text-gray-600 dark:text-gray-300 text-center leading-tight">KRA CUSTOMS<br/><span className="text-[8px] text-gray-400 font-normal">Cleared 11:30</span></div>
                               </div>
                               <div className="relative z-10 flex flex-col items-center gap-2">
                                 <div className="w-6 h-6 rounded-full bg-white dark:bg-black border-2 border-orange-500 flex items-center justify-center animate-pulse shadow-[0_0_15px_rgba(249,115,22,0.5)] z-20">
                                   <i className="fa-solid fa-truck-fast text-[10px] text-orange-500"></i>
                                 </div>
                                 <div className="absolute -top-8 bg-black dark:bg-white text-white dark:text-black text-[9px] font-bold px-2 py-1 rounded shadow-lg whitespace-nowrap after:content-[''] after:absolute after:top-full after:left-1/2 after:-translate-x-1/2 after:border-4 after:border-transparent after:border-t-black dark:after:border-t-white">
                                   Current: Mtito Andei (65 km/h)
                                 </div>
                                 <div className="text-[9px] font-bold text-orange-500 text-center leading-tight mt-1">IN TRANSIT<br/><span className="text-[8px] text-gray-500 font-normal text-current">ETA: 18:45 Today</span></div>
                               </div>
                               <div className="relative z-10 flex flex-col items-center gap-2 opacity-50">
                                 <div className="w-4 h-4 rounded-full bg-gray-200 dark:bg-gray-700 border-[3px] border-white dark:border-[#0a0a0a]"></div>
                                 <div className="text-[9px] font-bold text-gray-500 text-center leading-tight">NAIROBI ICD<br/><span className="text-[8px] text-gray-400 font-normal">Pending</span></div>
                               </div>
                            </div>
                            
                            {/* Telematics Sub-panel */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-gray-100 dark:border-white/5 mt-2">
                              <div className="flex items-center gap-3 bg-gray-50 dark:bg-black/50 p-2 rounded-lg border border-gray-100 dark:border-white/5">
                                <i className="fa-solid fa-temperature-snow text-blue-500 text-lg"></i>
                                <div>
                                  <p className="text-[8px] uppercase tracking-widest text-gray-500">Reefer Temp</p>
                                  <p className="text-[11px] font-bold text-JBM-charcoal dark:text-white">-18.4°C <span className="text-green-500 text-[9px]">Optimal</span></p>
                                </div>
                              </div>
                              <div className="flex items-center gap-3 bg-gray-50 dark:bg-black/50 p-2 rounded-lg border border-gray-100 dark:border-white/5">
                                <i className="fa-solid fa-gas-pump text-orange-500 text-lg"></i>
                                <div>
                                  <p className="text-[8px] uppercase tracking-widest text-gray-500">Fuel Level</p>
                                  <p className="text-[11px] font-bold text-JBM-charcoal dark:text-white">78% <span className="text-gray-400 text-[9px]">840km range</span></p>
                                </div>
                              </div>
                              <div className="flex items-center gap-3 bg-gray-50 dark:bg-black/50 p-2 rounded-lg border border-gray-100 dark:border-white/5">
                                <i className="fa-solid fa-id-card text-purple-500 text-lg"></i>
                                <div>
                                  <p className="text-[8px] uppercase tracking-widest text-gray-500">Driver Status</p>
                                  <p className="text-[11px] font-bold text-JBM-charcoal dark:text-white">J. Kamau <span className="text-green-500 text-[9px]">Active</span></p>
                                </div>
                              </div>
                            </div>

                          </div>

                          {/* Faint map background effect */}
                          <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04] pointer-events-none" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%239C92AC\" fill-opacity=\"1\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }}></div>
                        </div>

                        {/* Alerts / Exceptions Module */}
                        <div className="bg-white dark:bg-[#0a0a0a] rounded-xl border border-gray-200 dark:border-white/5 p-4 flex flex-col shadow-sm">
                          <div className="flex justify-between items-center mb-3">
                             <span className="text-[10px] font-bold uppercase tracking-wider text-JBM-charcoal dark:text-white flex items-center gap-2">
                               <i className="fa-solid fa-triangle-exclamation text-orange-500"></i> Exception Management
                             </span>
                             <span className="text-[9px] font-bold text-gray-500 hover:text-orange-500 cursor-pointer">View All</span>
                          </div>
                          <div className="flex flex-col gap-2">
                            <div className="flex items-center justify-between p-2.5 rounded-lg bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-500/20">
                              <div className="flex items-center gap-3">
                                <div className="w-6 h-6 rounded bg-red-100 dark:bg-red-500/20 flex items-center justify-center"><i className="fa-solid fa-stamp text-red-500 text-[10px]"></i></div>
                                <div>
                                  <p className="text-[10px] font-bold text-red-700 dark:text-red-400">Customs Hold: Container MSKU992384</p>
                                  <p className="text-[9px] text-red-600/70 dark:text-red-400/70">Awaiting Form C17 documentation. Delays expected.</p>
                                </div>
                              </div>
                              <button className="bg-red-500 text-white text-[9px] font-bold uppercase px-3 py-1.5 rounded hover:bg-red-600 transition-colors">Resolve</button>
                            </div>
                            <div className="flex items-center justify-between p-2.5 rounded-lg bg-orange-50 dark:bg-orange-900/10 border border-orange-100 dark:border-orange-500/20">
                              <div className="flex items-center gap-3">
                                <div className="w-6 h-6 rounded bg-orange-100 dark:bg-orange-500/20 flex items-center justify-center"><i className="fa-solid fa-cloud-showers-heavy text-orange-500 text-[10px]"></i></div>
                                <div>
                                  <p className="text-[10px] font-bold text-orange-700 dark:text-orange-400">Weather Delay: Nakuru Route</p>
                                  <p className="text-[9px] text-orange-600/70 dark:text-orange-400/70">Heavy rains slowing transit by approx 2 hours.</p>
                                </div>
                              </div>
                              <span className="text-[9px] text-gray-500 font-bold bg-white dark:bg-black px-2 py-1 rounded border border-gray-200 dark:border-white/10">Acknowledged</span>
                            </div>
                          </div>
                        </div>

                      </div>

                      {/* Side Column (1/3 width) - Docs & Quick Actions */}
                      <div className="flex flex-col gap-4">
                        
                        {/* Quick Actions */}
                        <div className="bg-white dark:bg-[#0a0a0a] rounded-xl border border-gray-200 dark:border-white/5 p-4 flex flex-col shadow-sm">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-JBM-charcoal dark:text-white mb-3">Quick Actions</span>
                          <div className="grid grid-cols-2 gap-2">
                            <button className="flex flex-col items-center justify-center gap-2 p-3 rounded-lg bg-gray-50 dark:bg-black hover:bg-orange-50 dark:hover:bg-orange-500/10 border border-gray-100 dark:border-white/5 hover:border-orange-500/30 transition-colors group">
                              <i className="fa-solid fa-calculator text-gray-400 group-hover:text-orange-500 text-lg"></i>
                              <span className="text-[9px] font-bold text-gray-600 dark:text-gray-300">Quote</span>
                            </button>
                            <button className="flex flex-col items-center justify-center gap-2 p-3 rounded-lg bg-gray-50 dark:bg-black hover:bg-orange-50 dark:hover:bg-orange-500/10 border border-gray-100 dark:border-white/5 hover:border-orange-500/30 transition-colors group">
                              <i className="fa-solid fa-truck-ramp-box text-gray-400 group-hover:text-orange-500 text-lg"></i>
                              <span className="text-[9px] font-bold text-gray-600 dark:text-gray-300">Book Cargo</span>
                            </button>
                            <button className="flex flex-col items-center justify-center gap-2 p-3 rounded-lg bg-gray-50 dark:bg-black hover:bg-orange-50 dark:hover:bg-orange-500/10 border border-gray-100 dark:border-white/5 hover:border-orange-500/30 transition-colors group">
                              <i className="fa-solid fa-warehouse text-gray-400 group-hover:text-orange-500 text-lg"></i>
                              <span className="text-[9px] font-bold text-gray-600 dark:text-gray-300">Storage</span>
                            </button>
                            <button className="flex flex-col items-center justify-center gap-2 p-3 rounded-lg bg-gray-50 dark:bg-black hover:bg-orange-50 dark:hover:bg-orange-500/10 border border-gray-100 dark:border-white/5 hover:border-orange-500/30 transition-colors group">
                              <i className="fa-solid fa-headset text-gray-400 group-hover:text-orange-500 text-lg"></i>
                              <span className="text-[9px] font-bold text-gray-600 dark:text-gray-300">Support</span>
                            </button>
                          </div>
                        </div>

                        {/* Docs / Compliance */}
                        <div className="bg-white dark:bg-[#0a0a0a] rounded-xl border border-gray-200 dark:border-white/5 p-4 flex flex-col shadow-sm flex-1">
                          <div className="flex justify-between items-center mb-4">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-JBM-charcoal dark:text-white">Document Center</span>
                            <i className="fa-solid fa-folder-open text-gray-400 text-xs"></i>
                          </div>
                          
                          {/* Status Pills */}
                          <div className="flex gap-2 mb-4">
                            <span className="text-[8px] font-bold bg-orange-500 text-white px-2 py-1 rounded-full">2 Action Req</span>
                            <span className="text-[8px] font-bold bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-300 px-2 py-1 rounded-full">All Docs</span>
                          </div>

                          <div className="flex flex-col gap-2 flex-1">
                            {[
                              { name: "Inv_4092_Final.pdf", type: "INV", status: "Unpaid", color: "text-red-500", bg: "bg-red-500/10", icon: "fa-circle-exclamation" },
                              { name: "Bill_of_Lading.pdf", type: "BOL", status: "Sign Req", color: "text-orange-500", bg: "bg-orange-500/10", icon: "fa-pen-nib" },
                              { name: "Phyto_Cert_v2.pdf", type: "CRT", status: "Verified", color: "text-green-500", bg: "bg-green-500/10", icon: "fa-check" },
                              { name: "Port_Clearance.pdf", type: "CLR", status: "Verified", color: "text-green-500", bg: "bg-green-500/10", icon: "fa-check" },
                              { name: "Weight_Ticket.pdf", type: "WGT", status: "Pending", color: "text-gray-500", bg: "bg-gray-500/10", icon: "fa-clock" }
                            ].map((doc, i) => (
                              <div key={i} className="flex items-center justify-between p-2 rounded-lg bg-gray-50 dark:bg-[#050505] border border-gray-100 dark:border-white/5 hover:border-orange-500/30 transition-colors group cursor-pointer">
                                <div className="flex items-center gap-2 overflow-hidden">
                                  <div className={`text-[7px] font-bold ${doc.color} ${doc.bg} px-1.5 py-1 rounded min-w-[24px] text-center`}>{doc.type}</div>
                                  <div className="flex flex-col">
                                    <span className="text-[9px] font-bold text-gray-700 dark:text-gray-200 truncate max-w-[120px]">{doc.name}</span>
                                    <div className="flex items-center gap-1 mt-0.5">
                                      <i className={`fa-solid ${doc.icon} ${doc.color} text-[7px]`}></i>
                                      <span className={`text-[7px] ${doc.color}`}>{doc.status}</span>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                  {doc.status === "Sign Req" || doc.status === "Unpaid" ? (
                                     <button className="bg-orange-500 text-white text-[8px] font-bold px-2 py-1 rounded">Action</button>
                                  ) : (
                                     <i className="fa-solid fa-download text-[10px] text-gray-400 hover:text-orange-500"></i>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                          <button className="w-full mt-3 py-2 border border-gray-200 dark:border-white/10 rounded-lg text-[9px] font-bold text-gray-500 hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">View Document Archive</button>
                        </div>
                      </div>

                    </div>

                  </div>
                </div>
              </div>
            </div>
INNER_EOF

# Extract lines from SectionProperties to replace
# We want to replace from <div className="relative w-full h-[550px]
# to the matching closing </div> of that main container block (line 280 roughly)

# Let's find the exact lines
sed -i '150,280c\
'"$(cat replacement2.txt | sed 's/$/\\/')" src/components/SectionProperties.tsx

# Fix the trailing backslash on the last line that sed 'c' command leaves sometimes
sed -i 's/\\$//' src/components/SectionProperties.tsx

