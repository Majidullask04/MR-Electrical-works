import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ShieldCheck, Zap, ArrowRight, Phone, Award, Clock, Wrench, MessageSquare, MapPin, FileText, Check, ArrowUpRight, Activity, Terminal } from 'lucide-react';
import { stats, services, contactInfo, leadership } from '../data/mockData';
import ScrollReveal from '../components/ScrollReveal';
import Counter from '../components/Counter';
import Marquee from '../components/Marquee';
import { LogoMark } from '../components/Logo';
import LoadCalculator from '../components/LoadCalculator';
import BlueprintViewer from '../components/BlueprintViewer';

const Home = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filterCategories = ['All', 'Substations & HT', 'Industrial LT', 'Commercial Towers', 'Villas & High-Rise'];

  const filteredServices = selectedFilter === 'All' 
    ? services 
    : services.filter(s => {
        if (selectedFilter === 'Substations & HT') return s.id === 3 || s.id === 4;
        if (selectedFilter === 'Industrial LT') return s.id === 3 || s.id === 6;
        if (selectedFilter === 'Commercial Towers') return s.id === 2 || s.id === 5;
        if (selectedFilter === 'Villas & High-Rise') return s.id === 1 || s.id === 2;
        return true;
      });

  const engineeringGuarantees = [
    { code: 'IE RULES 1956', title: 'Full Statutory Compliance', desc: 'Zero rejection track record across Telangana CEIG & TSSPDCL inspectorate filings.' },
    { code: 'IS 3043:2018', title: 'Sub-1.0 Ohm Earth Grid', desc: 'Engineered chemical earthing rods & pipe-in-pipe grounding with calibrated test certificates.' },
    { code: 'CPRI CERTIFIED', title: 'Type-Tested Switchboards', desc: 'Fabricated with 99.9% electrolytic E91E copper busbars and Schneider/L&T switchgear.' },
    { code: 'IS 732:2019', title: 'Harmonic & Thermal Balancing', desc: 'Infrared thermal imaging and balanced 3-phase load distribution preventing neutral burning.' },
  ];

  return (
    <div className="overflow-hidden bg-[#FCFCFD] text-[#121417]">
      {/* ============================== DRIBBBLE STYLE ARCHITECTURAL HERO ============================== */}
      <section className="relative min-h-[85vh] sm:min-h-[92vh] flex items-center pt-24 xs:pt-28 sm:pt-32 pb-16 sm:pb-24 bg-[#0A0D12] text-white overflow-hidden border-b border-[#1E2430]">
        
        {/* Subtle CAD Draftsman Grid Lines with 1px Intersection Marks */}
        <div 
          className="absolute inset-0 opacity-[0.07] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(#B35010 1px, transparent 1px), linear-gradient(90deg, #B35010 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />

        {/* Ambient Warm Copper Filament Radiance */}
        <div className="absolute top-1/4 -right-40 w-96 h-96 bg-[#B35010]/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-[#0E639C]/15 rounded-full blur-[100px] pointer-events-none" />

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Authoritative Engineering Brief */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Telemetry Status Bar */}
              <div className="inline-flex items-center gap-1.5 xs:gap-2 px-2.5 xs:px-3 py-1.5 rounded-sm bg-[#141821] border border-[#262E3D] text-[10px] xs:text-[11px] font-mono tracking-wider text-[#CBD5E1] max-w-full flex-wrap">
                <span className="w-2 h-2 rounded-full bg-[#34D399] animate-pulse shrink-0" />
                <span className="text-[#E57A36] font-bold">11kV/415V HT·LT EPC:</span>
                <span className="truncate">PATANCHERU &amp; HYDERABAD</span>
              </div>

              {/* Architectural Main Headline */}
              <h1 className="text-2xl xs:text-3xl sm:text-5xl lg:text-6xl font-display font-black text-white leading-[1.15] sm:leading-[1.08] tracking-tight break-words">
                Turnkey Electrical Contracting &amp;{' '}
                <span className="text-[#E57A36] underline decoration-[#B35010]/40 decoration-wavy underline-offset-4 sm:underline-offset-8">
                  Substation EPC.
                </span>
              </h1>

              {/* Technical Proposition */}
              <p className="text-[#8C96A5] text-sm sm:text-base lg:text-lg font-sans max-w-2xl leading-relaxed">
                Supervised directly by <strong className="text-white">Mr. Nekbor Seikh (M.Tech - EEE)</strong>, General Manager (Projects). We execute zero-defect 11kV transformer yards, industrial LT switchgear, high-rise risers, and luxury villa electrification across Telangana.
              </p>

              {/* CAD Technical Specifications HUD */}
              <div className="p-3 sm:p-4 bg-[#10141C] border border-[#202735] rounded-sm grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 font-mono text-[11px]">
                <div className="flex sm:block justify-between items-center sm:items-start border-b sm:border-b-0 pb-1.5 sm:pb-0 border-[#202735]">
                  <span className="text-[#6B7280] block text-[9px] sm:text-[9.5px]">CHIEF ENGINEER:</span>
                  <span className="text-white font-semibold">NEKBOR SEIKH</span>
                </div>
                <div className="flex sm:block justify-between items-center sm:items-start border-b sm:border-b-0 pb-1.5 sm:pb-0 border-[#202735]">
                  <span className="text-[#6B7280] block text-[9px] sm:text-[9.5px]">QUALIFICATION:</span>
                  <span className="text-[#E57A36] font-semibold">M.TECH (EEE)</span>
                </div>
                <div className="flex sm:block justify-between items-center sm:items-start">
                  <span className="text-[#6B7280] block text-[9px] sm:text-[9.5px]">DISCOM STANDARDS:</span>
                  <span className="text-[#34D399] font-semibold">CEIG APPROVED</span>
                </div>
              </div>

              {/* Action Triggers */}
              <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 pt-2">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 rounded-sm bg-[#B35010] hover:bg-[#9C4208] text-white font-mono text-xs font-semibold uppercase tracking-wider transition-all duration-200 border border-[#C25E1A]/40 shadow-lg shadow-[#B35010]/25 w-full sm:w-auto"
                >
                  <span>Request Site BOQ &amp; Drawings</span>
                  <ArrowRight size={15} />
                </Link>

                <a 
                  href={contactInfo.whatsappUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-3.5 rounded-sm bg-[#102A1E] text-[#34D399] hover:bg-[#163828] font-mono text-xs font-semibold uppercase tracking-wider transition-all border border-[#059669]/40 w-full sm:w-auto"
                >
                  <MessageSquare size={15} />
                  <span>Direct WhatsApp with GM</span>
                </a>

                <a
                  href={`tel:${contactInfo.phone}`}
                  className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-sm bg-[#141821] hover:bg-[#1C222E] text-[#CBD5E1] font-mono text-xs tracking-wider transition-all border border-[#242A35] w-full sm:w-auto"
                >
                  <Phone size={14} className="text-[#E57A36]" />
                  <span>{contactInfo.displayPhone}</span>
                </a>
              </div>

            </div>

            {/* Right Column: Dribbble Architectural Viewport Framing Mr. Nekbor Seikh */}
            <div className="lg:col-span-5">
              <ScrollReveal variant="fade-left" delay={0.15}>
                <div className="relative group">
                  
                  {/* Outer Technical CAD Reticle Frame with Corner Marks */}
                  <div className="relative p-2 bg-[#12161F] border border-[#293242] rounded-md shadow-2xl">
                    
                    {/* Corner Reticle Glyphs (+) */}
                    <span className="absolute -top-1.5 -left-1.5 text-xs font-mono text-[#E57A36] leading-none font-bold">+</span>
                    <span className="absolute -top-1.5 -right-1.5 text-xs font-mono text-[#E57A36] leading-none font-bold">+</span>
                    <span className="absolute -bottom-1.5 -left-1.5 text-xs font-mono text-[#E57A36] leading-none font-bold">+</span>
                    <span className="absolute -bottom-1.5 -right-1.5 text-xs font-mono text-[#E57A36] leading-none font-bold">+</span>

                    <div className="relative h-[320px] xs:h-[380px] sm:h-[440px] lg:h-[480px] overflow-hidden rounded-sm bg-[#0A0D12]">
                      <img 
                        src={leadership.photo} 
                        alt="Mr. Nekbor Seikh (M.Tech - EEE) - General Manager Projects" 
                        className="w-full h-full object-cover object-top filter grayscale-[15%] group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-103"
                      />
                      
                      {/* Technical Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D12] via-[#0A0D12]/25 to-transparent" />

                      {/* Top Right CAD Coordinate Stamp */}
                      <div className="absolute top-2.5 right-2.5 sm:top-3 sm:right-3 px-2 py-0.5 sm:py-1 bg-[#0A0D12]/90 backdrop-blur-sm border border-[#262E3D] rounded-sm font-mono text-[8.5px] sm:text-[9.5px] text-[#8C96A5]">
                        COORD: 17.5323° N, 78.2644° E
                      </div>

                      {/* Bottom Executive Telemetry Sheet */}
                      <div className="absolute bottom-2 sm:bottom-3 left-2 sm:left-3 right-2 sm:right-3 p-2.5 sm:p-4 bg-[#0E1116]/95 backdrop-blur-md border border-[#242A35] rounded-sm text-white">
                        <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#202735]">
                          <div className="min-w-0 pr-2">
                            <div className="text-xs xs:text-sm sm:text-base font-bold text-white flex items-center gap-1.5 font-display truncate">
                              <span>{leadership.name}</span>
                              <CheckCircle2 size={14} className="text-[#34D399] shrink-0" />
                            </div>
                            <div className="text-[10px] xs:text-[11px] sm:text-xs font-mono text-[#E57A36] font-semibold truncate">
                              {leadership.qualification} · {leadership.role}
                            </div>
                          </div>
                          
                          <div className="p-1 sm:p-2 bg-[#1A202C] border border-[#2D3748] rounded-sm text-[#E57A36] shrink-0">
                            <LogoMark size={20} />
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-2 text-[9px] xs:text-[10px] sm:text-[11px] font-mono text-[#8C96A5]">
                          <div className="truncate">PATANCHERU, HYD</div>
                          <div className="text-right text-[#34D399] font-semibold truncate">100% PASS RATE</div>
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

      {/* ============================== DRIBBBLE METRICS STRIP ============================== */}
      <section className="bg-[#12161F] border-b border-[#242A35] text-white py-6">
        <div className="container-custom">
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {[
              { val: '1,250+', label: 'kVA Substation Capacity Commissioned', spec: '11kV/415V HT Panels' },
              { val: '450+', label: 'Villas & Industrial Projects Handed Over', spec: 'Zero Contractor Claims' },
              { val: '0.72 Ω', label: 'Calibrated Earth Resistance Target', spec: 'IS 3043 Chemical Mesh' },
              { val: '100%', label: 'Statutory Electrical Inspector Passing', spec: 'CEIG Telangana Certified' },
            ].map((stat, idx) => (
              <div key={idx} className="p-3.5 sm:px-4 sm:py-2 text-left rounded-sm bg-[#0E1116] sm:bg-transparent border border-[#242A35] sm:border-0 sm:border-r last:border-r-0">
                <div className="font-mono text-2xl sm:text-3xl font-bold text-[#E57A36]">
                  {stat.val}
                </div>
                <div className="font-sans font-bold text-xs text-white uppercase tracking-wider mt-0.5">
                  {stat.label}
                </div>
                <div className="font-mono text-[10px] text-[#8C96A5] mt-0.5">
                  {stat.spec}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================== BRAND PARTNERS MARQUEE ============================== */}
      <div className="border-b border-[#E2E6EC] bg-[#F4F5F7]">
        <Marquee title="SPECIFIED WITH GRADE-A CERTIFIED MANUFACTURERS: HAVELLS · POLYCAB · SCHNEIDER ELECTRIC · L&T · LEGRAND · FINOLEX · ABB" />
      </div>

      {/* ============================== DRIBBBLE BENTO GRID: TURNKEY ENGINEERING DISCIPLINES ============================== */}
      <section className="section-padding bg-[#F9F9FB] border-b border-[#E2E6EC]">
        <div className="container-custom">
          
          <ScrollReveal variant="fade-up">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm bg-[#B35010]/10 text-[#B35010] text-[10px] xs:text-[11px] font-mono font-bold uppercase tracking-wider mb-2 border border-[#B35010]/20">
                  TURNKEY EPC CAPABILITIES
                </div>
                <h2 className="text-2xl xs:text-3xl sm:text-4xl font-display font-black text-[#121417] tracking-tight break-words">
                  Engineered Power Distribution Architecture
                </h2>
              </div>
              <p className="text-sm font-sans text-[#5C6470] max-w-md">
                Every circuit planned using electrical load schedule software, IS-standard earthing calculations, and verified harmonic mitigation.
              </p>
            </div>
          </ScrollReveal>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* Bento Card 1: Wide Feature (HT/LT Substations) */}
            <div className="md:col-span-8 bg-[#0E1116] border border-[#242A35] rounded-md p-5 sm:p-8 text-white relative overflow-hidden group">
              <div className="relative z-10 flex flex-col h-full justify-between space-y-6">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-4 border-b border-[#242A35]">
                    <span className="font-mono text-xs text-[#E57A36] uppercase tracking-wider font-semibold">
                      HEAVY INFRASTRUCTURE · 11kV/33kV
                    </span>
                    <span className="px-2 py-0.5 rounded-sm bg-[#1A2230] text-[#38BDF8] font-mono text-[10px] border border-[#2D3A4F]">
                      HT TRANSFORMER YARDS
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-display font-black text-white mb-3">
                    Substation Erection &amp; Vacuum Circuit Breakers (VCB)
                  </h3>

                  <p className="text-[#8C96A5] text-sm leading-relaxed max-w-xl">
                    Turnkey installation of outdoor &amp; indoor transformer yards, HT breaker panels, gang-operated air break (GOAB) switches, and drop-out fuses with statutory CEIG approvals.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs pt-4 border-t border-[#242A35]">
                  <div>
                    <span className="text-[#6B7280] block text-[10px]">VOLTAGE:</span>
                    <span className="text-white font-semibold">11,000V → 415V</span>
                  </div>
                  <div>
                    <span className="text-[#6B7280] block text-[10px]">BREAKERS:</span>
                    <span className="text-[#E57A36] font-semibold">VCB &amp; SF6</span>
                  </div>
                  <div>
                    <span className="text-[#6B7280] block text-[10px]">INSPECTION:</span>
                    <span className="text-[#34D399] font-semibold">CEIG CLEARANCE</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bento Card 2: Main LT Panels */}
            <div className="md:col-span-4 bg-white border border-[#D7DBE0] rounded-md p-5 sm:p-8 flex flex-col justify-between group hover:border-[#B35010] transition-all">
              <div>
                <span className="font-mono text-xs text-[#B35010] uppercase tracking-wider font-semibold block mb-2">
                  CUSTOM PANEL FABRICATION
                </span>
                <h3 className="text-lg sm:text-xl font-display font-black text-[#121417] mb-3">
                  Main LT Switchgear &amp; APFC Capacitor Banks
                </h3>
                <p className="text-[#5C6470] text-sm leading-relaxed">
                  Modular busbar chambers with Air Circuit Breakers (ACB), automatic power factor controllers, and harmonic detuned reactors.
                </p>
              </div>

              <div className="pt-5 sm:pt-6 border-t border-[#EAECEF] mt-5 sm:mt-6 flex justify-between items-center font-mono text-xs">
                <span className="text-[#121417] font-semibold">800A - 3200A BUSBARS</span>
                <Link to="/services" className="text-[#B35010] hover:underline flex items-center gap-1 font-semibold">
                  <span>SPECS</span>
                  <ArrowUpRight size={13} />
                </Link>
              </div>
            </div>

            {/* Bento Card 3: Industrial Pharma & Manufacturing */}
            <div className="md:col-span-4 bg-white border border-[#D7DBE0] rounded-md p-5 sm:p-8 flex flex-col justify-between group hover:border-[#B35010] transition-all">
              <div>
                <span className="font-mono text-xs text-[#0E639C] uppercase tracking-wider font-semibold block mb-2">
                  INDUSTRIAL MANUFACTURING
                </span>
                <h3 className="text-lg sm:text-xl font-display font-black text-[#121417] mb-3">
                  Pharma Cleanrooms &amp; Industrial Conduiting
                </h3>
                <p className="text-[#5C6470] text-sm leading-relaxed">
                  Heavy galvanized perforated cable trays, flame-retardant low-smoke (FRLS) wiring, and explosion-safe fittings for Patancheru industrial units.
                </p>
              </div>

              <div className="pt-5 sm:pt-6 border-t border-[#EAECEF] mt-5 sm:mt-6 flex justify-between items-center font-mono text-xs">
                <span className="text-[#121417] font-semibold">IP65 ENCLOSURES</span>
                <Link to="/services" className="text-[#B35010] hover:underline flex items-center gap-1 font-semibold">
                  <span>SPECS</span>
                  <ArrowUpRight size={13} />
                </Link>
              </div>
            </div>

            {/* Bento Card 4: Luxury Residential Villas */}
            <div className="md:col-span-4 bg-white border border-[#D7DBE0] rounded-md p-5 sm:p-8 flex flex-col justify-between group hover:border-[#B35010] transition-all">
              <div>
                <span className="font-mono text-xs text-[#B35010] uppercase tracking-wider font-semibold block mb-2">
                  RESIDENTIAL LUXURY
                </span>
                <h3 className="text-lg sm:text-xl font-display font-black text-[#121417] mb-3">
                  High-End Villa &amp; Gated Community Electrification
                </h3>
                <p className="text-[#5C6470] text-sm leading-relaxed">
                  Concealed wiring, smart distribution boards, EV charger circuits, and dedicated 30mA RCCB shock prevention for families.
                </p>
              </div>

              <div className="pt-5 sm:pt-6 border-t border-[#EAECEF] mt-5 sm:mt-6 flex justify-between items-center font-mono text-xs">
                <span className="text-[#121417] font-semibold">30mA HUMAN SAFETY</span>
                <Link to="/services" className="text-[#B35010] hover:underline flex items-center gap-1 font-semibold">
                  <span>SPECS</span>
                  <ArrowUpRight size={13} />
                </Link>
              </div>
            </div>

            {/* Bento Card 5: Solar & DG Synchronization */}
            <div className="md:col-span-4 bg-[#141821] border border-[#242A35] rounded-md p-5 sm:p-8 text-white flex flex-col justify-between group hover:border-[#38BDF8] transition-all">
              <div>
                <span className="font-mono text-xs text-[#38BDF8] uppercase tracking-wider font-semibold block mb-2">
                  BACKUP &amp; GREEN ENERGY
                </span>
                <h3 className="text-lg sm:text-xl font-display font-black text-white mb-3">
                  Solar On-Grid &amp; DG Synchronizing Relays
                </h3>
                <p className="text-[#8C96A5] text-sm leading-relaxed">
                  Automatic transfer switches (ATS), net-metering integration with DISCOM, and synchronous AMF panels for uninterrupted power.
                </p>
              </div>

              <div className="pt-5 sm:pt-6 border-t border-[#242A35] mt-5 sm:mt-6 flex justify-between items-center font-mono text-xs">
                <span className="text-[#34D399] font-semibold">NET-METERING READY</span>
                <Link to="/services" className="text-[#38BDF8] hover:underline flex items-center gap-1 font-semibold">
                  <span>SPECS</span>
                  <ArrowUpRight size={13} />
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ============================== INTERACTIVE CAD BLUEPRINT & SLD SCHEMATICS VIEWER ============================== */}
      <section className="section-padding bg-[#0A0D12] text-white border-b border-[#242A35]">
        <div className="container-custom">
          
          <ScrollReveal variant="fade-up">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-[#B35010]/20 text-[#E57A36] text-[10px] xs:text-[11px] font-mono font-bold uppercase tracking-wider mb-3 border border-[#B35010]/40">
                ENGINEERING SPECIFICATION ARCHITECTURE
              </div>
              <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-display font-black text-white tracking-tight break-words">
                Single Line Diagrams &amp; Circuit Schematics
              </h2>
              <p className="text-sm sm:text-base text-[#8C96A5] mt-2">
                Inspect authentic circuit flow parameters, transformer protection tiers, and statutory clearances calibrated by our Chief Engineer.
              </p>
            </div>
          </ScrollReveal>

          <BlueprintViewer />

        </div>
      </section>

      {/* ============================== INTERACTIVE LOAD & COST ESTIMATOR ============================== */}
      <section className="section-padding bg-[#F4F5F7] border-b border-[#D7DBE0]">
        <div className="container-custom">
          
          <ScrollReveal variant="fade-up">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-sm bg-[#121417] text-white text-[10px] xs:text-[11px] font-mono font-bold uppercase tracking-wider mb-3">
                REAL-TIME ENGINEERING UTILITY
              </div>
              <h2 className="text-2xl xs:text-3xl sm:text-4xl font-display font-black text-[#121417] tracking-tight break-words">
                Calculate Electrical Load &amp; Turnkey Estimate
              </h2>
              <p className="text-sm sm:text-base text-[#5C6470] mt-2">
                Estimate your required breaker amperage, main cable cross-section, and total project budget in seconds.
              </p>
            </div>
          </ScrollReveal>

          <LoadCalculator />

        </div>
      </section>

      {/* ============================== LEADERSHIP PROFILE & PHYSICAL OFFICE VERIFICATION ============================== */}
      <section className="section-padding bg-white border-b border-[#D7DBE0]">
        <div className="container-custom">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <ScrollReveal variant="fade-right">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-sm bg-[#B35010]/10 text-[#B35010] text-[11px] font-mono font-bold uppercase tracking-wider border border-[#B35010]/20">
                  TECHNICAL ACCREDITATION
                </div>

                <h2 className="text-2xl xs:text-3xl sm:text-4xl font-display font-black text-[#121417] leading-tight break-words">
                  Direct Field Oversight by Mr. Nekbor Seikh (M.Tech - EEE)
                </h2>

                <p className="text-[#5C6470] text-sm leading-relaxed">
                  Electrical installations fail when contractors cut corners with undersized cable gauges, unbalanced phase loads, or substandard earthing pits.
                </p>

                <p className="text-[#5C6470] text-sm leading-relaxed">
                  At <strong>MR. ELECTRICAL WORKS</strong>, our General Manager of Projects directly reviews single-line drawings, validates fault current ratings, and personally signs off on critical commissioning milestones.
                </p>

                {/* Office Coordinates Sheet */}
                <div className="p-4 bg-[#F4F5F7] border border-[#D7DBE0] rounded-sm space-y-2 font-mono text-xs">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="text-[#B35010] shrink-0 mt-0.5" size={15} />
                    <span className="text-[#121417] font-medium">No. 83, Gokul Nagar, Patancheru, Hyderabad, Telangana - 502319</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Phone className="text-[#34D399] shrink-0" size={15} />
                    <span className="text-[#121417] font-bold">Direct GM Hotline: {contactInfo.displayPhone}</span>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <Link 
                    to="/about" 
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-sm bg-[#121417] hover:bg-[#202632] text-white font-mono text-xs font-semibold uppercase tracking-wider transition-all w-full sm:w-auto"
                  >
                    <span>Read Executive Credentials</span>
                    <ArrowRight size={14} />
                  </Link>

                  <a 
                    href={leadership.businessCard} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-sm bg-white border border-[#D7DBE0] hover:border-[#121417] text-[#121417] font-mono text-xs font-semibold uppercase tracking-wider transition-all w-full sm:w-auto"
                  >
                    <FileText size={14} />
                    <span>View Registration Card</span>
                  </a>
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Technical Certification Matrix */}
            <div className="lg:col-span-7">
              <ScrollReveal variant="zoom-in" delay={0.15}>
                <div className="bg-[#0E1116] border border-[#242A35] rounded-md p-6 sm:p-8 text-white space-y-6 shadow-2xl">
                  
                  <div className="flex items-center justify-between pb-4 border-b border-[#242A35]">
                    <div className="flex items-center gap-3">
                      <LogoMark size={28} />
                      <div>
                        <div className="font-display font-black text-sm tracking-tight text-white">
                          MR. ELECTRICAL WORKS
                        </div>
                        <div className="font-mono text-[10px] text-[#8C96A5]">
                          REGISTRATION &amp; COMPLIANCE MANIFEST
                        </div>
                      </div>
                    </div>

                    <span className="px-2.5 py-1 rounded-sm bg-[#102A1E] text-[#34D399] font-mono text-[10.5px] uppercase font-bold border border-[#059669]/40">
                      VERIFIED CONTRACTOR
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {engineeringGuarantees.map((item, idx) => (
                      <div key={idx} className="p-4 bg-[#141820] border border-[#242A35] rounded-sm space-y-1.5">
                        <span className="px-2 py-0.5 rounded-sm bg-[#1F2736] text-[#E57A36] font-mono text-[9.5px] font-bold">
                          {item.code}
                        </span>
                        <div className="text-sm font-bold text-white font-sans">
                          {item.title}
                        </div>
                        <div className="text-xs text-[#8C96A5] leading-relaxed">
                          {item.desc}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-[#242A35] flex flex-wrap justify-between items-center text-xs font-mono text-[#8C96A5]">
                    <span>TELANGANA CEIG INSPECTORATE ALIGNED</span>
                    <span>PATANCHERU &amp; HYDERABAD HQ</span>
                  </div>

                </div>
              </ScrollReveal>
            </div>

          </div>

        </div>
      </section>

      {/* ============================== CTA CALLOUT BAND ============================== */}
      <section className="py-20 bg-[#0A0D12] text-white border-t border-[#242A35]">
        <div className="container-custom text-center">
          <ScrollReveal variant="fade-up">
            <div className="inline-flex p-3 rounded-sm bg-[#141820] border border-[#242A35] text-[#E57A36] mb-6">
              <ShieldCheck size={32} />
            </div>

            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-display font-black mb-4 tracking-tight text-white break-words">
              Ready for Zero-Defect Electrical Execution?
            </h2>

            <p className="text-[#8C96A5] max-w-2xl mx-auto mb-8 text-sm sm:text-base leading-relaxed font-sans">
              Connect with <strong>Mr. Nekbor Seikh (M.Tech - EEE)</strong> today for upfront engineering advice, single-line diagram analysis, or an itemized turnkey quotation for your project.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 max-w-xl mx-auto sm:max-w-none">
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-sm bg-[#B35010] hover:bg-[#9C4208] text-white font-mono text-xs font-semibold uppercase tracking-wider transition-all border border-[#C25E1A]/40 shadow-lg shadow-[#B35010]/25 w-full sm:w-auto"
              >
                <span>Request Site Inspection &amp; BOQ</span>
                <ArrowRight size={15} />
              </Link>
              
              <a 
                href={`tel:${contactInfo.phone}`} 
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-sm bg-[#141821] hover:bg-[#1C222E] text-white font-mono text-xs tracking-wider transition-all border border-[#242A35] w-full sm:w-auto"
              >
                <Phone size={15} className="text-[#E57A36]" />
                <span>Call {contactInfo.displayPhone}</span>
              </a>

              <a 
                href={contactInfo.whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-sm bg-[#102A1E] text-[#34D399] hover:bg-[#163828] font-mono text-xs font-semibold uppercase tracking-wider transition-all border border-[#059669]/40 w-full sm:w-auto"
              >
                <MessageSquare size={15} />
                <span>Instant WhatsApp Consultation</span>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Home;
