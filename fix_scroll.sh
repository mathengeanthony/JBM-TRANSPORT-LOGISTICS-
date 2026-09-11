#!/bin/bash
# Remove snap-section from Section 3 onwards
sed -i 's/className="snap-section/className="/g' src/components/SectionCommercial.tsx
sed -i 's/className="snap-section/className="/g' src/components/SectionLand.tsx
sed -i 's/className="snap-section/className="/g' src/components/SectionProperties.tsx
sed -i 's/className="snap-section/className="/g' src/components/SectionVisionary.tsx
sed -i 's/className="snap-section/className="/g' src/components/SectionMarket.tsx
sed -i 's/className="snap-section/className="/g' src/components/SectionInsights.tsx
sed -i 's/className="snap-section/className="/g' src/components/Footer.tsx

# Fix SectionCommercial cutoff
sed -i 's/className=" h-screen max-h-screen/className=" w-full min-h-screen py-12/g' src/components/SectionCommercial.tsx
sed -i 's/<section className="w-full h-full py-4 md:py-6 px-6 md:px-12 max-w-\[1600px\] mx-auto flex flex-col justify-center">/<section className="w-full py-12 px-6 md:px-12 max-w-\[1600px\] mx-auto flex flex-col">/g' src/components/SectionCommercial.tsx
