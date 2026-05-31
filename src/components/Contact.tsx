import { motion } from 'framer-motion';
import { BriefcaseBusiness, Code2, Mail, MapPin, Send } from 'lucide-react';
import { FormEvent, useState } from 'react';
import { owner } from '../data/portfolio';
import { SectionHeading } from './SectionHeading';

export function Contact(): React.ReactElement {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section-shell py-24">
      <SectionHeading
        eyebrow="Contact"
        title="Let’s talk about backend roles, AI products, and scalable systems."
        description="Use the form UI for a quick note, or jump straight to GitHub and LinkedIn. The form is frontend-only and ready to connect to an email/API service."
      />

      <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
        <motion.div
          className="glass-panel rounded-lg p-6 md:p-8"
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.52 }}
        >
          <h3 className="text-2xl font-semibold text-white">Availability</h3>
          <p className="mt-4 text-sm leading-7 text-zinc-400">{owner.location}</p>

          <div className="mt-8 grid gap-3">
            <a
              href="mailto:hello@example.com"
              className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.045] px-4 py-3 text-sm font-medium text-zinc-200 transition hover:bg-white/[0.08] hover:text-white"
            >
              <Mail size={18} className="text-emerald-200" />
              hello@example.com
            </a>
            <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.045] px-4 py-3 text-sm font-medium text-zinc-200">
              <MapPin size={18} className="text-cyan-200" />
              Remote-friendly collaboration
            </div>
            <a
              href={owner.socials.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.045] px-4 py-3 text-sm font-medium text-zinc-200 transition hover:bg-white/[0.08] hover:text-white"
            >
              <Code2 size={18} className="text-zinc-100" />
              GitHub profile
            </a>
            <a
              href={owner.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[0.045] px-4 py-3 text-sm font-medium text-zinc-200 transition hover:bg-white/[0.08] hover:text-white"
            >
              <BriefcaseBusiness size={18} className="text-sky-200" />
              LinkedIn profile
            </a>
          </div>
        </motion.div>

        <motion.form
          className="glass-panel rounded-lg p-6 md:p-8"
          onSubmit={handleSubmit}
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.52, delay: 0.08 }}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-medium text-zinc-300">
              Name
              <input
                name="name"
                type="text"
                required
                placeholder="Your name"
                className="rounded-lg border border-white/10 bg-black/28 px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-emerald-300/50 focus:bg-black/38"
              />
            </label>
            <label className="grid gap-2 text-sm font-medium text-zinc-300">
              Email
              <input
                name="email"
                type="email"
                required
                placeholder="you@company.com"
                className="rounded-lg border border-white/10 bg-black/28 px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-emerald-300/50 focus:bg-black/38"
              />
            </label>
          </div>

          <label className="mt-4 grid gap-2 text-sm font-medium text-zinc-300">
            Message
            <textarea
              name="message"
              required
              rows={6}
              placeholder="Tell me about the role, project, or collaboration."
              className="resize-none rounded-lg border border-white/10 bg-black/28 px-4 py-3 text-white outline-none transition placeholder:text-zinc-600 focus:border-emerald-300/50 focus:bg-black/38"
            />
          </label>

          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-zinc-500">
              {submitted ? 'Message captured in the UI. Connect this form to your backend when ready.' : 'Frontend-only contact UI.'}
            </p>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-emerald-200"
            >
              <Send size={17} />
              Send Message
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
