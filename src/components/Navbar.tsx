import { AnimatePresence, motion } from 'framer-motion';
import { BriefcaseBusiness, Code2, Download, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { navItems, owner } from '../data/portfolio';

export function Navbar(): React.ReactElement {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = (): void => setIsOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#050505]/72 backdrop-blur-2xl">
      <nav className="section-shell flex h-20 items-center justify-between">
        <a href="#hero" className="group flex items-center gap-3" onClick={closeMenu} aria-label="Go to hero section">
          <span className="grid size-10 place-items-center rounded-lg border border-white/12 bg-white/[0.06] text-sm font-bold text-white shadow-2xl shadow-black/30">
            ND
          </span>
          <span className="hidden min-[410px]:block">
            <span className="block text-sm font-semibold text-white">{owner.name}</span>
            <span className="block text-xs text-zinc-400">Backend + AI</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-zinc-300 transition hover:bg-white/[0.06] hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={owner.socials.github}
            target="_blank"
            rel="noreferrer"
            className="grid size-10 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-zinc-300 transition hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
            aria-label="Open GitHub profile"
          >
            <Code2 size={18} />
          </a>
          <a
            href={owner.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="grid size-10 place-items-center rounded-lg border border-white/10 bg-white/[0.04] text-zinc-300 transition hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
            aria-label="Open LinkedIn profile"
          >
            <BriefcaseBusiness size={18} />
          </a>
          <a
            href={owner.resumeHref}
            download
            className="ml-2 inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-zinc-950 transition hover:bg-emerald-200"
          >
            <Download size={17} />
            Resume
          </a>
        </div>

        <button
          type="button"
          className="grid size-11 place-items-center rounded-lg border border-white/10 bg-white/[0.05] text-white lg:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            className="section-shell pb-5 lg:hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <div className="glass-panel grid gap-1 rounded-lg p-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-md px-4 py-3 text-sm font-medium text-zinc-200 transition hover:bg-white/[0.07] hover:text-white"
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              ))}
              <div className="mt-2 grid grid-cols-2 gap-2 border-t border-white/10 pt-2">
                <a
                  href={owner.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-white/10 bg-white/[0.05] px-3 py-3 text-sm font-semibold text-white"
                >
                  <Code2 size={17} />
                  GitHub
                </a>
                <a
                  href={owner.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-white/10 bg-white/[0.05] px-3 py-3 text-sm font-semibold text-white"
                >
                  <BriefcaseBusiness size={17} />
                  LinkedIn
                </a>
              </div>
              <a
                href={owner.resumeHref}
                download
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-white px-4 py-3 text-sm font-semibold text-zinc-950"
              >
                <Download size={17} />
                Download Resume
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
