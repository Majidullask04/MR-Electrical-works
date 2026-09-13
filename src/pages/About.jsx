import { CheckCircle2, ShieldAlert, Award, Compass, Target, ShieldCheck } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const About = () => {
  const values = [
    { title: 'Zero Compromise Safety', desc: 'Strict implementation of electrical safety rules, PPE usage, and rigorous testing on all sites.' },
    { title: 'Engineering Integrity', desc: 'Transparent material specifications, authentic ISI-marked wires, and honest price evaluations.' },
    { title: 'Technical Precision', desc: 'M.Tech-level load calculation, circuit segregation, and fault current protection.' },
    { title: 'Long-Term Reliability', desc: 'Neat conduit routing, durable wire terminations, and high-performance panel boards.' },
    { title: 'Client Dedication', desc: 'Prompt turnaround times, disciplined site coordination, and dependable post-handover support.' },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* ============================== PAGE HEADER WITH AMBIENT GLOW ============================== */}
      <section className="relative pt-32 pb-20 bg-slate-950 text-white overflow-hidden">
        <div className="hero-orb hero-orb-1 opacity-70"></div>
        <div className="hero-grid-pattern"></div>
        
        <div className="container-custom relative z-10 text-center">
          <ScrollReveal variant="fade-up">
            <span className="eyebrow !text-amber-400">About Our Company</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-5 tracking-tight text-white">
              Powering Safe Infrastructure Since 2019
            </h1>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Discover the engineering leadership, core safety values, and technical expertise powering MR. ELECTRICAL WORKS across Telangana.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================== STORY SECTION WITH CORNER ACCENTS ============================== */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5">
              <ScrollReveal variant="fade-right">
                <div className="hero-panel group">
                  <div className="relative h-[420px] overflow-hidden bg-slate-900">
                    <img 
                      src="https://images.unsplash.com/photo-1544724569-5f546fd6f2b6?auto=format&fit=crop&q=80&w=1000" 
                      alt="Mr. Nekbor Seikh on site" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
                    <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-white/10">
                      <div className="text-white font-bold text-sm">Mr. Nekbor Seikh</div>
                      <div className="text-xs text-amber-400 font-semibold">Founder &amp; Chief Engineer (M.Tech - EEE)</div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-7">
              <ScrollReveal variant="fade-left" delay={0.15}>
                <span className="eyebrow">The Leadership &amp; Vision</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
                  Qualified Engineering Meets Real-World Craftsmanship
                </h2>
                <div className="space-y-4 text-slate-600 text-base leading-relaxed">
                  <p>
                    <strong>MR. ELECTRICAL WORKS</strong> was founded in Patancheru, Hyderabad, to bridge the gap between ad-hoc electrical wiring and true engineering-grade installations.
                  </p>
                  <p>
                    Directed by <strong>Mr. Nekbor Seikh (M.Tech in Electrical &amp; Electronics Engineering)</strong>, the firm delivers end-to-end turnkey electrical solutions for modern homes, multistory apartments, corporate commercial offices, and industrial production plants.
                  </p>
                  <p>
                    We emphasize proper load balancing, fire-retardant low-smoke (FRLS) wiring, standardized circuit breakers (MCBs/RCCBs), and precision earthing to safeguard life and property against electrical hazards.
                  </p>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                    <div className="text-2xl font-bold text-amber-500 mb-0.5">5+ Years</div>
                    <div className="text-xs font-semibold text-slate-600">Continuous Growth</div>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                    <div className="text-2xl font-bold text-amber-500 mb-0.5">100+ Sites</div>
                    <div className="text-xs font-semibold text-slate-600">Successfully Powered</div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* ============================== MISSION & VISION (Saitronics Dual Card Architecture) ============================== */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <ScrollReveal variant="fade-right">
              <div className="card p-8 md:p-10 h-full border-t-4 border-amber-500 bg-white shadow-sm hover:shadow-xl transition-all">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center mb-6">
                  <Target size={26} />
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900 mb-4">Our Mission</h3>
                <p className="text-slate-600 text-base leading-relaxed">
                  To deliver technically superior, energy-efficient, and fail-safe electrical installations that guarantee human safety, operational resilience, and total client confidence across all sectors.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fade-left" delay={0.15}>
              <div className="card p-8 md:p-10 h-full border-t-4 border-blue-900 bg-white shadow-sm hover:shadow-xl transition-all">
                <div className="w-12 h-12 rounded-xl bg-blue-900/10 text-blue-900 flex items-center justify-center mb-6">
                  <Compass size={26} />
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900 mb-4">Our Vision</h3>
                <p className="text-slate-600 text-base leading-relaxed">
                  To stand as Telangana’s premier, most dependable electrical contracting firm, renowned for strict adherence to engineering standards, technical excellence, and zero-defect executions.
                </p>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* ============================== CORE VALUES GRID ============================== */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <ScrollReveal variant="fade-up">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="eyebrow">Operating Principles</span>
              <h2 className="section-title">The Values Behind Every Wire &amp; Panel</h2>
              <p className="section-subtitle">
                Our team abides by core standards that uphold life safety and long-lasting engineering quality.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((val, idx) => (
              <ScrollReveal 
                key={idx} 
                variant="zoom-in" 
                delay={idx * 0.08}
              >
                <div className="card p-6 h-full flex flex-col justify-between">
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-600 flex items-center justify-center mb-4">
                      <CheckCircle2 size={22} />
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2">{val.title}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{val.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================== SAFETY CULTURE PROTOCOL ============================== */}
      <section className="section-padding bg-slate-950 text-white relative overflow-hidden">
        <div className="hero-orb hero-orb-2 opacity-40"></div>
        <div className="hero-grid-pattern"></div>

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7">
              <ScrollReveal variant="fade-right">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-wider mb-4">
                  <ShieldAlert size={14} /> Strict Field Protocol
                </div>
                <h2 className="text-3xl sm:text-4xl font-black mb-6 leading-tight">
                  Safety Is Not A Policy. It Is Our Culture.
                </h2>
                <p className="text-slate-300 text-base leading-relaxed mb-8">
                  Electricity powers modern living, but faulty engineering causes severe fire and shock hazards. We observe stringent industrial safety protocols on every domestic and commercial job.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    'Certified insulated tools (1000V rated)',
                    'Appropriate Personal Protective Equipment (PPE)',
                    'Multi-stage earth pit resistance testing',
                    'FRLS fire-retardant wiring standard',
                    'ELCB / RCCB leakage trip testing',
                    'Standardized circuit identification & tags'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                      <ShieldCheck className="text-amber-400 shrink-0" size={18} />
                      <span className="text-sm text-slate-200 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-5">
              <ScrollReveal variant="fade-left" delay={0.2}>
                <div className="hero-panel">
                  <img 
                    src="https://images.unsplash.com/photo-1632731515904-8b6343513a94?auto=format&fit=crop&q=80&w=1000" 
                    alt="Safety gear and electrical testing" 
                    className="w-full h-80 sm:h-96 object-cover"
                  />
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
