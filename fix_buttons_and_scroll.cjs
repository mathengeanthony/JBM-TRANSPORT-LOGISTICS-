const fs = require('fs');
const path = require('path');

// 1. Fix SectionExcellence.tsx
const excellencePath = path.join(__dirname, 'src/components/SectionExcellence.tsx');
let excellence = fs.readFileSync(excellencePath, 'utf-8');

// Add imports
if (!excellence.includes('useNavigate')) {
  excellence = excellence.replace('import { useEffect, useRef, useState } from "react";', 'import { useEffect, useRef, useState } from "react";\nimport { useNavigate } from "react-router-dom";\nimport { Map, MapPinned, Globe2, Earth } from "lucide-react";');
}

// Add useNavigate
if (!excellence.includes('const navigate = useNavigate();')) {
  excellence = excellence.replace('const trackRef = useRef<HTMLDivElement>(null);', 'const trackRef = useRef<HTMLDivElement>(null);\n  const navigate = useNavigate();\n  const [hasInteracted, setHasInteracted] = useState(false);');
}

// Update scroll logic
excellence = excellence.replace(/track\.addEventListener\("mouseenter".*?\n.*?track\.addEventListener\("touchstart".*?\n.*?track\.addEventListener\("mouseleave".*?\n.*?track\.addEventListener\("touchend".*?\}\);/s, `
    track.addEventListener("mouseenter", () => {
      setHasInteracted(true);
      clearInterval(autoScroll);
    });
    track.addEventListener("touchstart", () => {
      setHasInteracted(true);
      clearInterval(autoScroll);
    });
`);

// Also change the useEffect to respect hasInteracted?
// Actually if hasInteracted is true, we just don't start the scroll again because we removed mouseleave and touchend. 
// But startScroll is still called initially. Which is perfect.

// Replace buttons
const oldButtons = /<div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4 shrink-0">.*?<\/div>.*?<\/div>.*?<\/div>.*?<\/div>/s;

const newButtons = `<div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4 shrink-0">
          <div onClick={() => navigate('/rate-engine?scope=kenya')} className="bg-white border border-gray-300 shadow-sm dark:bg-[#222] dark:border-transparent rounded-xl px-4 md:px-5 h-8 md:h-10 flex flex-row items-center justify-between hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors cursor-pointer group hover:border-orange-500">
            <div className="flex items-center gap-2 md:gap-3">
              <Map className="w-3 h-3 md:w-4 md:h-4 text-gray-500 dark:text-gray-400 group-hover:text-current transition-colors" />
              <div>
                <span className="text-[8px] md:text-[9px] font-bold uppercase tracking-widest opacity-50 block text-orange-500">
                  Mode 01
                </span>
                <h4 className="text-[9px] md:text-xs font-bold uppercase tracking-wide text-JBM-charcoal dark:text-white group-hover:text-current">
                  Kenya A-B
                </h4>
              </div>
            </div>
            <i className="fa-solid fa-arrow-right -rotate-45 text-[10px] md:text-xs opacity-0 group-hover:opacity-100 transition-opacity text-current"></i>
          </div>
          <div onClick={() => navigate('/rate-engine?scope=eac')} className="bg-white border border-gray-300 shadow-sm dark:bg-[#222] dark:border-transparent rounded-xl px-4 md:px-5 h-8 md:h-10 flex flex-row items-center justify-between hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors cursor-pointer group hover:border-orange-500">
            <div className="flex items-center gap-2 md:gap-3">
              <MapPinned className="w-3 h-3 md:w-4 md:h-4 text-gray-500 dark:text-gray-400 group-hover:text-current transition-colors" />
              <div>
                <span className="text-[8px] md:text-[9px] font-bold uppercase tracking-widest opacity-50 block text-orange-500">
                  Mode 02
                </span>
                <h4 className="text-[9px] md:text-xs font-bold uppercase tracking-wide text-JBM-charcoal dark:text-white group-hover:text-current whitespace-nowrap">
                  EAC Cross Border
                </h4>
              </div>
            </div>
            <i className="fa-solid fa-arrow-right -rotate-45 text-[10px] md:text-xs opacity-0 group-hover:opacity-100 transition-opacity text-current"></i>
          </div>
          <div onClick={() => navigate('/rate-engine?scope=sadc')} className="bg-white border border-gray-300 shadow-sm dark:bg-[#222] dark:border-transparent rounded-xl px-4 md:px-5 h-8 md:h-10 flex flex-row items-center justify-between hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors cursor-pointer group hover:border-orange-500">
            <div className="flex items-center gap-2 md:gap-3">
              <Earth className="w-3 h-3 md:w-4 md:h-4 text-gray-500 dark:text-gray-400 group-hover:text-current transition-colors" />
              <div>
                <span className="text-[8px] md:text-[9px] font-bold uppercase tracking-widest opacity-50 block text-orange-500">
                  Mode 03
                </span>
                <h4 className="text-[9px] md:text-xs font-bold uppercase tracking-wide text-JBM-charcoal dark:text-white group-hover:text-current whitespace-nowrap">
                  SADC Trans-Africa
                </h4>
              </div>
            </div>
            <i className="fa-solid fa-arrow-right -rotate-45 text-[10px] md:text-xs opacity-0 group-hover:opacity-100 transition-opacity text-current"></i>
          </div>
          <div onClick={() => navigate('/rate-engine?scope=global')} className="bg-white border border-gray-300 shadow-sm dark:bg-[#222] dark:border-transparent rounded-xl px-4 md:px-5 h-8 md:h-10 flex flex-row items-center justify-between hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors cursor-pointer group hover:border-orange-500">
            <div className="flex items-center gap-2 md:gap-3">
              <Globe2 className="w-3 h-3 md:w-4 md:h-4 text-gray-500 dark:text-gray-400 group-hover:text-current transition-colors" />
              <div>
                <span className="text-[8px] md:text-[9px] font-bold uppercase tracking-widest opacity-50 block text-orange-500">
                  Mode 04
                </span>
                <h4 className="text-[9px] md:text-xs font-bold uppercase tracking-wide text-JBM-charcoal dark:text-white group-hover:text-current">
                  Global Transit
                </h4>
              </div>
            </div>
            <i className="fa-solid fa-arrow-right -rotate-45 text-[10px] md:text-xs opacity-0 group-hover:opacity-100 transition-opacity text-current"></i>
          </div>
        </div>`;

excellence = excellence.replace(oldButtons, newButtons);

fs.writeFileSync(excellencePath, excellence, 'utf-8');
console.log('Updated SectionExcellence.tsx');

// 2. Modify RateEnginePage.tsx to accept query params
const rateEnginePath = path.join(__dirname, 'src/pages/RateEnginePage.tsx');
let rateEngine = fs.readFileSync(rateEnginePath, 'utf-8');

if (!rateEngine.includes('useSearchParams')) {
  rateEngine = rateEngine.replace('import { useState } from "react";', 'import { useState, useEffect } from "react";\nimport { useSearchParams } from "react-router-dom";');
}

rateEngine = rateEngine.replace('export function RateEnginePage() {\n  const [activeScope, setActiveScope] = useState<ScopeType>("kenya");', 
`export function RateEnginePage() {
  const [searchParams] = useSearchParams();
  const initialScope = (searchParams.get("scope") as ScopeType) || "kenya";
  const [activeScope, setActiveScope] = useState<ScopeType>(initialScope);
  
  useEffect(() => {
    const scope = searchParams.get("scope") as ScopeType;
    if (scope && ["kenya", "eac", "sadc", "global"].includes(scope)) {
      setActiveScope(scope);
    }
  }, [searchParams]);`);

fs.writeFileSync(rateEnginePath, rateEngine, 'utf-8');
console.log('Updated RateEnginePage.tsx');
