const fs = require('fs');
const path = require('path');

const pages = [
  'FleetPage.tsx',
  'WarehousingPage.tsx',
  'WarehouseDetailPage.tsx',
  'RateEnginePage.tsx',
  'TradeAdvisoryPage.tsx',
  'CompliancePage.tsx',
  'EthosPage.tsx',
  'ArchitectPage.tsx'
];

for (const page of pages) {
  const filePath = path.join(__dirname, 'src/pages', page);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // Add import if not exists
    if (!content.includes('TinyMarquee')) {
      content = content.replace(/(import .*?;?\n)/, '$1import { TinyMarquee } from "../components/TinyMarquee";\n');
      
      // Inject component right after the first </section>
      content = content.replace(/(\<\/section\>)/, '$1\n      <TinyMarquee />');
      
      fs.writeFileSync(filePath, content, 'utf-8');
      console.log(`Updated ${page}`);
    }
  }
}
