const fs = require('fs');
const path = require('path');

// 1. Search Bars
function updateSearchBars() {
  const files = [
    'src/pages/TradeAdvisoryPage.tsx',
    'src/pages/FleetPage.tsx',
    'src/pages/WarehousePage.tsx',
    'src/components/TopNav.tsx'
  ];

  for (const file of files) {
    const filePath = path.join(__dirname, file);
    if (!fs.existsSync(filePath)) continue;
    
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // Replace old class names
    content = content.replace(/className="([^"]*focus:border-orange-500 transition-colors[^"]*)"/g, (match, classes) => {
      // Remove old border and focus classes
      let newClasses = classes.replace(/border-gray-200 dark:border-white\/10/g, 'border-orange-500/30');
      if (!newClasses.includes('shadow-')) {
        newClasses += ' shadow-[0_0_15px_rgba(249,115,22,0.2)] focus:shadow-[0_0_25px_rgba(249,115,22,0.5)] focus:ring-1 focus:ring-orange-500 transition-all';
      }
      return `className="${newClasses}"`;
    });

    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Updated search bar in ${file}`);
  }
}

// 2. Subheading boxes
// We will manually apply them using regex or targeted string replacements.

updateSearchBars();
