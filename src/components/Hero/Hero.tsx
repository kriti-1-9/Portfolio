import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FiArrowRight, FiGithub, FiLinkedin } from 'react-icons/fi'
import { heroStats, heroWords, profile } from '../../data/portfolio'

export default function Hero() {
  const [activeWord, setActiveWord] = useState(0)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveWord((current) => (current + 1) % heroWords.length)
    }, 1800)

    return () => window.clearInterval(interval)
  }, [])

  return (
    <section id="home" className="grid items-center gap-10 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="space-y-8"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-sm font-medium text-cyan-300">
          <span className="h-2.5 w-2.5 rounded-full bg-cyan-400" />
          Available for impactful product engineering roles
        </div>

        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-400">
            Portfolio • Developer • Security Enthusiast
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-slate-50 sm:text-5xl lg:text-7xl">
            {profile.name}
          </h1>
          <div className="flex flex-wrap items-center gap-3 text-xl font-medium text-slate-300 sm:text-2xl">
            <span>{profile.title}</span>
            <span className="text-cyan-400">•</span>
            <span className="text-cyan-300">Backend Developer</span>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-slate-400">
            {profile.subtitle}
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href="/resume.pdf"
            className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:-translate-y-0.5"
          >
            Download Resume <FiArrowRight />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 font-semibold text-slate-100 transition hover:-translate-y-0.5 hover:border-cyan-400/40"
          >
            <FiGithub /> GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3 font-semibold text-slate-100 transition hover:-translate-y-0.5 hover:border-cyan-400/40"
          >
            <FiLinkedin /> LinkedIn
          </a>
        </div>

        <div className="flex flex-wrap gap-3 pt-2">
          {heroWords.map((word, index) => (
            <motion.span
              key={word}
              animate={{ scale: index === activeWord ? 1.05 : 1, opacity: index === activeWord ? 1 : 0.75 }}
              transition={{ duration: 0.25 }}
              className={`rounded-full border px-3 py-1 text-sm font-medium ${
                index === activeWord
                  ? 'border-cyan-400/40 bg-cyan-400/15 text-cyan-300'
                  : 'border-white/10 bg-white/5 text-slate-400'
              }`}
            >
              {word}
            </motion.span>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 24 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
        className="glass-panel relative overflow-hidden p-6 sm:p-8"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),_transparent_40%)]" />
        <div className="relative space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
                Engineering Snapshot
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-slate-50">Security-first product engineering</h2>
            </div>
            <div className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-sm font-medium text-emerald-300">
              Online
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {heroStats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
                <p className="text-2xl font-semibold text-slate-50">{stat.value}</p>
                <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Current focus</p>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-cyan-400" /> Secure backend services and APIs
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-cyan-400" /> Threat detection and resilient architecture
              </li>
              <li className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-cyan-400" /> Performance, maintainability, and clean delivery
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
