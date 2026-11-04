import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Phone, MessageSquare, MapPin, FileText, ArrowRight } from 'lucide-react';
import { stats, services, contactInfo, leadership } from '../data/mockData';
import ScrollReveal from '../components/ScrollReveal';
import Counter from '../components/Counter';
import Marquee from '../components/Marquee';
import { LogoMark } from '../components/Logo';
import LoadCalculator from '../components/LoadCalculator';
import BlueprintViewer from '../components/BlueprintViewer';
import BlurText from '../components/BlurText';

const Home = () => {
  const [selectedFilter, setSelectedFilter] = useState('All projects');

  const filterCategories = ['All projects', 'Substations & HT', 'Industrial LT', 'Commercial towers', 'Villas & high-rise'];

  const filteredServices = selectedFilter === 'All projects'
    ? services
    : services.filter(s => {
        if (selectedFilter === 'Substations & HT') return s.id === 3 || s.id === 4;
        if (selectedFilter === 'Industrial LT') return s.id === 3 || s.id === 6;
        if (selectedFilter === 'Commercial towers') return s.id === 2 || s.id === 5;
        if (selectedFilter === 'Villas & high-rise') return s.id === 1 || s.id === 2;
        return true;
      });

  const engineeringGuarantees = [
    { code: 'IE Rules 1956', title: 'Full statutory compliance', desc: 'Zero rejection record across Telangana CEIG & TSSPDCL inspectorate filings.' },
    { code: 'IS 3043:2018', title: 'Sub-1.0 Ω earth grid', desc: 'Engineered chemical earthing rods & pipe-in-pipe grounding with calibrated test certificates.' },
    { code: 'CPRI certified', title: 'Type-tested switchboards', desc: 'Fabricated with 99.9% electrolytic E91E copper busbars and Schneider/L&T switchgear.' },
    { code: 'IS 732:2019', title: 'Harmonic & thermal balancing', desc: 'Infrared thermal imaging and balanced 3-phase load distribution preventing neutral burning.' },
  ];

  return (
    <>

      {/* ============================== HERO — visible whole at 1280x800 (Gate 44b) ============================== */}
      <section className="relative flex items-center pt-36 pb-12 sm:pt-44 sm:pb-16 border-b border-border overflow-hidden">
        {/* Drafting grid, hairline copper, no blur, no orbs */}
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none grid-copper grid-copper-coarse"
          aria-hidden="true"
        />

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center min-w-0">

            {/* Left column: the engineering brief */}
            <div className="lg:col-span-7 min-w-0">

              <div className="flex items-center gap-2 mb-5">
                <span className="inline-flex items-center gap-2 px-2.5 py-1 border border-tertiary/30 bg-tertiary-light rounded-sm font-mono text-[11px] text-tertiary whitespace-nowrap">
                  11kV/415V HT·LT EPC
                </span>
                <span className="font-mono text-[11px] text-muted truncate">
                  Patancheru &amp; Hyderabad
                </span>
              </div>

              <BlurText
                as="h1"
                text="Turnkey electrical contracting & substation EPC."
                className="text-3xl sm:text-5xl lg:text-[3.4rem] font-display font-bold text-on-surface leading-[1.08] tracking-tight min-w-0 break-words"
                stagger={0.03}
                duration={0.5}
              />

              <p className="mt-4 text-base sm:text-lg text-muted leading-relaxed max-w-[60ch]">
                M.Tech-led residential, commercial and industrial power systems executed across Telangana.
              </p>

              {/* Actions */}
              <div className="mt-7 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-sm bg-primary hover:bg-primary-hover text-surface font-sans text-sm font-semibold transition-colors duration-150 whitespace-nowrap"
                >
                  <span>Request site BOQ &amp; drawings</span>
                  <ArrowRight size={15} aria-hidden="true" />
                </Link>

                <a
                  href={contactInfo.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-sm border border-border bg-surface hover:bg-neutral text-on-surface font-sans text-sm font-semibold transition-colors duration-150 whitespace-nowrap"
                >
                  <MessageSquare size={15} aria-hidden="true" />
                  <span>WhatsApp the GM</span>
                </a>

                <a
                  href={`tel:${contactInfo.phone}`}
                  className="inline-flex items-center justify-center gap-2 px-3.5 py-3 rounded-sm font-mono text-xs font-semibold text-tertiary hover:text-tertiary-bright transition-colors duration-150 whitespace-nowrap"
                >
                  <Phone size={14} aria-hidden="true" />
                  <span>{contactInfo.displayPhone}</span>
                </a>
              </div>
            </div>

            {/* Right column: the principal engineer, in the calibration reticle */}
            <div className="lg:col-span-5 min-w-0">
              <ScrollReveal variant="fade-left" className="w-full">
                <div className="relative max-w-[380px] xl:max-w-[420px] mx-auto lg:mx-0 xl:ml-auto">
                  {/* Corner reticle glyph marks */}
                  <span className="absolute -top-2.5 -left-2 font-mono text-sm font-bold text-primary leading-none" aria-hidden="true">+</span>
                  <span className="absolute -top-2.5 -right-2 font-mono text-sm font-bold text-primary leading-none" aria-hidden="true">+</span>
                  <span className="absolute -bottom-2.5 -left-2 font-mono text-sm font-bold text-primary leading-none" aria-hidden="true">+</span>
                  <span className="absolute -bottom-2.5 -right-2 font-mono text-sm font-bold text-primary leading-none" aria-hidden="true">+</span>

                  <div className="border border-border bg-panel-chassis rounded-md p-2 shadow-tech-md">
                    <img
                      src={leadership.photo}
                      alt="Mr. Nekbor Seikh (M.Tech - EEE), General Manager Projects, on site"
                      className="w-full h-[300px] sm:h-[360px] object-cover object-top rounded-sm min-w-0"
                    />

                    <div className="flex items-center justify-between gap-3 px-2 pt-2.5 pb-1.5 min-w-0">
                      <div className="min-w-0 flex items-center gap-1.5">
                        <span className="font-sans text-sm font-bold text-surface truncate">{leadership.name}</span>
                        <CheckCircle2 size={13} className="text-tertiary-light shrink-0" aria-hidden="true" />
                      </div>
                      <div className="bg-surface border border-border rounded-sm p-1 shrink-0">
                        <LogoMark size={18} />
                      </div>
                    </div>
                    <div className="px-2 pb-2 font-mono text-[10px] text-panel-dimmed tabular-data truncate">
                      {leadership.qualification} · Patancheru 17.5323° N, 78.2644° E
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ============================== VERIFIED-COMPANY METRICS LEDGER ============================== */}
      <section className="bg-neutral border-b border-border">
        <div className="container-custom">
          <dl className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border border-x border-border">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-surface px-4 sm:px-6 py-5 sm:py-7 min-w-0 flex flex-col">
                <dt className="order-2 label-tech mt-1.5">{stat.label}</dt>
                <dd className="order-1 font-mono text-2xl sm:text-[1.75rem] font-bold text-primary tabular-data">
                  <Counter target={stat.value} />
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ============================== SUPPLIER SPECIFICATION LOOP (pauses on hover/focus) ============================== */}
      <Marquee />

      {/* ============================== INDEXED ENGINEERING CAPABILITIES (Gate 3 fix: index, not card grid) ============================== */}
      <section className="relative section-padding bg-surface border-b border-border">
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none grid-copper grid-copper-coarse" aria-hidden="true" />
        <div className="container-custom">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div className="min-w-0">
              <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight">
                Engineered power distribution architecture
              </h2>
            </div>
            <p className="text-[13px] text-muted max-w-md min-w-0">
              Every circuit planned from a computed load schedule, IS-standard earthing calculations, and verified harmonic mitigation.
            </p>
          </div>

          {/* Sector filter — the page drives a real state handler */}
          <div className="flex flex-wrap gap-2 mb-6" role="group" aria-label="Filter capabilities by sector">
            {filterCategories.map((cat) => {
              const active = selectedFilter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedFilter(cat)}
                  aria-pressed={active}
                  className={`px-3 py-2 rounded-sm border font-mono text-[11px] font-semibold whitespace-nowrap transition-[background-color,color,border-color] duration-150 ${
                    active
                      ? 'bg-primary-light text-primary-hover border-primary/40'
                      : 'bg-surface text-secondary hover:text-on-surface border-border'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Capability index — numbered rows, hairline rules */}
          <div className="grid grid-cols-1 gap-px bg-border border border-border rounded-sm overflow-hidden min-w-0">
            {filteredServices.map((service) => (
              <ScrollReveal key={service.id} variant="fade">
                <div className="bg-surface px-4 sm:px-6 py-5 grid grid-cols-1 sm:grid-cols-12 gap-3 sm:gap-6 items-center hover:bg-neutral transition-colors duration-150 min-w-0 group">
                  <div className="sm:col-span-1 font-mono text-sm font-semibold text-primary tabular-data" aria-hidden="true">
                    {String(service.id).padStart(2, '0')}
                  </div>
                  <div className="sm:col-span-4 min-w-0">
                    <h3 className="font-display font-bold text-on-surface text-base sm:text-lg">{service.title}</h3>
                  </div>
                  <div className="sm:col-span-6 min-w-0">
                    <p className="text-[13px] text-muted leading-relaxed">{service.description}</p>
                  </div>
                  <div className="sm:col-span-1 sm:text-right">
                    <Link
                      to="/services"
                      className="font-sans text-[13px] font-semibold text-primary hover:underline underline-offset-4 whitespace-nowrap"
                    >
                      Scope
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* ============================== SIGNATURE: THE ENGINEERING WORKBENCH ============================== */}
      <section className="section-padding bg-neutral border-b border-border">
        <div className="container-custom">

          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl sm:text-4xl font-display font-bold tracking-tight">
              Single line diagrams, load schedules &amp; estimates
            </h2>
            <p className="text-sm sm:text-base text-muted mt-3 max-w-[60ch] mx-auto">
              Inspect the circuit flow parameters our chief engineer calibrates, then compute your own sanctioned load and turnkey estimate below.
            </p>
          </div>

          <ScrollReveal variant="fade-up" className="mb-10">
            <BlueprintViewer />
          </ScrollReveal>

          <ScrollReveal variant="fade-up">
            <LoadCalculator />
          </ScrollReveal>

        </div>
      </section>

      {/* ============================== OVERSIGHT & COMPLIANCE MATRIX ============================== */}
      <section className="section-padding bg-surface border-b border-border">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center min-w-0">

            <div className="lg:col-span-5 min-w-0">
              <h2 className="text-2xl sm:text-3xl font-display font-bold leading-tight tracking-tight">
                Direct field oversight by Mr. Nekbor Seikh (M.Tech EEE)
              </h2>

              <p className="text-[15px] text-muted leading-relaxed mt-4">
                Electrical installations fail when contractors cut corners with undersized cable gauges, unbalanced phase loads, or substandard earthing pits.
              </p>

              <p className="text-[15px] text-muted leading-relaxed mt-3">
                At <strong className="text-on-surface">MR. ELECTRICAL WORKS</strong>, our General Manager of Projects directly reviews single-line drawings, validates fault current ratings, and personally signs off on critical commissioning milestones.
              </p>

              {/* Office coordinates sheet */}
              <div className="mt-5 p-4 bg-neutral border border-border rounded-sm space-y-2.5 min-w-0">
                <div className="flex items-start gap-2.5">
                  <MapPin className="text-primary shrink-0 mt-0.5" size={15} aria-hidden="true" />
                  <span className="font-mono text-xs text-on-surface">{contactInfo.address}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="text-tertiary shrink-0" size={15} aria-hidden="true" />
                  <span className="font-mono text-xs font-semibold text-on-surface whitespace-nowrap">Direct GM line: {contactInfo.displayPhone}</span>
                </div>
              </div>

              <div className="mt-5 flex flex-col sm:flex-row gap-3">
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-sm bg-panel-chassis hover:bg-panel-steel text-surface font-sans text-sm font-semibold transition-colors duration-150 whitespace-nowrap"
                >
                  <span>Read executive credentials</span>
                  <ArrowRight size={14} aria-hidden="true" />
                </Link>

                <a
                  href={leadership.businessCard}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-sm bg-surface border border-border hover:border-secondary text-on-surface font-sans text-sm font-semibold transition-colors duration-150 whitespace-nowrap"
                >
                  <FileText size={14} aria-hidden="true" />
                  <span>View registration card</span>
                </a>
              </div>
            </div>

            {/* Compliance matrix */}
            <div className="lg:col-span-7 min-w-0">
              <ScrollReveal variant="fade-left">
                <div className="border border-border rounded-md bg-surface p-5 sm:p-7 shadow-tech-md">

                  <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-5 border-b border-border">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="bg-surface border border-border rounded-full p-1 shrink-0">
                        <LogoMark size={24} />
                      </div>
                      <div className="min-w-0">
                        <div className="font-display font-bold text-sm text-on-surface">MR. ELECTRICAL WORKS</div>
                        <div className="font-mono text-[10px] text-muted">Registration &amp; compliance manifest</div>
                      </div>
                    </div>

                    <span className="px-2.5 py-1 rounded-sm bg-tertiary text-surface font-mono text-[10.5px] font-semibold whitespace-nowrap">
                      Verified contractor
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border border border-border rounded-sm overflow-hidden">
                    {engineeringGuarantees.map((item) => (
                      <div key={item.code} className="bg-surface p-4 min-w-0">
                        <span className="inline-block px-2 py-0.5 bg-primary-light text-primary-hover font-mono text-[10px] font-semibold rounded-sm">
                          {item.code}
                        </span>
                        <div className="font-sans font-semibold text-sm text-on-surface mt-2">{item.title}</div>
                        <div className="text-xs text-muted leading-relaxed mt-1">{item.desc}</div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 mt-5 border-t border-border flex flex-wrap justify-between gap-2 font-mono text-[11px] text-muted">
                    <span>Telangana CEIG inspectorate aligned</span>
                    <span>Patancheru &amp; Hyderabad HQ</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ============================== CTA ============================== */}
      <section className="py-16 sm:py-20 bg-panel-chassis border-t border-border">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-display font-bold tracking-tight text-surface leading-tight">
              Ready for zero-defect electrical execution?
            </h2>

            <p className="text-secondary-light/80 max-w-[60ch] mx-auto mt-4 text-[15px] leading-relaxed">
              Connect with Mr. Nekbor Seikh (M.Tech EEE) for upfront engineering advice, single-line diagram analysis, or an itemized turnkey quotation.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center sm:justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-sm bg-primary hover:bg-primary-hover text-surface font-sans text-sm font-semibold transition-colors duration-150 whitespace-nowrap"
              >
                <span>Request site inspection &amp; BOQ</span>
                <ArrowRight size={15} aria-hidden="true" />
              </Link>

              <a
                href={`tel:${contactInfo.phone}`}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-sm border border-panel-line bg-panel-chassis hover:bg-panel-steel text-surface font-mono text-xs font-semibold transition-colors duration-150 whitespace-nowrap"
              >
                <Phone size={15} aria-hidden="true" />
                <span>Call {contactInfo.displayPhone}</span>
              </a>

              <a
                href={contactInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-sm border border-panel-line bg-panel-chassis hover:bg-panel-steel text-surface font-sans text-sm font-semibold transition-colors duration-150 whitespace-nowrap"
              >
                <MessageSquare size={15} aria-hidden="true" />
                <span>WhatsApp consultation</span>
              </a>
            </div>
          </div>
        </div>
      </section>
  </>
  );
};

export default Home;
