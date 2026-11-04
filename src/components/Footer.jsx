import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import { contactInfo } from '../data/mockData';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="bg-panel-chassis text-secondary-light pt-14 pb-10 border-t border-border">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">

          {/* Brand & leadership overview */}
          <div className="lg:col-span-4 space-y-5 min-w-0">
            <Link to="/" className="inline-block" aria-label="MR. ELECTRICAL WORKS">
              <Logo variant="light" size="md" />
            </Link>

            <p className="text-secondary-light/80 text-[13px] leading-relaxed max-w-sm min-w-0">
              Turnkey electrical engineering and contracting directed by <strong className="text-surface">Mr. Nekbor Seikh (M.Tech EEE)</strong>, GM, Projects. Specialized in 11kV/415V substations, industrial LT switchboards, and high-rise power risers across Hyderabad and Telangana.
            </p>

            <div className="p-3.5 bg-panel-steel border border-panel-line rounded-sm text-xs min-w-0">
              <div className="font-mono text-[11px] text-tertiary-light font-semibold">
                M.Tech (EEE) supervised EPC firm
              </div>
              <div className="text-secondary-light/70 text-[11px] font-mono mt-1.5">
                Registered office, No. 83, Gokul Nagar, Patancheru, Telangana 502319
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-2 min-w-0">
            <h3 className="font-sans text-sm font-semibold text-surface mb-4">Navigation</h3>
            <ul className="space-y-2.5 text-[13px]">
              {[
                { name: 'Home', path: '/' },
                { name: 'Leadership & profile', path: '/about' },
                { name: 'Turnkey services', path: '/services' },
                { name: 'Projects & schematics', path: '/projects' },
                { name: 'Contact & BOQ quote', path: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-secondary-light/80 hover:text-primary-light transition-colors duration-150 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Key engineering capabilities */}
          <div className="lg:col-span-3 min-w-0">
            <h3 className="font-sans text-sm font-semibold text-surface mb-4">Capabilities</h3>
            <ul className="space-y-2.5 text-[13px] text-secondary-light/80">
              <li>11kV/415V substation erection</li>
              <li>LT panels &amp; APFC capacitor banks</li>
              <li>Commercial high-rise busbar risers</li>
              <li>Industrial pharma cleanroom wiring</li>
              <li>Sub-1.0 Ω chemical earthing grids</li>
              <li>Telangana CEIG statutory clearances</li>
            </ul>
          </div>

          {/* Official contact & coordinates */}
          <div className="lg:col-span-3 space-y-3.5 text-[13px] min-w-0">
            <h3 className="font-sans text-sm font-semibold text-surface mb-4">Office coordinates</h3>

            <div className="flex items-start gap-2.5 text-secondary-light/80">
              <MapPin className="text-primary-light shrink-0 mt-0.5" size={15} aria-hidden="true" />
              <span className="leading-relaxed">{contactInfo.address}</span>
            </div>

            <div className="flex items-center gap-2.5">
              <Phone className="text-tertiary-light shrink-0" size={15} aria-hidden="true" />
              <a href={`tel:${contactInfo.phone}`} className="font-mono font-semibold text-surface whitespace-nowrap hover:underline">
                {contactInfo.displayPhone}
              </a>
            </div>

            <div className="flex items-center gap-2.5 min-w-0">
              <Mail className="text-tertiary-light shrink-0" size={15} aria-hidden="true" />
              <a href={`mailto:${contactInfo.email}`} className="hover:text-surface transition-colors text-secondary-light/80 break-all">
                {contactInfo.email}
              </a>
            </div>

            <div className="pt-2">
              <a
                href={contactInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-sm bg-primary hover:bg-primary-hover text-surface font-sans text-xs font-semibold transition-colors duration-150 whitespace-nowrap"
              >
                <span>WhatsApp engineering desk</span>
                <ArrowUpRight size={13} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-panel-line pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2.5 text-[11px] font-mono text-secondary-light/60">
          <p>&copy; {new Date().getFullYear()} {contactInfo.name}. All rights reserved.</p>
          <p>GM: Nekbor Seikh, M.Tech (EEE) <span className="pl-2 ml-2 border-l border-panel-line inline-block sm:inline">Patancheru, Hyderabad</span></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
