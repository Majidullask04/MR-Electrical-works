import { useState, useEffect } from 'react';
import { MessageCircle, Phone, ArrowUp } from 'lucide-react';
import { contactInfo } from '../data/mockData';

const FloatingButtons = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const whatsappMessage = encodeURIComponent("Hi MR. ELECTRICAL WORKS, I'm interested in your services.");
  const whatsappUrl = `https://wa.me/91${contactInfo.phone}?text=${whatsappMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <a 
        href={whatsappUrl}
        target="_blank" 
        rel="noopener noreferrer"
        className="w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-all hover:scale-110"
        title="WhatsApp Us"
      >
        <MessageCircle size={28} />
      </a>
      
      {/* Call Button */}
      <a 
        href={`tel:${contactInfo.phone}`}
        className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-lg hover:bg-primary-dark transition-all hover:scale-110"
        title="Call Now"
      >
        <Phone size={24} />
      </a>

      {/* Scroll to Top */}
      <button
        onClick={scrollToTop}
        className={`w-14 h-14 bg-gray-800 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-900 transition-all duration-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        title="Scroll to Top"
      >
        <ArrowUp size={24} />
      </button>
    </div>
  );
};

export default FloatingButtons;
