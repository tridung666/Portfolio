import { motion } from 'framer-motion';
import { BookOpenCheck } from 'lucide-react';
import { education } from '../data/portfolio';
import { SectionHeading } from './SectionHeading';

export function Education(): React.ReactElement {
  const Icon = education.icon;

  return (
    <section id="education" className="section-shell py-24">
      <SectionHeading
        eyebrow="Education"
        title="Computer science foundations with a software engineering bias."
        description="The academic foundation supports the systems work: algorithms, databases, software design, AI fundamentals, and web architecture."
      />

      <motion.div
        className="glass-panel mx-auto grid max-w-5xl gap-8 rounded-lg p-6 md:grid-cols-[0.82fr_1.18fr] md:p-8"
        initial={false}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.55 }}
      >
        <div>
          <div className="mb-6 grid size-14 place-items-center rounded-lg border border-emerald-300/20 bg-emerald-300/10 text-emerald-200">
            <Icon size={26} />
          </div>
          <h3 className="text-2xl font-semibold text-white">{education.title}</h3>
          <p className="mt-3 text-base leading-7 text-zinc-400">{education.subtitle}</p>
        </div>

        <div>
          <div className="mb-5 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.22em] text-cyan-200">
            <BookOpenCheck size={18} />
            Relevant Study Areas
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {education.topics.map((topic) => (
              <div key={topic} className="rounded-lg border border-white/10 bg-white/[0.045] px-4 py-3 text-sm text-zinc-200">
                {topic}
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
