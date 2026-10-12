import { useState, useEffect } from 'react';
import { Phone, ArrowUp, MessageSquare } from 'lucide-react';
import { contactInfo } from '../data/mockData';

const FloatingButtons = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 280);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-2 sm:gap-2.5 pointer-events-none">
      
      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        className={`pointer-events-auto w-9 h-9 sm:w-10 sm:h-10 rounded-sm bg-[#12161F] text-[#8C96A5] hover:text-white border border-[#242A35] shadow-xl flex items-center justify-center hover:bg-[#1A202A] transition-all duration-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        title="Scroll to Top"
        aria-label="Scroll to Top"
      >
        <ArrowUp size={15} />
      </button>

      {/* Direct Call Trigger */}
      <a 
        href={`tel:${contactInfo.phone}`}
        className="pointer-events-auto flex items-center gap-1.5 sm:gap-2 px-3 py-2 sm:px-3.5 sm:py-2.5 rounded-sm bg-[#B35010] hover:bg-[#9C4208] text-white font-mono text-[11px] sm:text-xs font-semibold uppercase tracking-wider transition-all duration-200 border border-[#C25E1A]/50 shadow-xl shadow-[#B35010]/20"
        title="Call Mr. Nekbor Seikh"
        aria-label="Call Mr. Nekbor Seikh"
      >
        <Phone size={13} className="shrink-0" />
        <span className="hidden sm:inline">
          CALL GM: {contactInfo.displayPhone}
        </span>
        <span className="sm:hidden">
          CALL GM
        </span>
      </a>

      {/* WhatsApp Quick Trigger */}
      <a 
        href={contactInfo.whatsappUrl}
        target="_blank" 
        rel="noopener noreferrer"
        className="pointer-events-auto flex items-center gap-1.5 sm:gap-2 py-2.5 px-3 sm:py-3 sm:px-4 rounded-sm bg-[#102A1E] hover:bg-[#163828] text-[#34D399] font-mono text-[11px] sm:text-xs font-semibold uppercase tracking-wider transition-all duration-200 border border-[#059669]/50 shadow-xl shadow-emerald-950/40"
        title="Chat on WhatsApp"
        aria-label="Chat on WhatsApp"
      >
        <MessageSquare size={14} className="shrink-0" />
        <span className="hidden sm:inline">WHATSAPP CONSULTATION</span>
        <span className="sm:hidden">WHATSAPP</span>
      </a>

    </div>
  );
};

export default FloatingButtons;
