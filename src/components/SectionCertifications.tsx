export function SectionCertifications() {
  const certs = [
    { label: "AEO", desc: "Authorized Economic Operator" },
    { label: "IATA", desc: "Certified Cargo Agent" },
    { label: "FIATA", desc: "International Federation" },
    { label: "ISO 9001:2015", desc: "Quality Management" },
    { label: "TAPA", desc: "Facility Security Level A" }
  ];

  return (
    <div className="w-full bg-JBM-charcoal dark:bg-black py-1.5 border-b border-gray-800 dark:border-white/10 flex overflow-hidden">
      <div className="flex w-max animate-infinite-scroll">
        {[...certs, ...certs, ...certs, ...certs].map((cert, i) => (
          <div key={i} className="flex items-center gap-3 px-6 md:px-12 border-r border-gray-700 dark:border-white/10 last:border-none">
             <i className="fa-solid fa-shield-halved text-orange-500 text-sm"></i>
             <div className="flex flex-col">
               <span className="text-[10px] font-bold text-white tracking-widest leading-none mb-0.5">{cert.label}</span>
               <span className="text-[7px] text-gray-400 uppercase tracking-widest whitespace-nowrap leading-none">{cert.desc}</span>
             </div>
          </div>
        ))}
      </div>
    </div>
  );
}
