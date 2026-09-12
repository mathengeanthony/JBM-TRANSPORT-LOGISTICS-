const fs = require('fs');

const markers = [];

// 47 Kenya Counties (Approximate coordinates)
const kenyaCounties = [
  {name: "Mombasa", lat: -4.0435, lng: 39.6682}, {name: "Kwale", lat: -4.1816, lng: 39.4606},
  {name: "Kilifi", lat: -3.5107, lng: 39.9093}, {name: "Tana River", lat: -1.5, lng: 40.0},
  {name: "Lamu", lat: -2.2717, lng: 40.9020}, {name: "Taita-Taveta", lat: -3.3161, lng: 38.4850},
  {name: "Garissa", lat: -0.4532, lng: 39.6461}, {name: "Wajir", lat: 1.7471, lng: 40.0573},
  {name: "Mandera", lat: 3.9373, lng: 41.8670}, {name: "Marsabit", lat: 2.3333, lng: 37.9833},
  {name: "Isiolo", lat: 0.3546, lng: 37.5833}, {name: "Meru", lat: 0.0463, lng: 37.6559},
  {name: "Tharaka-Nithi", lat: -0.3333, lng: 38.0}, {name: "Embu", lat: -0.5333, lng: 37.45},
  {name: "Kitui", lat: -1.3667, lng: 38.0167}, {name: "Machakos", lat: -1.5167, lng: 37.2667},
  {name: "Makueni", lat: -1.8, lng: 37.6167}, {name: "Nyandarua", lat: -0.1833, lng: 36.3667},
  {name: "Nyeri", lat: -0.4167, lng: 36.95}, {name: "Kirinyaga", lat: -0.5, lng: 37.2833},
  {name: "Murang'a", lat: -0.7167, lng: 37.15}, {name: "Kiambu", lat: -1.1667, lng: 36.8333},
  {name: "Turkana", lat: 3.1167, lng: 35.6}, {name: "West Pokot", lat: 1.2333, lng: 35.1167},
  {name: "Samburu", lat: 1.2167, lng: 36.8167}, {name: "Trans-Nzoia", lat: 1.0167, lng: 35.0},
  {name: "Uasin Gishu", lat: 0.5167, lng: 35.2833}, {name: "Elgeyo-Marakwet", lat: 0.8, lng: 35.5333},
  {name: "Nandi", lat: 0.1833, lng: 35.1167}, {name: "Baringo", lat: 0.4667, lng: 35.9833},
  {name: "Laikipia", lat: 0.3667, lng: 36.3333}, {name: "Nakuru", lat: -0.3, lng: 36.0667},
  {name: "Narok", lat: -1.0833, lng: 35.8667}, {name: "Kajiado", lat: -1.85, lng: 36.7833},
  {name: "Kericho", lat: -0.3667, lng: 35.2833}, {name: "Bomet", lat: -0.7833, lng: 35.35},
  {name: "Kakamega", lat: 0.2833, lng: 34.75}, {name: "Vihiga", lat: 0.0833, lng: 34.7167},
  {name: "Bungoma", lat: 0.5667, lng: 34.5667}, {name: "Busia", lat: 0.4667, lng: 34.1167},
  {name: "Siaya", lat: 0.0667, lng: 34.2833}, {name: "Kisumu", lat: -0.1, lng: 34.75},
  {name: "Homa Bay", lat: -0.5333, lng: 34.45}, {name: "Migori", lat: -1.0667, lng: 34.4667},
  {name: "Kisii", lat: -0.6833, lng: 34.7667}, {name: "Nyamira", lat: -0.5667, lng: 34.9333},
  {name: "Nairobi", lat: -1.2864, lng: 36.8172}
];

// Add Kenya counties
kenyaCounties.forEach(c => markers.push({ loc: c.name + " Hub", lat: c.lat, lng: c.lng, size: 'sm' }));

// African countries (using approximate bounding boxes or known coords, let's just use some random scattering across Africa to simulate 5 per country, or better yet, fetch standard country coords and then add jitter)
// We will mock this by creating roughly 54*5 = 270 points within Africa's bounding box, prioritizing land.
// A simpler robust way: 
const africaCenters = [
    {lat: 28.0339, lng: 1.6596}, // Algeria
    {lat: -11.2027, lng: 17.8739}, // Angola
    {lat: 9.3077, lng: 2.3158}, // Benin
    {lat: -22.3285, lng: 24.6849}, // Botswana
    {lat: 12.2383, lng: -1.5616}, // Burkina Faso
    {lat: -3.3731, lng: 29.9189}, // Burundi
    {lat: 7.3697, lng: 12.3547}, // Cameroon
    {lat: 16.5388, lng: -23.0418}, // Cape Verde
    {lat: 6.6111, lng: 20.9394}, // CAR
    {lat: 15.4542, lng: 18.7322}, // Chad
    {lat: -11.875, lng: 43.8722}, // Comoros
    {lat: -0.228, lng: 15.8277}, // Congo
    {lat: -4.0383, lng: 21.7587}, // DRC
    {lat: 11.8251, lng: 42.5903}, // Djibouti
    {lat: 26.8206, lng: 30.8025}, // Egypt
    {lat: 1.6508, lng: 10.2679}, // Eq Guinea
    {lat: 15.1794, lng: 39.7823}, // Eritrea
    {lat: 9.145, lng: 40.4897}, // Ethiopia
    {lat: -0.8037, lng: 11.6094}, // Gabon
    {lat: 13.4432, lng: -15.3101}, // Gambia
    {lat: 7.9465, lng: -1.0232}, // Ghana
    {lat: 9.9456, lng: -9.6966}, // Guinea
    {lat: 11.8037, lng: -15.1804}, // Guinea-Bissau
    {lat: -29.61, lng: 28.2336}, // Lesotho
    {lat: 6.4281, lng: -9.4295}, // Liberia
    {lat: 26.3351, lng: 17.2283}, // Libya
    {lat: -18.7669, lng: 46.8691}, // Madagascar
    {lat: -13.2543, lng: 34.3015}, // Malawi
    {lat: 17.5707, lng: -3.9962}, // Mali
    {lat: 21.0079, lng: -10.9408}, // Mauritania
    {lat: -20.3484, lng: 57.5522}, // Mauritius
    {lat: 31.7917, lng: -7.0926}, // Morocco
    {lat: -18.6657, lng: 35.5296}, // Mozambique
    {lat: -22.9576, lng: 18.4904}, // Namibia
    {lat: 17.6078, lng: 8.0817}, // Niger
    {lat: 9.082, lng: 8.6753}, // Nigeria
    {lat: -1.9403, lng: 29.8739}, // Rwanda
    {lat: 0.3901, lng: 6.6194}, // Sao Tome
    {lat: 14.4974, lng: -14.4524}, // Senegal
    {lat: -4.6796, lng: 55.492}, // Seychelles
    {lat: 8.4606, lng: -11.7799}, // Sierra Leone
    {lat: 5.1521, lng: 46.1996}, // Somalia
    {lat: -30.5595, lng: 22.9375}, // South Africa
    {lat: 7.8622, lng: 29.6949}, // South Sudan
    {lat: 12.8628, lng: 30.2176}, // Sudan
    {lat: -26.5225, lng: 31.4659}, // Eswatini
    {lat: -6.369, lng: 34.8888}, // Tanzania
    {lat: 8.6195, lng: 0.8248}, // Togo
    {lat: 33.8869, lng: 9.5375}, // Tunisia
    {lat: 1.3733, lng: 32.2903}, // Uganda
    {lat: -13.1339, lng: 27.8493}, // Zambia
    {lat: -19.0154, lng: 29.1549} // Zimbabwe
];

// For each African country, add 5 markers (the center + 4 scattered around)
africaCenters.forEach((c, idx) => {
    markers.push({ loc: "Africa Node " + idx + "A", lat: c.lat, lng: c.lng, size: 'md' });
    markers.push({ loc: "Africa Node " + idx + "B", lat: c.lat + (Math.random()*2-1)*1.5, lng: c.lng + (Math.random()*2-1)*1.5, size: 'sm' });
    markers.push({ loc: "Africa Node " + idx + "C", lat: c.lat + (Math.random()*2-1)*1.5, lng: c.lng + (Math.random()*2-1)*1.5, size: 'sm' });
    markers.push({ loc: "Africa Node " + idx + "D", lat: c.lat + (Math.random()*2-1)*1.5, lng: c.lng + (Math.random()*2-1)*1.5, size: 'sm' });
    markers.push({ loc: "Africa Node " + idx + "E", lat: c.lat + (Math.random()*2-1)*1.5, lng: c.lng + (Math.random()*2-1)*1.5, size: 'sm' });
});

// A quick list of some global coordinates for rest of world to make it look populated. Let's just generate 150 random ones on land masses.
// We'll approximate continents bounding boxes.
const continents = [
    { name: "Europe", latMin: 35, latMax: 65, lngMin: -10, lngMax: 40, count: 40 },
    { name: "Asia", latMin: 10, latMax: 60, lngMin: 45, lngMax: 140, count: 50 },
    { name: "North America", latMin: 15, latMax: 60, lngMin: -125, lngMax: -65, count: 30 },
    { name: "South America", latMin: -50, latMax: 10, lngMin: -80, lngMax: -40, count: 20 },
    { name: "Oceania", latMin: -40, latMax: -10, lngMin: 110, lngMax: 175, count: 10 },
];

let gIndex = 0;
continents.forEach(cont => {
    for (let i = 0; i < cont.count; i++) {
        markers.push({
            loc: `Global Node ${gIndex++}`,
            lat: cont.latMin + Math.random() * (cont.latMax - cont.latMin),
            lng: cont.lngMin + Math.random() * (cont.lngMax - cont.lngMin),
            size: 'sm'
        });
    }
});

fs.writeFileSync('src/data/worldMarkers.ts', `export const globalMarkers = ${JSON.stringify(markers, null, 2)};`);
