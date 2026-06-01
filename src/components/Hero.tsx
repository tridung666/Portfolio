import { motion } from 'framer-motion';
import { ArrowDown, Download, Sparkles } from 'lucide-react';
import heroImage from '../assets/mypicture.png';
import { focusCards, owner } from '../data/portfolio';
import { GitHubIcon, LinkedInIcon } from './BrandIcons';

export function Hero(): React.ReactElement {
  return (
    <section id="hero" className="section-shell flex min-h-screen items-center pt-28">
      <div className="grid w-full items-center gap-10 py-12 lg:grid-cols-[0.95fr_1.05fr] lg:py-20">
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-2 text-sm font-medium text-emerald-200">
            <Sparkles size={16} />
            Backend engineering meets applied AI
          </div>
          <h1 className="text-balance text-5xl font-semibold leading-[0.98] text-white sm:text-7xl lg:text-[5.7rem] xl:text-[6.5rem]">
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
              <GitHubIcon size={18} />
              GitHub
            </a>
            <a
              href={owner.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg px-1 py-2 text-sm font-semibold text-zinc-300 transition hover:text-white"
            >
              <LinkedInIcon className="text-[#0a66c2]" size={18} />
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
          <img
            src={heroImage}
            alt={`${owner.name} illustrated portrait`}
            className="mx-auto w-full max-w-[620px] object-contain drop-shadow-[0_28px_70px_rgba(0,0,0,0.58)] sm:max-w-[760px] lg:w-[118%] lg:max-w-none xl:w-[128%]"
          />
        </motion.div>
      </div>
    </section>
  );
}
