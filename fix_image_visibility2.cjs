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
    
    // Remove the gradient overlay completely
    content = content.replace(/<div className="absolute inset-0 bg-gradient-to-r[^>]+><\/div>\n?\s*/g, '');
    
    // Change opacity to 100 on the image
    content = content.replace(/opacity-\d+ dark:opacity-\d+ group-hover:opacity-\d+ dark:group-hover:opacity-\d+/g, 'opacity-100');
    
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Fixed visibility in ${page}`);
  }
}
