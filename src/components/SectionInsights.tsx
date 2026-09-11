import { useState } from "react";

export function SectionInsights({ onMenuClick }: { onMenuClick: () => void }) {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const faqData = [
    {
      id: 0,
      tag: "LEGAL",
      question: "How secure is the title transfer process?",
      answer:
        "We operate with a zero-risk policy. All JBM logistics hubs hold secured bonds and strict transit insurance, verified by our in-house legal team. We handle the entire transfer process.",
    },
    {
      id: 1,
      tag: "POLICY",
      question: "Can foreign nationals lease freight hubs?",
      answer:
        "Absolutely. Foreign companies can legally lease commercial logistics space in Kenya under long-term tenure. Our legal team specializes in international logistics leasing.",
    },
    {
      id: 2,
      tag: "FINANCE",
      question: "What is the expected efficiency yield?",
      answer:
        "Signature Collection logistics hubs average a efficiency yield of 8% - 12% annually (Dollar-denominated). Short-stay units can exceed 15%.",
    },
    {
      id: 3,
      tag: "SERVICE",
      question: "Do you manage the fleet for me?",
      answer:
        "Yes. JBMConcierge handles driver screening, vehicle maintenance, and freight billing. Shippers get a digital dashboard to track performance.",
    },
    {
      id: 4,
      tag: "PAYMENT",
      question: "Are payment plans available?",
      answer:
        "We offer flexible payment structures for off-plan developments, typically requiring a 20-30% deposit with the balance spread over construction.",
    },
  ];

  return (
    <div
      className=" bg-[#f8f8f8] dark:bg-JBM-black transition-colors duration-500 overflow-x-hidden flex flex-col"
      id="section-insights"
    >
      <section className="w-full py-2 md:py-4 px-6 md:px-12 max-w-[1600px] mx-auto flex-grow flex flex-col">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-5 flex flex-col">
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-2">
                <i className="fa-solid fa-scale-balanced text-orange-500 animate-pulse"></i>
                <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-gray-500 dark:text-gray-400 transition-colors">
                  Due Diligence
                </span>
              </div>

              <div className="flex items-end gap-4 md:gap-6 mb-3">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase tracking-tighter leading-[0.9] text-JBM-charcoal dark:text-white transition-colors">
                  Expert <br />{" "}
                  <span className="text-gray-500 dark:text-gray-600">
                    Analytics
                  </span>
                </h2>
                <div className="relative w-10 h-10 md:w-12 md:h-12 flex-shrink-0 mb-1">
                  <svg
                    className="absolute w-full h-full animate-spin-slow text-orange-500"
                    viewBox="0 0 100 100"
                  >
                    <path
                      id="curveFaq"
                      d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                      fill="transparent"
                    />
                    <text
                      fontSize="10"
                      fontWeight="bold"
                      fill="currentColor"
                      letterSpacing="2"
                    >
                      <textPath href="#curveFaq">
                        • KNOWLEDGE • TRUST •
                      </textPath>
                    </text>
                  </svg>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-JBM-charcoal dark:text-white transition-colors">
                    <i className="fa-solid fa-lightbulb text-[9px]"></i>
                  </div>
                </div>
              </div>

              <p className="text-sm font-medium text-gray-600 dark:text-gray-400 leading-relaxed mb-4 transition-colors">
                Clarity is the ultimate luxury. We address the complexities of
                ownership, investment, and law with absolute transparency.
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                <button className="filter-pill-faq active px-3 py-1 rounded-full border border-orange-500 text-[9px] font-bold uppercase tracking-widest">
                  All
                </button>
                <button className="filter-pill-faq px-3 py-1 rounded-full border border-JBM-charcoal/30 dark:border-white/10 text-gray-500 text-[9px] font-bold uppercase tracking-widest">
                  Legal
                </button>
                <button className="filter-pill-faq px-3 py-1 rounded-full border border-JBM-charcoal/30 dark:border-white/10 text-gray-500 text-[9px] font-bold uppercase tracking-widest">
                  Finance
                </button>
                <button className="filter-pill-faq px-3 py-1 rounded-full border border-JBM-charcoal/30 dark:border-white/10 text-gray-500 text-[9px] font-bold uppercase tracking-widest">
                  ROI
                </button>
              </div>
            </div>

            <div className="bg-white dark:bg-JBM-panel border border-gray-200 dark:border-white/10 rounded-2xl p-4 md:p-5 relative overflow-hidden group transition-colors">
              <div className="relative z-10">
                <h4 className="text-base font-bold text-JBM-charcoal dark:text-white mb-1 transition-colors">
                  Unanswered Query?
                </h4>
                <p className="text-[10px] text-gray-500 dark:text-gray-400 mb-3 transition-colors">
                  Direct line to our legal &amp; sales concierge.
                </p>
                <div className="flex items-center gap-2 border-b border-gray-300 dark:border-white/20 pb-2 mb-2 focus-within:border-orange-500 transition-colors">
                  <input
                    type="text"
                    placeholder="Type your question..."
                    className="bg-transparent w-full text-xs text-JBM-charcoal dark:text-white placeholder-gray-400 dark:placeholder-gray-600 outline-none transition-colors"
                  />
                  <button className="text-orange-500 hover:text-JBM-charcoal hover:dark:text-white transition-colors">
                    <i className="fa-solid fa-arrow-right -rotate-45"></i>
                  </button>
                </div>
                <div className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-widest text-gray-500 transition-colors">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>{" "}
                  Online Now
                </div>
              </div>
              <div className="absolute -right-2 -bottom-2 text-6xl text-JBM-charcoal dark:text-white opacity-[0.03] dark:opacity-[0.02] font-serif italic">
                ?
              </div>
            </div>

            <a href="#" className="mt-3 md:mt-4 w-full bg-orange-500 text-black px-5 py-3 md:py-4 rounded-xl flex items-center justify-between hover:bg-orange-400 transition-colors shadow-lg group">
               <div className="flex flex-col">
                  <span className="text-xs md:text-sm font-black uppercase tracking-tight">Trade & Intelligence Hub</span>
                  <span className="text-[9px] font-bold uppercase tracking-widest text-black/70 mt-0.5">Explore Market Insights</span>
               </div>
               <div className="w-8 h-8 rounded-full bg-black/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <i className="fa-solid fa-arrow-right -rotate-45 group-hover:rotate-0 transition-transform"></i>
               </div>
            </a>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-2">
            {faqData.map((faq) => (
              <div
                key={faq.id}
                className={`faq-item border border-gray-200 dark:border-white/10 rounded-xl p-3 md:p-4 cursor-pointer group bg-white dark:bg-JBM-panel transition-colors ${
                  activeFaq === faq.id ? "active" : ""
                }`}
                onClick={() => toggleFaq(faq.id)}
              >
                <div className="flex justify-between items-start md:items-center">
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                    <span
                      className={`text-[8px] font-mono px-2 py-0.5 rounded border tracking-wider ${
                        activeFaq === faq.id
                          ? "text-orange-500 bg-orange-500/10 border-orange-500/20"
                          : "text-gray-500 bg-gray-100 dark:bg-white/5 border-gray-200 dark:border-white/10"
                      }`}
                    >
                      [{faq.tag}]
                    </span>
                    <h3 className="text-sm md:text-base font-bold text-JBM-charcoal dark:text-white group-hover:text-orange-500 transition-colors">
                      {faq.question}
                    </h3>
                  </div>
                  <i className="faq-icon fa-solid fa-chevron-down text-xs text-gray-500"></i>
                </div>
                <div className="faq-content">
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed border-l border-orange-500 pl-3 transition-colors">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
