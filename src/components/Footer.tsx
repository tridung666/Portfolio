import { owner } from '../data/portfolio';
import { GitHubIcon, LinkedInIcon } from './BrandIcons';

export function Footer(): React.ReactElement {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="section-shell flex flex-col gap-4 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {owner.name}. Built with React, Vite, TypeScript, and Tailwind CSS.</p>
        <div className="flex items-center gap-3">
          <a
            href={owner.socials.github}
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-white"
            aria-label="Open GitHub profile"
          >
            <GitHubIcon size={18} />
          </a>
          <a
            href={owner.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-white"
            aria-label="Open LinkedIn profile"
          >
            <LinkedInIcon className="text-[#0a66c2]" size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
