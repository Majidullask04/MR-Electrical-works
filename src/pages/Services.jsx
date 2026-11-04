import { services, industries, contactInfo } from '../data/mockData';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';

const specialized = [
  {
    title: 'DG Set & Generator Setup',
    desc: 'Automatic Mains Failure (AMF) panel wiring and changeover switchgear for uninterrupted operations.'
  },
  {
    title: 'Central Online UPS Systems',
    desc: 'Clean power isolation and harmonic filter installation for sensitive IT and lab hardware.'
  },
  {
    title: 'Solar Inverter Works',
    desc: 'Grid-tie & hybrid solar electrical cabling, DCDB/ACDB integration, and surge protection.'
  },
  {
    title: 'Chemical & Plate Earthing',
    desc: 'Low-impedance earth pits with copper/GI electrodes and conductivity enhancing compounds.'
  },
  {
    title: 'Industrial Automation Cabling',
    desc: 'PLC control panel wiring, VFD starter setups, sensor loops, and emergency stops.'
  },
  {
    title: 'Fire Alarm & Safety Circuits',
    desc: 'Emergency evacuation lighting, heat/smoke sensor circuitry, and siren loops.'
  }
];

const protocolLines = [
  'IS-compliant wiring gauge selection',
  'Thermal inspection & insulation testing',
  'Workmanship guarantee on all installations'
];

const Services = () => {
  return (
    <>

      {/* ============================== PAGE HEADER ============================== */}
      <section>
        <div className="container-custom">
          <div className="relative pt-32 sm:pt-40 pb-10 sm:pb-14 border-b border-border">
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none grid-copper grid-copper-coarse" aria-hidden="true" />
            <ScrollReveal variant="fade-up">
              <h1 className="mt-3 text-3xl xs:text-4xl sm:text-5xl font-display font-bold text-on-surface max-w-[16ch]">
                End-to-end electrical services
              </h1>
              <p className="mt-4 max-w-[60ch] text-sm sm:text-[15px] leading-relaxed text-muted">
                Wiring to multi-megawatt industrial distribution, each scope quoted from a site inspection.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ============================== CAPABILITY LEDGER ============================== */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal variant="fade-up">
            <div className="max-w-[60ch]">
              <h2 className="mt-2 text-2xl sm:text-3xl font-display font-bold text-on-surface">
                Core scopes of work
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Each scope below is delivered with the same three verifications: compliant gauge selection, thermal
                and insulation testing, and a workmanship guarantee on completion.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-10 grid grid-cols-1 gap-px bg-border border border-border rounded-sm overflow-hidden">
            {services.map((service, idx) => (
              <ScrollReveal key={service.id} variant="fade-up" delay={Math.min(idx * 0.06, 0.3)}>
                <article className="bg-surface p-6 sm:p-8 grid grid-cols-1 md:grid-cols-12 gap-6">
                  <div className="md:col-span-1">
                    <span className="font-mono text-sm font-semibold text-primary tabular-data" aria-hidden="true">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <div className="md:col-span-7 min-w-0">
                    <h3 className="text-lg sm:text-xl font-display font-bold text-on-surface">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-[13px] leading-relaxed text-muted">
                      {service.description}
                    </p>
                    <ul className="mt-5 max-w-[46ch]">
                      {protocolLines.map((line, lineIdx) => (
                        <li
                          key={lineIdx}
                          className="border-t border-border pt-2 mt-2 text-[12.5px] leading-snug text-on-surface first:mt-0"
                        >
                          {line}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="md:col-span-4 md:self-center">
                    <span className="label-tech">Direct consultation</span>
                    <div className="mt-2">
                      <Link
                        to="/contact"
                        className="font-sans text-[13px] font-semibold text-primary hover:underline underline-offset-4 whitespace-nowrap"
                      >
                        Request this scope
                        <span className="sr-only">: {service.title}</span>
                      </Link>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================== SECTORS COVERED ============================== */}
      <section className="section-padding bg-neutral border-b border-border">
        <div className="container-custom">
          <ScrollReveal variant="fade-up">
            <div className="max-w-[60ch]">
              <h2 className="mt-2 text-2xl sm:text-3xl font-display font-bold text-on-surface">
                Industries powered by MR Electrical
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Tailored electrical solutions that respect the unique load, uptime, and safety codes of each
                environment.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={0.1}>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
              {industries.map((ind, idx) => (
                <div
                  key={ind.name}
                  className={`bg-surface px-5 py-4 flex items-center gap-4 min-w-0 ${
                    idx === industries.length - 1 ? 'sm:col-span-2 lg:col-span-3' : ''
                  }`}
                >
                  <span className="font-mono text-xs font-semibold text-primary tabular-data shrink-0" aria-hidden="true">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <span className="font-sans text-sm font-semibold text-on-surface min-w-0">
                    {ind.name}
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================== SPECIALIZED ENGINEERING ============================== */}
      <section className="section-padding">
        <div className="container-custom">
          <ScrollReveal variant="fade-up">
            <div className="max-w-[60ch]">
              <h2 className="mt-2 text-2xl sm:text-3xl font-display font-bold text-on-surface">
                Specialized engineering solutions
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                Beyond conventional installations, we engineer backup power, surge immunity, and automation
                infrastructure.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-up" delay={0.1}>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border rounded-sm overflow-hidden">
              {specialized.map((item, idx) => (
                <div key={item.title} className="bg-surface p-5 sm:p-6 min-w-0">
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-[11px] font-semibold text-tertiary tabular-data shrink-0" aria-hidden="true">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <h3 className="font-sans text-[15px] font-semibold text-on-surface min-w-0">
                      {item.title}
                    </h3>
                  </div>
                  <p className="mt-2 text-[13px] leading-relaxed text-muted">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================== CTA STRIP ============================== */}
      <section className="py-14 sm:py-16 bg-panel-chassis border-t border-border">
        <div className="container-custom text-center">
          <ScrollReveal variant="fade-up">
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-surface max-w-[42ch] mx-auto">
              Specialized works are quoted from a site inspection
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-panel-dimmed max-w-[56ch] mx-auto">
              Share your load schedule or project scope with the engineering desk, and receive an itemized
              quotation with material specifications.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-sm bg-primary hover:bg-primary-hover text-surface font-sans text-sm font-semibold transition-colors duration-150 whitespace-nowrap"
              >
                Request an itemized quote
              </Link>
              <a
                href={contactInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-sm border border-panel-line text-surface hover:bg-panel-steel font-sans text-sm font-semibold transition-colors duration-150 whitespace-nowrap"
              >
                WhatsApp the engineering desk
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
  </>
  );
};

export default Services;
