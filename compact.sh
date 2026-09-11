#!/bin/bash
for f in src/components/Section*.tsx; do
  # Replace large paddings with compact ones
  sed -i 's/pt-10 pb-24/py-4 md:py-6/g' "$f"
  sed -i 's/pt-10 pb-20/py-4 md:py-6/g' "$f"
  sed -i 's/py-12/py-6/g' "$f"
  sed -i 's/mb-12/mb-6/g' "$f"
  sed -i 's/mb-10/mb-4/g' "$f"
  sed -i 's/mt-12 lg:mt-16/mt-6 lg:mt-8/g' "$f"
  sed -i 's/gap-12/gap-6/g' "$f"
  sed -i 's/gap-16/gap-8/g' "$f"
  
  # Replace large texts
  sed -i 's/text-5xl md:text-7xl/text-4xl md:text-5xl lg:text-6xl/g' "$f"
  sed -i 's/text-5xl md:text-6xl/text-4xl md:text-5xl lg:text-6xl/g' "$f"
  sed -i 's/text-4xl md:text-6xl/text-3xl md:text-4xl lg:text-5xl/g' "$f"
  
  # Replace large image heights
  sed -i 's/h-\[600px\]/h-\[300px\] md:h-\[400px\]/g' "$f"
  sed -i 's/h-\[400px\]/h-\[250px\]/g' "$f"
  sed -i 's/min-h-\[600px\]/min-h-\[300px\] md:min-h-\[400px\]/g' "$f"
done
