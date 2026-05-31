import { motion } from 'framer-motion';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps): React.ReactElement {
  return (
    <motion.div
      className="mx-auto mb-10 max-w-3xl text-center md:mb-14"
      initial={false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
    >
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-emerald-300">{eyebrow}</p>
      <h2 className="text-balance text-3xl font-semibold text-white md:text-5xl">{title}</h2>
      {description ? (
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-zinc-300 md:text-lg">{description}</p>
      ) : null}
    </motion.div>
  );
}
