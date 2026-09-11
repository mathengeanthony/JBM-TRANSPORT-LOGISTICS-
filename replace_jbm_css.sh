#!/bin/bash

FILES="src/components/*.tsx src/App.tsx src/index.css"

for f in $FILES; do
  sed -i 's/LUXTEN-gold/JBM-orange/g' "$f"
  sed -i 's/LUXTEN-black/JBM-black/g' "$f"
  sed -i 's/LUXTEN-charcoal/JBM-charcoal/g' "$f"
  sed -i 's/LUXTEN-panel/JBM-panel/g' "$f"
  sed -i 's/LUXTEN-hud/JBM-hud/g' "$f"
done
