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
    
    // update paragraph text classes inside those boxes
    content = content.replace(/text-gray-700 dark:text-gray-300/g, 'text-white drop-shadow-md');
    // update text-sm md:text-base text-gray-700 dark:text-gray-300 to text-white
    
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Fixed text color in ${page}`);
  }
}
