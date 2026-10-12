import { useState } from 'react';
import { contactInfo, faqs, leadership } from '../data/mockData';
import { MapPin, Phone, Mail, Send, ChevronDown, CheckCircle2, MessageSquare, ShieldCheck, ExternalLink } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', serviceType: 'House Wiring', message: '' });
  const [openFaq, setOpenFaq] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    
    // Create WhatsApp direct link with form info
    const msg = encodeURIComponent(
      `Hello Mr. Nekbor Seikh (MR. ELECTRICAL WORKS),\n\nMy Name: ${formData.name}\nPhone: ${formData.phone}\nRequirement: ${formData.serviceType}\nDetails: ${formData.message}`
    );
    const waUrl = `https://wa.me/91${contactInfo.phone}?text=${msg}`;

    setTimeout(() => {
      window.open(waUrl, '_blank');
      setSubmitted(false);
      setFormData({ name: '', phone: '', email: '', serviceType: 'House Wiring', message: '' });
    }, 1200);
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* ============================== PAGE HEADER ============================== */}
      <section className="relative pt-24 xs:pt-28 sm:pt-32 pb-14 sm:pb-20 bg-slate-950 text-white overflow-hidden">
        <div className="hero-orb hero-orb-2 opacity-60"></div>
        <div className="hero-grid-pattern"></div>
        
        <div className="container-custom relative z-10 text-center">
          <ScrollReveal variant="fade-up">
            <span className="eyebrow !text-cyan-400">Direct Engineering Inquiry</span>
            <h1 className="text-2xl xs:text-3xl sm:text-5xl md:text-6xl font-black mb-4 sm:mb-5 tracking-tight text-white break-words">
              Connect Directly With Our GM
            </h1>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Speak directly with <strong>Mr. Nekbor Seikh (M.Tech - EEE)</strong> for architectural electrical planning, industrial panel submittals, or immediate site visit quotations.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================== FORM & CONTACT INFO ============================== */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
            
            {/* Contact Form with WhatsApp Integration */}
            <div className="lg:col-span-7">
              <ScrollReveal variant="fade-right">
                <div className="bg-white p-4 xs:p-6 sm:p-8 lg:p-10 rounded-2xl shadow-xl border border-slate-200/80">
                  <span className="eyebrow">Immediate Response</span>
                  <h2 className="text-xl xs:text-2xl sm:text-3xl font-bold text-slate-900 mb-2 break-words">
                    Request Upfront Quote or Site Visit
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mb-6">
                    Fill this quick form to send your project details directly to our engineering desk via WhatsApp or email.
                  </p>

                  {submitted && (
                    <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-center gap-3 animate-[fadeInUp_0.3s_ease]">
                      <CheckCircle2 size={20} className="text-emerald-600 shrink-0" />
                      <div className="text-sm font-semibold">
                        Thank you! Opening WhatsApp to connect you directly with Mr. Nekbor Seikh...
                      </div>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                          Your Full Name *
                        </label>
                        <input 
                          type="text" 
                          required 
                          placeholder="e.g. Ramesh Kumar"
                          className="w-full px-4 py-3 text-base sm:text-sm rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none bg-slate-50 focus:bg-white"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                        />
                      </div>
                      
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                          Mobile Number *
                        </label>
                        <input 
                          type="tel" 
                          required 
                          placeholder="e.g. 9876543210"
                          className="w-full px-4 py-3 text-base sm:text-sm rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none bg-slate-50 focus:bg-white"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                          Project Category *
                        </label>
                        <select
                          className="w-full px-4 py-3 text-sm rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none bg-slate-50 focus:bg-white"
                          value={formData.serviceType}
                          onChange={(e) => setFormData({...formData, serviceType: e.target.value})}
                        >
                          <option value="Residential House / Villa Wiring">Residential House / Villa Wiring</option>
                          <option value="Commercial Office Fitout">Commercial Office Fitout</option>
                          <option value="Industrial LT/HT Panel & Cable Tray">Industrial LT/HT Panel &amp; Cable Tray</option>
                          <option value="Main Distribution Board / RCCB Upgrade">Main Distribution Board / RCCB Upgrade</option>
                          <option value="Emergency Breakdown / Short Circuit">Emergency Breakdown / Short Circuit</option>
                          <option value="Chemical Earthing & Lightning Arrester">Chemical Earthing &amp; Lightning Arrester</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                          Email Address (Optional)
                        </label>
                        <input 
                          type="email" 
                          placeholder="yourname@gmail.com"
                          className="w-full px-4 py-3 text-sm rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none bg-slate-50 focus:bg-white"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Project Details / Site Location *
                      </label>
                      <textarea 
                        rows="4"
                        required 
                        placeholder="Tell us about the site location (e.g. Patancheru, Miyapur, Hitec City), number of floors, square footage, or specific electrical requirements..."
                        className="w-full px-4 py-3 text-sm rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all outline-none resize-none bg-slate-50 focus:bg-white"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                      ></textarea>
                    </div>
                    
                    <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2 text-base !py-3.5">
                      <span>Submit &amp; Open WhatsApp Chat</span>
                      <Send size={18} />
                    </button>
                  </form>
                </div>
              </ScrollReveal>
            </div>

            {/* Side Information: Leadership Photo, Business Card & Office Info */}
            <div className="lg:col-span-5 space-y-6">
              <ScrollReveal variant="fade-left" delay={0.15}>
                {/* Executive Headshot Card */}
                <div className="bg-slate-900 text-white p-6 rounded-2xl shadow-xl border border-slate-800">
                  <div className="flex items-center gap-4 mb-5 pb-4 border-b border-slate-800">
                    <img 
                      src={leadership.photoSquare} 
                      alt={leadership.name} 
                      className="w-16 h-16 rounded-xl object-cover border-2 border-emerald-400 shrink-0"
                    />
                    <div>
                      <div className="text-base font-bold text-white flex items-center gap-1.5">
                        <span>{leadership.name}</span>
                        <ShieldCheck size={16} className="text-emerald-400" />
                      </div>
                      <div className="text-xs text-amber-400 font-semibold">{leadership.role}</div>
                      <div className="text-[11px] text-slate-400">{leadership.qualification}</div>
                    </div>
                  </div>

                  <div className="space-y-4 text-xs text-slate-300">
                    <div className="flex items-start gap-3">
                      <MapPin size={18} className="text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block mb-0.5">Physical Registered Office:</strong>
                        <span>{contactInfo.address}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Phone size={18} className="text-emerald-400 shrink-0" />
                      <div>
                        <strong className="text-white block mb-0.5">Direct GM Contact:</strong>
                        <a href={`tel:${contactInfo.phone}`} className="hover:text-emerald-400 font-bold text-sm text-emerald-300">
                          {contactInfo.displayPhone}
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <Mail size={18} className="text-cyan-400 shrink-0" />
                      <div>
                        <strong className="text-white block mb-0.5">Official Email:</strong>
                        <a href={`mailto:${contactInfo.email}`} className="hover:text-cyan-400 text-slate-300 break-all">
                          {contactInfo.email}
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-5 border-t border-slate-800 flex gap-3">
                    <a
                      href={contactInfo.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-center text-xs font-bold text-white flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <span>Google Maps</span>
                      <ExternalLink size={14} />
                    </a>
                    <a
                      href={contactInfo.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-center text-xs font-bold text-white flex items-center justify-center gap-1.5 transition-colors"
                    >
                      <MessageSquare size={14} />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>

                {/* Oriented Business Card Mini Preview */}
                <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-md">
                  <div className="text-xs font-bold text-slate-800 uppercase tracking-wider mb-2 flex items-center justify-between">
                    <span>Official Business Card</span>
                    <span className="text-[10px] text-emerald-600 font-bold">Verified</span>
                  </div>
                  <div className="rounded-lg overflow-hidden border border-slate-200 shadow-inner">
                    <img 
                      src={leadership.businessCard} 
                      alt="MR. ELECTRICAL WORKS business card" 
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* ============================== FAQS SECTION ============================== */}
      <section className="section-padding bg-white border-t border-slate-200/70">
        <div className="container-custom">
          <ScrollReveal variant="fade-up">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="eyebrow">Clear Answers</span>
              <h2 className="section-title">Frequently Asked Questions</h2>
              <p className="section-subtitle">
                Everything you need to know about our engineering approach, safety standards, and project timelines.
              </p>
            </div>
          </ScrollReveal>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <ScrollReveal 
                  key={index} 
                  variant="fade-up" 
                  delay={index * 0.06}
                >
                  <div className="rounded-2xl border border-slate-200/90 overflow-hidden bg-slate-50 transition-all duration-300 hover:border-blue-400/50">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full px-6 py-5 text-left font-bold text-slate-900 flex justify-between items-center gap-4 transition-colors"
                    >
                      <span className="text-base">{faq.question}</span>
                      <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-transform duration-300 shrink-0 ${
                        isOpen ? 'bg-blue-600 text-white rotate-180' : 'bg-slate-200 text-slate-700'
                      }`}>
                        <ChevronDown size={18} />
                      </div>
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-5 pt-1 text-slate-600 text-sm leading-relaxed border-t border-slate-100/60 animate-[fadeInUp_0.25s_ease]">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
