const fs = require('fs');
const path = require('path');

const pagePath = path.join(__dirname, 'src/pages/RateEnginePage.tsx');
let content = fs.readFileSync(pagePath, 'utf-8');

content = content.replace(/SADC Transit & Heavy Lift/g, "SADC Trans African & Heavy Lift");
content = content.replace(/Global Imports & Tariffs/g, "Global Transit & Tariffs");

fs.writeFileSync(pagePath, content, 'utf-8');
console.log('Fixed text');
