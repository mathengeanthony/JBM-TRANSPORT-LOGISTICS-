const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/components/SectionExcellence.tsx');
let content = fs.readFileSync(filePath, 'utf-8');

const lines = content.split('\n');
const startIdx = 191; // 0-indexed, so line 192 is 191
let endIdx = lines.findIndex((l, i) => i > 192 && l.includes('Our Expertise'));

console.log(startIdx, endIdx);
