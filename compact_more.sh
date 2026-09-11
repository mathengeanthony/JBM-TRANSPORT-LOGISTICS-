#!/bin/bash
for f in src/components/Section*.tsx; do
  # Adjust h-screen if it exists and replace with auto or smaller min heights
  sed -i 's/className="w-full pt-4 pb-0 px-0 flex flex-col h-screen/className="w-full pt-8 pb-12 px-0 flex flex-col/g' "$f"
  sed -i 's/h-screen//g' "$f"
  
  # Replace 4xl/5xl with 3xl/4xl
  sed -i 's/text-4xl md:text-5xl lg:text-6xl/text-3xl md:text-4xl lg:text-5xl/g' "$f"
done

# Fix specific ones
sed -i 's/h-screen//g' src/components/SectionCommercial.tsx
sed -i 's/min-h-screen/min-h-0/g' src/components/SectionCommercial.tsx
