const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/components/SectionExcellence.tsx');
let content = fs.readFileSync(filePath, 'utf-8');

const lines = content.split('\n');
const startIdx = 191; 

// Find where "Our Expertise" section begins
let endIdx = lines.findIndex((l, i) => i > 192 && l.includes('<div className="flex items-center gap-3 mb-4 pl-1">'));

const newButtons = `        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4 shrink-0">
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

const newLines = [
  ...lines.slice(0, startIdx),
  newButtons,
  ...lines.slice(endIdx)
];

fs.writeFileSync(filePath, newLines.join('\n'), 'utf-8');
console.log('Fixed buttons');
