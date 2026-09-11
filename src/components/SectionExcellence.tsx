import { useEffect, useRef, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Map, MapPinned, Globe2, Earth } from "lucide-react";

export function SectionExcellence({ onMenuClick }: { onMenuClick: () => void }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const [hasInteracted, setHasInteracted] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const originalHTML = track.innerHTML;
    track.innerHTML += originalHTML + originalHTML;

    const singleSetWidth = (340 + 24) * 5;
    const cardWidth = 340 + 24;
    let autoScroll: ReturnType<typeof setInterval>;

    const startScroll = () => {
      autoScroll = setInterval(() => {
        if (track.scrollLeft >= singleSetWidth) {
          track.style.scrollBehavior = "auto";
          track.scrollLeft -= singleSetWidth;
          track.style.scrollBehavior = "smooth";
        }
        track.scrollBy({ left: cardWidth, behavior: "smooth" });
        const nextIndex = Math.round((track.scrollLeft + cardWidth) / cardWidth);
        setActiveIndex(nextIndex % 5);
      }, 2000);
    };

    const handleScroll = () => {
      if (track.scrollLeft >= singleSetWidth * 2) {
        track.style.scrollBehavior = "auto";
        track.scrollLeft -= singleSetWidth;
        track.style.scrollBehavior = "smooth";
      } else if (track.scrollLeft <= 0) {
        track.style.scrollBehavior = "auto";
        track.scrollLeft += singleSetWidth;
        track.style.scrollBehavior = "smooth";
      }
      const index = Math.round(track.scrollLeft / cardWidth);
      setActiveIndex(index % 5);
    };

    track.addEventListener("scroll", handleScroll);
    
    track.addEventListener("mouseenter", () => {
      setHasInteracted(true);
      clearInterval(autoScroll);
    });
    track.addEventListener("touchstart", () => {
      setHasInteracted(true);
      clearInterval(autoScroll);
    });


    startScroll();

    return () => {
      clearInterval(autoScroll);
      track.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className=" w-full min- bg-[#f8f8f8] dark:bg-JBM-black transition-colors duration-500 flex flex-col"
      id="section-excellence"
    >
      <section className="w-full px-4 md:px-8 pt-4 md:pt-6 pb-2 md:pb-4 max-w-[1600px] mx-auto flex-grow flex flex-col min-h-0">

        <div className="flex flex-col md:flex-row justify-between items-start mb-4 border-b border-gray-300 dark:border-white/10 pb-4 shrink-0">
          <div className="flex flex-col w-full md:w-auto">
            {/* Top row: Headline & Badge */}
            <div className="flex flex-row justify-between items-start w-full md:w-auto">
              <div className="relative z-10 flex flex-col justify-end">
                <p className="text-xs md:text-sm font-extrabold tracking-[0.25em] uppercase text-orange-500 mb-1 md:mb-2">
                  Our Expertise
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl leading-[0.85] tracking-tighter uppercase text-JBM-black dark:text-white font-bold transition-colors mb-2 md:mb-3">
                  Transport <br /> & Logistics
                </h2>
              </div>
              
              {/* Spinning Badge (Mobile inside row, Desktop can stay here or right) */}
              <div className="relative w-16 h-16 md:w-20 md:h-20 flex-shrink-0 md:hidden ml-4">
                <svg
                  className="absolute w-full h-full animate-spin-slow text-orange-500"
                  viewBox="0 0 100 100"
                >
                  <path
                    id="curve"
                    d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    fill="transparent"
                  />
                  <text
                    fontSize="12"
                    fontWeight="bold"
                    fill="currentColor"
                    letterSpacing="2"
                  >
                    <textPath href="#curve">
                      • JBM LOGISTICS • TRANSPORT & LOGISTICS
                    </textPath>
                  </text>
                </svg>
                <div className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-JBM-black dark:bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
              </div>
            </div>

            {/* Subheading underneath */}
            <p className="text-[10px] md:text-[11px] font-medium text-gray-600 dark:text-gray-400 leading-relaxed max-w-[280px] md:max-w-[320px]">
              Redefining global trade through visionary logistics and bespoke
              management. We connect you with the most efficient routes in the region.
            </p>

            {/* Action Buttons (Mobile only moved up) */}
            <div className="flex md:hidden flex-row items-center justify-start gap-2 w-full mt-4">
              <a
                href="#section-why-choose-us"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('section-why-choose-us')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-JBM-black text-white dark:bg-white dark:text-black px-4 py-2 rounded-full flex items-center gap-2 hover:scale-105 transition-transform shadow-lg w-fit whitespace-nowrap"
              >
                <span className="text-[9px] font-bold uppercase tracking-widest">
                  About Us
                </span>
                <div className="w-1.5 h-1.5 bg-white dark:bg-black rounded-full"></div>
              </a>
              <Link
                to="/rates"
                className="flex-shrink-0 border border-JBM-black dark:border-white hover:border-orange-500 text-JBM-black dark:text-white hover:text-orange-500 px-3 py-2 rounded-full flex items-center justify-center gap-2 hover:scale-105 transition-all shadow-lg group whitespace-nowrap"
              >
                <span className="text-[8px] font-bold uppercase tracking-widest">
                  Logistics Costs Calculator A.I
                </span>
                <i className="fa-solid fa-wand-magic-sparkles text-[10px] group-hover:animate-pulse"></i>
              </Link>
            </div>
          </div>

          <div className="hidden md:flex flex-col items-end justify-between h-full w-full md:w-auto ml-auto">
            <div className="relative w-20 h-20 flex-shrink-0 mb-6">
              <svg
                className="absolute w-full h-full animate-spin-slow text-orange-500"
                viewBox="0 0 100 100"
              >
                <path
                  id="curve"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  fill="transparent"
                />
                <text
                  fontSize="12"
                  fontWeight="bold"
                  fill="currentColor"
                  letterSpacing="2"
                >
                  <textPath href="#curve">
                    • JBM LOGISTICS • TRANSPORT & LOGISTICS
                  </textPath>
                </text>
              </svg>
              <div className="absolute top-1/2 left-1/2 w-1.5 h-1.5 bg-JBM-black dark:bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
            </div>

            <div className="flex flex-row items-center justify-end gap-2 w-full">
              <a
                href="#section-why-choose-us"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('section-why-choose-us')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-JBM-black text-white dark:bg-white dark:text-black px-4 py-2 rounded-full flex items-center gap-2 hover:scale-105 transition-transform shadow-lg w-fit whitespace-nowrap"
              >
                <span className="text-[9px] font-bold uppercase tracking-widest">
                  About Us
                </span>
                <div className="w-1.5 h-1.5 bg-white dark:bg-black rounded-full"></div>
              </a>
              <Link
                to="/rates"
                className="flex-shrink-0 border border-JBM-black dark:border-white hover:border-orange-500 text-JBM-black dark:text-white hover:text-orange-500 px-3 py-2 rounded-full flex items-center justify-center gap-2 hover:scale-105 transition-all shadow-lg group whitespace-nowrap"
              >
                <span className="text-[8px] font-bold uppercase tracking-widest">
                  Logistics Costs Calculator A.I
                </span>
                <i className="fa-solid fa-wand-magic-sparkles text-[10px] group-hover:animate-pulse"></i>
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4 shrink-0">
          <div onClick={() => navigate('/rate-engine?scope=kenya')} className="bg-white border border-gray-300 shadow-sm dark:bg-[#222] dark:border-transparent rounded-xl px-4 md:px-5 h-8 md:h-10 flex flex-row items-center justify-between hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors cursor-pointer group hover:border-orange-500">
            <div className="flex items-center gap-2 md:gap-3">
              <Map className="w-3 h-3 md:w-4 md:h-4 text-gray-500 dark:text-gray-400 group-hover:text-current transition-colors" />
              <div>
                <span className="text-[8px] md:text-[9px] font-bold uppercase tracking-widest opacity-50 block text-orange-500">
                  Mode 01
                </span>
                <h4 className="text-[9px] md:text-xs font-bold uppercase tracking-wide text-JBM-charcoal dark:text-white group-hover:text-current">
                  Kenya A-B
                </h4>
              </div>
            </div>
            <i className="fa-solid fa-arrow-right -rotate-45 text-[10px] md:text-xs opacity-0 group-hover:opacity-100 transition-opacity text-current"></i>
          </div>
          <div onClick={() => navigate('/rate-engine?scope=eac')} className="bg-white border border-gray-300 shadow-sm dark:bg-[#222] dark:border-transparent rounded-xl px-4 md:px-5 h-8 md:h-10 flex flex-row items-center justify-between hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors cursor-pointer group hover:border-orange-500">
            <div className="flex items-center gap-2 md:gap-3">
              <MapPinned className="w-3 h-3 md:w-4 md:h-4 text-gray-500 dark:text-gray-400 group-hover:text-current transition-colors" />
              <div>
                <span className="text-[8px] md:text-[9px] font-bold uppercase tracking-widest opacity-50 block text-orange-500">
                  Mode 02
                </span>
                <h4 className="text-[9px] md:text-xs font-bold uppercase tracking-wide text-JBM-charcoal dark:text-white group-hover:text-current whitespace-nowrap">
                  EAC Cross Border
                </h4>
              </div>
            </div>
            <i className="fa-solid fa-arrow-right -rotate-45 text-[10px] md:text-xs opacity-0 group-hover:opacity-100 transition-opacity text-current"></i>
          </div>
          <div onClick={() => navigate('/rate-engine?scope=sadc')} className="bg-white border border-gray-300 shadow-sm dark:bg-[#222] dark:border-transparent rounded-xl px-4 md:px-5 h-8 md:h-10 flex flex-row items-center justify-between hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors cursor-pointer group hover:border-orange-500">
            <div className="flex items-center gap-2 md:gap-3">
              <Earth className="w-3 h-3 md:w-4 md:h-4 text-gray-500 dark:text-gray-400 group-hover:text-current transition-colors" />
              <div>
                <span className="text-[8px] md:text-[9px] font-bold uppercase tracking-widest opacity-50 block text-orange-500">
                  Mode 03
                </span>
                <h4 className="text-[9px] md:text-xs font-bold uppercase tracking-wide text-JBM-charcoal dark:text-white group-hover:text-current whitespace-nowrap">
                  SADC Trans-Africa
                </h4>
              </div>
            </div>
            <i className="fa-solid fa-arrow-right -rotate-45 text-[10px] md:text-xs opacity-0 group-hover:opacity-100 transition-opacity text-current"></i>
          </div>
          <div onClick={() => navigate('/rate-engine?scope=global')} className="bg-white border border-gray-300 shadow-sm dark:bg-[#222] dark:border-transparent rounded-xl px-4 md:px-5 h-8 md:h-10 flex flex-row items-center justify-between hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors cursor-pointer group hover:border-orange-500">
            <div className="flex items-center gap-2 md:gap-3">
              <Globe2 className="w-3 h-3 md:w-4 md:h-4 text-gray-500 dark:text-gray-400 group-hover:text-current transition-colors" />
              <div>
                <span className="text-[8px] md:text-[9px] font-bold uppercase tracking-widest opacity-50 block text-orange-500">
                  Mode 04
                </span>
                <h4 className="text-[9px] md:text-xs font-bold uppercase tracking-wide text-JBM-charcoal dark:text-white group-hover:text-current">
                  Global Transit
                </h4>
              </div>
            </div>
            <i className="fa-solid fa-arrow-right -rotate-45 text-[10px] md:text-xs opacity-0 group-hover:opacity-100 transition-opacity text-current"></i>
          </div>
        </div>
        <div className="flex items-center gap-3 mb-4 pl-1">
          <div className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse"></div>
          <h3 className="text-sm md:text-base font-extrabold uppercase tracking-[0.2em] text-gray-800 dark:text-gray-200">
            Our Expertise
          </h3>

          <div className="flex items-center gap-1.5 ml-4">
            {[0, 1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className={`dot w-1.5 h-1.5 rounded-full ${
                  activeIndex === i
                    ? "bg-orange-500 active w-3"
                    : "bg-gray-300 dark:bg-gray-700"
                }`}
              ></div>
            ))}
          </div>
        </div>

        <div className="w-full">
          <div
            id="service-track"
            ref={trackRef}
            className="flex overflow-x-auto gap-6 py-4 hide-scroll snap-x snap-mandatory w-full scroll-smooth"
          >
            <div className="snap-center shrink-0">
              <div className="relative w-[340px] h-[160px] rounded-[2rem] overflow-hidden group zoom-card cursor-pointer border border-white/10 shadow-2xl bg-[#0a0a0a]">
                <div
                  className="absolute inset-0 bg-image bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('/images/green.jpg')",
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                <div className="absolute top-6 left-6 right-6 flex justify-between z-10">
                  <span className="bg-black/50 backdrop-blur border border-white/10 px-3 py-1 rounded-full text-[9px] font-bold uppercase text-white">
                    Ground Transport
                  </span>
                  <span className="bg-orange-500 text-black px-3 py-1 rounded-full text-[9px] font-bold uppercase">
                    01
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 w-full p-4 flex flex-col gap-1">
                  <div className="flex items-end justify-between">
                    <div>
                      <i className="fa-solid fa-couch text-orange-500 text-base mb-1"></i>
                      <h3 className="text-xl font-bold uppercase leading-none text-white group-hover:text-orange-500 transition-colors">
                        Supply <br /> Chain
                      </h3>
                    </div>
                    <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white backdrop-blur-sm group-hover:bg-orange-500 group-hover:text-black group-hover:border-orange-500 transition-all">
                      <i className="fa-solid fa-arrow-right -rotate-45"></i>
                    </div>
                  </div>
                  <p className="text-[10px] text-gray-300 leading-relaxed border-l-2 border-orange-500 pl-3 mt-1">
                    Optimized routing. From turn-key freight to smart city
                    delivery.
                  </p>
                </div>
              </div>
            </div>

            <div className="snap-center shrink-0">
              <div className="relative w-[340px] h-[160px] rounded-[2rem] overflow-hidden group zoom-card cursor-pointer border border-white/10 shadow-2xl bg-[#0a0a0a]">
                <div
                  className="absolute inset-0 bg-image bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('/images/urban.jpg')",
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                <div className="absolute top-6 left-6 right-6 flex justify-between z-10">
                  <span className="bg-black/50 backdrop-blur border border-white/10 px-3 py-1 rounded-full text-[9px] font-bold uppercase text-white">
                    Infrastructure
                  </span>
                  <span className="bg-orange-500 text-black px-3 py-1 rounded-full text-[9px] font-bold uppercase">
                    02
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 w-full p-4 flex flex-col gap-1">
                  <div className="flex items-end justify-between">
                    <div>
                      <i className="fa-solid fa-building text-orange-500 text-base mb-1"></i>
                      <h3 className="text-xl font-bold uppercase leading-none text-white group-hover:text-orange-500 transition-colors">
                        Freight Hubs <br /> Nexus
                      </h3>
                    </div>
                    <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white backdrop-blur-sm group-hover:bg-orange-500 group-hover:text-black group-hover:border-orange-500 transition-all">
                      <i className="fa-solid fa-arrow-right -rotate-45"></i>
                    </div>
                  </div>
                  <p className="text-[10px] text-gray-300 leading-relaxed border-l-2 border-orange-500 pl-3 mt-1">
                    High-yield transit hubs and logistics hubs powering the economy.
                  </p>
                </div>
              </div>
            </div>

            <div className="snap-center shrink-0">
              <div className="relative w-[340px] h-[160px] rounded-[2rem] overflow-hidden group zoom-card cursor-pointer border border-white/10 shadow-2xl bg-[#0a0a0a]">
                <div
                  className="absolute inset-0 bg-image bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('/images/ship.jpg')",
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                <div className="absolute top-6 left-6 right-6 flex justify-between z-10">
                  <span className="bg-black/50 backdrop-blur border border-white/10 px-3 py-1 rounded-full text-[9px] font-bold uppercase text-white">
                    Acquisition
                  </span>
                  <span className="bg-orange-500 text-black px-3 py-1 rounded-full text-[9px] font-bold uppercase">
                    03
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 w-full p-4 flex flex-col gap-1">
                  <div className="flex items-end justify-between">
                    <div>
                      <i className="fa-solid fa-map-location-dot text-orange-500 text-base mb-1"></i>
                      <h3 className="text-xl font-bold uppercase leading-none text-white group-hover:text-orange-500 transition-colors">
                        Fleet <br /> Network
                      </h3>
                    </div>
                    <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white backdrop-blur-sm group-hover:bg-orange-500 group-hover:text-black group-hover:border-orange-500 transition-all">
                      <i className="fa-solid fa-arrow-right -rotate-45"></i>
                    </div>
                  </div>
                  <p className="text-[10px] text-gray-300 leading-relaxed border-l-2 border-orange-500 pl-3 mt-1">
                    Strategic fleet scaling in verified growth zones with clean transit routes.
                  </p>
                </div>
              </div>
            </div>

            <div className="snap-center shrink-0">
              <div className="relative w-[340px] h-[160px] rounded-[2rem] overflow-hidden group zoom-card cursor-pointer border border-white/10 shadow-2xl bg-[#0a0a0a]">
                <div
                  className="absolute inset-0 bg-image bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('/images/ship.jpg')",
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                <div className="absolute top-6 left-6 right-6 flex justify-between z-10">
                  <span className="bg-black/50 backdrop-blur border border-white/10 px-3 py-1 rounded-full text-[9px] font-bold uppercase text-white">
                    Fulfillment
                  </span>
                  <span className="bg-orange-500 text-black px-3 py-1 rounded-full text-[9px] font-bold uppercase">
                    04
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 w-full p-4 flex flex-col gap-1">
                  <div className="flex items-end justify-between">
                    <div>
                      <i className="fa-solid fa-chart-line text-orange-500 text-base mb-1"></i>
                      <h3 className="text-xl font-bold uppercase leading-none text-white group-hover:text-orange-500 transition-colors">
                        Visionary <br /> Fulfillment
                      </h3>
                    </div>
                    <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white backdrop-blur-sm group-hover:bg-orange-500 group-hover:text-black group-hover:border-orange-500 transition-all">
                      <i className="fa-solid fa-arrow-right -rotate-45"></i>
                    </div>
                  </div>
                  <p className="text-[10px] text-gray-300 leading-relaxed border-l-2 border-orange-500 pl-3 mt-1">
                    High-ROI development projects and equity participation opportunities.
                  </p>
                </div>
              </div>
            </div>

            <div className="snap-center shrink-0">
              <div className="relative w-[340px] h-[160px] rounded-[2rem] overflow-hidden group zoom-card cursor-pointer border border-white/10 shadow-2xl bg-[#0a0a0a]">
                <div
                  className="absolute inset-0 bg-image bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('/images/ship.jpg')",
                  }}
                ></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                <div className="absolute top-6 left-6 right-6 flex justify-between z-10">
                  <span className="bg-black/50 backdrop-blur border border-white/10 px-3 py-1 rounded-full text-[9px] font-bold uppercase text-white">
                    Management
                  </span>
                  <span className="bg-orange-500 text-black px-3 py-1 rounded-full text-[9px] font-bold uppercase">
                    05
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 w-full p-4 flex flex-col gap-1">
                  <div className="flex items-end justify-between">
                    <div>
                      <i className="fa-solid fa-shield-halved text-orange-500 text-base mb-1"></i>
                      <h3 className="text-xl font-bold uppercase leading-none text-white group-hover:text-orange-500 transition-colors">
                        Fleet <br /> Steward
                      </h3>
                    </div>
                    <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white backdrop-blur-sm group-hover:bg-orange-500 group-hover:text-black group-hover:border-orange-500 transition-all">
                      <i className="fa-solid fa-arrow-right -rotate-45"></i>
                    </div>
                  </div>
                  <p className="text-[10px] text-gray-300 leading-relaxed border-l-2 border-orange-500 pl-3 mt-1">
                    Supply chain autopilot. Comprehensive fleet management and driver
                    vetting.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-1 md:w-[15vw] flex-shrink-0"></div>
          </div>

          <div className="flex justify-center items-center gap-3 text-[9px] font-bold uppercase tracking-widest text-gray-500 mt-2">
            <i className="fa-solid fa-chevron-left text-orange-500 animate-pulse"></i>
            <span className="text-JBM-charcoal dark:text-white">
              Swipe to Discover
            </span>
            <i className="fa-solid fa-chevron-right text-orange-500 animate-pulse"></i>
          </div>
        </div>

        <div className="mt-auto pt-8 md:pt-12 border-t border-gray-300 dark:border-white/10 shrink-0 mt-8 md:mt-12">
          <div className="flex justify-between items-center mb-2 md:mb-4">
            <div className="w-6 h-6 md:w-8 md:h-8 border border-gray-300 dark:border-white/20 rounded-full flex items-center justify-center hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors cursor-pointer group shrink-0">
              <i className="fa-solid fa-play text-[8px] md:text-[10px] ml-0.5 text-gray-500 group-hover:text-current"></i>
            </div>
            <div className="h-px bg-gray-300 dark:bg-white/10 flex-grow mx-4"></div>
          </div>
          <h3 className="text-xs md:text-sm font-medium leading-snug uppercase text-gray-800 dark:text-gray-200">
            WELCOME TO THE VANGUARD OF AFRICAN LOGISTICS & FREIGHT. WHERE DATA MEETS DESIGN,
            AND FULFILLMENT MEETS CULTURE. THIS IS YOUR GATEWAY TO GLOBAL TRADE.
          </h3>
        </div>
      </section>
    </div>
  );
}
