const fs = require('fs');
const path = require('path');

const pages = [
  'TradeAdvisoryPage.tsx',
  'RateEnginePage.tsx',
  'CompliancePage.tsx',
  'FleetPage.tsx',
  'WarehousePage.tsx',
  'EthosPage.tsx',
  'ArchitectPage.tsx'
];

for (const page of pages) {
  const filePath = path.join(__dirname, 'src/pages', page);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // Change image opacity to 90
    content = content.replace(/opacity-80 transition-opacity/g, 'opacity-90 transition-opacity');
    // Change overlay to be lighter so the image is more visible (from 80% dark to 40% dark)
    content = content.replace(/bg-\[#0a0a0a\]\/80/g, 'bg-[#0a0a0a]/40');
    
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Updated opacity in ${page}`);
  }
}
