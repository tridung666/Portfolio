import { motion } from 'framer-motion';
import { principles } from '../data/portfolio';
import { SectionHeading } from './SectionHeading';

export function About(): React.ReactElement {
  return (
    <section id="about" className="section-shell py-24">
      <SectionHeading
        eyebrow="About"
        title="I build software where backend depth and product clarity meet."
        description="My work is centered on engineering fundamentals: clear APIs, reliable data models, readable systems, and AI features that serve real user workflows."
      />

      <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div
          className="glass-panel rounded-lg p-6 md:p-8"
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55 }}
        >
          <p className="text-lg leading-8 text-zinc-200">
            I am a software engineer and computer science student focused on backend engineering,
            AI applications, and scalable systems. I enjoy turning complex technical ideas into
            structured services, secure workflows, and interfaces that make the system easy to
            understand.
          </p>
          <p className="mt-5 text-base leading-8 text-zinc-400">
            My strongest work sits at the intersection of product logic and infrastructure:
            authentication, authorization, database-backed workflows, model integration, and
            dashboards that expose meaningful operational insight.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2">
          {principles.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                className="glass-panel-soft rounded-lg p-6"
                initial={false}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
              >
                <div className="mb-5 grid size-11 place-items-center rounded-lg border border-emerald-300/20 bg-emerald-300/10 text-emerald-200">
                  <Icon size={20} />
                </div>
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-400">{item.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
