import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Phone, ArrowUp, MessageSquare } from 'lucide-react';
import { contactInfo } from '../data/mockData';

const FloatingButtons = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  // On the contact desk page the same call/WhatsApp actions sit inside the
  // dossier panel itself — the floating pair would only duplicate and clip them.
  const isDeskPage = location.pathname === '/contact';

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 280);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    // Reduced-motion users get the instant jump (Gate 27).
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({
      top: 0,
      behavior: reduced ? 'auto' : 'smooth'
    });
  };

  return (
    <div className="fixed bottom-3 right-3 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-2 pointer-events-none">

      {/* Scroll to top */}
      <button
        onClick={scrollToTop}
        className={`pointer-events-auto w-10 h-10 rounded-sm bg-panel-chassis text-secondary-light hover:text-surface hover:bg-panel-steel border border-panel-line shadow-tech-md flex items-center justify-center transition-[opacity,transform,background-color,color] duration-200 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
        }`}
        title="Scroll to top"
        aria-label="Scroll to top"
      >
        <ArrowUp size={16} aria-hidden="true" />
      </button>

      {/* Direct call + WhatsApp triggers — bloom in after the fold, like the scroll-top */}
      {!isDeskPage && (
        <>
          <a
            href={`tel:${contactInfo.phone}`}
            className={`pointer-events-auto flex items-center gap-2 px-3.5 py-2.5 rounded-sm bg-primary hover:bg-primary-hover text-surface font-sans text-xs font-semibold shadow-tech-md transition-[background-color,opacity,transform] duration-200 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
            }`}
            title="Call Mr. Nekbor Seikh"
            aria-label="Call Mr. Nekbor Seikh"
          >
            <Phone size={14} className="shrink-0" aria-hidden="true" />
            <span className="hidden sm:inline whitespace-nowrap">
              Call GM: {contactInfo.displayPhone}
            </span>
            <span className="sm:hidden whitespace-nowrap">
              Call GM
            </span>
          </a>

          {/* WhatsApp quick trigger */}
          <a
            href={contactInfo.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`pointer-events-auto flex items-center gap-2 py-2.5 px-3.5 rounded-sm bg-panel-chassis hover:bg-panel-steel text-surface border border-panel-line font-sans text-xs font-semibold shadow-tech-md transition-[background-color,opacity,transform] duration-200 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
            }`}
            title="Chat on WhatsApp"
            aria-label="Chat on WhatsApp"
          >
            <MessageSquare size={14} className="shrink-0" aria-hidden="true" />
            <span className="hidden sm:inline whitespace-nowrap">WhatsApp consultation</span>
            <span className="sm:hidden whitespace-nowrap">WhatsApp</span>
          </a>
        </>
      )}
    </div>
  );
};

export default FloatingButtons;
