import { projects } from '../data/mockData';
import { MapPin, Clock, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <div className="bg-gray-50 pb-20">
      <section className="bg-dark text-white py-20 text-center">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Projects & Gallery</h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A showcase of our successfully completed electrical projects across various sectors.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {projects.map((project, idx) => (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                key={project.id} 
                className="card group cursor-pointer"
              >
                <div className="relative overflow-hidden h-64">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    {project.category}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <p className="text-sm text-gray-300">{project.client}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-2 text-gray-600 mb-3 text-sm font-medium">
                    <Zap size={16} className="text-primary"/> 
                    {project.services}
                  </div>
                  <div className="flex justify-between border-t pt-4 mt-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1"><MapPin size={16}/> {project.location}</span>
                    <span className="flex items-center gap-1"><Clock size={16}/> {project.duration}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Simple Gallery Grid for demonstration */}
          <h2 className="section-title mt-10">Photo Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <img src="https://images.unsplash.com/photo-1544724569-5f546fd6f2b6?auto=format&fit=crop&q=80&w=400" alt="Gallery 1" className="w-full h-48 object-cover rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer" />
            <img src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=400" alt="Gallery 2" className="w-full h-48 object-cover rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer" />
            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=400" alt="Gallery 3" className="w-full h-48 object-cover rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer" />
            <img src="https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&q=80&w=400" alt="Gallery 4" className="w-full h-48 object-cover rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer" />
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default Projects;
