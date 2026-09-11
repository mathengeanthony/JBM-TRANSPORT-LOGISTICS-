export function Footer() {
  return (
    <footer
      className=" w-full bg-[#f8f8f8] dark:bg-JBM-black pt-24 pb-0 border-t border-gray-200 dark:border-white/5 relative overflow-hidden transition-colors duration-500"
      id="section-footer"
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 mb-24">
          <div className="md:col-span-5 flex flex-col gap-10">
            <div className="flex items-center gap-3">
              <i className="fa-solid fa-cube text-orange-500 text-xl"></i>
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-JBM-charcoal dark:text-white transition-colors">
                JBM Logistics Limited
              </span>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-orange-500 mb-2">
                  Nairobi (HQ)
                </h4>
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed transition-colors">
                  The Address, 12th Floor
                  <br />
                  Muthangari Dr, Westlands
                  <br />
                  <span className="text-JBM-charcoal dark:text-white mt-1 block font-mono text-[10px] opacity-70">
                    +254 700 000 000
                  </span>
                </p>
              </div>
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-500 dark:text-gray-500 mb-2">
                  Mombasa
                </h4>
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed transition-colors">
                  Coastal Hub
                  <br />
                  Downtown Mombasa
                  <br />
                  <span className="text-JBM-charcoal dark:text-white mt-1 block font-mono text-[10px] opacity-70">
                    +254 700 000 001
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-500 dark:text-gray-600 mb-6 transition-colors">
              Directory
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="#section-excellence"
                  className="hidden md:block footer-link text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-orange-500 transition-colors"
                >
                  Logistics & Freight Excellence
                </a>
              </li>
              <li>
                <a
                  href="#section-art"
                  className="hidden md:block footer-link text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-orange-500 transition-colors"
                >
                  Supply Chain
                </a>
              </li>
              <li>
                <a
                  href="#section-land"
                  className="hidden md:block footer-link text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-orange-500 transition-colors"
                >
                  Global Fleet
                </a>
              </li>
              <li>
                <a
                  href="#section-commercial"
                  className="hidden md:block footer-link text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-orange-500 transition-colors"
                >
                  Freight Hubs Nexus
                </a>
              </li>
              <li>
                <a
                  href="#section-properties"
                  className="hidden md:block footer-link text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-orange-500 transition-colors"
                >
                  Wealth Autopilot
                </a>
              </li>
              <li>
                <a
                  href="#section-visionary"
                  className="hidden md:block footer-link text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-orange-500 transition-colors"
                >
                  Visionary Fulfillment
                </a>
              </li>
              <li>
                <a
                  href="#section-market"
                  className="hidden md:block footer-link text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-orange-500 transition-colors"
                >
                  Global Trade Alpha
                </a>
              </li>
              <li>
                <a
                  href="#section-insights"
                  className="hidden md:block footer-link text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-orange-500 transition-colors"
                >
                  Expert Analytics
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4 flex flex-col justify-between h-full">
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-gray-300 dark:border-white/10 flex items-center justify-center text-JBM-charcoal dark:text-white hover:bg-JBM-charcoal hover:dark:bg-white hover:text-white hover:dark:text-black transition-all"
              >
                <i className="fa-brands fa-instagram text-xs"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-gray-300 dark:border-white/10 flex items-center justify-center text-JBM-charcoal dark:text-white hover:bg-JBM-charcoal hover:dark:bg-white hover:text-white hover:dark:text-black transition-all"
              >
                <i className="fa-brands fa-linkedin-in text-xs"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-gray-300 dark:border-white/10 flex items-center justify-center text-JBM-charcoal dark:text-white hover:bg-JBM-charcoal hover:dark:bg-white hover:text-white hover:dark:text-black transition-all"
              >
                <i className="fa-brands fa-whatsapp text-xs"></i>
              </a>
            </div>

            <div className="mt-8 md:mt-0">
              <p className="text-[10px] text-gray-500 dark:text-gray-600 leading-relaxed transition-colors">
                © 2026 JBM Logistics Limited.
                <br />
                All Rights Reserved.{" "}
                <a
                  href="#"
                  className="hover:text-JBM-charcoal hover:dark:text-white underline decoration-gray-400 dark:decoration-white/20 transition-colors"
                >
                  Privacy Policy
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-end mb-4">
          <a
            href="#section-map"
            className="group flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-orange-500 hover:text-JBM-charcoal hover:dark:text-white transition-colors"
          >
            Back to Command
            <div className="w-10 h-10 rounded-full border border-orange-500/30 flex items-center justify-center group-hover:bg-orange-500 group-hover:text-black transition-all">
              <i className="fa-solid fa-arrow-up text-xs"></i>
            </div>
          </a>
        </div>
      </div>

      <div className="w-full border-t border-gray-200 dark:border-white/10 pt-4 flex justify-center overflow-hidden transition-colors">
        <h2 className="footer-brand-anchor text-titan font-extrabold uppercase leading-[0.75] select-none tracking-tighter transition-colors duration-1000 cursor-default">
          JBM
        </h2>
      </div>
    </footer>
  );
}
