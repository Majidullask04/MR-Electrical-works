import { Link } from 'react-router-dom';
import { Zap, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import { contactInfo } from '../data/mockData';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-10 border-t border-slate-800/80 relative overflow-hidden">
      <div className="hero-orb hero-orb-2 opacity-15"></div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-14">
          
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-flex items-center gap-3 mb-5 group">
              <div className="bg-gradient-to-tr from-amber-500 to-amber-400 text-white p-2.5 rounded-xl shadow-md group-hover:scale-105 transition-transform">
                <Zap size={22} className="fill-white" />
              </div>
              <div>
                <h2 className="text-xl font-extrabold text-white leading-tight tracking-tight">
                  MR. ELECTRICAL
                </h2>
                <p className="text-[11px] text-amber-400 font-bold tracking-[0.2em] uppercase">
                  WORKS • TELANGANA
                </p>
              </div>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-sm">
              Certified electrical contracting firm led by Mr. Nekbor Seikh (M.Tech - EEE). Specializing in residential, commercial, and industrial electrical infrastructure.
            </p>

            <div className="text-xs text-slate-400 space-y-1">
              <div><strong className="text-slate-300">Licensing:</strong> Qualified Electrical Contractor</div>
              <div><strong className="text-slate-300">Coverage:</strong> Patancheru, Sangareddy, Hyderabad, Secunderabad</div>
            </div>
          </div>

          {/* Quick Links with Saitronics hover arrow effect */}
          <div className="lg:col-span-2 sm:col-span-1">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-5">
              Quick Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { name: 'Home', path: '/' },
                { name: 'About Us', path: '/about' },
                { name: 'Our Services', path: '/services' },
                { name: 'Projects & Gallery', path: '/projects' },
                { name: 'Contact & FAQs', path: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="hover:text-amber-400 transition-colors inline-flex items-center gap-1.5 group"
                  >
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-amber-400" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Services */}
          <div className="lg:col-span-3 sm:col-span-1">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-5">
              Key Capabilities
            </h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>Residential &amp; Villa House Wiring</li>
              <li>LT/HT Power Distribution Panels</li>
              <li>Commercial Office &amp; Retail Lighting</li>
              <li>Factory Machine Wiring &amp; Cable Trays</li>
              <li>DG Set AMF Panels &amp; Changeover</li>
              <li>Chemical Earthing &amp; Lightning Arresters</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-5">
              Patancheru Office
            </h3>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-3 text-slate-400">
                <MapPin className="text-amber-400 mt-1 shrink-0" size={18} />
                <span className="leading-snug">{contactInfo.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-amber-400 shrink-0" size={18} />
                <a href={`tel:${contactInfo.phone}`} className="hover:text-amber-400 transition-colors font-semibold text-white">
                  +91 {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-amber-400 shrink-0" size={18} />
                <a href={`mailto:${contactInfo.email}`} className="hover:text-amber-400 transition-colors text-slate-300">
                  {contactInfo.email}
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-800/90 pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-400 gap-4">
          <p>&copy; {new Date().getFullYear()} {contactInfo.name}. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <span>Engineering Excellence • Zero Incident Commitment</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
