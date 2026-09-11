export function SectionTechStack() {
  return (
    <div className="w-full py-16 md:py-24 bg-JBM-black text-white relative overflow-hidden flex flex-col">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-20"></div>
      
      <section className="w-full px-6 md:px-12 max-w-[1600px] mx-auto flex flex-col relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-gray-400 font-mono">
            The Digital Backbone
          </span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          <div className="lg:col-span-5">
            <h2 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tighter leading-[0.9] mb-6">
              Enterprise <br />
              <span className="text-gray-500">API & EDI Integration</span>
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed font-medium max-w-xl mb-8 border-l-2 border-orange-500 pl-4">
              Our infrastructure doesn't just move freight; it moves data. We seamlessly plug into your existing ERP ecosystems, providing military-grade encryption and real-time telemetry across your entire supply chain.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 text-[10px] font-bold tracking-widest uppercase border border-white/20 rounded-full bg-white/5">SAP Compatible</span>
              <span className="px-4 py-2 text-[10px] font-bold tracking-widest uppercase border border-white/20 rounded-full bg-white/5">Oracle NetSuite</span>
              <span className="px-4 py-2 text-[10px] font-bold tracking-widest uppercase border border-white/20 rounded-full bg-white/5">REST API Webhooks</span>
            </div>
          </div>
          
          <div className="lg:col-span-7 bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 md:p-8 font-mono text-xs md:text-sm text-green-500 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-50"></div>
            <div className="flex justify-between items-center mb-6 pb-4 border-b border-white/10">
              <span className="text-gray-500">POST /api/v2/logistics/track</span>
              <span className="text-orange-500">200 OK</span>
            </div>
            <pre className="overflow-x-auto text-[10px] md:text-xs leading-loose">
{`{
  "status": "success",
  "data": {
    "shipment_id": "JBM-982-AF",
    "current_location": {
      "lat": -1.2921,
      "lng": 36.8219,
      "facility": "Nairobi Inland Port"
    },
    "telemetry": {
      "temp_celsius": -18.4,
      "humidity": "45%",
      "seal_intact": true
    },
    "eta_destination": "2024-11-12T08:00:00Z"
  }
}`}
            </pre>
          </div>
        </div>
      </section>
    </div>
  );
}
