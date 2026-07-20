import { motion } from 'framer-motion'
import { skills } from '../data/portfolio'
import SectionHeading from './SectionHeading'

const skillGroups = [
  { title: 'Languages', items: skills.languages },
  { title: 'Backend & APIs', items: skills.backend },
  { title: 'Testing & QA', items: skills.testing },
  { title: 'Security', items: skills.security },
  { title: 'Core CS', items: skills.core },
]

export default function SkillsSection() {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="glass-panel mb-8 rounded-[2rem] p-8"
    >
      <SectionHeading
        eyebrow="Skills"
        title="A blend of engineering depth and security awareness"
        description="From backend systems and APIs to testing and penetration workflows, these are the areas I’ve built strongest through hands-on work."
      />

      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {skillGroups.map((group) => (
          <div key={group.title} className="rounded-[1.4rem] border border-white/10 bg-slate-950/40 p-5">
            <h3 className="text-lg font-semibold text-slate-50">{group.title}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span key={item} className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-sm text-cyan-200">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  )
}
