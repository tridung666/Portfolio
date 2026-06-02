import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { certificates } from '../data/portfolio';
import { SectionHeading } from './SectionHeading';

export function Certificates(): React.ReactElement {
  return (
    <section id="certificates" className="section-shell py-24">
      <SectionHeading
        eyebrow="Certificates"
        title="Language certifications for international communication."
        description="Demo certificate files are attached for now and can be replaced with the real certificate images later."
      />

      <div className="mx-auto grid max-w-4xl gap-5 md:grid-cols-2">
        {certificates.map((certificate, index) => {
          const Icon = certificate.icon;

          return (
            <motion.article
              key={certificate.title}
              className="glass-panel rounded-lg p-6 transition hover:border-emerald-300/28 md:p-7"
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.52, delay: index * 0.06 }}
            >
              <div className="flex items-start gap-4">
                <div className="grid size-12 shrink-0 place-items-center rounded-lg border border-emerald-300/20 bg-emerald-300/10 text-emerald-200">
                  <Icon size={22} />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">{certificate.issuer}</p>
                  <h3 className="mt-3 text-2xl font-semibold text-white">{certificate.title}</h3>
                  <p className="mt-2 text-base font-semibold text-zinc-200">{certificate.result}</p>
                </div>
              </div>

              <a
                href={certificate.downloadHref}
                download
                className="mt-6 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.055] px-4 py-2.5 text-sm font-semibold text-zinc-100 transition hover:border-emerald-300/35 hover:bg-emerald-300/10 hover:text-emerald-100"
              >
                <Download size={16} />
                Download demo certificate
              </a>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
