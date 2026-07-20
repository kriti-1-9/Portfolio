import { motion } from 'framer-motion'
import { achievements, certifications } from '../data/portfolio'
import SectionHeading from './SectionHeading'

export default function AchievementsSection() {
  return (
    <motion.section
      id="achievements"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="glass-panel mb-8 rounded-[2rem] p-8"
    >
      <SectionHeading
        eyebrow="Achievements"
        title="Recognition that reflects technical depth and problem solving"
        description="My work has been recognised across competitive programming, cybersecurity, and practical system-building challenges."
      />

      <div className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/40 p-6">
          <h3 className="text-lg font-semibold text-slate-50">Highlights</h3>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-400">
            {achievements.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-cyan-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/40 p-6">
          <h3 className="text-lg font-semibold text-slate-50">Certifications</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {certifications.map((item) => (
              <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-slate-300">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  )
}
