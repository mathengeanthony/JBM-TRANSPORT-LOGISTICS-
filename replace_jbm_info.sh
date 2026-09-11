#!/bin/bash

FILES="src/components/*.tsx src/App.tsx"

for f in $FILES; do
  sed -i 's/East Africa Cargo Partner/Efficient African Logistics Partner/g' "$f"
  sed -i 's/EST. 2024/TRANSPORT \& LOGISTICS/g' "$f"
done
