const fs = require('fs');
const path = require('path');

const updates = {
  'TradeAdvisoryPage.tsx': '/images/bg_trade_advisory.jpg',
  'RateEnginePage.tsx': '/images/bg_rate_engine.jpg',
  'CompliancePage.tsx': '/images/bg_compliance.jpg',
  'FleetPage.tsx': '/images/bg_fleet.jpg',
  'WarehousePage.tsx': '/images/bg_warehouse.jpg',
  'EthosPage.tsx': '/images/bg_ethos.jpg',
  'ArchitectPage.tsx': '/images/bg_architect.jpg'
};

for (const [page, newImg] of Object.entries(updates)) {
  const filePath = path.join(__dirname, 'src/pages', page);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // Replace bg-[url('/images/trade.jpg')] etc with the new image
    // Find bg-[url('/images/XXXX.jpg')]
    content = content.replace(/bg-\[url\('\/images\/[^']+\.jpg'\)\]/g, `bg-[url('${newImg}')]`);
    
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Updated ${page} to use ${newImg}`);
  }
}
