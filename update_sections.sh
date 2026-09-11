#!/bin/bash
for f in src/components/Section*.tsx; do
  sed -i '/<TopNav/d' "$f"
  sed -i '/import { TopNav }/d' "$f"
done
