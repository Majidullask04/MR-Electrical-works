import { useState } from 'react';
import { contactInfo, faqs } from '../data/mockData';
import { MapPin, Phone, Mail, Send, ChevronDown, CheckCircle2 } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const [openFaq, setOpenFaq] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', email: '', message: '' });
    }, 4000);
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* ============================== PAGE HEADER ============================== */}
      <section className="relative pt-32 pb-20 bg-slate-950 text-white overflow-hidden">
        <div className="hero-orb hero-orb-2 opacity-60"></div>
        <div className="hero-grid-pattern"></div>
        
        <div className="container-custom relative z-10 text-center">
          <ScrollReveal variant="fade-up">
            <span className="eyebrow !text-amber-400">Get In Touch</span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black mb-5 tracking-tight text-white">
              Connect With Our Engineers
            </h1>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Have a project requirement or need emergency electrical troubleshooting? Reach out today for dependable service.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================== FORM & CONTACT INFO ============================== */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Contact Form */}
            <div className="lg:col-span-7">
              <ScrollReveal variant="fade-right">
                <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-xl border border-slate-200/80">
                  <span className="eyebrow">Direct Inquiry</span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">
                    Request an Estimate or Site Visit
                  </h2>

                  {submitted && (
                    <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-center gap-3 animate-[fadeInUp_0.3s_ease]">
                      <CheckCircle2 size={20} className="text-emerald-600 shrink-0" />
                      <span className="text-sm font-semibold">Thank you! Your inquiry has been received. Mr. Nekbor Seikh will call you shortly.</span>
                    </div>
                  )}
                  
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                          Your Full Name *
                        </label>
                        <input 
                          type="text" 
                          required 
                          placeholder="e.g. Rahul Sharma"
                          className="w-full px-4 py-3 text-sm rounded-xl border border-slate-300 focus:ring-2 focus:ring-amber-400 focus:border-amber-500 transition-all outline-none bg-slate-50 focus:bg-white"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                          Phone Number *
                        </label>
                        <input 
                          type="tel" 
                          required 
                          placeholder="e.g. 9876543210"
                          className="w-full px-4 py-3 text-sm rounded-xl border border-slate-300 focus:ring-2 focus:ring-amber-400 focus:border-amber-500 transition-all outline-none bg-slate-50 focus:bg-white"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Email Address (Optional)
                      </label>
                      <input 
                        type="email" 
                        placeholder="e.g. yourname@domain.com"
                        className="w-full px-4 py-3 text-sm rounded-xl border border-slate-300 focus:ring-2 focus:ring-amber-400 focus:border-amber-500 transition-all outline-none bg-slate-50 focus:bg-white"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                        Project Scope or Message *
                      </label>
                      <textarea 
                        rows="4"
                        required 
                        placeholder="Tell us about your requirement: House wiring, panel installation, industrial cable tray, maintenance, etc."
                        className="w-full px-4 py-3 text-sm rounded-xl border border-slate-300 focus:ring-2 focus:ring-amber-400 focus:border-amber-500 transition-all outline-none resize-none bg-slate-50 focus:bg-white"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                      ></textarea>
                    </div>
                    
                    <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2 text-base !py-3.5">
                      <span>Send Project Request</span>
                      <Send size={18} />
                    </button>
                  </form>
                </div>
              </ScrollReveal>
            </div>

            {/* Side Information */}
            <div className="lg:col-span-5 space-y-6">
              <ScrollReveal variant="fade-left" delay={0.15}>
                <div className="bg-slate-900 text-white p-8 sm:p-9 rounded-2xl shadow-xl relative overflow-hidden">
                  <div className="hero-orb hero-orb-1 opacity-20"></div>
                  
                  <h3 className="text-xl font-bold mb-6 text-white flex items-center gap-2">
                    Office &amp; Contact Details
                  </h3>

                  <div className="space-y-6 text-sm">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Registered Address</div>
                        <div className="text-slate-200 mt-1 leading-relaxed font-medium">
                          {contactInfo.address}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                        <Phone size={20} />
                      </div>
                      <div>
                        <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Phone &amp; WhatsApp</div>
                        <div className="text-slate-200 mt-1 font-medium">
                          <a href={`tel:${contactInfo.phone}`} className="hover:text-amber-400 transition-colors">
                            +91 {contactInfo.phone}
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                        <Mail size={20} />
                      </div>
                      <div>
                        <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Email Inquiry</div>
                        <div className="text-slate-200 mt-1 font-medium">
                          <a href={`mailto:${contactInfo.email}`} className="hover:text-amber-400 transition-colors">
                            {contactInfo.email}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-800 text-xs text-slate-400 leading-relaxed">
                    <strong>Service Hours:</strong> Monday – Saturday (8:00 AM – 8:00 PM)<br/>
                    <strong>Emergency Breakdown:</strong> 24/7 on-call service for critical failures.
                  </div>
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* ============================== FAQS SECTION (Saitronics Accordion) ============================== */}
      <section className="section-padding bg-white border-t border-slate-200/70">
        <div className="container-custom">
          <ScrollReveal variant="fade-up">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="eyebrow">Clear Answers</span>
              <h2 className="section-title">Frequently Asked Questions</h2>
              <p className="section-subtitle">
                Everything you need to know about our contracting process, guarantees, and emergency response.
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
                  <div className="rounded-2xl border border-slate-200/90 overflow-hidden bg-slate-50 transition-all duration-300 hover:border-amber-400/50">
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full px-6 py-5 text-left font-bold text-slate-900 flex justify-between items-center gap-4 transition-colors"
                    >
                      <span className="text-base">{faq.question}</span>
                      <div className={`w-7 h-7 rounded-full flex items-center justify-center transition-transform duration-300 shrink-0 ${
                        isOpen ? 'bg-amber-500 text-white rotate-180' : 'bg-slate-200 text-slate-700'
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
