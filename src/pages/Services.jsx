import { services, industries } from '../data/mockData';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Zap, Shield, Cpu, Sun, BatteryCharging, Flame } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const Services = () => {
  const specialized = [
    {
      title: 'DG Set & Generator Setup',
      desc: 'Automatic Mains Failure (AMF) panel wiring and changeover switchgear for uninterrupted operations.',
      icon: Zap
    },
    {
      title: 'Central Online UPS Systems',
      desc: 'Clean power isolation and harmonic filter installation for sensitive IT and lab hardware.',
      icon: BatteryCharging
    },
    {
      title: 'Solar Inverter Works',
      desc: 'Grid-tie & hybrid solar electrical cabling, DCDB/ACDB integration, and surge protection.',
      icon: Sun
    },
    {
      title: 'Chemical & Plate Earthing',
      desc: 'Low-impedance earth pits with copper/GI electrodes and conductivity enhancing compounds.',
      icon: Shield
    },
    {
      title: 'Industrial Automation Cabling',
      desc: 'PLC control panel wiring, VFD starter setups, sensor loops, and emergency stops.',
      icon: Cpu
    },
    {
      title: 'Fire Alarm & Safety Circuits',
      desc: 'Emergency evacuation lighting, heat/smoke sensor circuitry, and siren loops.',
      icon: Flame
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* ============================== PAGE HEADER ============================== */}
      <section className="relative pt-32 pb-20 bg-slate-950 text-white overflow-hidden">
        <div className="hero-orb hero-orb-2 opacity-60"></div>
        <div className="hero-grid-pattern"></div>
        
        <div className="container-custom relative z-10 text-center">
          <ScrollReveal variant="fade-up">
            <span className="eyebrow !text-amber-400">Engineering Solutions</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-5 tracking-tight text-white">
              End-To-End Electrical Services
            </h1>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              From residential wiring to multi-megawatt industrial power distribution, we build robust electrical systems designed for longevity and safety.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================== MAIN SERVICES GRID ============================== */}
      <section className="section-padding">
        <div className="container-custom">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <ScrollReveal 
                  key={service.id} 
                  variant="fade-up" 
                  delay={idx * 0.08}
                >
                  <div className="card p-8 h-full flex flex-col group border-t-3 hover:border-amber-500">
                    <div className="w-14 h-14 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center mb-6 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300 shadow-sm">
                      <Icon size={28} />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                      {service.description}
                    </p>

                    <ul className="space-y-2.5 mb-8 text-xs font-medium text-slate-600">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-amber-500 shrink-0" />
                        <span>IS-compliant wiring gauge selection</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-amber-500 shrink-0" />
                        <span>Thermal inspection &amp; insulation testing</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-amber-500 shrink-0" />
                        <span>Workmanship guarantee on all installations</span>
                      </li>
                    </ul>

                    <Link 
                      to="/contact" 
                      className="card-arrow-link text-sm font-bold text-slate-900 group-hover:text-amber-600 mt-auto pt-4 border-t border-slate-100"
                    >
                      <span>Request quote for {service.title}</span>
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

        </div>
      </section>

      {/* ============================== INDUSTRIES WE SERVE ============================== */}
      <section className="section-padding bg-white border-y border-slate-200/70">
        <div className="container-custom">
          
          <ScrollReveal variant="fade-up">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="eyebrow">Sectors Covered</span>
              <h2 className="section-title">Industries Powered By MR Electrical</h2>
              <p className="section-subtitle">
                Tailored electrical solutions respecting the unique load, uptime, and safety codes of various environments.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
            {industries.map((ind, idx) => {
              const Icon = ind.icon;
              return (
                <ScrollReveal 
                  key={idx} 
                  variant="zoom-in" 
                  delay={idx * 0.05}
                >
                  <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-amber-400 hover:shadow-lg flex flex-col items-center text-center transition-all duration-300 group cursor-default">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-white transition-all duration-300">
                      <Icon size={24} />
                    </div>
                    <span className="text-xs font-bold text-slate-800 group-hover:text-amber-600 transition-colors">
                      {ind.name}
                    </span>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

        </div>
      </section>

      {/* ============================== SPECIALIZED SOLUTIONS ============================== */}
      <section className="section-padding bg-slate-900 text-white relative overflow-hidden">
        <div className="hero-orb hero-orb-1 opacity-20"></div>

        <div className="container-custom relative z-10">
          <ScrollReveal variant="fade-up">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="eyebrow !text-amber-400">Advanced Works</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 tracking-tight text-white">
                Specialized Engineering Solutions
              </h2>
              <p className="text-slate-300 text-base">
                Beyond conventional installations, we engineer backup power, surge immunity, and automation infrastructure.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialized.map((item, idx) => {
              const Icon = item.icon;
              return (
                <ScrollReveal 
                  key={idx} 
                  variant="fade-up" 
                  delay={idx * 0.07}
                >
                  <div className="p-7 rounded-2xl bg-slate-800/80 border border-slate-700/70 hover:border-amber-400/60 hover:bg-slate-800 transition-all duration-300 group">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                      <Icon size={24} />
                    </div>
                    <h4 className="text-lg font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
