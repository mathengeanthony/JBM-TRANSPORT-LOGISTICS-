import { useState } from "react";
import { SectionMap } from "../components/SectionMap";
import { SectionCertifications } from "../components/SectionCertifications";
import { SectionExcellence } from "../components/SectionExcellence";
import { SectionCommercial } from "../components/SectionCommercial";
import { SectionLand } from "../components/SectionLand";
import { SectionProperties } from "../components/SectionProperties";
import { SectionIndustries } from "../components/SectionIndustries";
import { SectionWhyChooseUs } from "../components/SectionWhyChooseUs";
import { SectionMarket } from "../components/SectionMarket";
import { SectionESG } from "../components/SectionESG";
import { SectionInsights } from "../components/SectionInsights";
import { SectionCTA } from "../components/SectionCTA";
import { Footer } from "../components/Footer";
import { MobileMenu } from "../components/MobileMenu";
import { TopNav } from "../components/TopNav";

export function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="master-viewport" id="master-viewport">
        <SectionMap onMenuClick={() => setIsMenuOpen(true)} />
        <div className="snap-section flex flex-col h-auto min-h-0 relative">
          <SectionCertifications />
          <div className="sticky top-0 z-[100] bg-[#f8f8f8]/90 dark:bg-JBM-black/90 backdrop-blur-md pt-4 md:pt-6 px-6 md:px-12 border-b border-gray-300 dark:border-white/10">
            <div className="max-w-[1600px] mx-auto w-full">
              <TopNav onMenuClick={() => setIsMenuOpen(true)} />
            </div>
          </div>
          
          <SectionExcellence onMenuClick={() => setIsMenuOpen(true)} />
          <SectionCommercial onMenuClick={() => setIsMenuOpen(true)} />
          <SectionLand onMenuClick={() => setIsMenuOpen(true)} />
          <SectionProperties onMenuClick={() => setIsMenuOpen(true)} />
          <SectionIndustries />
          <SectionWhyChooseUs onMenuClick={() => setIsMenuOpen(true)} />
          <SectionInsights onMenuClick={() => setIsMenuOpen(true)} />
          <SectionESG />
          <SectionMarket onMenuClick={() => setIsMenuOpen(true)} />
          <SectionCTA />
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
