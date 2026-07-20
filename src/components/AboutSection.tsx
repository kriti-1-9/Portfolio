import { motion } from 'framer-motion'
import { aboutHighlights, aboutStats } from '../data/portfolio'
import SectionHeading from './SectionHeading'

export default function AboutSection() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="glass-panel mb-8 rounded-[2rem] p-8"
    >
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <SectionHeading
            eyebrow="About"
            title="Software engineer with a security-first mindset"
            description="I’m a final-year B.Tech Computer Science student specializing in Cyber Security, focused on secure backend engineering, quality software development, and practical problem solving."
          />
          <ul className="mt-6 space-y-3 text-lg leading-8 text-slate-400">
            {aboutHighlights.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-3 h-2.5 w-2.5 rounded-full bg-cyan-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4 rounded-[1.5rem] border border-white/10 bg-slate-950/40 p-6">
          <div className="grid gap-3 sm:grid-cols-2">
            {aboutStats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-2xl font-semibold text-slate-50">{stat.value}</p>
                <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Career focus</p>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              Seeking software engineering, QA automation, or security engineering roles where I can contribute from day one and grow within a strong engineering team.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
