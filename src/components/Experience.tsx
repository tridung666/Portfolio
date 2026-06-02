import { motion } from 'framer-motion';
import { timeline } from '../data/portfolio';
import { SectionHeading } from './SectionHeading';

export function Experience(): React.ReactElement {
  return (
    <section id="experience" className="section-shell py-24">
      <SectionHeading
        eyebrow="Experience"
        title="Software engineering experience across HR systems and recruitment products."
        description="Concise work history focused on the systems built, production tools used, and measurable hiring impact."
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
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div className="flex gap-4">
                    <div className="grid size-16 shrink-0 place-items-center overflow-hidden rounded-lg border border-white/15 bg-white p-2">
                      <img src={item.logoUrl} alt={`${item.organization} logo`} className="max-h-full max-w-full object-contain" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">{item.period}</p>
                      <h3 className="mt-3 text-2xl font-semibold text-white">{item.title}</h3>
                      <p className="mt-1 text-sm font-medium uppercase tracking-[0.08em] text-zinc-400">{item.organization}</p>
                    </div>
                  </div>
                  {item.metrics ? (
                    <div className="flex flex-wrap gap-2 md:justify-end">
                      {item.metrics.map((metric) => (
                        <span
                          key={metric}
                          className="rounded-lg border border-emerald-300/25 bg-emerald-300/10 px-3 py-2 text-xs font-bold text-emerald-100"
                        >
                          {metric}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>
                <p className="mt-5 text-sm leading-7 text-zinc-300">{item.summary}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
