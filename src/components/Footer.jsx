import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowRight, ShieldCheck, CheckCircle2, FileText, ArrowUpRight } from 'lucide-react';
import { contactInfo, leadership } from '../data/mockData';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-[#0A0D12] text-[#8C96A5] pt-16 pb-12 border-t border-[#1E2430] relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-14">
          
          {/* Brand & Leadership Overview */}
          <div className="lg:col-span-4 space-y-5">
            <Link to="/" className="inline-block group focus:outline-none" aria-label="MR. ELECTRICAL WORKS">
              <Logo variant="light" size="md" />
            </Link>

            <p className="text-[#8C96A5] text-xs leading-relaxed max-w-sm font-sans">
              Turnkey electrical engineering and contracting directed by <strong className="text-white">Mr. Nekbor Seikh (M.Tech - EEE)</strong>, GM - Projects. Specialized in 11kV/415V substations, industrial LT switchboards, and high-rise power risers across Hyderabad and Telangana.
            </p>

            <div className="p-3.5 rounded-sm bg-[#10141C] border border-[#202735] text-xs font-mono space-y-1.5 max-w-sm">
              <div className="flex items-center gap-2 text-[#34D399] font-bold">
                <ShieldCheck size={15} />
                <span>M.TECH (EEE) SUPERVISED EPC FIRM</span>
              </div>
              <div className="text-[#8C96A5] text-[11px]">
                <strong className="text-white">HQ:</strong> No. 83, Gokul Nagar, Patancheru, Telangana - 502319
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 sm:col-span-1">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B35010]"></span>
              NAVIGATION
            </h3>
            <ul className="space-y-2 text-xs font-sans">
              {[
                { name: 'Home', path: '/' },
                { name: 'Leadership & Profile', path: '/about' },
                { name: 'Turnkey Services', path: '/services' },
                { name: 'Projects & Schematics', path: '/projects' },
                { name: 'Contact & BOQ Quote', path: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="hover:text-[#E57A36] transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Engineering Capabilities */}
          <div className="lg:col-span-3 sm:col-span-1">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0E639C]"></span>
              CAPABILITIES
            </h3>
            <ul className="space-y-2 text-xs text-[#8C96A5] font-mono">
              <li className="flex items-center gap-2">
                <CheckCircle2 size={13} className="text-[#34D399] shrink-0" />
                <span>11kV/415V Substation Erection</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={13} className="text-[#34D399] shrink-0" />
                <span>LT Panels &amp; APFC Capacitor Banks</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={13} className="text-[#34D399] shrink-0" />
                <span>Commercial High-Rise Busbar Risers</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={13} className="text-[#34D399] shrink-0" />
                <span>Industrial Pharma Cleanroom Wiring</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={13} className="text-[#34D399] shrink-0" />
                <span>Sub-1.0 Ohm Chemical Earthing Grids</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={13} className="text-[#34D399] shrink-0" />
                <span>Telangana CEIG Statutory Clearances</span>
              </li>
            </ul>
          </div>

          {/* Official Contact & Coordinates */}
          <div className="lg:col-span-3 space-y-3.5 text-xs font-mono">
            <h3 className="font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#34D399]"></span>
              OFFICE COORDINATES
            </h3>
            
            <div className="flex items-start gap-2.5 text-[#8C96A5]">
              <MapPin className="text-[#E57A36] shrink-0 mt-0.5" size={15} />
              <span className="leading-relaxed font-sans">{contactInfo.address}</span>
            </div>

            <div className="flex items-center gap-2.5">
              <Phone className="text-[#34D399] shrink-0" size={15} />
              <a href={`tel:${contactInfo.phone}`} className="hover:text-white transition-colors text-white font-semibold">
                {contactInfo.displayPhone}
              </a>
            </div>

            <div className="flex items-center gap-2.5">
              <Mail className="text-[#38BDF8] shrink-0" size={15} />
              <a href={`mailto:${contactInfo.email}`} className="hover:text-white transition-colors text-[#CBD5E1] break-all">
                {contactInfo.email}
              </a>
            </div>

            <div className="pt-2">
              <a
                href={contactInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-sm bg-[#102A1E] text-[#34D399] hover:bg-[#163828] border border-[#059669]/40 font-mono text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                <span>Instant WhatsApp Desk</span>
                <ArrowUpRight size={13} />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#1E2430] pt-6 flex flex-col sm:flex-row justify-between items-center text-[10px] sm:text-[11px] font-mono text-[#6B7280] gap-2.5 sm:gap-3 text-center sm:text-left">
          <p>&copy; {new Date().getFullYear()} {contactInfo.name}. All rights reserved.</p>
          <p className="flex flex-wrap justify-center sm:justify-end items-center gap-1.5 sm:gap-2">
            <span>GM: NEKBOR SEIKH (M.TECH - EEE)</span>
            <span className="hidden xs:inline">·</span>
            <span>PATANCHERU, HYDERABAD</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
