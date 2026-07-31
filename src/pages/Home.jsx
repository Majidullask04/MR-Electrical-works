import { Link } from 'react-router-dom';
import { CheckCircle, ShieldCheck, Zap } from 'lucide-react';
import { stats, services, contactInfo } from '../data/mockData';
import { motion } from 'framer-motion';

const Home = () => {
  const features = [
    'Certified Engineers',
    'Safe Installation',
    'Quality Materials',
    'Affordable Pricing',
    'On-Time Delivery',
    '24/7 Support'
  ];

  const whatsappMessage = encodeURIComponent("Hi MR. ELECTRICAL WORKS, I would like to get a free quote.");
  const whatsappUrl = `https://wa.me/91${contactInfo.phone}?text=${whatsappMessage}`;

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=2000" 
            alt="Professional Electrician" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-900/70"></div>
        </div>
        
        <div className="container-custom relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Professional Electrical Solutions
          </motion.h1>
          <motion.h3 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-3xl text-primary font-semibold mb-8 tracking-wide"
          >
            Residential • Commercial • Industrial
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-gray-200 mb-10 max-w-3xl mx-auto"
          >
            Powering Homes, Businesses & Industries with Safe and Reliable Electrical Solutions.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="/contact" className="btn-primary flex items-center justify-center gap-2 text-lg">
              Get Free Quote
            </Link>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary flex items-center justify-center gap-2 text-lg bg-green-600 hover:bg-green-700">
              WhatsApp Us
            </a>
          </motion.div>
        </div>
      </section>

      {/* Features Bar */}
      <section className="bg-white py-8 border-b">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <CheckCircle className="text-primary" size={20} />
                <span className="font-medium text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">Comprehensive electrical solutions for all your needs</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  key={service.id} 
                  className="card p-8 group"
                >
                  <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                    <Icon className="text-secondary group-hover:text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <Link to="/services" className="text-primary font-semibold hover:text-primary-dark flex items-center gap-1">
                    Learn more <Zap size={16} />
                  </Link>
                </motion.div>
              );
            })}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services" className="btn-outline">View All Services</Link>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="section-padding bg-secondary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-primary rounded-full filter blur-3xl mix-blend-multiply"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary rounded-full filter blur-3xl mix-blend-multiply"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, idx) => (
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                key={idx}
              >
                <div className="text-4xl md:text-5xl font-extrabold text-primary mb-2">{stat.value}</div>
                <div className="text-lg text-gray-300 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white text-center">
        <div className="container-custom">
          <ShieldCheck className="mx-auto text-primary mb-6" size={64} />
          <h2 className="text-3xl font-bold mb-4">Ready for Safe & Reliable Electrical Work?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-lg">
            Our expert team is ready to handle your next residential, commercial, or industrial electrical project.
          </p>
          <Link to="/contact" className="btn-primary text-lg">Contact Us Today</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
