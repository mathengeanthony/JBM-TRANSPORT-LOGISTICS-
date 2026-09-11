import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export function TopNav({
  onMenuClick,
}: {
  onMenuClick: () => void;
}) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  const handleThemeToggle = () => {
    document.documentElement.classList.toggle("dark");
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setIsSearchOpen(false);
      navigate(`/fleet?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
    }
  };

  return (
    <>
      {/* Mobile Top Nav */}
      <nav className="flex md:hidden justify-between items-center w-full px-0 pb-3 mb-0 relative z-20">
        <Link
          to="/"
          className={`text-xs font-extrabold tracking-widest uppercase hover:text-orange-500 transition-colors text-JBM-charcoal dark:text-white ${isSearchOpen ? 'hidden' : 'block'}`}
        >
          JBM Logistics
        </Link>
        
        {isSearchOpen && (
          <form onSubmit={handleSearchSubmit} className="flex-1 mr-4">
            <div className="relative w-full">
              <i className="fa-solid fa-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xs"></i>
              <input 
                ref={searchInputRef}
                type="text" 
                placeholder="Search assets..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-gray-100 dark:bg-white/5 border border-orange-500/30 rounded-full py-2 pl-10 pr-4 text-[10px] text-JBM-charcoal dark:text-white focus:outline-none focus:border-orange-500 transition-colors shadow-[0_0_15px_rgba(249,115,22,0.2)] focus:shadow-[0_0_25px_rgba(249,115,22,0.5)] focus:ring-1 focus:ring-orange-500 transition-all"
              />
            </div>
          </form>
        )}

        <div className="flex items-center gap-4 shrink-0">
          <button
            className="text-JBM-charcoal dark:text-white hover:text-orange-500 transition-colors"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          >
            <i className={`fa-solid ${isSearchOpen ? 'fa-xmark' : 'fa-magnifying-glass'} text-base`}></i>
          </button>
          <a
            href="https://wa.me/254700000000"
            target="_blank"
            rel="noopener noreferrer"
            className="text-JBM-charcoal dark:text-white hover:text-green-500 transition-colors"
          >
            <i className="fa-brands fa-whatsapp text-lg"></i>
          </a>
          <button
            className="theme-toggle hover:text-orange-500 text-JBM-charcoal dark:text-white"
            onClick={handleThemeToggle}
          >
            <i className="fa-solid fa-sun text-base"></i>
          </button>
          <button
            className="text-[10px] font-extrabold tracking-[0.25em] uppercase hover:text-orange-500 transition-colors text-JBM-charcoal dark:text-white"
            onClick={onMenuClick}
          >
            Menu
          </button>
        </div>
      </nav>

      {/* Desktop Top Nav */}
      <nav className="hidden md:flex justify-between items-center w-full px-0 pb-4 mb-0 relative z-20">
        <div className={`flex items-center gap-6 ${isSearchOpen ? 'hidden' : 'flex'}`}>
          <Link
            to="/"
            className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-JBM-charcoal dark:text-white hover:text-orange-500 transition-colors"
          >
            Home
          </Link>
          <Link
            to="/fleet"
            className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-JBM-charcoal dark:text-white hover:text-orange-500 transition-colors"
          >
            Our Fleet
          </Link>
          <Link
            to="/warehousing"
            className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-JBM-charcoal dark:text-white hover:text-orange-500 transition-colors"
          >
            Warehousing
          </Link>
          <Link
            to="/rates"
            className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-JBM-charcoal dark:text-white hover:text-orange-500 transition-colors"
          >
            Rate Engine
          </Link>
          <Link
            to="/advisory"
            className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-JBM-charcoal dark:text-white hover:text-orange-500 transition-colors"
          >
            Advisory
          </Link>
          <Link
            to="/compliance"
            className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-JBM-charcoal dark:text-white hover:text-orange-500 transition-colors"
          >
            Compliance
          </Link>
        </div>

        {isSearchOpen && (
          <form onSubmit={handleSearchSubmit} className="flex-1 mr-6 max-w-lg">
            <div className="relative w-full">
              <i className="fa-solid fa-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xs"></i>
              <input 
                ref={searchInputRef}
                type="text" 
                placeholder="Search assets (e.g., Scania, Boeing)..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-gray-100 dark:bg-white/5 border border-orange-500/30 rounded-full py-2.5 pl-10 pr-4 text-xs text-JBM-charcoal dark:text-white focus:outline-none focus:border-orange-500 transition-colors shadow-[0_0_15px_rgba(249,115,22,0.2)] focus:shadow-[0_0_25px_rgba(249,115,22,0.5)] focus:ring-1 focus:ring-orange-500 transition-all"
              />
            </div>
          </form>
        )}

        <div className="flex items-center gap-5">
          <button 
            className="text-JBM-charcoal dark:text-white hover:text-orange-500 transition-colors"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          >
            <i className={`fa-solid ${isSearchOpen ? 'fa-xmark' : 'fa-magnifying-glass'} text-lg`}></i>
          </button>
          <a
            href="https://wa.me/254700000000"
            target="_blank"
            rel="noopener noreferrer"
            className="text-JBM-charcoal dark:text-white hover:text-green-500 transition-colors"
          >
            <i className="fa-brands fa-whatsapp text-xl"></i>
          </a>
          <button
            className="theme-toggle text-JBM-charcoal dark:text-white hover:text-orange-500 transition-colors"
            aria-label="Toggle theme"
            onClick={handleThemeToggle}
          >
            <i className="fa-solid fa-sun text-lg hidden dark:block"></i>
            <i className="fa-solid fa-moon text-lg block dark:hidden"></i>
          </button>
          <Link
            to="/architect"
            className="px-4 py-2 bg-JBM-charcoal dark:bg-white text-white dark:text-black text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-orange-500 dark:hover:bg-orange-500 transition-colors"
          >
            Architect Supply Chain
          </Link>
          <button
            className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-JBM-charcoal dark:text-white hover:text-orange-500 transition-colors ml-2"
            onClick={onMenuClick}
          >
            Menu
          </button>
        </div>
      </nav>
    </>
  );
}
