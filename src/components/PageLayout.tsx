import { useState } from "react";
import { TopNav } from "./TopNav";
import { MobileMenu } from "./MobileMenu";
import { Footer } from "./Footer";

export function PageLayout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-JBM-black text-JBM-charcoal dark:text-white w-full selection:bg-orange-500 selection:text-white">
      <div className="sticky top-0 z-[100] bg-white/90 dark:bg-JBM-black/90 backdrop-blur-xl border-b border-gray-200 dark:border-white/10 transition-colors duration-300">
        <div className="max-w-[1600px] mx-auto w-full px-4 md:px-12 pt-4 md:pt-6">
          <TopNav onMenuClick={() => setIsMenuOpen(true)} />
        </div>
      </div>
      
      <main className="flex-grow flex flex-col w-full">
        {children}
      </main>

      <Footer />

      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
    </div>
  );
}
