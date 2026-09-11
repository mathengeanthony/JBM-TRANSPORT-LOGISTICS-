import { useEffect, useRef, useState } from "react";

export function SectionArt({ onMenuClick }: { onMenuClick: () => void }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const originalHTML = track.innerHTML;
    track.innerHTML += originalHTML + originalHTML;

    const cardWidth = 340 + 24;
    // Originally there were 14 cards
    const singleSetWidth = cardWidth * 14;
    let autoScroll: ReturnType<typeof setInterval>;

    const startScroll = () => {
      autoScroll = setInterval(() => {
        if (track.scrollLeft >= singleSetWidth) {
          track.style.scrollBehavior = "auto";
          track.scrollLeft -= singleSetWidth;
          track.style.scrollBehavior = "smooth";
        }

        requestAnimationFrame(() => {
          track.scrollBy({ left: cardWidth, behavior: "smooth" });
        });
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
    track.addEventListener("mouseenter", () => clearInterval(autoScroll));
    track.addEventListener("touchstart", () => clearInterval(autoScroll));
    track.addEventListener("mouseleave", startScroll);
    track.addEventListener("touchend", () => setTimeout(startScroll, 2000));

    startScroll();

    return () => {
      clearInterval(autoScroll);
      track.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="snap-section bg-[#f8f8f8] dark:bg-JBM-black transition-colors duration-500 overflow-x-hidden flex flex-col"
      id="section-art"
    >
      <section className="w-full pt-6 pb-24 px-0 flex flex-col justify-center relative overflow-hidden min-h-full">
        <div className="px-6 md:px-12 w-full">
        </div>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-orange-500/5 via-transparent to-transparent opacity-50 pointer-events-none"></div>

        <div className="max-w-[1600px] mx-auto px-6 md:px-12 w-full mb-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-end">
            <div className="flex flex-col items-start max-w-4xl">
              <div className="flex items-center gap-3 mb-4">
                <i className="fa-solid fa-gem text-orange-500 animate-pulse"></i>
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-gray-500 dark:text-gray-400 font-mono">
                  Curated Collections
                </span>
              </div>
              <div className="flex items-end gap-6 mb-6">
                <h2 className="text-5xl md:text-8xl font-extrabold uppercase tracking-tighter leading-[0.85] text-JBM-black dark:text-white transition-colors">
                  The Art <br /> <span className="hollow-text">Of Living</span>
                </h2>
                <div className="relative w-16 h-16 md:w-20 md:h-20 flex-shrink-0 mb-2">
                  <svg
                    className="absolute w-full h-full animate-spin-slow text-orange-500"
                    viewBox="0 0 100 100"
                  >
                    <path
                      id="curveLife"
                      d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                      fill="transparent"
                    />
                    <text
                      fontSize="11"
                      fontWeight="bold"
                      fill="currentColor"
                      letterSpacing="2"
                    >
                      <textPath href="#curveLife">• LIFESTYLE • CURATED •</textPath>
                    </text>
                  </svg>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-JBM-charcoal dark:text-white transition-colors">
                    <i className="fa-solid fa-couch text-lg"></i>
                  </div>
                </div>
              </div>
              <p className="text-sm md:text-base font-medium text-gray-600 dark:text-gray-400 leading-relaxed border-l-2 border-orange-500 pl-6 mb-8 max-w-2xl transition-colors">
                A logistics network is more than a map; it is where global trade flows. We
                curate environments that elevate your lifestyle, connecting
                families, professionals, and investors with the soul of their next
                residence.
              </p>
              <div className="w-full overflow-x-auto hide-scroll">
                <div className="flex flex-nowrap gap-3 items-center">
                  <span className="text-[9px] font-bold uppercase tracking-widest text-gray-500 dark:text-gray-600 mr-2 flex-shrink-0">
                    Filter by Vibe:
                  </span>
                  <button className="vibe-btn active border border-JBM-charcoal/30 dark:border-white/20 rounded-full px-5 py-2 text-[10px] font-bold uppercase tracking-widest transition-all flex-shrink-0 text-JBM-charcoal dark:text-white">
                    All
                  </button>
                  <button className="vibe-btn border border-JBM-charcoal/30 dark:border-white/20 text-gray-500 dark:text-gray-400 rounded-full px-5 py-2 text-[10px] font-bold uppercase tracking-widest transition-all flex-shrink-0">
                    Serenity
                  </button>
                  <button className="vibe-btn border border-JBM-charcoal/30 dark:border-white/20 text-gray-500 dark:text-gray-400 rounded-full px-5 py-2 text-[10px] font-bold uppercase tracking-widest transition-all flex-shrink-0">
                    Social
                  </button>
                  <button className="vibe-btn border border-JBM-charcoal/30 dark:border-white/20 text-gray-500 dark:text-gray-400 rounded-full px-5 py-2 text-[10px] font-bold uppercase tracking-widest transition-all flex-shrink-0">
                    Prestige
                  </button>
                  <button className="vibe-btn border border-JBM-charcoal/30 dark:border-white/20 text-gray-500 dark:text-gray-400 rounded-full px-5 py-2 text-[10px] font-bold uppercase tracking-widest transition-all flex-shrink-0">
                    Nature
                  </button>
                </div>
              </div>
            </div>

            <div className="hidden lg:block w-full h-full min-h-[250px] relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl group">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage:
                    "url('/images/urban.jpg')",
                }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-8 left-8">
                <p className="text-white text-xs font-bold uppercase tracking-widest mb-2">
                  Featured Residence
                </p>
                <p className="text-white text-2xl font-serif italic">
                  The Nairobi Distribution Center
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full overflow-hidden mb-6 border-y border-JBM-charcoal/10 dark:border-white/5 bg-JBM-charcoal/5 dark:bg-white/5 backdrop-blur-sm py-4 transition-colors">
          <div className="flex w-max animate-scroll-loop">
            {[1, 2, 3].map((_, idx) => (
              <div key={idx} className="flex items-center gap-10 px-6">
                <div className="flex flex-col items-center">
                  <span className="text-xs font-bold text-orange-500 uppercase tracking-widest">JBM</span>
                  <span className="text-[9px] text-gray-500 dark:text-gray-400 font-mono">24°C • Lush</span>
                </div>
                <div className="w-px h-6 bg-JBM-charcoal/20 dark:bg-white/10"></div>
                <div className="flex flex-col items-center">
                  <span className="text-xs font-bold text-JBM-charcoal dark:text-white uppercase tracking-widest">Runda</span>
                  <span className="text-[9px] text-gray-500 dark:text-gray-400 font-mono">22°C • Secure</span>
                </div>
                <div className="w-px h-6 bg-JBM-charcoal/20 dark:bg-white/10"></div>
                <div className="flex flex-col items-center">
                  <span className="text-xs font-bold text-gray-500 dark:text-gray-500 uppercase tracking-widest">Muthaiga</span>
                  <span className="text-[9px] text-gray-500 dark:text-gray-400 font-mono">23°C • Elite</span>
                </div>
                <div className="w-px h-6 bg-JBM-charcoal/20 dark:bg-white/10"></div>
                <div className="flex flex-col items-center">
                  <span className="text-xs font-bold text-JBM-charcoal dark:text-white uppercase tracking-widest">Kilifi</span>
                  <span className="text-[9px] text-gray-500 dark:text-gray-400 font-mono">29°C • Breeze</span>
                </div>
                <div className="w-px h-6 bg-JBM-charcoal/20 dark:bg-white/10"></div>
                <div className="flex flex-col items-center">
                  <span className="text-xs font-bold text-gray-500 dark:text-gray-500 uppercase tracking-widest">Diani</span>
                  <span className="text-[9px] text-gray-500 dark:text-gray-400 font-mono">30°C • Sunny</span>
                </div>
                <div className="w-px h-6 bg-JBM-charcoal/20 dark:bg-white/10"></div>
                <div className="flex flex-col items-center">
                  <span className="text-xs font-bold text-JBM-charcoal dark:text-white uppercase tracking-widest">Westlands</span>
                  <span className="text-[9px] text-gray-500 dark:text-gray-400 font-mono">25°C • Urban</span>
                </div>
                <div className="w-px h-6 bg-JBM-charcoal/20 dark:bg-white/10"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-6 space-y-8">
          <div className="w-full max-w-[39rem] mx-auto px-4">
            <div className="relative group">
              <div className="absolute -inset-8 bg-gradient-to-r from-orange-500/40 via-orange-500/80 to-orange-500/40 rounded-[2.5rem] blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse-slow"></div>
              <div className="relative bg-white dark:bg-JBM-charcoal border border-gray-200 dark:border-white/10 rounded-[2.5rem] p-2 flex items-center shadow-2xl transition-all">
                <div className="flex-1 flex items-center px-6">
                  <i className="fa-solid fa-wand-magic-sparkles text-orange-500 text-xl mr-4 animate-pulse"></i>
                  <input
                    type="text"
                    placeholder="__ DESCRIBE YOUR FREIGHT NEEDS __"
                    className="w-full bg-transparent border-none text-base md:text-xl text-JBM-charcoal dark:text-white placeholder-gray-400 dark:placeholder-gray-600 outline-none font-medium tracking-wider"
                  />
                </div>
                <button className="bg-JBM-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-[2rem] font-bold uppercase tracking-widest text-xs hover:bg-orange-500 hover:text-black transition-all shadow-lg flex items-center gap-3">
                  <span>AI Search</span>
                  <i className="fa-solid fa-sparkles"></i>
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between px-6">
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 bg-orange-500 rounded-full animate-pulse"></div>
              <h3 className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-gray-500 dark:text-gray-400">
                Our Curated Collections
              </h3>
            </div>

            <div className="flex items-center gap-2" id="art-pagination">
              {[0, 1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className={`dot w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    activeIndex === i ? "bg-orange-500 w-4" : "bg-gray-300 dark:bg-gray-800"
                  }`}
                ></div>
              ))}
            </div>
          </div>
        </div>

        <div className="mb-8 w-full group/track relative">
          <div
            id="card-track"
            ref={trackRef}
            className="flex overflow-x-auto gap-6 px-6 pb-12 hide-scroll snap-x snap-mandatory w-full scroll-smooth"
          >
            {[
              {
                img: "/images/truck.jpg",
                tag1: "Turn-Key",
                tag2: "14 Avail",
                title: "Fully <br> Furnished",
                desc: "End-to-end solutions. Automated warehousing Move-in ready luxury. Bespoke Italian furniture & curated art. global tracking.",
                icon: "fa-couch",
                avatar: "https://i.pravatar.cc/100?u=4",
              },
              {
                img: "/images/cold.jpg",
                tag1: "Financed",
                tag2: "28 Avail",
                tag2Light: true,
                title: "Mortgage <br> Ready",
                desc: "Verified titles & pre-approved financing plans.",
                icon: "fa-file-signature",
                avatar: "https://i.pravatar.cc/100?u=5",
              },
              {
                img: "/images/warehouse.jpg",
                tag1: "Gardens",
                tag2: "8 Avail",
                tag2Light: true,
                title: "Pet <br> Paradise",
                desc: "Private gardens, nearby parks, and pet-friendly policies.",
                icon: "fa-dog",
                avatar: "https://i.pravatar.cc/100?u=6",
              },
              {
                img: "/images/green.jpg",
                tag1: "Solar",
                tag2: "5 Avail",
                tag2Light: true,
                title: "Eco <br> Haven",
                desc: "Sustainable living with solar power and lush greenery.",
                icon: "fa-leaf",
                avatar: "https://i.pravatar.cc/100?u=9",
              },
              {
                img: "/images/truck.jpg",
                tag1: "Island",
                tag2: "1 Available",
                title: "Private <br> Atoll",
                desc: "Tropical living. Exclusive curated collection.",
                icon: "fa-umbrella-beach",
                avatar: "https://i.pravatar.cc/100?u=30",
              },
              {
                img: "/images/cold.jpg",
                tag1: "Vineyard",
                tag2: "Harvest",
                title: "Wine <br> Country",
                desc: "Tuscany living. Exclusive curated collection.",
                icon: "fa-wine-glass",
                avatar: "https://i.pravatar.cc/100?u=31",
              },
              {
                img: "/images/plane.jpg",
                tag1: "Castle",
                tag2: "Rare",
                title: "Historic <br> Fortress",
                desc: "Heritage living. Exclusive curated collection.",
                icon: "fa-chess-rook",
                avatar: "https://i.pravatar.cc/100?u=32",
              },
              {
                img: "/images/cold.jpg",
                tag1: "Ski",
                tag2: "Winter",
                title: "Alpine <br> Chalet",
                desc: "Aspen living. Exclusive curated collection.",
                icon: "fa-snowflake",
                avatar: "https://i.pravatar.cc/100?u=33",
              },
              {
                img: "/images/plane.jpg",
                tag1: "Desert",
                tag2: "Secluded",
                title: "Dune <br> Oasis",
                desc: "Sahara living. Exclusive curated collection.",
                icon: "fa-sun",
                avatar: "https://i.pravatar.cc/100?u=34",
              },
              {
                img: "/images/ship.jpg",
                tag1: "Wellness",
                tag2: "Spa",
                title: "Zen <br> Retreat",
                desc: "Balance living. Exclusive curated collection.",
                icon: "fa-spa",
                avatar: "https://i.pravatar.cc/100?u=35",
              },
              {
                img: "/images/ship.jpg",
                tag1: "Equestrian",
                tag2: "Stables",
                title: "Port <br> Terminal",
                desc: "Ranch living. Exclusive curated collection.",
                icon: "fa-horse-head",
                avatar: "https://i.pravatar.cc/100?u=36",
              },
              {
                img: "/images/trade.jpg",
                tag1: "Aviation",
                tag2: "Fly-In",
                title: "Aviation <br> Hub",
                desc: "Hangar living. Exclusive curated collection.",
                icon: "fa-plane",
                avatar: "https://i.pravatar.cc/100?u=37",
              },
              {
                img: "/images/plane.jpg",
                tag1: "Art",
                tag2: "Curated",
                title: "Gallery <br> Hub",
                desc: "Modern living. Exclusive curated collection.",
                icon: "fa-palette",
                avatar: "https://i.pravatar.cc/100?u=38",
              },
              {
                img: "/images/green.jpg",
                tag1: "Lagoon",
                tag2: "Private",
                title: "Blue <br> Lagoon",
                desc: "Water living. Exclusive curated collection.",
                icon: "fa-water",
                avatar: "https://i.pravatar.cc/100?u=39",
              },
            ].map((card, i) => (
              <div key={i} className="snap-center shrink-0">
                <div className="relative w-[340px] h-[480px] rounded-[2rem] overflow-hidden group zoom-card cursor-pointer border border-white/10 shadow-2xl bg-[#0a0a0a]">
                  <div
                    className="absolute inset-0 bg-image bg-cover bg-center"
                    style={{ backgroundImage: `url('${card.img}')` }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                  <div className="absolute top-6 left-6 right-6 flex justify-between z-10">
                    <span className="bg-black/50 backdrop-blur border border-white/10 px-3 py-1 rounded-full text-[9px] font-bold uppercase text-white">
                      {card.tag1}
                    </span>
                    <span
                      className={`px-3 py-1 rounded-full text-[9px] font-bold uppercase ${
                        card.tag2Light
                          ? "bg-white text-black"
                          : "bg-orange-500 text-black"
                      }`}
                    >
                      {card.tag2}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col gap-2">
                    <div className="flex items-end justify-between">
                      <div>
                        <i
                          className={`fa-solid ${card.icon} text-orange-500 text-xl mb-2`}
                        ></i>
                        <h3
                          className="text-2xl font-bold uppercase leading-none text-white group-hover:text-orange-500 transition-colors"
                          dangerouslySetInnerHTML={{ __html: card.title }}
                        ></h3>
                      </div>
                      <img
                        src={card.avatar}
                        alt=""
                        className="w-10 h-10 rounded-full border-2 border-white/20 grayscale group-hover:grayscale-0 transition-all"
                      />
                    </div>
                    <p className="text-[11px] text-gray-300 leading-relaxed border-l-2 border-orange-500 pl-3 mt-2">
                      {card.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center items-center gap-2 text-[9px] font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 mt-2">
            <i className="fa-solid fa-chevron-left text-orange-500 animate-pulse"></i>
            <span className="text-JBM-charcoal dark:text-white">
              Swipe to Discover
            </span>
            <i className="fa-solid fa-chevron-right text-orange-500 animate-pulse"></i>
          </div>
        </div>

        <div className="flex justify-center mb-4 relative z-20">
          <a
            href="#"
            className="group relative px-8 py-4 bg-JBM-black dark:bg-white text-white dark:text-black rounded-full text-xs font-bold uppercase tracking-widest hover:bg-orange-500 hover:text-black transition-all duration-300 shadow-lg"
          >
            <span className="relative z-10 flex items-center gap-3">
              View Complete Catalogue{" "}
              <i className="fa-solid fa-arrow-right -rotate-45 group-hover:rotate-0 transition-transform"></i>
            </span>
          </a>
        </div>

        <div className="w-full max-w-[1600px] mx-auto px-4 md:px-12">
          <div className="w-full bg-gray-100 dark:bg-JBM-charcoal border border-gray-200 dark:border-white/10 rounded-[2.5rem] p-1 flex flex-col md:flex-row items-stretch gap-0 relative overflow-hidden shadow-2xl transition-colors">
            <div className="hidden md:flex items-center gap-4 px-8 py-6 bg-gray-200/50 dark:bg-[#0a0a0a] rounded-l-[2.3rem] border-r border-gray-200 dark:border-white/5 relative z-10 w-[300px]">
              <div className="relative">
                <img
                  src="https://i.pravatar.cc/100?u=consultant"
                  alt="Concierge"
                  className="w-12 h-12 rounded-full border border-white/20 grayscale"
                />
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-gray-200 dark:border-[#0a0a0a] animate-pulse"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">
                  Your Concierge
                </span>
                <span className="text-xs font-bold text-JBM-charcoal dark:text-white">
                  James M.
                </span>
                <span className="text-[9px] text-orange-500 font-mono mt-0.5">
                  Active Now
                </span>
              </div>
            </div>
            <div className="flex-1 flex items-center gap-4 px-6 py-6 md:py-0 relative z-10">
              <div className="flex-1">
                <p className="text-[9px] font-bold uppercase text-gray-500 mb-1 ml-1 tracking-widest">
                  Skip the hustle...
                </p>
                <input
                  type="text"
                  placeholder="I'm looking for a [40k sqft warehouse] in [Mombasa] with [cold storage]..."
                  className="w-full bg-transparent border-none text-sm md:text-lg text-JBM-charcoal dark:text-white placeholder-gray-400 dark:placeholder-gray-600 outline-none font-medium"
                />
              </div>
              <button className="w-14 h-14 bg-JBM-black dark:bg-white text-white dark:text-black rounded-2xl flex items-center justify-center hover:bg-orange-500 hover:text-black hover:scale-105 transition-all shadow-lg flex-shrink-0">
                <i className="fa-solid fa-paper-plane text-lg"></i>
              </button>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 rounded-full blur-[80px] pointer-events-none"></div>
          </div>
        </div>
      </section>
    </div>
  );
}
