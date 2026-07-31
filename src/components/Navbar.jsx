import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Zap } from 'lucide-react';
import { contactInfo } from '../data/mockData';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-primary text-white p-2 rounded-lg group-hover:bg-primary-dark transition-colors">
              <Zap size={24} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900 leading-tight">MR. ELECTRICAL</h1>
              <p className="text-xs text-primary font-semibold tracking-wider">WORKS</p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`font-medium transition-colors hover:text-primary ${
                  isActive(link.path) ? 'text-primary' : 'text-gray-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a href={`tel:${contactInfo.phone}`} className="btn-primary">
              Get Quote
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-primary focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(link.path)
                    ? 'text-primary bg-orange-50'
                    : 'text-gray-600 hover:text-primary hover:bg-gray-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href={`tel:${contactInfo.phone}`}
              className="block w-full text-center mt-4 btn-primary"
            >
              Get Quote
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
