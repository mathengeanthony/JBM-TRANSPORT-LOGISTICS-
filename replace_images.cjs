const fs = require('fs');
const path = require('path');

const images = [
  '/images/truck.jpg',
  '/images/ship.jpg',
  '/images/plane.jpg',
  '/images/warehouse.jpg',
  '/images/cold.jpg',
  '/images/green.jpg',
  '/images/trade.jpg',
  '/images/urban.jpg'
];

function getContextualImage(line) {
  const l = line.toLowerCase();
  if (l.includes('air') || l.includes('flight') || l.includes('plane')) return '/images/plane.jpg';
  if (l.includes('ocean') || l.includes('ship') || l.includes('port') || l.includes('marine')) return '/images/ship.jpg';
  if (l.includes('cold') || l.includes('pharm') || l.includes('temp')) return '/images/cold.jpg';
  if (l.includes('warehouse') || l.includes('store') || l.includes('rack') || l.includes('pallet')) return '/images/warehouse.jpg';
  if (l.includes('green') || l.includes('eco') || l.includes('solar') || l.includes('esg')) return '/images/green.jpg';
  if (l.includes('trade') || l.includes('data') || l.includes('analytic') || l.includes('tech')) return '/images/trade.jpg';
  if (l.includes('urban') || l.includes('city') || l.includes('van') || l.includes('last mile')) return '/images/urban.jpg';
  if (l.includes('truck') || l.includes('fleet') || l.includes('land') || l.includes('road')) return '/images/truck.jpg';
  
  // Random fallback
  return images[Math.floor(Math.random() * images.length)];
}

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else { 
      if (file.endsWith('.ts') || file.endsWith('.tsx')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk(path.join(__dirname, 'src'));

let replacedCount = 0;

for (const file of files) {
  let content = fs.readFileSync(file, 'utf-8');
  let newContent = content;
  
  const regex = /https:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9-]+[^"'\s\)]*/g;
  
  newContent = content.replace(regex, (match, offset) => {
    // get a bit of context around the match (e.g. 100 characters before and after)
    const contextStart = Math.max(0, offset - 150);
    const contextEnd = Math.min(content.length, offset + match.length + 150);
    const contextString = content.substring(contextStart, contextEnd);
    replacedCount++;
    return getContextualImage(contextString);
  });
  
  if (newContent !== content) {
    fs.writeFileSync(file, newContent, 'utf-8');
    console.log(`Updated images in ${file}`);
  }
}

console.log(`Replaced ${replacedCount} images.`);
