const defaultBrands = [
  { name: 'Havells', category: 'Cables & Switchgear' },
  { name: 'Polycab', category: 'Wires & Cables' },
  { name: 'Schneider Electric', category: 'Power Distribution' },
  { name: 'Legrand', category: 'Smart Switches & MCBs' },
  { name: 'Philips', category: 'Commercial LED' },
  { name: 'Larsen & Toubro', category: 'Industrial Switchgear' },
  { name: 'Finolex', category: 'Electrical Wires' },
  { name: 'Anchor by Panasonic', category: 'Wiring Devices' }
];

const Marquee = ({ brands = defaultBrands, title = "Trusted Equipment & Material Partners" }) => {
  // Double the list to create a seamless infinite loop
  const duplicatedBrands = [...brands, ...brands];

  return (
    <div className="py-10 bg-slate-900 text-white border-y border-slate-800 overflow-hidden relative">
      {title && (
        <div className="text-center mb-6">
          <span className="text-xs uppercase tracking-widest font-semibold text-amber-400/90">
            {title}
          </span>
        </div>
      )}
      
      <div className="logo-marquee-container">
        <div className="logo-marquee-track">
          {duplicatedBrands.map((brand, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 bg-slate-800/80 hover:bg-slate-800 px-6 py-3.5 rounded-xl border border-slate-700/60 transition-all duration-300 hover:border-amber-400/50 hover:shadow-lg hover:shadow-amber-500/10 group cursor-default"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-amber-400 group-hover:scale-125 transition-transform"></div>
              <div>
                <span className="text-base font-bold text-slate-100 group-hover:text-amber-400 transition-colors">
                  {brand.name}
                </span>
                <span className="block text-[11px] text-slate-400 font-medium">
                  {brand.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
