import { motion } from 'framer-motion'
import { projects } from '../data/portfolio'
import SectionHeading from './SectionHeading'

export default function ProjectsSection() {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="glass-panel mb-8 rounded-[2rem] p-8"
    >
      <SectionHeading
        eyebrow="Projects"
        title="Selected work spanning backend engineering and security"
        description="These projects reflect a mix of system design, secure APIs, encryption, and practical threat detection."
      />

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {projects.map((project) => (
          <div key={project.title} className="rounded-[1.5rem] border border-white/10 bg-slate-950/40 p-6">
            <h3 className="text-xl font-semibold text-slate-50">{project.title}</h3>
            <p className="mt-2 text-sm font-medium uppercase tracking-[0.3em] text-cyan-300">{project.subtitle}</p>
            <p className="mt-4 text-sm leading-7 text-slate-400">{project.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300">
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
