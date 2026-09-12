import { useState } from "react";
import { MapContainer, TileLayer, CircleMarker } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const markers = [
  { name: "Nairobi", pos: [-1.2921, 36.8219] },
  { name: "Dar es Salaam", pos: [-6.7924, 39.2083] },
  { name: "Kampala", pos: [0.3476, 32.5825] },
  { name: "Kigali", pos: [-1.9441, 30.0619] },
  { name: "Kinshasa", pos: [-4.4419, 15.2663] },
  { name: "Johannesburg", pos: [-26.2041, 28.0473] },
  { name: "Lusaka", pos: [-15.3875, 28.3228] },
  { name: "Gaborone", pos: [-24.6282, 25.9231] },
];

export function SectionCommercial({ onMenuClick }: { onMenuClick: () => void }) {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const accordionData = [
    {
      id: 0,
      number: "01",
      title: "East Africa",
      subtitle: "(Northern & Central Corridors)",
      content: (
        <div className="flex flex-col gap-3 pt-4 text-xs text-JBM-charcoal dark:text-gray-300">
          <p><strong className="text-gray-500 dark:text-gray-400">Primary Corridors:</strong><br/>
          • Northern Corridor: Port of Mombasa → Nairobi ICD → Malaba/Busia → Kampala → Kigali / Juba<br/>
          • Central Corridor: Dar es Salaam → Mutukula/Rusumo → Kigali / Bujumbura</p>
          <p><strong className="text-gray-500 dark:text-gray-400">Intermodal Rail Integration:</strong> Direct SGR rail-to-road transfer at Naivasha Inland Container Depot (ICD) and Nairobi Freight Terminal to bypass highway bottlenecks.</p>
          <p><strong className="text-gray-500 dark:text-gray-400">Key Border Posts:</strong> Malaba (Kenya/Uganda), Busia, Namanga (Kenya/Tanzania), Mutukula (Uganda/Tanzania), Gatuna (Rwanda).</p>
          <p><strong className="text-gray-500 dark:text-gray-400">Transit Lead Times:</strong> Mombasa to Kampala (3–4 Days) | Mombasa to Kigali (5–6 Days).</p>
          <p><strong className="text-gray-500 dark:text-gray-400">Fleet Deployment:</strong> 20ft/40ft Skeleton Container Trailers, Flatbeds, Temperature-Controlled Reefers, and Bulk Fuel Tankers.</p>
        </div>
      )
    },
    {
      id: 1,
      number: "02",
      title: "Eastern Central Africa",
      subtitle: "(Great Lakes & Mining Belts)",
      content: (
        <div className="flex flex-col gap-3 pt-4 text-xs text-JBM-charcoal dark:text-gray-300">
          <p><strong className="text-gray-500 dark:text-gray-400">Primary Corridors:</strong><br/>
          • Great Lakes Transit: Kampala/Kigali → Goma / Bukavu / Bunia (DRC)<br/>
          • Lualaba Mining Route: Dar es Salaam / Lusaka → Lubumbashi / Kolwezi / Likasi (DRC)</p>
          <p><strong className="text-gray-500 dark:text-gray-400">Specialized Logistics:</strong> Out-of-Gauge (OOG) mining equipment transport, dangerous goods (HAZMAT) handling, and armored escort services for high-value mineral transit.</p>
          <p><strong className="text-gray-500 dark:text-gray-400">Key Border Posts:</strong> Kasumbalesa (Zambia/DRC), Mahagi & Ishasha (Uganda/DRC), Rusizi (Rwanda/DRC).</p>
          <p><strong className="text-gray-500 dark:text-gray-400">Transit Lead Times:</strong> Mombasa to Goma (8–10 Days) | Dar es Salaam to Lubumbashi (7–9 Days).</p>
          <p><strong className="text-gray-500 dark:text-gray-400">Fleet Deployment:</strong> Heavy-duty Multi-axle Lowbeds, Reinforced Side-wall Trucks, Off-road 6x6 Support Tractors.</p>
        </div>
      )
    },
    {
      id: 2,
      number: "03",
      title: "Southern Africa",
      subtitle: "(SADC Trade Corridors)",
      content: (
        <div className="flex flex-col gap-3 pt-4 text-xs text-JBM-charcoal dark:text-gray-300">
          <p><strong className="text-gray-500 dark:text-gray-400">Primary Corridors:</strong><br/>
          • North-South Corridor: Durban / Johannesburg → Beitbridge → Harare → Chirundu → Lusaka<br/>
          • Dar-Tunduma Corridor: Dar es Salaam → Tunduma/Nakonde → Lusaka / Ndola Copperbelt</p>
          <p><strong className="text-gray-500 dark:text-gray-400">Customs Protocol:</strong> Complete SADC trade documentation management, COMESA Yellow Card insurance coverage, and bonded transit passes.</p>
          <p><strong className="text-gray-500 dark:text-gray-400">Key Border Posts:</strong> Tunduma/Nakonde (Tanzania/Zambia), Chirundu (Zimbabwe/Zambia), Beitbridge (South Africa/Zimbabwe).</p>
          <p><strong className="text-gray-500 dark:text-gray-400">Transit Lead Times:</strong> Nairobi to Lusaka (6–8 Days) | Dar es Salaam to Ndola (5–7 Days).</p>
          <p><strong className="text-gray-500 dark:text-gray-400">Fleet Deployment:</strong> Interlink Tri-Axle Trailers, Super-link Curtainsiders, Dual-driver Long Haul Rigs.</p>
        </div>
      )
    },
    {
      id: 3,
      number: "04",
      title: "AfCFTA Cross-Continental",
      subtitle: "(Trade Lanes)",
      content: (
        <div className="flex flex-col gap-3 pt-4 text-xs text-JBM-charcoal dark:text-gray-300">
          <p><strong className="text-gray-500 dark:text-gray-400">Primary Framework:</strong> Inter-regional connectivity leveraging the African Continental Free Trade Area (AfCFTA) protocols for duty-reduced intra-African trade.</p>
          <p><strong className="text-gray-500 dark:text-gray-400">Service Reach:</strong> Multimodal sea feeder and air cargo networks extending into West and North African economic hubs (Lagos, Accra, Cairo).</p>
          <p><strong className="text-gray-500 dark:text-gray-400">Capabilities:</strong> Consolidated LCL cargo hubs, cross-continental trade compliance consulting, and unified single-bill-of-lading logistics.</p>
        </div>
      )
    }
  ];

  return (
    <div
      className="w-full pt-0 pb-4 md:pb-6 bg-[#f8f8f8] dark:bg-JBM-black transition-colors duration-500 overflow-hidden flex flex-col"
      id="section-commercial"
    >
      <section className="w-full pt-0 pb-6 px-6 md:px-12 max-w-[1600px] mx-auto flex flex-col">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          <div className="lg:col-span-5 flex flex-col justify-between h-auto lg:h-full relative lg:sticky lg:top-24 lg:self-start">
            
            <div className="relative overflow-hidden rounded-[2rem] border border-gray-200 dark:border-white/10 shadow-xl mb-8 group h-[250px] md:h-[320px] w-full z-10">
              <MapContainer
                center={[-10, 25]}
                zoom={3.5}
                zoomControl={false}
                scrollWheelZoom={false}
                dragging={false}
                doubleClickZoom={false}
                className="w-full h-full bg-[#f8f8f8] dark:bg-[#1a1a1a] z-0"
              >
                <TileLayer
                  url={`https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png${import.meta.env.VITE_CARTO_API_KEY ? `?key=${import.meta.env.VITE_CARTO_API_KEY}` : ""}`}
                  className="dark:hidden"
                />
                <TileLayer
                  url={`https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png${import.meta.env.VITE_CARTO_API_KEY ? `?key=${import.meta.env.VITE_CARTO_API_KEY}` : ""}`}
                  className="hidden dark:block"
                />
                {markers.map((m, i) => (
                  <CircleMarker
                    key={i}
                    center={m.pos as [number, number]}
                    radius={5}
                    fillColor="#ff6a00"
                    color="#ff6a00"
                    weight={2}
                    fillOpacity={0.8}
                  />
                ))}
              </MapContainer>
              <div className="absolute inset-0 border-[3px] border-transparent group-hover:border-orange-500/20 transition-colors pointer-events-none rounded-[2rem] z-10"></div>
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-gray-600 dark:text-gray-400">
                  Regional Coverage
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase tracking-tighter leading-[0.9] text-JBM-black dark:text-white mb-4 transition-colors">
                African <br />{" "}
                <span className="text-gray-500 dark:text-gray-500">
                  Logistics Network
                </span>
              </h2>
              <p className="text-[10px] md:text-[11px] font-medium text-gray-600 dark:text-gray-400 leading-relaxed max-w-sm transition-colors">
                Pan-African trade, simplified. We operate high-frequency freight corridors connecting Mombasa, Dar es Salaam, and inland industrial hubs across East, Central, and Southern Africa. Powered by One-Stop Border Post (OSBP) fast-tracking, integrated SGR rail freight, and heavy haulage fleets.
              </p>
            </div>

            <div className="mt-4 lg:mt-5 grid grid-cols-2 gap-x-4 gap-y-4 border-t border-gray-300 dark:border-white/10 pt-4 lg:pt-5">
              <div>
                <span className="text-[9px] uppercase tracking-widest text-orange-500 block mb-1">
                  Countries Served
                </span>
                <h4 className="text-2xl font-light text-JBM-charcoal dark:text-white">
                  18<span className="text-xs font-bold text-gray-500">+</span>
                </h4>
              </div>
              <div>
                <span className="text-[9px] uppercase tracking-widest text-orange-500 block mb-1">
                  Active Fleet & Rigs
                </span>
                <h4 className="text-2xl font-light text-JBM-charcoal dark:text-white">
                  650<span className="text-xs font-bold text-gray-500">+</span>
                </h4>
              </div>
              <div>
                <span className="text-[9px] uppercase tracking-widest text-orange-500 block mb-1">
                  Major Port Hubs
                </span>
                <h4 className="text-2xl font-light text-JBM-charcoal dark:text-white">
                  04
                </h4>
              </div>
              <div>
                <span className="text-[9px] uppercase tracking-widest text-orange-500 block mb-1">
                  OSBP Pre-Clearance
                </span>
                <h4 className="text-2xl font-light text-JBM-charcoal dark:text-white">
                  100<span className="text-xs font-bold text-gray-500">%</span>
                </h4>
              </div>
            </div>
            <div className="mt-4 lg:mt-6 flex flex-col gap-3">
              <a
                href="#"
                className="group flex items-center justify-between w-full md:w-auto bg-gray-100 dark:bg-JBM-charcoal border border-gray-200 dark:border-white/10 px-6 py-4 rounded-xl hover:border-orange-500 transition-all"
              >
                <span className="text-[10px] font-bold uppercase tracking-widest text-JBM-charcoal dark:text-white">
                  DOWNLOAD PAN-AFRICAN ROUTE & CORRIDOR GUIDE (PDF)
                </span>
                <i className="fa-solid fa-download text-orange-500 group-hover:translate-y-1 transition-transform"></i>
              </a>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="/fleet"
                  className="group flex items-center justify-center gap-2 w-full bg-transparent border border-gray-300 dark:border-white/20 px-4 py-3 rounded-xl hover:border-orange-500 hover:bg-orange-500/10 transition-all"
                >
                  <span className="text-[10px] font-bold uppercase tracking-widest text-JBM-charcoal dark:text-white group-hover:text-orange-500 transition-colors">
                    View Fleet
                  </span>
                  <i className="fa-solid fa-truck text-orange-500 text-[10px] group-hover:translate-x-1 transition-transform"></i>
                </a>
                <a
                  href="/warehousing"
                  className="group flex items-center justify-center gap-2 w-full bg-transparent border border-gray-300 dark:border-white/20 px-4 py-3 rounded-xl hover:border-orange-500 hover:bg-orange-500/10 transition-all"
                >
                  <span className="text-[10px] font-bold uppercase tracking-widest text-JBM-charcoal dark:text-white group-hover:text-orange-500 transition-colors">
                    View Storage
                  </span>
                  <i className="fa-solid fa-warehouse text-orange-500 text-[10px] group-hover:translate-x-1 transition-transform"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col w-full mt-5 lg:mt-0">
            {accordionData.map((item) => (
              <div
                key={item.id}
                className={`accordion-item group border-b border-gray-300 dark:border-white/10 pb-4 mb-4 cursor-pointer ${
                  activeAccordion === item.id ? "active" : ""
                }`}
                onClick={() => toggleAccordion(item.id)}
              >
                <div className="flex justify-between items-center py-2">
                  <div className="flex items-center gap-4">
                    <span className="text-[10px] font-bold text-gray-500 dark:text-gray-600 group-hover:text-orange-500 transition-colors">
                      {item.number}
                    </span>
                    <h3 className="text-xl md:text-3xl font-bold uppercase text-JBM-charcoal dark:text-white group-hover:text-gray-500 dark:group-hover:text-gray-300 transition-colors">
                      {item.title} <span className="text-gray-400 dark:text-gray-500 text-lg md:text-2xl ml-2">{item.subtitle}</span>
                    </h3>
                  </div>
                  <i className="accordion-icon fa-solid fa-plus text-lg text-gray-500"></i>
                </div>
                <div className="accordion-content">
                  {item.content}
                </div>
              </div>
            ))}

            <div className="mt-6 flex flex-col sm:flex-row gap-4 border-t border-gray-200 dark:border-white/10 pt-6">
              <a
                href="/rates"
                className="flex-1 group bg-JBM-charcoal dark:bg-white text-white dark:text-black rounded-xl px-5 py-2.5 hover:bg-orange-500 dark:hover:bg-orange-500 hover:text-white dark:hover:text-white transition-all shadow-lg flex items-center justify-between"
              >
                <div className="flex flex-col">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-gray-400 group-hover:text-orange-100 transition-colors mb-0.5">
                    Instant Rate Modeling
                  </span>
                  <span className="text-xs font-extrabold uppercase tracking-tight">
                    Logistics Calculator
                  </span>
                </div>
                <div className="w-8 h-8 rounded-full border border-white/20 dark:border-black/20 group-hover:border-white/40 flex items-center justify-center transition-all">
                  <i className="fa-solid fa-calculator text-xs"></i>
                </div>
              </a>

              <a
                href="#"
                className="flex-1 group bg-orange-500 border border-orange-500 rounded-xl px-5 py-2.5 hover:bg-orange-600 hover:border-orange-600 transition-all shadow-lg flex items-center justify-between"
              >
                <div className="flex flex-col">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-orange-100 mb-0.5">
                    Enterprise Sales
                  </span>
                  <span className="text-xs font-extrabold uppercase tracking-tight text-white">
                    Contact Our Team
                  </span>
                </div>
                <div className="w-8 h-8 rounded-full border border-white/20 group-hover:bg-white/10 flex items-center justify-center transition-all text-white">
                  <i className="fa-solid fa-arrow-right -rotate-45 text-xs"></i>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
