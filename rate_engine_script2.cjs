const fs = require('fs');
const path = require('path');

const pagePath = path.join(__dirname, 'src/pages/RateEnginePage.tsx');
let content = fs.readFileSync(pagePath, 'utf-8');

if (!content.includes('import { useNavigate } from "react-router-dom";')) {
    content = content.replace('import { useSearchParams } from "react-router-dom";', 'import { useSearchParams, useNavigate } from "react-router-dom";');
}

if (!content.includes('const navigate = useNavigate();')) {
    content = content.replace('const [searchParams] = useSearchParams();', 'const [searchParams] = useSearchParams();\n  const navigate = useNavigate();');
}

const buttonsHtml = `
          {/* Dynamic Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8 md:mt-12">
            <button
              onClick={() => {
                if (activeScope === 'kenya') navigate('/fleet');
                else if (activeScope === 'eac') navigate('/#section-industries'); // or whichever id represents African logistics network
                else navigate('/#section-market'); // global/sadc to global freight network
              }}
              className="group bg-JBM-charcoal dark:bg-white text-white dark:text-black px-6 md:px-8 py-3 md:py-4 rounded-xl flex items-center justify-between hover:bg-orange-500 hover:text-white transition-all shadow-md w-full sm:w-auto flex-1 min-w-0"
            >
              <div className="flex items-center gap-3">
                <i className="fa-solid fa-graduation-cap text-sm md:text-base"></i>
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest truncate">
                  {activeScope === 'kenya' && "Kenyan Transport Knowledge"}
                  {activeScope === 'eac' && "EAC Cross Border Knowledge"}
                  {(activeScope === 'sadc' || activeScope === 'global') && "Global Imports Knowledge"}
                </span>
              </div>
              <i className="fa-solid fa-arrow-right -rotate-45 text-[10px] opacity-50 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all shrink-0 ml-2"></i>
            </button>
            <button
              className="group bg-white dark:bg-transparent border border-gray-300 dark:border-white/20 text-JBM-charcoal dark:text-white px-6 md:px-8 py-3 md:py-4 rounded-xl flex items-center justify-between hover:border-orange-500 hover:text-orange-500 transition-all shadow-md w-full sm:w-auto flex-1 min-w-0"
            >
              <div className="flex items-center gap-3">
                <i className="fa-solid fa-scale-balanced text-sm md:text-base"></i>
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest truncate">
                  Compliance and Info
                </span>
              </div>
              <i className="fa-solid fa-arrow-right -rotate-45 text-[10px] opacity-50 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all shrink-0 ml-2"></i>
            </button>
          </div>
`;

// Insert the buttons right after the Metrics Grid
content = content.replace(
    /<\/AnimatePresence>\n          <\/div>\n        <\/div>\n      <\/section>/,
    `</AnimatePresence>\n          </div>${buttonsHtml}\n        </div>\n      </section>`
);

fs.writeFileSync(pagePath, content, 'utf-8');
console.log('Added buttons');
