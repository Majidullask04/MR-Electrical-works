import { services, industries } from '../data/mockData';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Services = () => {
  return (
    <div className="bg-gray-50 pb-20">
      <section className="bg-dark text-white py-20 text-center">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Comprehensive electrical solutions for residential, commercial, and industrial sectors.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  key={service.id} 
                  className="card p-8 group border-t-4 border-transparent hover:border-primary"
                >
                  <Icon className="text-primary mb-6" size={48} />
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  {/* Detailed list based on service type - mocking a few items */}
                  <ul className="space-y-2 mb-8">
                    <li className="flex items-center gap-2 text-sm text-gray-500">
                      <CheckCircle size={16} className="text-green-500"/> Quality Workmanship
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-500">
                      <CheckCircle size={16} className="text-green-500"/> Timely Completion
                    </li>
                  </ul>
                  
                  <Link to="/contact" className="text-secondary font-bold flex items-center gap-2 hover:text-primary transition-colors">
                    Request Quote <ArrowRight size={18} />
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="bg-white py-20 border-y border-gray-200">
        <div className="container-custom text-center">
          <h2 className="section-title">Industries We Serve</h2>
          <p className="section-subtitle">We have the expertise to handle diverse electrical requirements across various sectors.</p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((ind, idx) => {
              const Icon = ind.icon;
              return (
                <div key={idx} className="flex flex-col items-center p-6 bg-gray-50 rounded-xl w-36 hover:bg-primary hover:text-white transition-all shadow-sm cursor-pointer group">
                  <Icon size={32} className="mb-3 text-secondary group-hover:text-white" />
                  <span className="font-semibold text-sm">{ind.name}</span>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Additional specific services */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="bg-dark rounded-2xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
            <div className="lg:w-1/2 p-10 md:p-16 text-white flex flex-col justify-center">
              <h3 className="text-3xl font-bold mb-4">Specialized Services</h3>
              <p className="text-gray-300 mb-8">Beyond standard installations, we offer specialized electrical solutions to meet all modern requirements.</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-bold text-primary mb-1">Generator Setup</h4>
                  <p className="text-sm text-gray-400">Complete installation and integration.</p>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-bold text-primary mb-1">UPS Systems</h4>
                  <p className="text-sm text-gray-400">Uninterrupted power supply solutions.</p>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-bold text-primary mb-1">Solar Works</h4>
                  <p className="text-sm text-gray-400">Solar panel electrical integration.</p>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-bold text-primary mb-1">Earthing</h4>
                  <p className="text-sm text-gray-400">Standard and chemical earthing.</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 bg-[url('https://images.unsplash.com/photo-1540104539506-e68ebf034057?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center min-h-[400px]">
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
