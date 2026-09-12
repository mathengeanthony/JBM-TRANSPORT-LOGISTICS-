#!/bin/bash

# Update SectionLand.tsx (replace both TileLayers with one OSM layer)
sed -i 's/<TileLayer/<!-- /' src/components/SectionLand.tsx
sed -i 's/\/>/-->/' src/components/SectionLand.tsx
sed -i '/className="hidden dark:block"/d' src/components/SectionLand.tsx
sed -i '/className="dark:hidden"/d' src/components/SectionLand.tsx
sed -i 's/url="https:\/\/server.arcgisonline.com\/ArcGIS\/rest\/services\/Canvas\/World_Light_Gray_Base\/MapServer\/tile\/{z}\/{y}\/{x}"/url="https:\/\/{s}.tile.openstreetmap.org\/{z}\/{x}\/{y}.png"/' src/components/SectionLand.tsx
sed -i '/url="https:\/\/server.arcgisonline.com\/ArcGIS\/rest\/services\/Canvas\/World_Dark_Gray_Base\/MapServer\/tile\/{z}\/{y}\/{x}"/d' src/components/SectionLand.tsx

# Wait, the sed above for SectionLand might be messy. Let's just use Node to replace it reliably.
