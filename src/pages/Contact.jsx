import { useState } from 'react';
import { contactInfo, faqs, leadership } from '../data/mockData';
import { Mail, MessageSquare, ChevronDown, CheckCircle2, Send, ShieldCheck } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const fieldClass =
  'w-full bg-surface border border-muted rounded-sm px-3.5 py-2.5 text-sm text-on-surface placeholder:text-secondary focus:border-tertiary transition-colors duration-150';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    serviceType: 'Residential House / Villa Wiring',
    message: ''
  });
  const [openFaq, setOpenFaq] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  // Honest dispatch: instant handoff to the engineering desk. No fake spinner.
  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Hello Mr. Nekbor Seikh (MR. ELECTRICAL WORKS),\n\nMy Name: ${formData.name}\nPhone: ${formData.phone}\nRequirement: ${formData.serviceType}\nDetails: ${formData.message}`
    );
    window.open(`https://wa.me/91${contactInfo.phone}?text=${msg}`, '_blank');
    setSubmitted(true);
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      {/* ============================== PAGE HEADER ============================== */}
      <section className="relative pt-32 sm:pt-40 pb-10 sm:pb-14 border-b border-border">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none grid-copper grid-copper-coarse" aria-hidden="true" />
        <div className="container-custom">
          <ScrollReveal variant="fade-up">
            <h1 className="mt-4 text-3xl sm:text-5xl font-display font-bold text-on-surface max-w-2xl">
              Connect directly with our GM
            </h1>
            <p className="mt-4 text-base sm:text-lg text-muted leading-relaxed max-w-2xl">
              Call Mr. Nekbor Seikh directly for quotes, panel submittals, or site visits.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================== DISPATCH CONSOLE ============================== */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

            {/* LEFT — dispatch form */}
            <div className="lg:col-span-7">
              <ScrollReveal variant="fade-up">
                <div className="bg-surface border border-border rounded-md p-6 sm:p-8 shadow-tech-md">
                  <h2 className="text-xl sm:text-2xl font-display font-bold text-on-surface">
                    Request an upfront quote or site visit
                  </h2>
                  <p className="mt-2 text-[13px] text-muted">
                    Submits straight to the engineering desk on WhatsApp: nothing is stored, nothing
                    waits behind a fake progress bar.
                  </p>

                  {submitted && (
                    <div
                      role="status"
                      className="mt-5 bg-tertiary-light border border-tertiary/30 rounded-sm p-3.5 flex items-center gap-2.5 text-[13px] text-tertiary font-semibold"
                    >
                      <CheckCircle2 size={18} className="shrink-0" />
                      <span>Opening WhatsApp with your project brief…</span>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 mt-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                      <div>
                        <label htmlFor="contact-name" className="block text-[13px] font-sans font-semibold text-on-surface mb-2">
                          Full name
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          required
                          placeholder="e.g. Ramesh Kumar"
                          className={fieldClass}
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-phone" className="block text-[13px] font-sans font-semibold text-on-surface mb-2">
                          Mobile number
                        </label>
                        <input
                          id="contact-phone"
                          type="tel"
                          required
                          placeholder="e.g. 9876543210"
                          className={fieldClass}
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                      <div>
                        <label htmlFor="contact-service" className="block text-[13px] font-sans font-semibold text-on-surface mb-2">
                          Project category
                        </label>
                        <select
                          id="contact-service"
                          className={fieldClass}
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
                        <label htmlFor="contact-email" className="block text-[13px] font-sans font-semibold text-on-surface mb-2">
                          Email address (optional)
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          placeholder="yourname@gmail.com"
                          className={fieldClass}
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="contact-message" className="block text-[13px] font-sans font-semibold text-on-surface mb-2">
                        Project details / site location
                      </label>
                      <textarea
                        id="contact-message"
                        rows="4"
                        required
                        placeholder="Tell us about the site location (e.g. Patancheru, Miyapur, Hitec City), number of floors, square footage, or specific electrical requirements..."
                        className={fieldClass}
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-sm bg-primary hover:bg-primary-hover text-surface font-sans font-semibold whitespace-nowrap transition-colors duration-150"
                    >
                      Send project brief via WhatsApp
                      <Send size={16} />
                    </button>

                    <p className="label-tech">Opens the desk chat with Nekbor Seikh on +91 85199 49762.</p>

                    <a
                      href="mailto:mrelectricalworks02@gmail.com?subject=Project%20brief%20for%20MR.%20ELECTRICAL%20WORKS"
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-sm border border-border bg-surface hover:bg-neutral text-on-surface font-sans font-semibold whitespace-nowrap transition-colors duration-150"
                    >
                      Open in email client instead
                      <Mail size={15} />
                    </a>
                  </form>
                </div>
              </ScrollReveal>
            </div>

            {/* RIGHT — engineering desk dossier */}
            <div className="lg:col-span-5">
              <ScrollReveal variant="fade-left" delay={0.15}>
                <div className="bg-panel-chassis border border-panel-line rounded-md p-6 text-surface">
                  <div className="flex items-center gap-4">
                    <img
                      src={leadership.photoSquare}
                      alt={leadership.name}
                      className="w-16 h-16 rounded-sm object-cover border border-panel-line shrink-0"
                    />
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5">
                        <span className="font-bold text-surface truncate">{leadership.name}</span>
                        <ShieldCheck size={15} className="text-tertiary-light shrink-0" />
                      </div>
                      <div className="mt-0.5 font-mono text-[11px] text-primary-light">{leadership.role}</div>
                      <div className="mt-0.5 font-mono text-[10px] text-panel-dimmed">{leadership.qualification}</div>
                    </div>
                  </div>

                  <div className="border-t border-panel-line pt-3 mt-5">
                    <div className="font-mono text-[10px] text-panel-dimmed">Registered office</div>
                    <p className="mt-1 text-[13px] text-secondary-light leading-relaxed">{contactInfo.address}</p>
                  </div>

                  <div className="border-t border-panel-line pt-3 mt-3">
                    <div className="font-mono text-[10px] text-panel-dimmed">Direct GM line</div>
                    <a
                      href={`tel:${contactInfo.phone}`}
                      className="mt-1 inline-block font-mono tabular-data font-semibold text-surface whitespace-nowrap hover:text-primary-light transition-colors duration-150"
                    >
                      {contactInfo.displayPhone}
                    </a>
                  </div>

                  <div className="border-t border-panel-line pt-3 mt-3">
                    <div className="font-mono text-[10px] text-panel-dimmed">Official email</div>
                    <a
                      href={`mailto:${contactInfo.email}`}
                      className="mt-1 inline-block text-[13px] text-secondary-light break-all hover:text-surface transition-colors duration-150"
                    >
                      {contactInfo.email}
                    </a>
                  </div>

                  <div className="flex gap-2.5 mt-5">
                    <a
                      href={contactInfo.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-sm bg-primary hover:bg-primary-hover text-surface text-xs font-semibold whitespace-nowrap transition-colors duration-150"
                    >
                      <MessageSquare size={14} />
                      WhatsApp the desk
                    </a>
                    <a
                      href={contactInfo.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-sm border border-panel-line text-surface hover:bg-panel-steel text-xs font-semibold whitespace-nowrap transition-colors duration-150"
                    >
                      Google Maps
                    </a>
                  </div>
                </div>

                {/* Business-card mini panel */}
                <div className="bg-surface border border-border rounded-md p-5 mt-6">
                  <div className="flex items-center justify-between gap-3">
                    <span className="label-tech">Official business card</span>
                    <span className="inline-flex items-center px-2 py-0.5 rounded-sm bg-tertiary-light text-tertiary font-mono text-[10px] font-semibold">
                      Verified
                    </span>
                  </div>
                  <img
                    src={leadership.businessCard}
                    className="w-full object-contain border border-border rounded-sm mt-3"
                    alt="MR. ELECTRICAL WORKS business card"
                  />
                </div>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* ============================== FAQ LEDGER ============================== */}
      <section className="section-padding bg-neutral border-t border-border">
        <div className="container-custom">
          <ScrollReveal variant="fade-up">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="mt-4 text-2xl sm:text-4xl font-display font-bold text-on-surface">
                Frequently asked questions
              </h2>
              <p className="mt-4 text-base text-muted leading-relaxed">
                Answers on our engineering approach, safety standards, and project timelines.
              </p>
            </div>
          </ScrollReveal>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <ScrollReveal key={index} variant="fade-up" delay={index * 0.06}>
                  <div className="border border-border bg-surface rounded-sm overflow-hidden">
                    <button
                      onClick={() => toggleFaq(index)}
                      aria-expanded={isOpen}
                      className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 cursor-pointer transition-colors duration-150 hover:bg-neutral"
                    >
                      <span className="text-[15px] font-sans font-semibold text-on-surface">{faq.question}</span>
                      <span className="w-7 h-7 rounded-sm border border-border flex items-center justify-center transition-transform duration-200 shrink-0">
                        <ChevronDown size={16} className={`text-secondary ${isOpen ? 'rotate-180' : ''}`} />
                      </span>
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-[13px] text-muted leading-relaxed border-t border-border">
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
  </>
  );
};

export default Contact;
