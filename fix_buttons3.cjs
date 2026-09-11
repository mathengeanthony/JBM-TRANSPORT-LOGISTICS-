const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/components/SectionExcellence.tsx');
let content = fs.readFileSync(filePath, 'utf-8');

const lines = content.split('\n');

const startIdx = lines.findIndex(l => l.includes('grid grid-cols-2 md:grid-cols-4 gap-2 mb-4 shrink-0'));
const endIdx = lines.findIndex(l => l.includes('Our Expertise'));

console.log(startIdx, endIdx);
