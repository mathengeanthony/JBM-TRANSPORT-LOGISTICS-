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
    
    // 1. Boost the image opacity
    const oldImgOpacity = 'opacity-5 dark:opacity-10 group-hover:opacity-10 dark:group-hover:opacity-20';
    const newImgOpacity = 'opacity-40 dark:opacity-50 group-hover:opacity-50 dark:group-hover:opacity-60';
    
    // 2. Adjust the gradient overlay to let the image show through clearly, while keeping text readable on the left
    const oldGradient = 'from-white/90 to-white/80 dark:from-[#0a0a0a]/90 dark:to-[#0a0a0a]/80 backdrop-blur-sm';
    const newGradient = 'from-gray-50 via-gray-50/80 to-transparent dark:from-[#0a0a0a] dark:via-[#0a0a0a]/80 dark:to-transparent';

    let updated = false;
    
    if (content.includes(oldImgOpacity)) {
      content = content.replace(new RegExp(oldImgOpacity, 'g'), newImgOpacity);
      updated = true;
    }
    
    if (content.includes(oldGradient)) {
      content = content.replace(new RegExp(oldGradient, 'g'), newGradient);
      updated = true;
    }

    if (updated) {
      fs.writeFileSync(filePath, content, 'utf-8');
      console.log(`Fixed visibility in ${page}`);
    } else {
      console.log(`Strings not found in ${page}`);
    }
  }
}
