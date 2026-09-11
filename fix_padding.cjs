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
    
    // Replace the exact padding class string in the image box containers
    const oldStr = 'rounded-2xl p-6 md:p-8 border border-orange-500/10';
    const newStr = 'rounded-2xl -ml-4 sm:-ml-6 md:-ml-8 p-4 sm:p-6 md:p-8 border border-orange-500/10';
    
    if (content.includes(oldStr)) {
      content = content.replace(oldStr, newStr);
      fs.writeFileSync(filePath, content, 'utf-8');
      console.log(`Updated ${page}`);
    } else {
      console.log(`String not found in ${page}`);
    }
  }
}
