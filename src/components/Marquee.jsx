const defaultBrands = [
  { name: 'Havells', category: 'Cables & switchgear' },
  { name: 'Polycab', category: 'Wires & cables' },
  { name: 'Schneider Electric', category: 'Power distribution' },
  { name: 'Legrand', category: 'Switches & MCBs' },
  { name: 'Philips', category: 'Commercial LED' },
  { name: 'Larsen & Toubro', category: 'Industrial switchgear' },
  { name: 'Finolex', category: 'Electrical wires' },
  { name: 'Anchor by Panasonic', category: 'Wiring devices' }
];

const Marquee = ({ brands = defaultBrands, title = "Specified equipment & material suppliers" }) => {
  // Double the list to create a seamless infinite loop.
  const duplicatedBrands = [...brands, ...brands];

  return (
    <div className="border-y border-border bg-neutral py-7 overflow-hidden relative">
      {title && (
        <div className="text-center mb-5">
          <span className="label-tech">{title}</span>
        </div>
      )}

      <div className="logo-marquee-container">
        <div className="logo-marquee-track">
          {duplicatedBrands.map((brand, idx) => (
            <div
              key={idx}
              aria-hidden={idx >= brands.length ? 'true' : undefined}
              className="flex items-baseline gap-3 whitespace-nowrap"
            >
              <span className="font-display text-base font-bold text-on-surface">
                {brand.name}
              </span>
              <span className="text-[13px] text-muted">
                {brand.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
