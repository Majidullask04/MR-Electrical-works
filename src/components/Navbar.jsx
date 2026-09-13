import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Zap, Phone } from 'lucide-react';
import { contactInfo } from '../data/mockData';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const location = useLocation();
  const lastScrollY = useRef(0);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY.current;
      const hideThreshold = 120;
      const deadZone = 6;

      // Check if navbar should have scrolled appearance (glass backdrop & shadow)
      setIsScrolled(currentScrollY > 24);

      // Smart hide on scroll down, show on scroll up (Saitronics style)
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

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isHidden ? '-translate-y-full' : 'translate-y-0'
      } ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-md border-b border-slate-200/70 py-2.5'
          : 'bg-white/95 backdrop-blur-sm border-b border-transparent py-4 shadow-sm'
      }`}
    >
      <div className="container-custom">
        <div className="flex justify-between items-center">
          
          {/* Logo with smooth size scale */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className={`bg-gradient-to-tr from-amber-500 to-amber-400 text-white rounded-xl flex items-center justify-center transition-all duration-300 shadow-md shadow-amber-500/20 group-hover:scale-105 group-hover:shadow-amber-500/40 ${
              isScrolled ? 'w-10 h-10' : 'w-11 h-11'
            }`}>
              <Zap size={isScrolled ? 22 : 24} className="fill-white" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-extrabold text-slate-900 tracking-tight leading-none group-hover:text-amber-600 transition-colors">
                  MR. ELECTRICAL
                </span>
              </div>
              <p className="text-[11px] text-amber-600 font-bold tracking-[0.2em] uppercase leading-none mt-1">
                WORKS • TELANGANA
              </p>
            </div>
          </Link>

          {/* Desktop Nav with animated underline */}
          <div className="hidden md:flex items-center space-x-7">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`nav-link-animated font-semibold text-sm tracking-wide transition-colors ${
                    active ? 'text-amber-600 active' : 'text-slate-700 hover:text-amber-600'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            <div className="pl-2 border-l border-slate-200 flex items-center gap-3">
              <a
                href={`tel:${contactInfo.phone}`}
                className="btn-primary flex items-center gap-2 text-sm !py-2.5 !px-5"
              >
                <Phone size={15} />
                <span>Get Quote</span>
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 hover:text-amber-600 p-1.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-400/50"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Drawer with smooth accordion */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-lg border-t border-slate-100 shadow-xl px-6 py-5 mt-2.5 animate-[fadeInUp_0.3s_ease]">
          <div className="space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2.5 rounded-xl text-base font-semibold transition-all ${
                  isActive(link.path)
                    ? 'text-amber-600 bg-amber-50 border-l-4 border-amber-500'
                    : 'text-slate-700 hover:text-amber-600 hover:bg-slate-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href={`tel:${contactInfo.phone}`}
              className="w-full text-center mt-4 btn-primary flex items-center justify-center gap-2 !py-3"
            >
              <Phone size={18} />
              <span>Call Now: {contactInfo.phone}</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
