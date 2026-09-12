#!/bin/bash
sed -i '/to="\/dashboard"/,/<\/Link>/d' src/components/TopNav.tsx
sed -i '/to="\/dashboard"/,/<\/Link>/d' src/components/MobileMenu.tsx
