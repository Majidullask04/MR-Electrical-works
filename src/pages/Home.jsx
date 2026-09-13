import { Link } from 'react-router-dom';
import { CheckCircle2, ShieldCheck, Zap, ArrowRight, Phone, Award, Clock, Wrench } from 'lucide-react';
import { stats, services, contactInfo } from '../data/mockData';
import ScrollReveal from '../components/ScrollReveal';
import Counter from '../components/Counter';
import Marquee from '../components/Marquee';

const Home = () => {
  const features = [
    { title: 'Certified Engineers', desc: 'M.Tech qualified supervision on all installations' },
    { title: 'Strict Safety Protocols', desc: 'Compliant with Indian Electricity Rules & IS codes' },
    { title: 'Quality Materials', desc: 'Genuine ISI & CE marked cables, switches & MCBs' },
    { title: 'On-Time Handover', desc: 'Efficient milestone-driven project completion' },
    { title: 'Transparent Pricing', desc: 'No hidden charges with upfront detailed estimates' },
    { title: '24/7 Emergency Support', desc: 'Prompt fault-finding & power breakdown assistance' }
  ];

  const whatsappMessage = encodeURIComponent("Hi MR. ELECTRICAL WORKS, I would like to get a free quote for my electrical project.");
  const whatsappUrl = `https://wa.me/91${contactInfo.phone}?text=${whatsappMessage}`;

  return (
    <div className="overflow-hidden">
      {/* ============================== HERO SECTION ============================== */}
      <section className="relative min-h-[90vh] lg:min-h-[92vh] flex items-center pt-24 pb-20 bg-slate-950 text-white overflow-hidden">
        {/* Saitronics Ambient Floating Glowing Orbs */}
        <div className="hero-orb hero-orb-1"></div>
        <div className="hero-orb hero-orb-2"></div>

        {/* Technical Grid Pattern Overlay */}
        <div className="hero-grid-pattern"></div>

        {/* Subtle Background Image with Dark Vignette */}
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=2000" 
            alt="MR Electrical Works Site" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/90"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Hero Text Content with Saitronics hero-stagger blur-up entrance */}
            <div className="lg:col-span-7 hero-stagger">
              {/* Badge */}
              <div className="hero-badge inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-amber-400 text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-md">
                <Zap size={14} className="fill-amber-400" />
                <span>Premier Electrical Contractors • Telangana</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.12] mb-6 tracking-tight">
                Electrical Engineering &amp; Contracting{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-200">
                  Delivered As One.
                </span>
              </h1>

              {/* Subtitle */}
              <p className="hero-subtitle text-slate-300 text-lg md:text-xl font-normal mb-8 max-w-2xl leading-relaxed">
                Led by <strong>Mr. Nekbor Seikh (M.Tech - EEE)</strong>, we engineer, deploy, and maintain residential, commercial, and heavy industrial electrical setups with uncompromising safety and precision.
              </p>
              
              {/* CTA Action Buttons */}
              <div className="hero-actions flex flex-wrap items-center gap-4">
                <Link to="/contact" className="btn-primary flex items-center gap-2.5 text-base">
                  <span>Request Free Quote</span>
                  <ArrowRight size={18} />
                </Link>
                <a 
                  href={whatsappUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-outline-light flex items-center gap-2.5 text-base"
                >
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              {/* Quick Trust Highlights */}
              <div className="mt-10 pt-8 border-t border-slate-800/80 flex flex-wrap items-center gap-6 text-xs text-slate-400 font-medium">
                <div className="flex items-center gap-2">
                  <Award size={16} className="text-amber-400" />
                  <span>M.Tech Supervised</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck size={16} className="text-amber-400" />
                  <span>100% Code Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-amber-400" />
                  <span>24/7 Rapid Response</span>
                </div>
              </div>
            </div>

            {/* Saitronics Corner-Bracketed Hero Media Panel */}
            <div className="lg:col-span-5">
              <ScrollReveal variant="fade-left" delay={0.2}>
                <div className="hero-panel group">
                  <div className="relative h-[380px] sm:h-[440px] overflow-hidden bg-slate-900">
                    <img 
                      src="https://images.unsplash.com/photo-1544724569-5f546fd6f2b6?auto=format&fit=crop&q=80&w=1000" 
                      alt="MR Electrical Engineers at work" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                    
                    {/* Floating Trust Badge */}
                    <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-slate-900/90 backdrop-blur-md border border-white/15 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-amber-500/20 border border-amber-400/30 flex items-center justify-center text-amber-400 shrink-0">
                        <Wrench size={24} />
                      </div>
                      <div>
                        <div className="text-white font-bold text-sm leading-tight">
                          100+ Projects Completed
                        </div>
                        <div className="text-xs text-slate-300 mt-0.5">
                          Residential • Commercial • Industrial
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* ============================== METRICS BAND (Saitronics data-count counters) ============================== */}
      <section className="relative z-20 -mt-8">
        <div className="container-custom">
          <ScrollReveal variant="fade-up" delay={0.1}>
            <div className="bg-white rounded-2xl shadow-xl border border-slate-200/80 p-6 md:p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-100 text-center">
                {stats.map((stat, idx) => (
                  <div key={idx} className={`pt-4 sm:pt-0 ${idx > 0 ? 'sm:pl-6' : ''}`}>
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-1 flex items-center justify-center tracking-tight">
                      <span className="text-amber-500">
                        <Counter target={stat.value} />
                      </span>
                    </div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-600 uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================== CONTINUOUS LOGO MARQUEE ============================== */}
      <div className="mt-16">
        <Marquee title="Quality Certified Cables, Switchgears &amp; Component Partners" />
      </div>

      {/* ============================== SERVICES SECTION ============================== */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          
          <ScrollReveal variant="fade-up">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="eyebrow">Our Core Expertise</span>
              <h2 className="section-title">One Team, From Wiring to Commissioning.</h2>
              <p className="section-subtitle">
                Comprehensive electrical engineering solutions executed to standard specification: we plan it, we install it, and we support it with absolute reliability.
              </p>
            </div>
          </ScrollReveal>

          {/* Services Grid with Saitronics Hover Architecture */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <ScrollReveal 
                  key={service.id} 
                  variant="fade-up" 
                  delay={index * 0.08}
                >
                  <div className="card h-full flex flex-col group">
                    <div className="p-8 flex-1 flex flex-col">
                      <div className="w-14 h-14 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center mb-6 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300 shadow-sm">
                        <Icon size={28} />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                        {service.description}
                      </p>
                      
                      <Link 
                        to="/services" 
                        className="card-arrow-link text-sm font-bold text-slate-900 group-hover:text-amber-600 mt-auto pt-4 border-t border-slate-100"
                      >
                        <span>Learn more about {service.title}</span>
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          <ScrollReveal variant="fade-up" delay={0.2} className="text-center mt-12">
            <Link to="/services" className="btn-outline">
              Explore All Electrical Services
            </Link>
          </ScrollReveal>

        </div>
      </section>

      {/* ============================== WHY CHOOSE US / VALUES ============================== */}
      <section className="section-padding bg-white border-t border-slate-200/70">
        <div className="container-custom">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5">
              <ScrollReveal variant="fade-right">
                <span className="eyebrow">Why Choose MR Electrical</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
                  High-Standard Engineering. Zero Compromises On Safety.
                </h2>
                <p className="text-slate-600 leading-relaxed mb-8">
                  Whether installing precision distribution panels or wiring an entire factory floor, we combine qualified engineering standards with seasoned on-site craftsmanship.
                </p>
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-3.5">
                    <CheckCircle2 className="text-amber-500 shrink-0 mt-1" size={20} />
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">Strict Indian Standards Compliance</h4>
                      <p className="text-xs text-slate-600 mt-0.5">Correct wire gauges, load calculations, and proper breaker selection prevent short circuits.</p>
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-3.5">
                    <CheckCircle2 className="text-amber-500 shrink-0 mt-1" size={20} />
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">Post-Installation Diagnostic Testing</h4>
                      <p className="text-xs text-slate-600 mt-0.5">Insulation resistance, earth resistance, and polarity checks performed before power energization.</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {features.map((feat, idx) => (
                  <ScrollReveal 
                    key={idx} 
                    variant="zoom-in" 
                    delay={idx * 0.07}
                  >
                    <div className="p-6 rounded-xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-amber-500/50 hover:shadow-lg transition-all duration-300 group">
                      <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <CheckCircle2 size={20} />
                      </div>
                      <h4 className="font-bold text-slate-900 mb-1">{feat.title}</h4>
                      <p className="text-xs text-slate-600 leading-relaxed">{feat.desc}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ============================== CTA CALLOUT BAND ============================== */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-amber-500/20 rounded-full filter blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-blue-600/20 rounded-full filter blur-3xl pointer-events-none"></div>

        <div className="container-custom relative z-10 text-center">
          <ScrollReveal variant="fade-up">
            <div className="inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 text-amber-400 mb-6">
              <ShieldCheck size={36} />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 tracking-tight">
              Ready for Safe &amp; Reliable Electrical Execution?
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto mb-8 text-base md:text-lg leading-relaxed">
              Contact our engineering team today for an upfront assessment, blueprint review, or competitive quote in Patancheru and across Hyderabad.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link to="/contact" className="btn-primary text-base">
                Get Your Project Estimate
              </Link>
              <a 
                href={`tel:${contactInfo.phone}`} 
                className="btn-outline-light flex items-center gap-2 text-base"
              >
                <Phone size={18} />
                <span>Call {contactInfo.phone}</span>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Home;
