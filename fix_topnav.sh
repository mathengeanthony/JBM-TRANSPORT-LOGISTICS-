#!/bin/bash
cat << 'INNER_EOF' > src/components/TopNav.tsx
export function TopNav({
  onMenuClick,
}: {
  onMenuClick: () => void;
}) {
  const handleThemeToggle = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <>
      <nav className="flex md:hidden justify-between items-center w-full px-6 md:px-0 border-b border-gray-300 dark:border-white/10 pb-3 mb-0 relative z-20">
        <a
          href="#"
          className="text-xs font-extrabold tracking-[0.25em] uppercase hover:text-orange-500 transition-colors text-JBM-charcoal dark:text-white"
        >
          Contact Us
        </a>
        <div className="flex items-center gap-5">
          <button className="hover:text-orange-500 transition-colors text-JBM-charcoal dark:text-white">
            <i className="fa-solid fa-magnifying-glass text-base"></i>
          </button>
          <button
            className="theme-toggle hover:text-orange-500 text-JBM-charcoal dark:text-white"
            onClick={handleThemeToggle}
          >
            <i className="fa-solid fa-sun text-base"></i>
          </button>
          <button
            className="text-xs font-extrabold tracking-[0.25em] uppercase hover:text-orange-500 transition-colors text-JBM-charcoal dark:text-white"
            onClick={onMenuClick}
          >
            Menu
          </button>
        </div>
      </nav>

      <nav className="hidden md:flex justify-between items-center w-full px-6 md:px-12 md:px-0 border-b border-gray-300 dark:border-white/10 pb-4 mb-0 relative z-20">
        <div className="flex items-center gap-6">
          <a
            href="#"
            className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-JBM-charcoal dark:text-white hover:text-orange-500 transition-colors"
          >
            Contact Us
          </a>
          <a
            href="#section-excellence"
            className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-JBM-charcoal dark:text-white hover:text-orange-500 transition-colors"
          >
            Excellence
          </a>
          <a
            href="#section-land"
            className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-JBM-charcoal dark:text-white hover:text-orange-500 transition-colors"
          >
            Global Fleet
          </a>
          <a
            href="#section-commercial"
            className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-JBM-charcoal dark:text-white hover:text-orange-500 transition-colors"
          >
            Freight Hubs
          </a>
          <a
            href="#section-properties"
            className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-JBM-charcoal dark:text-white hover:text-orange-500 transition-colors"
          >
            Warehousing
          </a>
          <a
            href="#section-visionary"
            className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-JBM-charcoal dark:text-white hover:text-orange-500 transition-colors"
          >
            Fulfillment
          </a>
          <a
            href="#section-market"
            className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-JBM-charcoal dark:text-white hover:text-orange-500 transition-colors"
          >
            Global Trade
          </a>
          <a
            href="#section-insights"
            className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-JBM-charcoal dark:text-white hover:text-orange-500 transition-colors"
          >
            Analytics
          </a>
        </div>
        <div className="flex items-center gap-6">
          <button className="text-JBM-charcoal dark:text-white hover:text-orange-500 transition-colors">
            <i className="fa-solid fa-magnifying-glass text-lg"></i>
          </button>
          <button
            className="theme-toggle text-JBM-charcoal dark:text-white hover:text-orange-500 transition-colors"
            aria-label="Toggle theme"
            onClick={handleThemeToggle}
          >
            <i className="fa-solid fa-sun text-lg hidden dark:block"></i>
            <i className="fa-solid fa-moon text-lg block dark:hidden"></i>
          </button>
          <a
            href="#section-map"
            className="text-JBM-charcoal dark:text-white hover:text-orange-500 transition-colors"
            aria-label="Back to map"
          >
            <i className="fa-solid fa-chevron-up text-lg"></i>
          </a>
          <button
            className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-JBM-charcoal dark:text-white hover:text-orange-500 transition-colors"
            onClick={onMenuClick}
          >
            Menu
          </button>
        </div>
      </nav>
    </>
  );
}
INNER_EOF
