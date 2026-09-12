const fs = require('fs');

let mapCode = fs.readFileSync('src/components/SectionMap.tsx', 'utf8');

// 1. Add import for globalMarkers
if (!mapCode.includes('globalMarkers')) {
  mapCode = mapCode.replace('import L from "leaflet";', 'import L from "leaflet";\nimport { globalMarkers } from "../data/worldMarkers";');
}

// 2. Add globalMarkers to map plotting
const markerLogic = `
    globalMarkers.forEach((point) => {
      const marker = L.marker([point.lat, point.lng], {
        icon: createStarIcon(point.size as "sm" | "md" | "lg"),
      }).addTo(map);

      // Random stats
      const growth = (Math.random() * 15 + 2).toFixed(1) + "%";
      const price = (Math.random() * 50 + 10).toFixed(1) + "M TEU";

      const hudContent = \`
        <div class="font-mono text-[9px] text-orange-500 tracking-widest uppercase mb-1">Intelligence Report</div>
        <div class="font-extrabold text-[13px] tracking-tight uppercase mb-2 border-b border-white/10 pb-1">\${point.loc}</div>
        <div class="flex justify-between gap-8">
            <div>
                <div class="text-[8px] uppercase text-gray-500 font-bold">Growth</div>
                <div class="text-orange-500 font-bold text-[11px]">+\${growth}</div>
            </div>
            <div>
                <div class="text-[8px] uppercase text-gray-500 font-bold">Throughput</div>
                <div class="text-white font-bold text-[11px]">VOL \${price}</div>
            </div>
        </div>
      \`;
      marker.bindTooltip(hudContent, {
        className: "JBM-hud",
        direction: "top",
        sticky: true,
        opacity: 1,
      });
    });
`;

if (!mapCode.includes('globalMarkers.forEach')) {
  mapCode = mapCode.replace('listingData.forEach((point) => {', markerLogic + '\n    listingData.forEach((point) => {');
}

// 3. Add useRef for zoom done flag
if (!mapCode.includes('initialZoomDone')) {
  mapCode = mapCode.replace('const mapInstance = useRef<L.Map | null>(null);', 'const mapInstance = useRef<L.Map | null>(null);\n  const initialZoomDone = useRef(false);');
}

// 4. Update the tile layer logic
const tileRegex = /L\.tileLayer\([^]+?\}\)\.addTo\(map\);/g;

const newTileLogic = `const baseLayer = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 16,
      keepBuffer: 2,
    }).addTo(map);

    baseLayer.on('load', () => {
      if (!initialZoomDone.current) {
        initialZoomDone.current = true;
        setTimeout(() => {
          mapInstance.current?.flyTo([0.3, 37.0], 6, {
            duration: 4,
            easeLinearity: 0.1,
          });
        }, 500); // wait a beat for tiles to render smoothly
      }
    });`;

mapCode = mapCode.replace(tileRegex, newTileLogic);

// 5. Remove the old setTimeout flyTo
mapCode = mapCode.replace(/setTimeout\(\(\) => \{\s*map\.flyTo\(\[0\.3, 37\.0\], 6, \{\s*duration: 4,\s*easeLinearity: 0\.1,\s*\}\);\s*\}, 1200\);/g, '');


fs.writeFileSync('src/components/SectionMap.tsx', mapCode);
