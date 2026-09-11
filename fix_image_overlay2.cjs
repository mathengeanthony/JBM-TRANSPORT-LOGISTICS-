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
    
    // update opacity-100 to opacity-80
    content = content.replace(/opacity-100 transition-opacity/g, 'opacity-80 transition-opacity');
    // update bg-black/60 to bg-black/80
    content = content.replace(/<div className="absolute inset-0 bg-black\/60"><\/div>/g, '<div className="absolute inset-0 bg-[#0a0a0a]/80"></div>');
    
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Updated overlay in ${page}`);
  }
}
