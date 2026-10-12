import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageSquare, Shield, Activity } from 'lucide-react';
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
    { name: 'Engineering & Leadership', path: '/about' },
    { name: 'Turnkey Services', path: '/services' },
    { name: 'Projects & Schematics', path: '/projects' },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isHidden ? '-translate-y-full' : 'translate-y-0'
      } ${
        isScrolled
          ? 'bg-[#0E1116]/95 backdrop-blur-md border-b border-[#242A35] py-2.5 shadow-2xl'
          : 'bg-[#0E1116]/85 backdrop-blur-sm border-b border-[#1E232D] py-3.5'
      }`}
    >
      {/* Top Technical Telemetry Strip */}
      <div className="hidden xl:block bg-[#08090C] border-b border-[#1A1F29] py-1 text-[11px] font-mono text-[#8C96A5]">
        <div className="container-custom flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-[#38BDF8]">
              <Activity size={12} className="animate-pulse text-[#38BDF8]" />
              <span className="font-semibold text-white">PATANCHERU & HYDERABAD DESK:</span> ACTIVE
            </span>
            <span className="text-[#3A4352]">|</span>
            <span>HT/LT LICENSED ELECTRICAL CONTRACTOR</span>
            <span className="text-[#3A4352]">|</span>
            <span>M.TECH (EEE) DIRECTED TURNKEY EPC</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-[#CBD5E1]">TELANGANA CEIG &amp; DISCOM STANDARDS</span>
            <span className="text-[#3A4352]">|</span>
            <a href={`tel:${contactInfo.phone}`} className="text-[#E57A36] hover:underline font-semibold">
              HOTLINE: {contactInfo.displayPhone}
            </a>
          </div>
        </div>
      </div>

      <div className="container-custom">
        <div className="flex justify-between items-center">
          
          {/* Elite Bespoke Vector Brand Logo */}
          <Link to="/" className="group focus:outline-none" aria-label="MR. ELECTRICAL WORKS Home">
            <Logo size={isScrolled ? "sm" : "md"} variant="light" />
          </Link>

          {/* Dribbble Style Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3.5 py-1.5 rounded-sm font-sans text-xs uppercase tracking-wider font-semibold transition-all duration-200 ${
                    active 
                      ? 'bg-[#B35010]/20 text-[#E57A36] border border-[#B35010]/40 shadow-sm' 
                      : 'text-[#9DA8B8] hover:text-white hover:bg-white/5 border border-transparent'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            <div className="pl-4 ml-2 border-l border-[#242A35] flex items-center gap-3">
              <a
                href={contactInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-[#102A1E] text-[#34D399] border border-[#059669]/40 hover:bg-[#163828] text-xs font-mono font-semibold transition-all"
                title="Direct WhatsApp with GM Projects"
              >
                <MessageSquare size={13} />
                <span>WHATSAPP</span>
              </a>

              <a
                href={`tel:${contactInfo.phone}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-[#B35010] hover:bg-[#9C4208] text-white font-mono text-xs font-semibold uppercase tracking-wider transition-all duration-200 border border-[#C25E1A]/40 shadow-md shadow-[#B35010]/20"
              >
                <Phone size={13} />
                <span>CALL GM</span>
              </a>
            </div>
          </div>

          {/* Mobile and Tablet Menu Controls */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href={`tel:${contactInfo.phone}`}
              className="p-2.5 rounded-sm bg-[#B35010] text-white border border-[#C25E1A]/40 flex items-center justify-center min-w-[42px] min-h-[42px] hover:bg-[#9C4208] transition-colors"
              aria-label="Direct Call General Manager"
            >
              <Phone size={17} />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#9DA8B8] hover:text-white p-2.5 rounded-sm border border-[#242A35] focus:outline-none bg-[#141820] min-w-[42px] min-h-[42px] flex items-center justify-center transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Dribbble Style Mobile/Tablet Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-[#0E1116] border-t border-[#242A35] shadow-2xl px-4 sm:px-6 py-4 sm:py-5 mt-2 animate-[fadeInUp_0.2s_ease]">
          <div className="space-y-1.5">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-3 rounded-sm text-xs font-mono uppercase tracking-wider font-semibold transition-all ${
                  isActive(link.path)
                    ? 'text-[#E57A36] bg-[#B35010]/20 border border-[#B35010]/40'
                    : 'text-[#9DA8B8] hover:text-white hover:bg-white/5 border border-transparent'
                }`}
              >
                {link.name}
              </Link>
            ))}

            <div className="pt-4 border-t border-[#242A35] space-y-2.5">
              <a
                href={`tel:${contactInfo.phone}`}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-sm bg-[#B35010] hover:bg-[#9C4208] text-white font-mono text-xs font-semibold uppercase tracking-wider"
              >
                <Phone size={14} />
                <span>Call GM - Projects: {contactInfo.displayPhone}</span>
              </a>

              <a
                href={contactInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-sm bg-[#102A1E] text-[#34D399] border border-[#059669]/40 font-mono text-xs font-semibold uppercase tracking-wider"
              >
                <MessageSquare size={14} />
                <span>Instant WhatsApp Consultation</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
