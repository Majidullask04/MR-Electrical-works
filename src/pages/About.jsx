import { ShieldCheck, Phone } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import { leadership, contactInfo } from '../data/mockData';

const About = () => {
  const values = [
    { title: 'Engineering Integrity', desc: 'Every cable size, conduit route, and circuit load is calculated scientifically to eliminate overloads and hotspots.' },
    { title: 'Zero Compromise Safety', desc: 'Strict deployment of dual-pole MCBs, 30mA RCCBs for human life safety, and heavy-duty chemical earth pits.' },
    { title: '100% Genuine ISI & CE Materials', desc: 'Zero tolerance for substandard counterfeit wires or switchgear. Only authentic certified brands (Havells, Polycab, Schneider, L&T).' },
    { title: 'Personal Engineering Oversight', desc: 'Direct on-site quality checks by M.Tech qualified leadership on every key installation milestone.' },
    { title: 'Clean & Aesthetic Finish', desc: 'Laser-level aligned switchboards, neatly combed DB panel dressing, and clean conduit concealing.' },
    { title: 'Transparent Upfront Pricing', desc: 'Itemized material specs and labor quotes with zero surprise add-ons during or after project execution.' },
  ];

  const safetyProtocols = [
    '1000V certified insulated tools & equipment',
    'Full personal protective equipment (PPE) on-site',
    'Chemical earth pit Megger resistance testing',
    'FRLS flame-retardant copper wiring standard',
    'Calibrated 30mA RCCB shock prevention units',
    'Standardized circuit numbering & phase tags',
  ];

  return (
    <>

      {/* ============================== PAGE HEADER — principal consultant dossier ============================== */}
      <section className="relative pt-32 sm:pt-40 pb-10 sm:pb-14 border-b border-border">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none grid-copper grid-copper-coarse" aria-hidden="true" />
        <div className="container-custom">
          <h1 className="mt-4 font-display font-bold text-3xl sm:text-5xl text-on-surface leading-[1.08] tracking-tight max-w-3xl">
            Engineering precision. No short-circuits.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-muted leading-relaxed max-w-[62ch]">
            Founded in Patancheru: certified turnkey electrical engineering for homes, commerce, and industry.
          </p>
        </div>
      </section>

      {/* ============================== CONSULTANT DOSSIER ============================== */}
      <section className="scroll section-padding">
        <div className="container-custom">
          <ScrollReveal variant="fade-up">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

              {/* Machined portrait frame with solid caption sheet */}
              <div className="lg:col-span-5 min-w-0">
                <div className="border border-border rounded-md shadow-tech-md overflow-hidden bg-neutral">
                  <img
                    src={leadership.photo}
                    alt="Mr. Nekbor Seikh (M.Tech - EEE), GM - Projects, on site"
                    className="w-full h-auto object-cover object-top max-h-[540px]"
                  />
                  <div className="bg-panel-chassis px-4 py-3.5">
                    <p className="font-sans text-base font-bold text-surface">{leadership.name}</p>
                    <p className="mt-1 font-mono text-[10px] text-panel-dimmed leading-relaxed">{leadership.role}</p>
                    <p className="font-mono text-[10px] text-panel-dimmed leading-relaxed">{leadership.qualification}</p>
                  </div>
                </div>
              </div>

              {/* Biography, credentials ledger & actions */}
              <div className="lg:col-span-7 min-w-0">
                <h2 className="mt-4 font-display font-bold text-2xl sm:text-4xl text-on-surface leading-tight tracking-tight">
                  Qualified engineering meets field craftsmanship
                </h2>

                <blockquote className="mt-6 border-l-2 border-primary pl-4 text-muted text-sm sm:text-base leading-relaxed">
                  {`“${leadership.quote}”`}
                </blockquote>

                <div className="mt-6 space-y-4 text-sm sm:text-base text-muted leading-relaxed max-w-[64ch]">
                  <p>
                    Unlike traditional uncertified electricians who rely on guesswork and unmeasured loads, <strong className="text-on-surface">MR. ELECTRICAL WORKS</strong> was founded in Patancheru, Hyderabad under the direct engineering leadership of <strong className="text-on-surface">Mr. Nekbor Seikh</strong>.
                  </p>
                  <p>
                    Holding a <strong className="text-on-surface">Master of Technology (M.Tech) in Electrical &amp; Electronics Engineering (EEE)</strong> and serving as <strong className="text-on-surface">GM, Projects</strong>, Mr. Nekbor brings scientific rigor to every wire, conduit, and panel board.
                  </p>
                  <p>
                    From high-rise residential installations to heavy manufacturing plants in the Patancheru, Pashamylaram, and Bolarum industrial corridors, our solutions prioritize human life safety, IS Code conformity, and fault-proof power resilience.
                  </p>
                </div>

                {/* Indexed credentials */}
                <div className="mt-8">
                  {leadership.credentials.map((cred, idx) => (
                    <div key={idx} className="flex items-start gap-4 border-t border-border first:border-t-0 pt-3 pb-3">
                      <span className="font-mono tabular-data text-xs text-primary pt-0.5 shrink-0">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <span className="text-[13px] font-semibold text-on-surface leading-relaxed">{cred}</span>
                    </div>
                  ))}
                </div>

                {/* Actions */}
                <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-sm bg-primary hover:bg-primary-hover text-surface font-sans text-sm font-semibold transition-colors duration-150 whitespace-nowrap"
                  >
                    <Phone size={15} aria-hidden="true" />
                    <span>Speak with Mr. Nekbor: {contactInfo.displayPhone}</span>
                  </a>
                  <a
                    href={contactInfo.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-sm border border-border hover:border-secondary bg-surface text-on-surface font-sans text-sm font-semibold transition-colors duration-150 whitespace-nowrap"
                  >
                    <span>WhatsApp engineering desk</span>
                  </a>
                </div>
              </div>

            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================== IDENTITY VERIFICATION ============================== */}
      <section className="bg-neutral border-y border-border">
        <div className="container-custom section-padding">
          <ScrollReveal variant="fade-up">
            <div className="max-w-2xl">
              <h2 className="mt-4 font-display font-bold text-2xl sm:text-4xl text-on-surface leading-tight tracking-tight">
                Verified contractor identity &amp; physical office
              </h2>
            </div>
          </ScrollReveal>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* Physical business card, machined panel */}
            <div className="lg:col-span-7 min-w-0">
              <ScrollReveal variant="fade-up" delay={0.1}>
                <div className="border border-border bg-surface rounded-md p-4">
                  <span className="label-tech">Official company business card</span>
                  <div className="mt-3 rounded-sm overflow-hidden border border-border">
                    <img
                      src={leadership.businessCard}
                      alt="Official business card of MR. ELECTRICAL WORKS — Mr. Nekbor Seikh"
                      className="w-full h-auto object-contain bg-surface"
                    />
                  </div>
                  <p className="mt-3 font-mono text-[11px] text-muted leading-relaxed">
                    Physical card registered at No. 83, Gokul Nagar, Patancheru, Telangana 502319
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Contact ledger — single divided panel */}
            <div className="lg:col-span-5 min-w-0">
              <ScrollReveal variant="fade-up" delay={0.15}>
                <div className="border border-border bg-surface rounded-md divide-y divide-border">

                  <div className="p-4 sm:p-5">
                    <span className="label-tech">Office address</span>
                    <p className="mt-2 text-sm font-semibold text-on-surface leading-relaxed">
                      {contactInfo.address}
                    </p>
                    <a
                      href={contactInfo.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-block text-[13px] font-semibold text-primary underline-offset-2 hover:underline whitespace-nowrap"
                    >
                      Open in Google Maps
                    </a>
                  </div>

                  <div className="p-4 sm:p-5">
                    <span className="label-tech">Direct line</span>
                    <a
                      href={`tel:${contactInfo.phone}`}
                      className="mt-2 inline-block font-mono tabular-data text-sm font-semibold text-on-surface hover:text-primary transition-colors duration-150"
                    >
                      {contactInfo.displayPhone}
                    </a>
                    <p className="mt-1 font-mono text-[11px] text-muted">
                      Attended by Mr. Nekbor Seikh (GM, Projects)
                    </p>
                  </div>

                  <div className="p-4 sm:p-5">
                    <span className="label-tech">Official email</span>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="mt-2 block text-sm font-semibold text-on-surface break-all hover:text-primary transition-colors duration-150"
                    >
                      {contactInfo.email}
                    </a>
                    <p className="mt-1 font-mono text-[11px] text-muted">
                      Direct quotation &amp; drawing submittals
                    </p>
                  </div>

                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* ============================== PRINCIPLES INDEX ============================== */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal variant="fade-up">
            <div className="max-w-2xl">
              <h2 className="mt-4 font-display font-bold text-2xl sm:text-4xl text-on-surface leading-tight tracking-tight">
                The principles behind every wire &amp; panel
              </h2>
              <p className="mt-3 text-sm sm:text-base text-muted leading-relaxed">
                Our team abides by standardized procedures that ensure long-lasting electrical safety.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={0.1}>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border rounded-sm overflow-hidden">
              {values.map((val, idx) => (
                <div key={idx} className="bg-surface p-5">
                  <span className="font-mono tabular-data text-xs text-primary">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-2.5 text-sm sm:text-[15px] font-semibold text-on-surface leading-snug">
                    {val.title}
                  </h3>
                  <p className="mt-1.5 text-[13px] text-muted leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================== FIELD SAFETY PROTOCOL — dark closing ============================== */}
      <section className="bg-panel-chassis py-16">
        <div className="container-custom">
          <ScrollReveal variant="fade-up">
            <div className="max-w-2xl">
              <h2 className="font-display font-bold text-2xl sm:text-4xl text-surface leading-tight tracking-tight">
                Safety is not a policy. It is our culture.
              </h2>
              <p className="mt-3 text-sm sm:text-base text-secondary-light/80 leading-relaxed">
                Electricity powers modern living, but faulty engineering causes lethal shock and catastrophic fire hazards. We enforce strict industrial safety protocols on every domestic and commercial job.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

            {/* Protocol hairline grid */}
            <div className="lg:col-span-7 min-w-0">
              <ScrollReveal variant="fade-up" delay={0.1}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-panel-line border border-panel-line">
                  {safetyProtocols.map((item, idx) => (
                    <div key={idx} className="bg-panel-chassis p-4 text-[13px] text-secondary-light flex items-start gap-2.5">
                      <ShieldCheck size={16} className="text-tertiary-light shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            {/* Sign-off dossier */}
            <div className="lg:col-span-5 min-w-0">
              <ScrollReveal variant="fade-up" delay={0.15}>
                <div className="bg-panel-steel border border-panel-line rounded-md p-5 max-w-xl">
                  <div className="flex items-center gap-4">
                    <img
                      src={leadership.photoSquare}
                      alt={leadership.name}
                      className="w-14 h-14 rounded-sm object-cover border border-panel-line shrink-0"
                    />
                    <div className="min-w-0">
                      <p className="font-sans text-sm font-bold text-surface">{leadership.name}</p>
                      <p className="mt-0.5 font-mono text-[10px] text-primary-light leading-relaxed">{leadership.role}</p>
                      <p className="font-mono text-[10px] text-panel-dimmed leading-relaxed">{leadership.qualification}</p>
                    </div>
                  </div>

                  <p className="mt-4 text-[13px] text-secondary-light leading-relaxed">
                    {`“Every client we serve in Patancheru and Hyderabad gets my personal mobile number. If there is ever an issue with our panel or wiring, I stand behind our work 100%.”`}
                  </p>

                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="mt-5 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-sm bg-primary hover:bg-primary-hover text-surface font-sans text-sm font-semibold transition-colors duration-150 whitespace-nowrap"
                  >
                    <Phone size={15} aria-hidden="true" />
                    <span>Call direct: {contactInfo.displayPhone}</span>
                  </a>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

  </>
  );
};

export default About;
