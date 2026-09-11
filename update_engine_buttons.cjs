const fs = require('fs');
const path = require('path');

const pagePath = path.join(__dirname, 'src/pages/RateEnginePage.tsx');
let content = fs.readFileSync(pagePath, 'utf-8');

// Replace the placeholder navigation logic in RateEnginePage.tsx
const oldNavigation = /onClick=\{\(\) => \{\n\s*if \(activeScope === 'kenya'\) navigate\('\/fleet'\);\n\s*else if \(activeScope === 'eac'\) navigate\('\/#section-industries'\); \/\/ or whichever id represents African logistics network\n\s*else navigate\('\/#section-market'\); \/\/ global\/sadc to global freight network\n\s*\}\}/g;

const newNavigation = `onClick={() => {
                if (activeScope === 'kenya') navigate('/fleet');
                else if (activeScope === 'eac') navigate('/#section-commercial'); // Third section mapped to commercial
                else navigate('/#section-land'); // Fourth section mapped to global freight network
              }}`;

content = content.replace(oldNavigation, newNavigation);

fs.writeFileSync(pagePath, content, 'utf-8');
console.log('Fixed navigation in RateEnginePage.tsx');
