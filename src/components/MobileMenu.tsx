import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function MobileMenu({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [showBackdrop, setShowBackdrop] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setShowBackdrop(true);
      setShowDrawer(true);
    } else {
      document.body.style.overflow = "";
      setShowDrawer(false);
      const timer = setTimeout(() => {
        setShowBackdrop(false);
      }, 500);
      return () => {
        clearTimeout(timer);
        document.body.style.overflow = "";
      };
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen && !showBackdrop) return null;

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[1999] transition-opacity duration-500 ${
          isOpen && showDrawer ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      ></div>
      <div
        className={`fixed top-0 right-0 bottom-0 w-full md:w-[480px] bg-JBM-charcoal/98 dark:bg-black/98 backdrop-blur-2xl z-[2000] transform transition-transform duration-500 flex flex-col shadow-2xl border-l border-white/10 ${
          isOpen && showDrawer ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-8 border-b border-white/10">
          <Link to="/" onClick={onClose} className="flex flex-col">
            <span className="text-2xl font-extrabold tracking-tighter uppercase text-white leading-none">
              JBM
            </span>
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-orange-500">
              Logistics
            </span>
          </Link>
          <button
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all"
            onClick={onClose}
          >
            <i className="fa-solid fa-xmark text-xl"></i>
          </button>
        </div>

        <div className="flex-grow flex flex-col justify-start px-8 pt-12 pb-12 overflow-y-auto">
          <div className="flex flex-col gap-5">
            <Link
              to="/"
              className="group flex items-center gap-4 text-2xl md:text-3xl font-extrabold uppercase tracking-tight text-white hover:text-orange-500 transition-colors"
              onClick={onClose}
            >
              <span className="text-[10px] font-mono text-gray-500 group-hover:text-orange-500 pt-1">
                00
              </span>
              <span>Home / Terminal</span>
            </Link>
            
            <div className="h-px bg-white/5 w-full my-1"></div>

            <Link
              to="/fleet"
              className="group flex items-center gap-4 text-2xl md:text-3xl font-extrabold uppercase tracking-tight text-white hover:text-orange-500 transition-colors"
              onClick={onClose}
            >
              <span className="text-[10px] font-mono text-gray-500 group-hover:text-orange-500 pt-1">
                01
              </span>
              <span>Our Fleet</span>
            </Link>
            
            <Link
              to="/warehousing"
              className="group flex items-center gap-4 text-2xl md:text-3xl font-extrabold uppercase tracking-tight text-white hover:text-orange-500 transition-colors"
              onClick={onClose}
            >
              <span className="text-[10px] font-mono text-gray-500 group-hover:text-orange-500 pt-1">
                02
              </span>
              <span>Warehousing</span>
            </Link>
            
            <Link
              to="/rates"
              className="group flex items-center gap-4 text-2xl md:text-3xl font-extrabold uppercase tracking-tight text-white hover:text-orange-500 transition-colors"
              onClick={onClose}
            >
              <span className="text-[10px] font-mono text-gray-500 group-hover:text-orange-500 pt-1">
                03
              </span>
              <span>Rate Engine</span>
            </Link>
            <Link
              to="/advisory"
              className="group flex items-center gap-4 text-2xl md:text-3xl font-extrabold uppercase tracking-tight text-white hover:text-orange-500 transition-colors"
              onClick={onClose}
            >
              <span className="text-[10px] font-mono text-gray-500 group-hover:text-orange-500 pt-1">
                04
              </span>
              <span>Trade Advisory</span>
            </Link>
            
            <Link
              to="/compliance"
              className="group flex items-center gap-4 text-2xl md:text-3xl font-extrabold uppercase tracking-tight text-white hover:text-orange-500 transition-colors"
              onClick={onClose}
            >
              <span className="text-[10px] font-mono text-gray-500 group-hover:text-orange-500 pt-1">
                05
              </span>
              <span>ESG & Compliance</span>
            </Link>
            
            <Link
              to="/ethos"
              className="group flex items-center gap-4 text-2xl md:text-3xl font-extrabold uppercase tracking-tight text-white hover:text-orange-500 transition-colors"
              onClick={onClose}
            >
              <span className="text-[10px] font-mono text-gray-500 group-hover:text-orange-500 pt-1">
                06
              </span>
              <span>Corporate Ethos</span>
            </Link>
            
            <Link
              to="/architect"
              className="group flex items-center gap-4 text-2xl md:text-3xl font-extrabold uppercase tracking-tight text-white hover:text-orange-500 transition-colors"
              onClick={onClose}
            >
              <span className="text-[10px] font-mono text-gray-500 group-hover:text-orange-500 pt-1">
                07
              </span>
              <span>Architect Supply Chain</span>
            </Link>
          </div>
        </div>
        
        <div className="p-8 border-t border-white/10">
          <div className="flex flex-col gap-4">
            <Link
              to="/architect"
              onClick={onClose}
              className="text-sm font-bold uppercase tracking-widest text-white hover:text-orange-500 flex items-center gap-2"
            >
              <i className="fa-solid fa-envelope text-orange-500"></i> Contact Us
            </Link>
            <div className="flex items-center gap-6 mt-2">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fa-brands fa-instagram text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fa-brands fa-twitter text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fa-brands fa-linkedin text-xl"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <i className="fa-brands fa-whatsapp text-xl"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
