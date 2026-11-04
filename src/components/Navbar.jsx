import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageSquare } from 'lucide-react';
import { contactInfo } from '../data/mockData';
import Logo from './Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const location = useLocation();
  const lastScrollY = useRef(0);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Engineering & leadership', path: '/about' },
    { name: 'Turnkey services', path: '/services' },
    { name: 'Projects & schematics', path: '/projects' },
    { name: 'Contact & BOQ', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY.current;
      const hideThreshold = 120;
      const deadZone = 6;

      setIsScrolled(currentScrollY > 20);

      if (isOpen) {
        setIsHidden(false);
      } else if (Math.abs(delta) > deadZone) {
        if (delta > 0 && currentScrollY > hideThreshold) {
          setIsHidden(true);
        } else if (delta < 0) {
          setIsHidden(false);
        }
        lastScrollY.current = currentScrollY;
      }

      if (currentScrollY <= hideThreshold) {
        setIsHidden(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 border-b ${
        isScrolled
          ? 'bg-surface border-border shadow-tech-sm'
          : 'bg-surface/95 border-transparent'
      } ${
        isHidden ? '-translate-y-full' : 'translate-y-0'
      } transition-[transform,background-color,border-color,box-shadow] duration-200 ease-out`}
    >
      {/* Top technical telemetry strip */}
      <div className="hidden xl:block bg-panel-chassis border-b border-panel-line py-1.5">
        <div className="container-custom flex justify-between items-center gap-4 min-w-0">
          <div className="flex items-center gap-4 min-w-0">
            <span className="font-mono text-[11px] text-panel-dimmed whitespace-nowrap">
              Patancheru &amp; Hyderabad desk: <span className="text-surface font-semibold">active</span>
            </span>
            <span className="font-mono text-[11px] text-panel-dimmed whitespace-nowrap">
              HT/LT licensed electrical contractor
            </span>
            <span className="font-mono text-[11px] text-panel-dimmed whitespace-nowrap hidden 2xl:inline">
              M.Tech (EEE) directed turnkey EPC
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-mono text-[11px] text-panel-dimmed whitespace-nowrap hidden 2xl:inline">
              Telangana CEIG &amp; DISCOM standards
            </span>
            <a
              href={`tel:${contactInfo.phone}`}
              className="font-mono text-[11px] text-tertiary-light whitespace-nowrap hover:underline"
            >
              Hotline: {contactInfo.displayPhone}
            </a>
          </div>
        </div>
      </div>

      <div className="container-custom">
        <div className={`flex justify-between items-center gap-3 min-w-0 transition-[padding] duration-200 ease-out ${
          isScrolled ? 'py-2.5' : 'py-3.5'
        }`}>

          {/* Brand */}
          <Link to="/" className="group min-w-0 shrink" aria-label="MR. ELECTRICAL WORKS Home">
            <Logo size={isScrolled ? "sm" : "md"} variant="dark" />
          </Link>

          {/* Desktop navigation — sentence case, untracked */}
          <div className="hidden lg:flex items-center whitespace-nowrap">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3 py-1.5 font-sans text-[13px] font-semibold rounded-sm transition-colors duration-150 ${
                    active
                      ? 'text-primary'
                      : 'text-secondary hover:text-on-surface'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            <div className="pl-4 ml-2 border-l border-border flex items-center gap-2.5">
              <a
                href={contactInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-sm border border-border bg-surface hover:bg-neutral text-on-surface text-xs font-sans font-semibold transition-colors duration-150"
                title="Direct WhatsApp with GM Projects"
              >
                <MessageSquare size={13} />
                <span>WhatsApp</span>
              </a>

              <a
                href={`tel:${contactInfo.phone}`}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-sm bg-primary hover:bg-primary-hover text-surface text-xs font-sans font-semibold transition-colors duration-150"
              >
                <Phone size={13} />
                <span>Call GM</span>
              </a>
            </div>
          </div>

          {/* Mobile and tablet controls */}
          <div className="lg:hidden flex items-center gap-2 shrink-0">
            <a
              href={`tel:${contactInfo.phone}`}
              className="p-2.5 rounded-sm bg-primary text-surface flex items-center justify-center min-w-[40px] min-h-[40px] hover:bg-primary-hover transition-colors duration-150"
              aria-label="Direct call to the general manager"
            >
              <Phone size={15} />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-on-surface p-2.5 rounded-sm border border-border bg-surface min-w-[40px] min-h-[40px] flex items-center justify-center transition-colors duration-150"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile / tablet drawer */}
      {isOpen && (
        <div className="lg:hidden bg-surface border-t border-border px-5 py-4 mt-1">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-sm text-sm font-sans font-semibold transition-colors duration-150 whitespace-nowrap ${
                  isActive(link.path)
                    ? 'bg-primary-light text-primary-hover'
                    : 'text-on-surface hover:bg-neutral'
                }`}
              >
                {link.name}
              </Link>
            ))}

            <div className="pt-3 mt-2 border-t border-border space-y-2.5">
              <a
                href={`tel:${contactInfo.phone}`}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-sm bg-primary hover:bg-primary-hover text-surface font-sans text-sm font-semibold whitespace-nowrap"
              >
                <Phone size={14} />
                <span>Call GM: {contactInfo.displayPhone}</span>
              </a>

              <a
                href={contactInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-sm border border-border bg-surface hover:bg-neutral text-on-surface font-sans text-sm font-semibold whitespace-nowrap"
              >
                <MessageSquare size={14} />
                <span>WhatsApp consultation</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
