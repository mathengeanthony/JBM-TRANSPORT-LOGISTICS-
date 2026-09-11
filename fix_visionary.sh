#!/bin/bash
F="src/components/SectionVisionary.tsx"

sed -i 's/You provide the land./You provide the cargo./g' "$F"
sed -i 's/Secure parcels in high-growth corridors before rezoning. We identify undervalued land with imminent infrastructure upgrades for maximum appreciation./Secure freight routes in high-volume corridors before congestion. We identify optimized transit networks with imminent infrastructure upgrades for maximum efficiency./g' "$F"
sed -i 's/We transform raw potential into landmark assets. From breaking/We transform raw supply chains into high-speed networks. From organizing/g' "$F"
sed -i 's/ground on virgin land to topping out skylines, our integrated/regional fleets to orchestrating global freight, our integrated/g' "$F"
