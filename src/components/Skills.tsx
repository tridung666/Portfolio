import { motion } from 'framer-motion';
import { skillGroups, type SkillItem } from '../data/portfolio';
import { SectionHeading } from './SectionHeading';

function SkillLogo({ skill }: { skill: SkillItem }): React.ReactElement {
  const FallbackIcon = skill.fallbackIcon;

  return (
    <div
      className="grid size-10 shrink-0 place-items-center rounded-lg border bg-zinc-950/65"
      style={{
        borderColor: skill.brandColor ? `${skill.brandColor}55` : 'rgba(255, 255, 255, 0.12)',
        boxShadow: skill.brandColor ? `0 0 24px ${skill.brandColor}18` : undefined,
      }}
    >
      {skill.logoUrl ? (
        <img src={skill.logoUrl} alt={`${skill.name} logo`} className="size-5 object-contain" loading="lazy" />
      ) : FallbackIcon ? (
        <FallbackIcon size={20} color={skill.brandColor} />
      ) : null}
    </div>
  );
}

export function Skills(): React.ReactElement {
  return (
    <section id="skills" className="section-shell py-24">
      <SectionHeading
        eyebrow="Skills"
        title="A practical stack for backend-heavy AI products."
        description="The stack is intentionally focused: typed product interfaces, strong backend foundations, relational data, and deployable AI service patterns."
      />

      <div className="grid gap-5 md:grid-cols-2">
        {skillGroups.map((group, index) => {
          const Icon = group.icon;

          return (
            <motion.article
              key={group.title}
              className="glass-panel rounded-lg p-6 transition hover:border-emerald-300/28 md:p-7"
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.28 }}
              transition={{ duration: 0.52, delay: index * 0.06 }}
            >
              <div className="flex items-start gap-4">
                <div className="grid size-12 shrink-0 place-items-center rounded-lg border border-cyan-300/20 bg-cyan-300/10 text-cyan-200">
                  <Icon size={22} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{group.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-zinc-400">{group.description}</p>
                </div>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex min-h-14 items-center gap-3 rounded-lg border border-white/10 bg-white/[0.045] px-3 py-2.5 transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.07]"
                  >
                    <SkillLogo skill={skill} />
                    <span className="text-sm font-semibold leading-5 text-zinc-100">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}
