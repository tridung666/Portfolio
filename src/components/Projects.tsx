import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../data/portfolio';
import { SectionHeading } from './SectionHeading';

export function Projects(): React.ReactElement {
  return (
    <section id="projects" className="section-shell py-24">
      <SectionHeading
        eyebrow="Featured Projects"
        title="Projects that show backend design, AI integration, and product thinking."
        description="Each project is framed around the engineering choices recruiters care about: architecture, authentication, real-time behavior, data, and operational usefulness."
      />

      <div className="grid gap-5 lg:grid-cols-3">
        {projects.map((project, index) => {
          const Icon = project.icon;

          return (
            <motion.article
              key={project.title}
              className="group glass-panel relative overflow-hidden rounded-lg p-6"
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
            >
              <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${project.accent}`} />
              <div className="flex items-start justify-between gap-4">
                <div className="grid size-12 place-items-center rounded-lg border border-white/12 bg-white/[0.06] text-white">
                  <Icon size={22} />
                </div>
                <a
                  href="#contact"
                  className="grid size-10 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-zinc-300 transition group-hover:border-emerald-300/30 group-hover:text-white"
                  aria-label={`Contact about ${project.title}`}
                >
                  <ArrowUpRight size={18} />
                </a>
              </div>

              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-emerald-200">
                {project.subtitle}
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-white">{project.title}</h3>
              <p className="mt-4 text-sm leading-7 text-zinc-400">{project.description}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-black/24 px-3 py-1.5 text-xs font-medium text-zinc-300"
                  >
                    {item}
                  </span>
                ))}
              </div>

              <ul className="mt-6 space-y-3">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3 text-sm leading-6 text-zinc-300">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-emerald-300" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
