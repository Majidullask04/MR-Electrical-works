import { useState, useEffect } from 'react';
import { MessageCircle, Phone, ArrowUp } from 'lucide-react';
import { contactInfo } from '../data/mockData';

const FloatingButtons = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 350) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const whatsappMessage = encodeURIComponent("Hi MR. ELECTRICAL WORKS, I'm interested in your electrical services.");
  const whatsappUrl = `https://wa.me/91${contactInfo.phone}?text=${whatsappMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">
      {/* WhatsApp Button with Saitronics Radar Pulse */}
      <div className="relative group">
        <a 
          href={whatsappUrl}
          target="_blank" 
          rel="noopener noreferrer"
          className="whatsapp-fab-pulse w-13 h-13 sm:w-14 sm:h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg shadow-green-600/30 hover:scale-110 active:scale-95 transition-all duration-300"
          title="Chat on WhatsApp"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle size={26} className="fill-white/20" />
        </a>
        <span className="pointer-events-none absolute right-full mr-3 top-1/2 -translate-y-1/2 px-2.5 py-1 rounded-md bg-slate-900/90 text-white text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
          WhatsApp Us
        </span>
      </div>
      
      {/* Call Button */}
      <div className="relative group">
        <a 
          href={`tel:${contactInfo.phone}`}
          className="w-13 h-13 sm:w-14 sm:h-14 bg-gradient-to-tr from-amber-600 to-amber-500 text-white rounded-full flex items-center justify-center shadow-lg shadow-amber-600/30 hover:scale-110 active:scale-95 transition-all duration-300"
          title="Direct Call"
          aria-label="Direct Call"
        >
          <Phone size={22} />
        </a>
        <span className="pointer-events-none absolute right-full mr-3 top-1/2 -translate-y-1/2 px-2.5 py-1 rounded-md bg-slate-900/90 text-white text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
          Call Now
        </span>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`w-11 h-11 sm:w-12 sm:h-12 bg-slate-800/90 backdrop-blur-sm text-white rounded-full flex items-center justify-center shadow-lg hover:bg-slate-950 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-110 active:scale-95 ${
          isVisible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-6 pointer-events-none'
        }`}
        title="Scroll to Top"
        aria-label="Scroll to Top"
      >
        <ArrowUp size={20} />
      </button>
    </div>
  );
};

export default FloatingButtons;
