import { projects, leadership } from '../data/mockData';
import { MapPin, Clock, Zap, ArrowUpRight } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const galleryImages = [
  { url: leadership.photo, caption: "Engineering Drawing & Circuit Analysis by Mr. Nekbor Seikh (M.Tech - EEE)" },
  { url: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800", caption: "Commercial Conduit Routing & Laser Leveling" },
  { url: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800", caption: "Architectural Office LED Lighting" },
  { url: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&q=80&w=800", caption: "Industrial Cable Tray & Motor Feeder Assembly" },
  { url: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=800", caption: "Residential Smart Distribution Board Dressing" },
  { url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800", caption: "Turnkey Luxury Villa Electrification & Cove Lights" }
];

const Projects = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* ============================== PAGE HEADER ============================== */}
      <section className="relative pt-24 xs:pt-28 sm:pt-32 pb-14 sm:pb-20 bg-slate-950 text-white overflow-hidden">
        <div className="hero-orb hero-orb-1 opacity-60"></div>
        <div className="hero-grid-pattern"></div>
        
        <div className="container-custom relative z-10 text-center">
          <ScrollReveal variant="fade-up">
            <span className="eyebrow !text-cyan-400">Proven Track Record</span>
            <h1 className="text-2xl xs:text-3xl sm:text-5xl md:text-6xl font-black mb-4 sm:mb-5 tracking-tight text-white break-words">
              Executed Projects &amp; Field Gallery
            </h1>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Explore our executed electrical turnkey installations across Patancheru, Sangareddy, and the greater Hyderabad industrial and residential zones.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================== FEATURED PROJECTS ============================== */}
      <section className="section-padding">
        <div className="container-custom">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
            {projects.map((project, idx) => (
              <ScrollReveal 
                key={project.id} 
                variant="fade-up" 
                delay={idx * 0.1}
              >
                <div className="card group cursor-pointer h-full flex flex-col hover:border-blue-400">
                  {/* Card Media with Image Zoom */}
                  <div className="card-media relative h-52 xs:h-60 sm:h-64 bg-slate-900">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3 sm:top-4 sm:left-4 z-10">
                      <span className="bg-blue-600 text-white text-[10px] sm:text-[11px] font-extrabold px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full uppercase tracking-wider shadow-md">
                        {project.category}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                    <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 text-white z-10">
                      <h3 className="text-lg sm:text-xl font-bold group-hover:text-cyan-300 transition-colors flex items-center justify-between break-words">
                        <span>{project.title}</span>
                        <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1 group-hover:-translate-y-1 shrink-0" />
                      </h3>
                      <p className="text-xs text-slate-300 mt-0.5 sm:mt-1">{project.client}</p>
                    </div>
                  </div>
                  
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div className="flex items-center gap-2 text-slate-700 mb-4 text-xs font-semibold">
                      <Zap size={16} className="text-blue-600 shrink-0"/> 
                      <span>{project.services}</span>
                    </div>
                    
                    <div className="flex items-center justify-between border-t border-slate-100 pt-4 text-xs font-medium text-slate-500">
                      <span className="flex items-center gap-1.5">
                        <MapPin size={15} className="text-blue-600" /> 
                        {project.location}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock size={15} className="text-emerald-600" /> 
                        {project.duration}
                      </span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* ============================== PHOTO GALLERY ============================== */}
          <ScrollReveal variant="fade-up">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="eyebrow">On-Site Execution</span>
              <h2 className="section-title">Field Craftsmanship &amp; Engineering In Action</h2>
              <p className="section-subtitle">
                A glimpse into our neat conduit routing, robust panel terminations, and clean laser-aligned finishes.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((item, idx) => (
              <ScrollReveal 
                key={idx} 
                variant="zoom-in" 
                delay={idx * 0.06}
              >
                <div className="card-media group relative h-64 rounded-2xl overflow-hidden shadow-sm border border-slate-200/80 bg-slate-900 cursor-pointer">
                  <img 
                    src={item.url} 
                    alt={item.caption} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                    <div className="text-white">
                      <span className="text-xs font-bold text-cyan-400 block uppercase tracking-wider">Site Execution</span>
                      <p className="text-sm font-semibold">{item.caption}</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default Projects;
