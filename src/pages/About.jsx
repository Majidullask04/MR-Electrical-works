import { CheckCircle2, ShieldAlert, Award, Compass, Target, ShieldCheck, Phone, Mail, MapPin, Download, Check } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import { leadership, contactInfo } from '../data/mockData';
import { LogoMark } from '../components/Logo';

const About = () => {
  const values = [
    { title: 'Engineering Integrity', desc: 'Every cable size, conduit route, and circuit load is calculated scientifically to eliminate overloads and hotspots.' },
    { title: 'Zero Compromise Safety', desc: 'Strict deployment of dual-pole MCBs, 30mA RCCBs for human life safety, and heavy-duty chemical earth pits.' },
    { title: '100% Genuine ISI & CE Materials', desc: 'Zero tolerance for substandard counterfeit wires or switchgear. Only authentic certified brands (Havells, Polycab, Schneider, L&T).' },
    { title: 'Personal Engineering Oversight', desc: 'Direct on-site quality checks by M.Tech qualified leadership on every key installation milestone.' },
    { title: 'Clean & Aesthetic Finish', desc: 'Laser-level aligned switchboards, neatly combed DB panel dressing, and clean conduit concealing.' },
    { title: 'Transparent Upfront Pricing', desc: 'Itemized material specs and labor quotes with zero surprise add-ons during or after project execution.' },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* ============================== PAGE HEADER WITH AMBIENT GLOW ============================== */}
      <section className="relative pt-24 xs:pt-28 sm:pt-32 pb-14 sm:pb-20 bg-slate-950 text-white overflow-hidden">
        <div className="hero-orb hero-orb-1 opacity-70"></div>
        <div className="hero-orb hero-orb-2 opacity-50"></div>
        <div className="hero-grid-pattern"></div>
        
        <div className="container-custom relative z-10 text-center">
          <ScrollReveal variant="fade-up">
            <div className="inline-flex items-center gap-2 px-3 xs:px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-400 text-[11px] xs:text-xs font-bold uppercase tracking-wider mb-4 sm:mb-5 max-w-full truncate">
              <Award size={14} className="shrink-0" /> <span className="truncate">M.Tech (EEE) Qualified Engineering Leadership</span>
            </div>
            <h1 className="text-2xl xs:text-3xl sm:text-5xl md:text-6xl font-black mb-4 sm:mb-5 tracking-tight text-white break-words">
              Engineering Precision. Zero Short-Circuits.
            </h1>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Founded in Patancheru, Hyderabad, <strong>MR. ELECTRICAL WORKS</strong> delivers certified turnkey electrical engineering for homes, commercial complexes, and industrial plants.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================== LEADERSHIP SPOTLIGHT: MR. NEKBOR SEIKH ============================== */}
      <section className="section-padding bg-white border-b border-slate-200/80">
        <div className="container-custom">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Real Executive Portrait */}
            <div className="lg:col-span-5">
              <ScrollReveal variant="fade-right">
                <div className="relative group">
                  {/* Subtle accent frame glow */}
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 via-emerald-500 to-amber-500 rounded-3xl opacity-30 blur-lg group-hover:opacity-50 transition duration-500"></div>
                  
                  <div className="relative rounded-2xl overflow-hidden bg-slate-900 border-2 border-slate-800 shadow-2xl">
                    <img 
                      src={leadership.photo} 
                      alt="Mr. Nekbor Seikh (M.Tech - EEE) - GM Projects" 
                      className="w-full h-auto object-cover object-top max-h-[540px] transform group-hover:scale-102 transition duration-500"
                    />
                    
                    {/* Dark gradient overlay for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

                    {/* Verified Leader Badge on Photo */}
                    <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-slate-900/95 backdrop-blur-md border border-slate-700/80 text-white shadow-xl">
                      <div className="flex items-center justify-between mb-1">
                        <div className="text-lg font-black text-white flex items-center gap-1.5">
                          <span>{leadership.name}</span>
                          <CheckCircle2 size={18} className="text-emerald-400 fill-emerald-400/20" />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-400/30">
                          {leadership.role}
                        </span>
                      </div>
                      <div className="text-xs text-amber-400 font-semibold mb-2">
                        {leadership.qualification}
                      </div>
                      <p className="text-[11px] text-slate-300 italic border-t border-slate-800 pt-2">
                        "{leadership.quote}"
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Leadership Biography & Engineering Credentials */}
            <div className="lg:col-span-7">
              <ScrollReveal variant="fade-left" delay={0.15}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
                  <LogoMark size={18} /> Direct Project Leadership
                </div>
                
                <h2 className="text-2xl xs:text-3xl sm:text-4xl font-extrabold text-slate-900 mb-6 leading-tight break-words">
                  Qualified Engineering Meets Real-World Craftsmanship
                </h2>

                <div className="prose text-slate-600 text-base leading-relaxed space-y-4">
                  <p>
                    Unlike traditional uncertified electricians who rely on guesswork and unmeasured loads, <strong>MR. ELECTRICAL WORKS</strong> was founded in Patancheru, Hyderabad under the direct engineering leadership of <strong>Mr. Nekbor Seikh</strong>.
                  </p>
                  <p>
                    Holding a <strong>Master of Technology (M.Tech) in Electrical &amp; Electronics Engineering (EEE)</strong> and serving as <strong>GM - Projects</strong>, Mr. Nekbor brings scientific rigor to every wire, conduit, and panel board.
                  </p>
                  <p>
                    From high-rise residential installations to heavy manufacturing plants in the Patancheru, Pashamylaram, and Bolarum industrial corridors, our solutions prioritize human life safety, IS Code conformity, and fault-proof power resilience.
                  </p>
                </div>

                {/* Key Credentials List */}
                <div className="mt-6 space-y-2.5">
                  {leadership.credentials.map((cred, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-2.5 rounded-lg bg-slate-50 border border-slate-200/80">
                      <ShieldCheck size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-sm font-semibold text-slate-800">{cred}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="btn-primary flex items-center justify-center gap-2 w-full sm:w-auto text-center"
                  >
                    <Phone size={16} />
                    <span>Speak with Mr. Nekbor: {contactInfo.displayPhone}</span>
                  </a>
                  <a
                    href={contactInfo.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline flex items-center justify-center gap-2 text-emerald-700 border-emerald-300 hover:bg-emerald-50 w-full sm:w-auto text-center"
                  >
                    <Mail size={16} />
                    <span>WhatsApp Engineering Desk</span>
                  </a>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* ============================== AUTHENTIC BUSINESS CARD & OFFICE VERIFICATION ============================== */}
      <section className="section-padding bg-slate-100 border-b border-slate-200/70">
        <div className="container-custom">
          
          <ScrollReveal variant="fade-up">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="eyebrow">Proof of Authenticity</span>
              <h2 className="section-title">Verified Contractor Identity &amp; Physical Office</h2>
              <p className="section-subtitle">
                We operate with complete commercial transparency. Here is our physical business card, registered office location, and direct GM contact line.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* The Actual Physical Business Card Display */}
            <div className="lg:col-span-7">
              <ScrollReveal variant="zoom-in">
                <div className="bg-white p-4 sm:p-8 rounded-2xl shadow-lg border border-slate-200 relative group">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                      <span className="text-[11px] xs:text-xs font-bold uppercase tracking-wider text-slate-700">Official Company Business Card</span>
                    </div>
                    <span className="text-[11px] xs:text-xs font-semibold text-slate-500">Patancheru • Hyderabad</span>
                  </div>

                  {/* Card Image Display with shadow & rounded borders */}
                  <div className="rounded-xl overflow-hidden shadow-md border border-slate-200/90 relative group-hover:shadow-xl transition-shadow duration-300">
                    <img 
                      src={leadership.businessCard} 
                      alt="Official Business Card of MR. ELECTRICAL WORKS - Mr. Nekbor Seikh" 
                      className="w-full h-auto object-contain bg-white"
                    />
                  </div>

                  <p className="text-xs text-slate-500 text-center mt-3">
                    Physical card registered at No. 83, Gokul Nagar, Patancheru, Telangana 502319
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Address & Verified Office Contact Details */}
            <div className="lg:col-span-5 space-y-4">
              <ScrollReveal variant="fade-left" delay={0.1}>
                
                <div className="card p-6 border-l-4 border-blue-600 bg-white">
                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 shrink-0">
                      <MapPin size={22} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider">Office Address</h4>
                      <p className="text-slate-700 font-semibold mt-1 text-sm leading-relaxed">
                        {contactInfo.address}
                      </p>
                      <a 
                        href={contactInfo.googleMapsUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-800 mt-2"
                      >
                        <span>Open in Google Maps</span>
                        <span>&rarr;</span>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="card p-6 border-l-4 border-emerald-600 bg-white">
                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600 shrink-0">
                      <Phone size={22} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider">Direct Line / WhatsApp</h4>
                      <p className="text-slate-900 font-extrabold mt-1 text-base">
                        {contactInfo.displayPhone}
                      </p>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Attended by Mr. Nekbor Seikh (GM - Projects)
                      </p>
                    </div>
                  </div>
                </div>

                <div className="card p-6 border-l-4 border-cyan-600 bg-white">
                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-xl bg-cyan-50 text-cyan-600 shrink-0">
                      <Mail size={22} />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider">Official Email</h4>
                      <p className="text-slate-800 font-semibold mt-1 text-sm break-all">
                        {contactInfo.email}
                      </p>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Direct quotation &amp; drawing submittals
                      </p>
                    </div>
                  </div>
                </div>

              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* ============================== MISSION & VISION DUAL CARDS ============================== */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <ScrollReveal variant="fade-right">
              <div className="card p-8 md:p-10 h-full border-t-4 border-emerald-600 bg-white shadow-sm hover:shadow-xl transition-all">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-6">
                  <Target size={26} />
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900 mb-4">Our Engineering Mission</h3>
                <p className="text-slate-600 text-base leading-relaxed">
                  To eliminate electrical fire hazards and power breakdowns across Telangana by executing strict engineering load design, genuine certified components, and flawless workmanship.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal variant="fade-left" delay={0.15}>
              <div className="card p-8 md:p-10 h-full border-t-4 border-blue-900 bg-white shadow-sm hover:shadow-xl transition-all">
                <div className="w-12 h-12 rounded-xl bg-blue-900/10 text-blue-900 flex items-center justify-center mb-6">
                  <Compass size={26} />
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900 mb-4">Our Industry Vision</h3>
                <p className="text-slate-600 text-base leading-relaxed">
                  To become the most dependable and technically sound electrical contracting firm in Telangana, recognized for engineering expertise, zero-defect handovers, and absolute client trust.
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
              <span className="eyebrow">The Engineering Code</span>
              <h2 className="section-title">The Principles Behind Every Wire &amp; Panel</h2>
              <p className="section-subtitle">
                Our team abides by standardized procedures that ensure long-lasting electrical safety.
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
                <div className="card p-6 h-full flex flex-col justify-between hover:border-blue-300">
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-4">
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
                  <ShieldAlert size={14} /> Rigorous Field Protocol
                </div>
                <h2 className="text-2xl xs:text-3xl sm:text-4xl font-black mb-6 leading-tight break-words">
                  Safety Is Not A Policy. It Is Our Culture.
                </h2>
                <p className="text-slate-300 text-base leading-relaxed mb-8">
                  Electricity powers modern living, but faulty engineering causes lethal shock and catastrophic fire hazards. We enforce strict industrial safety protocols on every domestic and commercial job.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    '1000V Certified Insulated Tools & Equipment',
                    'Full Personal Protective Equipment (PPE) On-Site',
                    'Chemical Earth Pit Megger Resistance Testing',
                    'FRLS Flame-Retardant Copper Wiring Standard',
                    'Calibrated 30mA RCCB Shock Prevention Units',
                    'Standardized Circuit Numbering & Phase Tags'
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                      <ShieldCheck className="text-emerald-400 shrink-0" size={18} />
                      <span className="text-sm text-slate-200 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-5">
              <ScrollReveal variant="fade-left" delay={0.2}>
                <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl">
                  <div className="flex items-center gap-4 mb-5 pb-4 border-b border-slate-800">
                    <img 
                      src={leadership.photoSquare} 
                      alt={leadership.name} 
                      className="w-16 h-16 rounded-full object-cover border-2 border-emerald-400"
                    />
                    <div>
                      <h4 className="text-white font-bold text-base">{leadership.name}</h4>
                      <p className="text-xs text-emerald-400 font-semibold">{leadership.role}</p>
                      <p className="text-[11px] text-slate-400">{leadership.qualification}</p>
                    </div>
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    "Every client we serve in Patancheru and Hyderabad gets my personal mobile number. If there is ever an issue with our panel or wiring, I stand behind our work 100%."
                  </p>
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="w-full btn-primary flex items-center justify-center gap-2 text-sm !py-2.5"
                  >
                    <Phone size={16} />
                    <span>Call Direct: {contactInfo.displayPhone}</span>
                  </a>
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
