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
    
    // Find the image div
    // <div className="absolute inset-0 bg-[url('/images/bg_trade_advisory.jpg')] bg-cover bg-center opacity-100 transition-opacity duration-700"></div>
    
    // We will change the image div to have opacity-80, and add a black background to the parent OR add a dark overlay.
    // Let's just insert a dark overlay after the image div.
    
    content = content.replace(
      /(<div className="absolute inset-0 bg-\[url\('\/images\/[^']+'\)\] bg-cover bg-center opacity-100 transition-opacity duration-700"><\/div>)/g,
      '$1\n            <div className="absolute inset-0 bg-black/60"></div>'
    );
    
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Added overlay in ${page}`);
  }
}
