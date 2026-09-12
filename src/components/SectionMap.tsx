import { useEffect, useRef, useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const listingData = [
  { loc: "Nairobi-Kilimani", lat: -1.2902, lng: 36.7904, size: "md", growth: "2.1%", price: "14.5M TEU" },
  { loc: "Nairobi-Westlands", lat: -1.2684, lng: 36.8044, size: "md", growth: "5.4%", price: "18.0M TEU" },
  { loc: "Nairobi-JBM", lat: -1.3197, lng: 36.7050, size: "lg", growth: "4.2%", price: "85.0M TEU" },
  { loc: "Mombasa-Nyali", lat: -4.0322, lng: 39.7081, size: "lg", growth: "8.1%", price: "35.0M TEU" },
  { loc: "Mombasa-Bamburi", lat: -3.9961, lng: 39.7138, size: "md", growth: "6.4%", price: "12.0M TEU" },
  { loc: "Kwale-Diani Beach", lat: -4.2798, lng: 39.5947, size: "lg", growth: "12.4%", price: "45.0M TEU" },
  { loc: "Kilifi-Mtwapa", lat: -3.9450, lng: 39.7390, size: "md", growth: "7.8%", price: "15.5M TEU" },
  { loc: "Kilifi-Watamu", lat: -3.3524, lng: 40.0152, size: "md", growth: "15.0%", price: "28.0M TEU" },
  { loc: "Kilifi-Malindi", lat: -3.2236, lng: 40.1300, size: "md", growth: "9.2%", price: "22.0M TEU" },
  { loc: "Lamu-Shela", lat: -2.2917, lng: 40.9142, size: "lg", growth: "10.2%", price: "60.0M TEU" },
  { loc: "Kiambu-Ruiru", lat: -1.1472, lng: 36.9611, size: "sm", growth: "18.5%", price: "8.5M TEU" },
  { loc: "Kiambu-Ruaka", lat: -1.2185, lng: 36.7997, size: "sm", growth: "22.1%", price: "11.0M TEU" },
  { loc: "Machakos-Syokimau", lat: -1.3570, lng: 36.9380, size: "sm", growth: "14.3%", price: "9.0M TEU" },
  { loc: "Nakuru-Milimani", lat: -0.2795, lng: 36.0715, size: "md", growth: "20.0%", price: "22.0M TEU" },
  { loc: "Uasin Gishu-Eldoret", lat: 0.5143, lng: 35.2698, size: "md", growth: "11.8%", price: "18.5M TEU" },
  { loc: "Kisumu-Milimani", lat: -0.1081, lng: 34.7505, size: "md", growth: "8.9%", price: "25.0M TEU" },
  { loc: "Laikipia-Nanyuki", lat: 0.0167, lng: 37.0667, size: "md", growth: "25.4%", price: "30.0M TEU" },
  { loc: "Kajiado-Kitengela", lat: -1.5167, lng: 36.8500, size: "sm", growth: "16.7%", price: "7.5M TEU" },
  { loc: "Taita Taveta-Voi", lat: -3.3945, lng: 38.5630, size: "sm", growth: "5.2%", price: "6.0M TEU" },
  { loc: "Narok-Maasai Mara", lat: -1.5273, lng: 35.1925, size: "lg", growth: "1.2%", price: "120.0M TEU" },
];

const tickerProperties = [
  { name: "JBMGlobal HQ", loc: "Nairobi CBD", type: "Freight Hubs", size: "12,000 SQFT", coords: "-1.2833, 36.8167" },
  { name: "88 Nairobi Tower", loc: "Upper Hill", type: "Distribution Center", size: "50,000 SQFT", coords: "-1.2995, 36.8182" },
  { name: "Ineza Residences", loc: "Runda", type: "Freight Hub", size: "120,000 SQFT", coords: "-1.2188, 36.8302" },
  { name: "Pearl Lumina", loc: "Riverside", type: "Sortation Facility", size: "30,000 SQFT", coords: "-1.2685, 36.7925" },
  { name: "Hibo Manor", loc: "JBM", type: "Fleet Yard", size: "2.5 ACRES", coords: "-1.3421, 36.7118" },
  { name: "Angama Mara", loc: "Maasai Mara", type: "Regional Depot", size: "20 BAYS", coords: "-1.2708, 34.8436" },
  { name: "Segera Retreat", loc: "Laikipia", type: "Transit Network", size: "50,000 ACRES", coords: "0.1742, 36.8505" },
  { name: "Sirikoi Lodge", loc: "Lewa", type: "Cross-Dock", size: "15 BAYS", coords: "0.2039, 37.4528" },
  { name: "Almanara Resort", loc: "Diani Beach", type: "Logistics Park", size: "4 WAREHOUSES", coords: "-4.3392, 39.5714" },
  { name: "Manda Bay", loc: "Lamu", type: "Port Terminal", size: "5 ACRES", coords: "-2.2152, 40.9416" },
];

export function SectionMap({ onMenuClick }: { onMenuClick: () => void }) {
  const mapRef = useRef<HTMLDivElement>(null);
  const [isLocked, setIsLocked] = useState(true);
  const mapInstance = useRef<L.Map | null>(null);
  const [tickerIdx, setTickerIdx] = useState(0);
  const [tickerOpacity, setTickerOpacity] = useState(1);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    // Handled globally by CSS filter in tailwind, so we don't need to swap map tiles.
    // The original code swaps tiles, we can just let CSS do it.
  };

  useEffect(() => {
    if (!mapRef.current || mapInstance.current) return;

    const map = L.map(mapRef.current, {
      zoomControl: false,
      scrollWheelZoom: false,
      doubleClickZoom: false,
      dragging: false,
      attributionControl: false,
    }).setView([-1.2921, 36.8219], 13);

    const cartoApiKey = import.meta.env.VITE_CARTO_API_KEY;

    L.tileLayer(`https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png${cartoApiKey ? `?key=${cartoApiKey}` : ""}`, {
      maxZoom: 18,
    }).addTo(map);

    mapInstance.current = map;

    setTimeout(() => {
      map.flyTo([0.3, 37.0], 6, {
        duration: 5,
        easeLinearity: 0.2,
      });
    }, 1800);

    const createStarIcon = (sizeClass: string) => {
      let px = sizeClass === "lg" ? 14 : sizeClass === "md" ? 8 : 5;
      let delay = -(Math.random() * 3).toFixed(2);
      return L.divIcon({
        className: "custom-star-icon",
        html: `<div class="star-pip" style="width:${px}px; height:${px}px; animation-delay: ${delay}s"></div>`,
        iconSize: [px, px],
        iconAnchor: [px / 2, px / 2],
      });
    };

    const hqMarker = L.marker([-1.2921, 36.8219], { icon: createStarIcon("lg") }).addTo(map);
    hqMarker.bindTooltip(
      `
        <div class="font-mono text-[9px] text-orange-500 tracking-widest uppercase mb-1">Global Command Center</div>
        <div class="font-extrabold text-[13px] tracking-tight uppercase mb-2 border-b border-white/10 pb-1">Nairobi HQ</div>
        <div class="text-[10px] uppercase text-gray-300 font-bold">JBM Logistics Limited</div>
      `,
      { className: "JBM-hud", direction: "top", sticky: true, opacity: 1 }
    );

    listingData.forEach((point) => {
      const marker = L.marker([point.lat, point.lng], {
        icon: createStarIcon(point.size),
      }).addTo(map);

      const hudContent = `
        <div class="font-mono text-[9px] text-orange-500 tracking-widest uppercase mb-1">Intelligence Report</div>
        <div class="font-extrabold text-[13px] tracking-tight uppercase mb-2 border-b border-white/10 pb-1">${point.loc}</div>
        <div class="flex justify-between gap-8">
            <div>
                <div class="text-[8px] uppercase text-gray-500 font-bold">Growth</div>
                <div class="text-orange-500 font-bold text-[11px]">+${point.growth}</div>
            </div>
            <div>
                <div class="text-[8px] uppercase text-gray-500 font-bold">Throughput</div>
                <div class="text-white font-bold text-[11px]">VOL ${point.price}</div>
            </div>
        </div>
      `;

      marker.bindTooltip(hudContent, {
        className: "JBM-hud",
        direction: "top",
        sticky: true,
        opacity: 1,
      });
    });
  }, []);

  useEffect(() => {
    const map = mapInstance.current;
    if (!map) return;
    if (!isLocked) {
      map.dragging.enable();
      map.scrollWheelZoom.enable();
      map.doubleClickZoom.enable();
    } else {
      map.dragging.disable();
      map.scrollWheelZoom.disable();
      map.doubleClickZoom.disable();
    }
  }, [isLocked]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTickerOpacity(0);
      setTimeout(() => {
        setTickerIdx((prev) => (prev + 1) % tickerProperties.length);
        setTickerOpacity(1);
      }, 300);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const prop = tickerProperties[tickerIdx];

  return (
    <div className="snap-section relative" id="section-map">
      <div id="map" ref={mapRef} className="absolute inset-0 z-0 h-full w-full"></div>
      <div className="hero-overlay"></div>

      <main className="content-layer pointer-events-none px-6 pt-4 pb-6 md:px-12 md:pt-6 md:pb-8 h-full min-h-[100dvh] flex flex-col justify-between overflow-hidden relative">
        <div className="w-full animate-fade-in-up z-40 flex-shrink-0 pointer-events-auto">
          <nav className="flex justify-between items-center w-full border-b border-white/10 pb-3 mb-2">
            <a
              href="#"
              className="text-xs md:text-sm font-extrabold tracking-[0.25em] uppercase hover:text-orange-500 transition-colors text-white"
            >
              Contact Us
            </a>
            <div className="flex items-center gap-5 md:gap-7 text-white">
              <button className="hover:text-orange-500 transition-colors">
                <i className="fa-solid fa-magnifying-glass text-base"></i>
              </button>
              <button className="theme-toggle hover:text-orange-500" onClick={toggleTheme}>
                <i className="fa-solid fa-sun text-base"></i>
              </button>
              <button
                className="text-xs md:text-sm font-extrabold tracking-[0.25em] uppercase hover:text-orange-500 transition-colors"
                onClick={onMenuClick}
              >
                Menu
              </button>
            </div>
          </nav>

          <div className="marquee-strip">
            <div className="flex whitespace-nowrap animate-scroll-ticker">
              <div className="flex items-center gap-6 px-6 text-[8px] md:text-[9px] font-mono tracking-[0.3em] uppercase text-orange-500/60">
                <span>Global Portfolio Management</span> •{" "}
                <span>Visionary Land Acquisition</span> •{" "}
                <span>Luxury Asset Optimization</span> •{" "}
                <span>Predictive Global Trade Analytics</span> •{" "}
                <span>Bespoke Brokerage Solutions</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 mt-4">
            <div className="text-left text-white">
              <h1
                className="font-extrabold leading-[0.82] uppercase tracking-tighter"
                style={{ fontSize: "clamp(2.5rem, 9vw, 4.8rem)" }}
              >
                <div className="block">JBM</div>
                <div className="block">LOGISTICS</div>
                <div className="block">LIMITED</div>
              </h1>
              <div className="mt-3 pl-4 border-l-2 border-orange-500">
                <p className="text-[10px] md:text-[11px] font-bold tracking-[0.3em] uppercase text-orange-500">
                  Logistics & Freight Excellence
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-2 border-r border-white/10 pr-4 md:mt-2 hidden md:flex">
              <a href="#section-art" className="vertical-nav-link text-white">
                Supply Chain
              </a>
              <a href="#section-land" className="vertical-nav-link text-white">
                Global Fleet
              </a>
              <a href="#section-commercial" className="vertical-nav-link text-white">
                Freight Hubs
              </a>
              <a href="#section-properties" className="vertical-nav-link text-white">
                Warehousing
              </a>
              <a href="#section-visionary" className="vertical-nav-link text-white">
                Fulfillment
              </a>
              <a href="#section-market" className="vertical-nav-link text-white">
                Global Trade
              </a>
              <a href="#section-insights" className="vertical-nav-link text-white">
                Analytics
              </a>
            </div>
          </div>
        </div>

        <div
          className="flex justify-between items-end w-full opacity-0 animate-fade-in-up z-40 mt-auto pointer-events-auto"
          style={{ animationDelay: "500ms" }}
        >
          <div className="flex flex-col gap-4">
            <div
              className="flex flex-col gap-1 transition-opacity duration-300"
              style={{ opacity: tickerOpacity }}
            >
              <div className="text-[10px] md:text-[11px] font-mono font-bold tracking-widest text-orange-500 uppercase">
                {prop.coords} — {prop.loc}
              </div>
              <div className="text-[10px] md:text-[11px] font-bold tracking-wide text-gray-400 uppercase">
                {prop.name} • {prop.type} • {prop.size}
              </div>
            </div>
            <p className="text-[11px] md:text-[12px] font-medium text-gray-300 max-w-[280px] md:max-w-[340px] leading-relaxed tracking-wide">
              Offering a complete portfolio of excellence in Kenya—from
              visionary logistics to exclusive sales.
            </p>
            <div className="flex items-center gap-4 text-white">
              <a
                href="#section-excellence"
                className="circle-scroll border-white text-white"
              >
                <i className="fa-solid fa-arrow-down text-sm"></i>
              </a>
              <a
                href="#section-excellence"
                className="explore-pill bg-white text-JBM-black"
              >
                <span className="text-[10px] font-bold">Explore Services</span>
              </a>
            </div>
          </div>
          <div className="text-right flex flex-col items-end gap-3 text-white">
            <button
              id="map-lock-btn"
              className={`lock-btn border-white ${!isLocked ? "bg-orange-500 text-black" : "text-white"}`}
              onClick={() => setIsLocked(!isLocked)}
            >
              <i className={`fa-solid ${!isLocked ? "fa-lock-open" : "fa-lock"} text-lg`}></i>
            </button>
            <p
              id="lock-text"
              className="text-[10px] md:text-[11px] font-bold text-white opacity-80 tracking-[0.15em] uppercase leading-tight text-right"
              dangerouslySetInnerHTML={{
                __html: !isLocked
                  ? "Map Active <br> Click to lock"
                  : "Click to interact <br> with map",
              }}
            ></p>
          </div>
        </div>
      </main>
    </div>
  );
}
