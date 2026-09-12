const fs = require('fs');
let css = fs.readFileSync('src/index.css', 'utf8');

// Remove existing dark mode leaflet-layer filter
css = css.replace(/html\.dark \.leaflet-layer \{.*?\}\n?/g, '');
css = css.replace(/\.leaflet-layer \{.*?\}\n?/g, '');

// Append the new filters
css += `\n
/* --- CUSTOM OSM MAP STYLING --- */
.leaflet-layer { 
  filter: grayscale(100%) opacity(70%) brightness(1.1) contrast(95%); 
}
html.dark .leaflet-layer { 
  filter: invert(100%) hue-rotate(180deg) brightness(95%) contrast(90%) grayscale(80%); 
}
`;
fs.writeFileSync('src/index.css', css);
