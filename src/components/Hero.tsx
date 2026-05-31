import { motion } from 'framer-motion';
import { ArrowDown, BriefcaseBusiness, Code2, Download, Sparkles } from 'lucide-react';
import heroImage from '../assets/engineer-workspace.png';
import { focusCards, owner } from '../data/portfolio';

export function Hero(): React.ReactElement {
  return (
    <section id="hero" className="section-shell flex min-h-screen items-center pt-28">
      <div className="grid w-full items-center gap-12 py-12 lg:grid-cols-[1.02fr_0.98fr] lg:py-20">
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-2 text-sm font-medium text-emerald-200">
            <Sparkles size={16} />
            Backend engineering meets applied AI
          </div>
          <h1 className="text-balance text-4xl font-semibold leading-[1.02] text-white sm:text-6xl lg:text-7xl">
            {owner.name}
            <span className="gradient-text block">
              builds scalable <span className="block sm:inline">software.</span>
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-300 sm:text-xl">
            {owner.role} focused on {owner.focus.toLowerCase()}. I turn backend architecture,
            data workflows, and AI capabilities into clean product experiences.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-emerald-200"
            >
              View Projects
              <ArrowDown size={18} />
            </a>
            <a
              href={owner.resumeHref}
              download
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/12 bg-white/[0.05] px-5 py-3 text-sm font-semibold text-white transition hover:border-white/24 hover:bg-white/[0.09]"
            >
              <Download size={18} />
              Download Resume
            </a>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={owner.socials.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg px-1 py-2 text-sm font-semibold text-zinc-300 transition hover:text-white"
            >
              <Code2 size={18} />
              GitHub
            </a>
            <a
              href={owner.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg px-1 py-2 text-sm font-semibold text-zinc-300 transition hover:text-white"
            >
              <BriefcaseBusiness size={18} />
              LinkedIn
            </a>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {focusCards.map((card) => (
              <div key={card.label} className="glass-panel-soft rounded-lg p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">{card.label}</p>
                <p className="mt-2 text-sm font-medium leading-6 text-zinc-200">{card.value}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="relative"
          initial={false}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.12, ease: 'easeOut' }}
        >
          <div className="premium-ring relative overflow-hidden rounded-lg border border-white/12 bg-zinc-950/70">
            <img
              src={heroImage}
              alt="Dark premium software engineering workspace with code panels and AI system visuals"
              className="aspect-[4/3] h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/72 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 grid gap-3 sm:grid-cols-3">
              {['API', 'AI', 'Scale'].map((label) => (
                <div key={label} className="rounded-lg border border-white/12 bg-black/38 px-3 py-3 backdrop-blur-xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-200">{label}</p>
                  <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-emerald-300 to-cyan-300"
                      initial={{ width: '22%' }}
                      animate={{ width: label === 'API' ? '88%' : label === 'AI' ? '78%' : '84%' }}
                      transition={{ duration: 1.4, delay: 0.6, ease: 'easeOut' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
