import { PageLayout } from "../components/PageLayout";
import { TinyMarquee } from "../components/TinyMarquee";

export function ArchitectPage() {
  return (
    <PageLayout>
      <section className="w-full bg-gray-50 dark:bg-[#0a0a0a] min-h-screen py-20 md:py-32">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          <div className="lg:col-span-5 flex flex-col">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-orange-500"></div>
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] text-orange-500">06 / Engage</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tighter leading-[0.9] text-JBM-charcoal dark:text-white mb-8">
              Architect Your <br />
              <span className="text-gray-400">Supply Chain</span>
            </h1>
            <div className="relative overflow-hidden rounded-2xl -ml-4 sm:-ml-6 md:-ml-8 p-4 sm:p-6 md:p-8 border border-orange-500/10 shadow-xl max-w-md mb-12 group">
              <div className="absolute inset-0 bg-[url('/images/bg_architect.jpg')] bg-cover bg-center opacity-90 transition-opacity duration-700"></div>
            <div className="absolute inset-0 bg-[#0a0a0a]/40"></div>
              <div className="relative z-10">
                <p className="text-sm md:text-base text-white drop-shadow-md leading-relaxed">
                  Engage with our enterprise solutions team to design a custom logistics framework. From dedicated fleet allocation to bonded warehousing integration, we build bespoke engines for trade.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-6 border-t border-gray-200 dark:border-white/10 pt-12">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-500">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Global HQ</div>
                  <div className="font-bold text-JBM-charcoal dark:text-white">Nairobi, Kenya</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-500">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Enterprise Sales</div>
                  <div className="font-bold text-JBM-charcoal dark:text-white">enterprise@jbmlogistics.com</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-[2rem] p-8 md:p-12 shadow-xl">
              <form className="flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-3">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Full Name</label>
                    <input type="text" placeholder="Director of Procurement" className="w-full bg-gray-50 dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/10 rounded-xl px-5 py-4 text-sm text-JBM-charcoal dark:text-white focus:outline-none focus:border-orange-500 transition-colors" />
                  </div>
                  <div className="flex flex-col gap-3">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Company Name</label>
                    <input type="text" placeholder="Enterprise Corp" className="w-full bg-gray-50 dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/10 rounded-xl px-5 py-4 text-sm text-JBM-charcoal dark:text-white focus:outline-none focus:border-orange-500 transition-colors" />
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Email Address</label>
                  <input type="email" placeholder="director@enterprise.com" className="w-full bg-gray-50 dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/10 rounded-xl px-5 py-4 text-sm text-JBM-charcoal dark:text-white focus:outline-none focus:border-orange-500 transition-colors" />
                </div>

                <div className="flex flex-col gap-3">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Primary Logistics Requirement</label>
                  <select className="w-full bg-gray-50 dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/10 rounded-xl px-5 py-4 text-sm font-bold text-JBM-charcoal dark:text-white focus:outline-none focus:border-orange-500 transition-colors appearance-none">
                    <option>End-to-End Supply Chain Management</option>
                    <option>Heavy Haulage & OOG</option>
                    <option>Cold Chain Warehousing</option>
                    <option>Customs Brokerage (East Africa)</option>
                  </select>
                </div>

                <div className="flex flex-col gap-3">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Project Brief</label>
                  <textarea rows={4} placeholder="Describe your operational scope..." className="w-full bg-gray-50 dark:bg-[#0a0a0a] border border-gray-200 dark:border-white/10 rounded-xl px-5 py-4 text-sm text-JBM-charcoal dark:text-white focus:outline-none focus:border-orange-500 transition-colors resize-none"></textarea>
                </div>

                <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-black font-extrabold uppercase tracking-widest text-sm py-5 rounded-xl transition-colors mt-4">
                  Initiate Consultation
                </button>
              </form>
            </div>
          </div>

        </div>
      </section>
      <TinyMarquee />
    </PageLayout>
  );
}
