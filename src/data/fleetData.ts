export type VehicleCategory = "Land Haulage" | "Air Freight" | "Ocean & Port" | "Cold Chain & Hazmat" | "Project Cargo" | "Urban Logistics";

export interface FleetUnit {
  id: string;
  name: string;
  title: string;
  categoryTag: string;
  category: VehicleCategory;
  image: string;
  badges: string[];
  specs: { label: string; value: string }[];
  operationalRange: string;
  description: string;
  features: string[];
}

export const fleetData: FleetUnit[] = [
  // LAND HAULAGE
  {
    id: "heavy-prime-mover",
    name: "Heavy Prime Movers (Scania R560 / Volvo FH16 6x4)",
    title: "Heavy Duty Multi-Axle Prime Mover (Unit #HD-604)",
    categoryTag: "Land Haulage / Cross-Border Heavy Freight",
    category: "Land Haulage",
    image: "/images/warehouse.jpg",
    badges: ["GPS LIVE TRACKED", "KRA BONDED"],
    specs: [
      { label: "Max Gross Weight", value: "Up to 45,000 kg" },
      { label: "Axle Configuration", value: "6x4 Heavy Duty" },
      { label: "Deck", value: "20ft/40ft Tri-Axle Skeletal & Flatbed" },
      { label: "Cargo Compatibility", value: "20ft / 40ft Containers, Flatbed Dry Bulk" },
      { label: "Permit Clearance", value: "EAC / SADC Cross-Border Transit Passes" }
    ],
    operationalRange: "Northern Corridor (Mombasa – Nairobi – Kampala – Kigali)",
    description: "Our core long-haul prime movers provide unparalleled pulling power and reliability across the diverse terrains of East Africa. Designed for continuous cross-border operations with dual-driver accommodations.",
    features: ["KRA Customs Bonded tracking", "Fuel-sentry telematics", "Dual-driver long-haul crew"]
  },
  {
    id: "multi-axle-lowbed",
    name: "Multi-Axle Heavy Lowbeds (Out-of-Gauge)",
    title: "Heavy Lift Modular Lowbed (Unit #HL-110)",
    categoryTag: "Project Cargo / Heavy Lift",
    category: "Project Cargo",
    image: "/images/truck.jpg",
    badges: ["ESCORT MONITORED", "ROUTE CLEARED"],
    specs: [
      { label: "Max Gross Weight", value: "60,000 kg – 120,000 kg" },
      { label: "Deck", value: "Extendable Drop-Deck Lowloader" },
      { label: "Cargo Compatibility", value: "Mining Equipment, Heavy Transformers, Generators" },
      { label: "Permit Clearance", value: "KeNHA / EAC Special Load Permits" }
    ],
    operationalRange: "Cross-Border Mining & Energy Corridors (DRC, Zambia, TZ)",
    description: "Engineered specifically for the energy, construction, and mining sectors. These highly modular, multi-axle trailers distribute massive loads safely over critical bridge infrastructure.",
    features: ["Hydraulic axle leveling", "Route survey clearance", "Certified escort vehicle support"]
  },
  {
    id: "medium-distribution",
    name: "Medium Distribution Rigs (Isuzu F-Series)",
    title: "Medium Distribution Rig (Unit #MD-302)",
    categoryTag: "Land Haulage / Regional Distribution",
    category: "Land Haulage",
    image: "/images/warehouse.jpg",
    badges: ["GPS LIVE TRACKED", "URBAN PERMITTED"],
    specs: [
      { label: "Payload Capacity", value: "10,000 kg – 15,000 kg" },
      { label: "Volume / Type", value: "Curtainsider & Rigid Box" },
      { label: "Cargo Compatibility", value: "FMCG, Palletized Goods, Retail Inventory" },
      { label: "Permit Clearance", value: "National Transit & Urban Access" }
    ],
    operationalRange: "Regional Trunk Roads & Inter-City Warehouses",
    description: "The workhorse of domestic distribution. Bridging the gap between our major distribution centers and urban retail hubs with high efficiency and rapid unloading capabilities.",
    features: ["Side-loading access doors", "Automated tail lifts", "Urban delivery permits"]
  },
  {
    id: "last-mile-van",
    name: "Last-Mile Express Vans",
    title: "Last-Mile Express Van (Unit #LM-414)",
    categoryTag: "Urban Logistics / Last-Mile",
    category: "Urban Logistics",
    image: "/images/urban.jpg",
    badges: ["AI ROUTED", "ePOD ENABLED"],
    specs: [
      { label: "Payload Capacity", value: "1,500 kg – 3,500 kg" },
      { label: "Volume", value: "High-Roof Urban Vans" },
      { label: "Cargo Compatibility", value: "E-Commerce, Parcels, Urgent Spares" },
      { label: "Permit Clearance", value: "City Council Unlimited Access" }
    ],
    operationalRange: "Nationwide Kenya Urban Hubs & Direct-to-Door",
    description: "High-density distribution units engineered specifically for tight urban navigation. Perfect for rapid e-commerce fulfillment and daily retail drop-offs.",
    features: ["ePOD (Electronic Proof of Delivery)", "Automated route-optimization software"]
  },

  // COLD CHAIN
  {
    id: "multi-temp-reefer",
    name: "Multi-Temp Reefers (Thermo King SLXi-400)",
    title: "Multi-Temp Reefer Unit (Unit #CC-882)",
    categoryTag: "Cold Chain / Perishable Export",
    category: "Cold Chain & Hazmat",
    image: "/images/ship.jpg",
    badges: ["LIVE TEMP MONITORED", "IOT ALERT INTEGRATED"],
    specs: [
      { label: "Temperature Range", value: "-25°C to +20°C" },
      { label: "Payload Capacity", value: "28,000 kg (22 Euro Pallets)" },
      { label: "Cargo Compatibility", value: "Fresh Produce Export (Avocados, Flowers), Meat & Dairy" },
      { label: "Permit Clearance", value: "KRA Bonded & Phytosanitary Cleared" }
    ],
    operationalRange: "Fresh Produce Export Zones, Farm-to-Port/Airport",
    description: "State-of-the-art refrigerated transport protecting the integrity of East Africa's most valuable agricultural exports. From farm gate directly to the tarmac.",
    features: ["Dual-zone climate controls", "Continuous IoT thermal logging", "Automated alert triggers"]
  },
  {
    id: "pharma-sprinter",
    name: "Pharma-Grade Sprinters (Cold-Box)",
    title: "Pharma-Grade Sprinter (Unit #PH-901)",
    categoryTag: "Cold Chain / Medical Logistics",
    category: "Cold Chain & Hazmat",
    image: "/images/cold.jpg",
    badges: ["GDP CERTIFIED", "TAMPER PROOF"],
    specs: [
      { label: "Temperature Range", value: "+2°C to +8°C & Deep Freeze" },
      { label: "Payload Capacity", value: "2,000 kg" },
      { label: "Cargo Compatibility", value: "Emergency Vaccines, Diagnostics, High-Value Pharma" },
      { label: "Permit Clearance", value: "GDP (Good Distribution Practice) Certified" }
    ],
    operationalRange: "National Health Facilities, Labs, Airport Pharma Hubs",
    description: "Specialized rapid-response medical transport units. Engineered to guarantee zero thermal variance for life-saving therapeutics and temperature-sensitive diagnostics.",
    features: ["GDP (Good Distribution Practice) certified", "Backup battery power units", "Tamper locks"]
  },

  // AIR FREIGHT
  {
    id: "b737-freighter",
    name: "Boeing 737-800F Dedicated Freighter",
    title: "Boeing 737-800F Cargo Freighter (Tail #5Y-JBM)",
    categoryTag: "Air Freight / Regional Cargo",
    category: "Air Freight",
    image: "/images/plane.jpg",
    badges: ["PRIORITY CLEARANCE", "AOG READY"],
    specs: [
      { label: "Payload Capacity", value: "23,900 kg / 185 m³ total cargo volume" },
      { label: "Loading Architecture", value: "11 main-deck pallet positions + lower-hold" },
      { label: "Cargo Compatibility", value: "Time-critical spare parts, high-value electronics" },
      { label: "Permit Clearance", value: "KCAA / IATA Approved" }
    ],
    operationalRange: "High-frequency regional routes (Nairobi JKIA, Entebbe, Kigali, Juba, Kinshasa)",
    description: "Our dedicated regional feeder aircraft provides express connectivity across East and Central Africa, bridging infrastructure gaps where terrestrial transit is unviable.",
    features: ["Time-critical spare parts logistics", "High-value electronics security", "Humanitarian emergency aid delivery"]
  },
  {
    id: "wide-body-intercontinental",
    name: "Wide-Body Intercontinental Cargo Holds",
    title: "Wide-Body Freighter (Tail #A6-JBM)",
    categoryTag: "Air Freight / Global Intercontinental",
    category: "Air Freight",
    image: "/images/plane.jpg",
    badges: ["GLOBAL REACH", "HIGH VOLUME"],
    specs: [
      { label: "Payload Capacity", value: "Up to 102,000 kg per flight run" },
      { label: "Aircraft Types", value: "B77F / A330-200F Partner Network" },
      { label: "Cargo Compatibility", value: "Horticultural exports, industrial machinery" },
      { label: "Permit Clearance", value: "Global Aviation Authorities" }
    ],
    operationalRange: "Global trade lanes linking East Africa to Europe, Middle East (DXB/DWC), and Asia",
    description: "Leveraging our massive consolidation capabilities, we secure prime deck space on the world's most capable intercontinental heavy lifters.",
    features: ["High-volume horticultural exports", "Industrial machinery imports", "Seamless partner network integration"]
  },

  // OCEAN & PORT
  {
    id: "regional-container-feeder",
    name: "Regional Container Feeders",
    title: "Regional Container Feeder (Vessel #JBM-ATLANTIC)",
    categoryTag: "Ocean Freight / Feeder Network",
    category: "Ocean & Port",
    image: "/images/ship.jpg",
    badges: ["SATELLITE AIS TRACKED", "REEFER CAPABLE"],
    specs: [
      { label: "Vessel Size", value: "1,200 – 3,000 TEU" },
      { label: "Reefer Capacity", value: "400+ refrigerated plug slots" },
      { label: "Cargo Compatibility", value: "FCL (Full Container Load), Breakbulk" },
      { label: "Permit Clearance", value: "IMO Compliant & Insured" }
    ],
    operationalRange: "Feeder connections linking Port of Mombasa & Dar es Salaam to Middle East hubs",
    description: "Agile, scheduled ocean feeder vessels designed to connect major East African ports to primary transshipment hubs in the Middle East and Indian Ocean.",
    features: ["Specialized regional container transport", "High reefer plug availability", "Scheduled reliable sailings"]
  },
  {
    id: "port-drayage-rigs",
    name: "Port Drayage Rigs & Terminal Reach Stackers",
    title: "Heavy-Duty Port Terminal Rig (Unit #PORT-88)",
    categoryTag: "Ocean & Port / Terminal Handling",
    category: "Ocean & Port",
    image: "/images/ship.jpg",
    badges: ["PORT AUTHORITY CLEARED", "24/7 DEPLOYMENT"],
    specs: [
      { label: "Equipment Specs", value: "45-Ton Container Handlers & Tractors" },
      { label: "Max Gross Weight", value: "Up to 45 Tons" },
      { label: "Cargo Compatibility", value: "20ft/40ft Loaded Containers" },
      { label: "Permit Clearance", value: "KPA Terminal Access Permit" }
    ],
    operationalRange: "Mombasa Port, Naivasha ICD, and Nairobi Inland Container Depots",
    description: "Built for the brutal environment of the port tarmac. These specialized rigs perform relentless, short-distance shuttle runs to clear cargo from beneath the cranes rapidly.",
    features: ["Immediate off-vessel container retrieval", "Dedicated short-haul terminal tractors", "Heavy-duty 45-Ton Reach Stackers"]
  }
];
