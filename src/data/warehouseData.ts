export type WarehouseCategory = "Bonded & Customs" | "Cold Storage" | "E-Commerce Fulfillment" | "Hazmat & Heavy Yards" | "Cross-Docking";

export interface WarehouseUnit {
  id: string;
  name: string;
  title: string;
  categoryTag: string;
  category: WarehouseCategory;
  image: string;
  badges: string[];
  specs: { label: string; value: string }[];
  operationalRange: string;
  description: string;
  features: string[];
  proximity: { label: string; distance: string }[];
}

export const warehouseData: WarehouseUnit[] = [
  {
    id: "nbo-01-athi-river",
    name: "Athi River Mega Fulfillment Hub",
    title: "Athi River Logistics Park (Hub #NBO-01)",
    categoryTag: "Class-A Dry Storage & Cross-Docking",
    category: "E-Commerce Fulfillment",
    image: "/images/green.jpg",
    badges: ["TIER-3 WMS", "24/7 TELEMATICS"],
    specs: [
      { label: "Storage Footprint", value: "45,000 m² Total Footprint" },
      { label: "Clear Height", value: "12 meters Stacking Height" },
      { label: "Capacity", value: "35,000 Pallet Slots" },
      { label: "Access Doors", value: "16 Automated Hydraulic Dock Levelers" }
    ],
    operationalRange: "Nairobi EPZ Zone",
    description: "High-velocity fulfillment center along the Nairobi Expressway. Engineered for rapid retail distribution and e-commerce cross-docking.",
    features: ["Tier-3 WMS integration", "24/7 thermal security cameras", "Selective Pallet Racking"],
    proximity: [
      { label: "Nairobi Expressway", distance: "2 mins" },
      { label: "Jomo Kenyatta International Airport (JKIA)", distance: "18 km (15 mins)" },
      { label: "Nairobi ICD (Embakasi)", distance: "22 km" }
    ]
  },
  {
    id: "mba-02-mombasa-gateway",
    name: "Mombasa Gateway Bonded Terminal",
    title: "Mombasa Gateway Terminal (Hub #MBA-02)",
    categoryTag: "KRA Customs-Bonded Yard",
    category: "Bonded & Customs",
    image: "/images/green.jpg",
    badges: ["KRA BONDED", "LIVE iCMS LINK"],
    specs: [
      { label: "Storage Footprint", value: "15,000 m² Open / 10,000 m² Covered" },
      { label: "Capacity", value: "Heavy Freight Racking" },
      { label: "Cargo Compatibility", value: "Containers, Breakbulk, Vehicles" },
      { label: "Handling Equipment", value: "45-Ton Reach Stackers" }
    ],
    operationalRange: "Changamwe, Mombasa Port Gateway",
    description: "KRA customs-bonded yard at Mombasa Port. Provides secure, duty-deferred holding and container reach-stacker clearance.",
    features: ["Duty-deferred holding", "Live KRA SIMBA/iCMS system link", "Heavy-duty port tarmac"],
    proximity: [
      { label: "Kilindini Port Container Terminal", distance: "3.5 km" },
      { label: "Mombasa Port Highway Access", distance: "0.5 km" }
    ]
  },
  {
    id: "nbo-02-jkia-pharma",
    name: "JKIA Pharma & Fresh Produce Cold Hub",
    title: "JKIA Cold Storage Hub (Hub #NBO-02)",
    categoryTag: "GDP Cold Storage (-25°C to +15°C)",
    category: "Cold Storage",
    image: "/images/cold.jpg",
    badges: ["GDP CERTIFIED", "THERMAL LOGGED"],
    specs: [
      { label: "Storage Footprint", value: "8,000 m³ Climate Controlled" },
      { label: "Temperature Zones", value: "Multi-Zone Cold Bays (-25°C to +15°C)" },
      { label: "Compliance", value: "GDP Certified, ISO 9001:2015" },
      { label: "Power", value: "Redundant backup diesel generators" }
    ],
    operationalRange: "JKIA Freight Terminal Zone",
    description: "Direct Runway Ramp Access cold facilities at JKIA. Engineered to guarantee zero thermal variance for high-value pharma and perishables.",
    features: ["Continuous IoT thermal logging", "Sealed dock seals", "Multi-temp zone controls"],
    proximity: [
      { label: "JKIA Airside Tarmac", distance: "Direct Access" },
      { label: "Nairobi Expressway", distance: "5 km" }
    ]
  },
  {
    id: "nvs-01-naivasha-icd",
    name: "Naivasha Intermodal ICD Depot",
    title: "Naivasha Intermodal Depot (Hub #NVS-01)",
    categoryTag: "Bulk Handling & Intermodal Transit",
    category: "Hazmat & Heavy Yards",
    image: "/images/cold.jpg",
    badges: ["SGR RAIL ACCESS", "ARMED ESCORT"],
    specs: [
      { label: "Storage Footprint", value: "20,000 m² Staging Yard" },
      { label: "Handling Equipment", value: "Heavy-lift cranes (45-Ton)" },
      { label: "Capabilities", value: "SGR rail-to-truck container transfers" },
      { label: "Security", value: "24-hour armed escort staging" }
    ],
    operationalRange: "Naivasha Inland Container Depot",
    description: "Strategic intermodal node offering direct SGR rail siding access. Ideal for out-of-gauge machinery holding and heavy container transit staging.",
    features: ["OOG Machinery Holding", "Direct SGR Rail transfers", "Heavy lift infrastructure"],
    proximity: [
      { label: "Naivasha SGR Terminal", distance: "Direct Access" },
      { label: "Northern Corridor Highway", distance: "2 km" }
    ]
  },
  {
    id: "kla-01-kampala-central",
    name: "Kampala Central Corridor Hub",
    title: "Kampala Central Hub (Hub #KLA-01)",
    categoryTag: "Cross-Border Distribution & LCL Depot",
    category: "Cross-Docking",
    image: "/images/warehouse.jpg",
    badges: ["OSBP LINKED", "LCL DEPOT"],
    specs: [
      { label: "Capacity", value: "12,000 Pallet Slots" },
      { label: "Access Doors", value: "Split-Shipment Bays" },
      { label: "Visibility", value: "Real-time inventory tracking portal" },
      { label: "Compliance", value: "East African Customs Union" }
    ],
    operationalRange: "Namanve Industrial Park, Uganda",
    description: "The primary cross-border distribution point on the Northern Corridor. Enables rapid LCL deconsolidation and One-Stop Border Post linkage.",
    features: ["One-Stop Border Post (OSBP) fast-track linkage", "Real-time inventory tracking client portal", "Cross-border compliance"],
    proximity: [
      { label: "Northern Corridor Highway", distance: "Frontage Access" },
      { label: "Kampala City Center", distance: "12 km" },
      { label: "Malaba Border Post", distance: "200 km" }
    ]
  }
];
