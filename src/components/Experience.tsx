import { motion } from 'framer-motion';
import { timeline } from '../data/portfolio';
import { SectionHeading } from './SectionHeading';

export function Experience(): React.ReactElement {
  return (
    <section id="experience" className="section-shell py-24">
      <SectionHeading
        eyebrow="Experience"
        title="A timeline built around project ownership and engineering maturity."
        description="The experience section is written for recruiters to understand what I can own: backend services, AI workflows, secure product flows, and typed interfaces."
      />

      <div className="relative mx-auto max-w-4xl">
        <div className="absolute left-5 top-0 hidden h-full w-px bg-gradient-to-b from-emerald-300 via-white/20 to-transparent md:block" />
        <div className="grid gap-5">
          {timeline.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                className="glass-panel relative rounded-lg p-6 md:ml-14 md:p-7"
                initial={false}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.52, delay: index * 0.06 }}
              >
                <div className="absolute -left-[4.15rem] top-7 hidden size-11 place-items-center rounded-lg border border-emerald-300/30 bg-[#050505] text-emerald-200 md:grid">
                  <Icon size={20} />
                </div>
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">{item.period}</p>
                    <h3 className="mt-3 text-2xl font-semibold text-white">{item.title}</h3>
                    <p className="mt-1 text-sm font-medium text-zinc-400">{item.organization}</p>
                  </div>
                </div>
                <p className="mt-5 text-sm leading-7 text-zinc-300">{item.description}</p>
                <ul className="mt-5 grid gap-3">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm leading-6 text-zinc-400">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-cyan-300" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
