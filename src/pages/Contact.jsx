import { useState } from 'react';
import { contactInfo, faqs } from '../data/mockData';
import { MapPin, Phone, Mail, Clock, Send, ChevronDown, ChevronUp } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const [openFaq, setOpenFaq] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission, in real app this would go to an API or EmailJS
    alert("Thank you for your message! We will get back to you shortly.");
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  const toggleFaq = (index) => {
    if (openFaq === index) {
      setOpenFaq(null);
    } else {
      setOpenFaq(index);
    }
  };

  return (
    <div className="bg-gray-50 pb-20">
      <section className="bg-dark text-white py-20 text-center">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact & FAQs</h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Get in touch with us for a free quote or for any electrical emergency.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Contact Info & Form */}
            <div className="lg:w-2/3">
              <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100">
                <h2 className="text-3xl font-bold mb-8">Send Us a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                      <input 
                        type="text" 
                        required 
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-colors outline-none"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                      <input 
                        type="tel" 
                        required 
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-colors outline-none"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address (Optional)</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-colors outline-none"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message or Service Required</label>
                    <textarea 
                      rows="4"
                      required 
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-colors outline-none resize-none"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                    Send Request <Send size={18} />
                  </button>
                </form>
              </div>
            </div>

            {/* Side Information */}
            <div className="lg:w-1/3 space-y-8">
              <div className="bg-secondary text-white p-8 rounded-2xl shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary rounded-full filter blur-3xl opacity-20 -mr-10 -mt-10"></div>
                <h3 className="text-2xl font-bold mb-6 relative z-10">Contact Details</h3>
                
                <div className="space-y-6 relative z-10">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-900 flex items-center justify-center flex-shrink-0">
                      <MapPin size={20} className="text-primary"/>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Office Address</h4>
                      <p className="text-gray-300 text-sm">{contactInfo.address}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-900 flex items-center justify-center flex-shrink-0">
                      <Phone size={20} className="text-primary"/>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Call Us</h4>
                      <p className="text-gray-300 text-sm">+91 {contactInfo.phone}</p>
                      <p className="text-gray-300 text-sm mt-1">Owner: {contactInfo.owner}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-900 flex items-center justify-center flex-shrink-0">
                      <Mail size={20} className="text-primary"/>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Email</h4>
                      <p className="text-gray-300 text-sm">{contactInfo.email}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-blue-900 flex items-center justify-center flex-shrink-0">
                      <Clock size={20} className="text-primary"/>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">Working Hours</h4>
                      <p className="text-gray-300 text-sm">Mon - Sat: 9:00 AM - 8:00 PM</p>
                      <p className="text-gray-300 text-sm">Emergency: 24/7 Available</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16 bg-white border-t">
        <div className="container-custom max-w-4xl">
          <h2 className="section-title text-left">Frequently Asked Questions</h2>
          <div className="mt-8 space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button 
                  className="w-full text-left px-6 py-4 flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-colors focus:outline-none font-semibold text-lg"
                  onClick={() => toggleFaq(index)}
                >
                  {faq.question}
                  {openFaq === index ? <ChevronUp className="text-primary" /> : <ChevronDown className="text-gray-500" />}
                </button>
                {openFaq === index && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="px-6 py-4 bg-white text-gray-600"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 w-full bg-gray-200">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121774.83296236313!2d78.18873468536868!3d17.525659850257323!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbefc422c5436d%3A0xa1ea0f05562d5f0b!2sPatancheru%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Office Location"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;
