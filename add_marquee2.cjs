const fs = require('fs');
const path = require('path');

const pages = [
  'WarehousePage.tsx',
  'VehicleDetailPage.tsx'
];

for (const page of pages) {
  const filePath = path.join(__dirname, 'src/pages', page);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // Add import if not exists
    if (!content.includes('TinyMarquee')) {
      const importMatches = [...content.matchAll(/^import .*;$/gm)];
      if (importMatches.length > 0) {
        const lastImport = importMatches[importMatches.length - 1];
        const index = lastImport.index + lastImport[0].length;
        content = content.slice(0, index) + '\nimport { TinyMarquee } from "../components/TinyMarquee";' + content.slice(index);
      } else {
        content = 'import { TinyMarquee } from "../components/TinyMarquee";\n' + content;
      }
      
      content = content.replace(/(\<\/section\>)/, '$1\n      <TinyMarquee />');
      
      fs.writeFileSync(filePath, content, 'utf-8');
      console.log(`Updated ${page}`);
    }
  }
}
