import { CheckCircle2, ShieldAlert } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const values = [
    { title: 'Safety', desc: 'Our top priority in every project we undertake.' },
    { title: 'Integrity', desc: 'Transparent pricing and honest assessments always.' },
    { title: 'Quality', desc: 'Using the best materials for long-lasting results.' },
    { title: 'Innovation', desc: 'Implementing modern techniques and smart solutions.' },
    { title: 'Customer First', desc: 'Your satisfaction is the measure of our success.' },
  ];

  return (
    <div className="bg-gray-50">
      {/* Page Header */}
      <section className="bg-dark text-white py-20 text-center">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Discover the story, mission, and values behind MR. ELECTRICAL WORKS.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1544724569-5f546fd6f2b6?auto=format&fit=crop&q=80&w=800" 
                alt="Electricians working" 
                className="rounded-xl shadow-xl w-full"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6">About MR. ELECTRICAL WORKS</h2>
              <div className="space-y-4 text-gray-600 text-lg">
                <p>
                  MR. ELECTRICAL WORKS was founded with a vision to provide reliable, safe, and high-quality electrical services across Hyderabad and surrounding areas.
                </p>
                <p>
                  Led by <strong>Mr. Nekbor Seikh (M.Tech - EEE)</strong>, our company specializes in residential, commercial, and industrial electrical solutions. We bring years of technical expertise and practical experience to every project.
                </p>
                <p>
                  We believe in quality workmanship, customer satisfaction, and long-term relationships. Every project is completed with proper planning, modern equipment, and strict safety standards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-10 bg-blue-50 rounded-2xl border-t-4 border-primary"
            >
              <h3 className="text-2xl font-bold mb-4 text-secondary">Our Mission</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                Provide reliable electrical solutions that ensure safety, efficiency, and customer satisfaction across all sectors.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-10 bg-orange-50 rounded-2xl border-t-4 border-primary"
            >
              <h3 className="text-2xl font-bold mb-4 text-secondary">Our Vision</h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                To become one of Telangana's most trusted, innovative, and preferred electrical contracting companies.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="section-title">Our Core Values</h2>
          <p className="section-subtitle">The principles that guide our work everyday</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((val, idx) => (
              <div key={idx} className="card p-6 flex items-start gap-4">
                <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="text-xl font-bold mb-2">{val.title}</h4>
                  <p className="text-gray-600">{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section className="section-padding bg-dark text-white">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <ShieldAlert className="text-primary" size={36} /> Safety First
              </h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Safety is not just a policy; it's our culture. We ensure that every installation, repair, and maintenance job adheres to the strictest safety protocols.
              </p>
              
              <ul className="space-y-4">
                {[
                  'Personal Protective Equipment (PPE) always used',
                  'High-voltage insulated tools',
                  'Rigorous electrical testing post-installation',
                  'Certified safety equipment',
                  'Comprehensive safety checklist for every site'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-200">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1632731515904-8b6343513a94?auto=format&fit=crop&q=80&w=800" 
                alt="Electrical Safety" 
                className="rounded-xl border-4 border-gray-700 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
