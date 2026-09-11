#!/bin/bash
sed -i 's/px-6 md:px-0/px-0/g' src/components/TopNav.tsx
sed -i 's/px-6 md:px-12 md:px-0/px-0/g' src/components/TopNav.tsx

cat << 'INNER_EOF' > src/App.tsx
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { SectionMap } from "./components/SectionMap";
import { SectionExcellence } from "./components/SectionExcellence";
import { SectionCommercial } from "./components/SectionCommercial";
import { SectionLand } from "./components/SectionLand";
import { SectionProperties } from "./components/SectionProperties";
import { SectionVisionary } from "./components/SectionVisionary";
import { SectionMarket } from "./components/SectionMarket";
import { SectionInsights } from "./components/SectionInsights";
import { Footer } from "./components/Footer";
import { MobileMenu } from "./components/MobileMenu";
import { TopNav } from "./components/TopNav";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="master-viewport" id="master-viewport">
        <SectionMap onMenuClick={() => setIsMenuOpen(true)} />
        <div className="snap-section flex flex-col h-auto min-h-0 relative">
          <div className="sticky top-0 z-[100] bg-[#f8f8f8]/90 dark:bg-JBM-black/90 backdrop-blur-md pt-4 md:pt-6 px-6 md:px-12 border-b border-gray-300 dark:border-white/10">
            <div className="max-w-[1600px] mx-auto w-full">
              <TopNav onMenuClick={() => setIsMenuOpen(true)} />
            </div>
          </div>
          <SectionExcellence onMenuClick={() => setIsMenuOpen(true)} />
          <SectionCommercial onMenuClick={() => setIsMenuOpen(true)} />
          <SectionLand onMenuClick={() => setIsMenuOpen(true)} />
          <SectionProperties onMenuClick={() => setIsMenuOpen(true)} />
          <SectionVisionary onMenuClick={() => setIsMenuOpen(true)} />
          <SectionMarket onMenuClick={() => setIsMenuOpen(true)} />
          <SectionInsights onMenuClick={() => setIsMenuOpen(true)} />
          <Footer />
        </div>
      </div>
      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
    </>
  );
}
INNER_EOF
