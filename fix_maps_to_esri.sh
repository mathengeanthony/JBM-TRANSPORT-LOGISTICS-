#!/bin/bash

# SectionLand.tsx
sed -i 's/url={`https:\/\/{s}.basemaps.cartocdn.com\/light_all\/{z}\/{x}\/{y}{r}.png${import.meta.env.VITE_CARTO_API_KEY ? `?key=${import.meta.env.VITE_CARTO_API_KEY}` : ""}`}/url="https:\/\/server.arcgisonline.com\/ArcGIS\/rest\/services\/Canvas\/World_Light_Gray_Base\/MapServer\/tile\/{z}\/{y}\/{x}"/' src/components/SectionLand.tsx

sed -i 's/url={`https:\/\/{s}.basemaps.cartocdn.com\/dark_all\/{z}\/{x}\/{y}{r}.png${import.meta.env.VITE_CARTO_API_KEY ? `?key=${import.meta.env.VITE_CARTO_API_KEY}` : ""}`}/url="https:\/\/server.arcgisonline.com\/ArcGIS\/rest\/services\/Canvas\/World_Dark_Gray_Base\/MapServer\/tile\/{z}\/{y}\/{x}"/' src/components/SectionLand.tsx

# SectionCommercial.tsx
sed -i 's/url={`https:\/\/{s}.basemaps.cartocdn.com\/light_all\/{z}\/{x}\/{y}{r}.png${import.meta.env.VITE_CARTO_API_KEY ? `?key=${import.meta.env.VITE_CARTO_API_KEY}` : ""}`}/url="https:\/\/server.arcgisonline.com\/ArcGIS\/rest\/services\/Canvas\/World_Light_Gray_Base\/MapServer\/tile\/{z}\/{y}\/{x}"/' src/components/SectionCommercial.tsx

sed -i 's/url={`https:\/\/{s}.basemaps.cartocdn.com\/dark_all\/{z}\/{x}\/{y}{r}.png${import.meta.env.VITE_CARTO_API_KEY ? `?key=${import.meta.env.VITE_CARTO_API_KEY}` : ""}`}/url="https:\/\/server.arcgisonline.com\/ArcGIS\/rest\/services\/Canvas\/World_Dark_Gray_Base\/MapServer\/tile\/{z}\/{y}\/{x}"/' src/components/SectionCommercial.tsx

# SectionMap.tsx
sed -i 's/const cartoApiKey = import.meta.env.VITE_CARTO_API_KEY;//' src/components/SectionMap.tsx
sed -i 's/L.tileLayer(`https:\/\/{s}.basemaps.cartocdn.com\/dark_all\/{z}\/{x}\/{y}{r}.png${cartoApiKey ? `?key=${cartoApiKey}` : ""}`, {/L.tileLayer("https:\/\/server.arcgisonline.com\/ArcGIS\/rest\/services\/Canvas\/World_Dark_Gray_Base\/MapServer\/tile\/{z}\/{y}\/{x}", {/' src/components/SectionMap.tsx

