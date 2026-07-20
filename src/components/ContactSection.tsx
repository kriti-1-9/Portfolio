import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiPhone, FiSend } from 'react-icons/fi'
import { profile } from '../data/portfolio'
import SectionHeading from './SectionHeading'

export default function ContactSection() {
  const mailtoHref = `mailto:${profile.email}?subject=${encodeURIComponent('Opportunity / Collaboration')}&body=${encodeURIComponent('Hi Kriti,\n\nI came across your portfolio and would like to discuss an opportunity. Could we connect?\n\nRegards,')}`

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="glass-panel mb-8 rounded-[2rem] p-8"
    >
      <SectionHeading
        eyebrow="Contact"
        title="Let’s build meaningful products together"
        description="I’m open to opportunities in software engineering, QA automation, and security-focused roles."
      />

      <div className="mt-8 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/40 p-6">
          <div className="space-y-4 text-sm text-slate-300">
            <a href={`mailto:${profile.email}`} className="flex items-center gap-3 transition hover:text-cyan-300">
              <FiMail /> {profile.email}
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="flex items-center gap-3 transition hover:text-cyan-300">
              <FiGithub /> GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-3 transition hover:text-cyan-300">
              <FiLinkedin /> LinkedIn
            </a>
            <div className="flex items-center gap-3">
              <FiPhone /> {profile.phone}
            </div>
            <div className="flex items-center gap-3">
              <FiMapPin /> {profile.location}
            </div>
          </div>
        </div>

        <div className="rounded-[1.5rem] border border-white/10 bg-slate-950/40 p-6">
          <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Availability</p>
          <p className="mt-3 text-lg leading-8 text-slate-300">
            Open to internship and entry-level opportunities where I can contribute to secure software systems, quality engineering, and impactful products.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a
              href={mailtoHref}
              className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:-translate-y-0.5"
              aria-label="Email Kriti Dwivedi"
              title="Email Kriti"
            >
              Reach out <FiSend />
            </a>

            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}&su=${encodeURIComponent('Opportunity / Collaboration')}&body=${encodeURIComponent('Hi Kriti,\n\nI came across your portfolio and would like to discuss an opportunity. Could we connect?\n\nRegards,')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-100 transition hover:-translate-y-0.5"
              aria-label="Open Gmail compose"
              title="Open in Gmail"
            >
              Open in Gmail
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
