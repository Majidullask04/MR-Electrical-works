import { projects, leadership } from '../data/mockData';
import ScrollReveal from '../components/ScrollReveal';
import { Link } from 'react-router-dom';

const galleryImages = [
  { url: leadership.photo, caption: "Mr. Nekbor Seikh (M.Tech - EEE) — GM, Projects & Lead Consultant" },
  { url: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800", caption: "Commercial Conduit Routing & Laser Leveling" },
  { url: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800", caption: "Architectural Office LED Lighting" },
  { url: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&q=80&w=800", caption: "Industrial Cable Tray & Motor Feeder Assembly" },
  { url: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80&w=800", caption: "Residential Smart Distribution Board Dressing" },
  { url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800", caption: "Turnkey Luxury Villa Electrification & Cove Lights" },
  { url: "/images/project-jain-sadguru-team.jpg", caption: "Site execution team — Jain Sadguru Image Capital Park, Madhapur, Hyderabad" },
  { url: "/images/field-panel-termination.jpg", caption: "Schneider MCB distribution board — phase-wise dressing & terminations" },
  { url: "/images/field-wiring-labelling.jpg", caption: "FRLS circuit labelling (R6 — Maid Room) for maintainable handover" }
];

const Projects = () => {
  return (
    <>
      {/* ============================== PAGE HEADER ============================== */}
      <section className="relative pt-32 sm:pt-40 pb-10 sm:pb-14 border-b border-border bg-subtle">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none grid-copper grid-copper-coarse" aria-hidden="true" />
        <div className="container-custom">
          <ScrollReveal variant="fade-up">
            <h1 className="font-display font-bold text-3xl sm:text-5xl text-on-surface mt-4 max-w-3xl">
              Executed projects &amp; field gallery
            </h1>
            <p className="mt-4 text-base sm:text-lg text-muted leading-relaxed max-w-2xl">
              Executed electrical turnkey installations across Patancheru, Sangareddy, and greater Hyderabad.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================== COMMISSION RECORDS ============================== */}
      <section className="section-padding bg-surface">
        <div className="container-custom">
          <div className="space-y-6">
            {projects.map((project, idx) => (
              <ScrollReveal key={project.id} variant="fade-up" delay={Math.min(idx * 0.08, 0.3)}>
                <article className="border border-border rounded-md bg-surface overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-12">
                    {/* Site photograph — pinned to the card so a portrait source can't inflate the row (Gate 44d) */}
                    <div className="md:col-span-5 min-w-0 bg-panel-chassis md:relative">
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        className="w-full h-56 md:absolute md:inset-0 md:w-full md:h-full object-cover"
                      />
                    </div>

                    {/* Spec sheet — floor height keeps every dossier card on one visual rhythm */}
                    <div className="md:col-span-7 min-w-0 p-6 sm:p-8 md:min-h-[440px]">
                      <span className="inline-block px-2.5 py-1 rounded-sm bg-tertiary-light text-tertiary font-mono text-[11px] whitespace-nowrap">
                        {project.category}
                      </span>
                      <h3 className="font-display font-bold text-xl text-on-surface mt-3">
                        {project.title}
                      </h3>
                      <p className="text-[13px] text-muted mt-1">{project.client}</p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border border border-border rounded-sm overflow-hidden mt-5">
                        <div className="bg-surface p-3">
                          <span className="label-tech">Sector</span>
                          <p className="text-[13px] text-on-surface mt-1.5">{project.category}</p>
                        </div>
                        <div className="bg-surface p-3">
                          <span className="label-tech">Location</span>
                          <p className="text-[13px] text-on-surface mt-1.5">{project.location}</p>
                        </div>
                        <div className="bg-surface p-3">
                          <span className="label-tech">Installed systems</span>
                          <p className="text-[13px] text-on-surface mt-1.5">{project.services}</p>
                        </div>
                        <div className="bg-surface p-3">
                          <span className="label-tech">Commissioning window</span>
                          <p className="font-mono tabular-data text-[13px] text-on-surface mt-1.5">{project.duration}</p>
                        </div>
                      </div>

                      <div className="border-t border-border mt-5 pt-4 flex items-center justify-between gap-4">
                        <span className="text-[13px] text-muted">
                          Reference available on request
                        </span>
                        <Link
                          to="/contact"
                          className="font-sans text-[13px] font-semibold text-primary hover:underline underline-offset-4 whitespace-nowrap"
                        >
                          Discuss a similar scope
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================== FIELD GALLERY ============================== */}
      <section className="bg-neutral border-y border-border">
        <div className="container-custom section-padding">
          <ScrollReveal variant="fade-up">
            <div className="max-w-2xl">
              <h2 className="font-display font-bold text-2xl sm:text-4xl text-on-surface mt-4">
                Field craftsmanship in action
              </h2>
              <p className="text-base text-muted leading-relaxed mt-4">
                A glimpse into our neat conduit routing, precise panel terminations, and clean laser-aligned finishes.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-10 sm:mt-12">
            {galleryImages.map((item, idx) => (
              <ScrollReveal key={idx} variant="zoom-in" delay={Math.min(idx * 0.05, 0.3)}>
                <figure className="min-w-0 group">
                  <div className="border border-border rounded-sm overflow-hidden bg-panel-chassis transition-[border-color] duration-200 group-hover:border-primary">
                    <img
                      src={item.url}
                      alt={item.caption}
                      loading="lazy"
                      className="h-56 sm:h-64 w-full object-cover"
                    />
                  </div>
                  <figcaption className="bg-surface mt-2 p-3">
                    <p className="text-[13px] text-muted leading-snug">{item.caption}</p>
                  </figcaption>
                </figure>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================== CLOSING STRIP ============================== */}
      <section className="bg-panel-chassis py-14">
        <div className="container-custom">
          <ScrollReveal variant="fade-up">
            <div className="max-w-2xl">
              <h2 className="font-display font-bold text-2xl sm:text-4xl text-surface">
                Your site could be dossier number seven
              </h2>
              <Link
                to="/contact"
                className="inline-flex items-center bg-primary hover:bg-primary-hover text-surface font-sans font-semibold text-sm px-5 py-2.5 rounded-sm whitespace-nowrap transition-colors duration-150 mt-6"
              >
                Request a site inspection
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
  </>
  );
};

export default Projects;
