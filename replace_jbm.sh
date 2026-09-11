#!/bin/bash

FILES="src/components/*.tsx src/App.tsx index.html"

for f in $FILES; do
  sed -i 's/LUXTEN LOGISTICS/JBM LOGISTICS/g' "$f"
  sed -i 's/LUXTEN Logistics/JBM Logistics/g' "$f"
  sed -i 's/LUXTEN-gold/orange-500/g' "$f"
  sed -i 's/LUXTEN/JBM/g' "$f"
done
