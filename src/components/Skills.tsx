import { motion } from 'framer-motion';
import { skillGroups } from '../data/portfolio';
import { SectionHeading } from './SectionHeading';

export function Skills(): React.ReactElement {
  return (
    <section id="skills" className="section-shell py-24">
      <SectionHeading
        eyebrow="Skills"
        title="A practical stack for backend-heavy AI products."
        description="The stack is intentionally focused: typed product interfaces, strong backend foundations, relational data, and deployable AI service patterns."
      />

      <div className="grid gap-5 md:grid-cols-2">
        {skillGroups.map((group, index) => {
          const Icon = group.icon;

          return (
            <motion.article
              key={group.title}
              className="glass-panel rounded-lg p-6 transition hover:border-emerald-300/28 md:p-7"
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.28 }}
              transition={{ duration: 0.52, delay: index * 0.06 }}
            >
              <div className="flex items-start gap-4">
                <div className="grid size-12 shrink-0 place-items-center rounded-lg border border-cyan-300/20 bg-cyan-300/10 text-cyan-200">
                  <Icon size={22} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{group.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-zinc-400">{group.description}</p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-white/[0.055] px-3 py-1.5 text-sm font-medium text-zinc-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
