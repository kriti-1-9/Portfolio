import { motion } from 'framer-motion'
import { FiDownload, FiGithub, FiLinkedin, FiMoon, FiSun } from 'react-icons/fi'
import { navLinks, profile } from '../../data/portfolio'

interface NavbarProps {
  theme: 'dark' | 'light'
  onToggleTheme: () => void
}

export default function Navbar({ theme, onToggleTheme }: NavbarProps) {
  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="sticky top-0 z-40 border-b border-white/10 bg-[color:var(--bg)]/70 backdrop-blur-2xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#home" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-400/10 text-sm font-semibold text-cyan-300">
            KD
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-300">
              {profile.name}
            </p>
            <p className="text-xs text-slate-400">Senior Software Engineer</p>
          </div>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-300 transition hover:text-cyan-300"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="https://drive.google.com/file/d/1SXXZesIglgJUYT2i7V4prg8ncatzsOaU/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-slate-200 transition hover:border-cyan-400/40 hover:bg-cyan-400/10 sm:inline-flex"
          >
            <FiDownload /> Resume
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="rounded-full border border-white/10 bg-white/5 p-2.5 text-slate-200 transition hover:-translate-y-0.5 hover:border-cyan-400/40 hover:text-cyan-300"
          >
            <FiGithub />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="rounded-full border border-white/10 bg-white/5 p-2.5 text-slate-200 transition hover:-translate-y-0.5 hover:border-cyan-400/40 hover:text-cyan-300"
          >
            <FiLinkedin />
          </a>
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label="Toggle color theme"
            className="rounded-full border border-white/10 bg-white/5 p-2.5 text-slate-200 transition hover:-translate-y-0.5 hover:border-cyan-400/40 hover:text-cyan-300"
          >
            {theme === 'dark' ? <FiSun /> : <FiMoon />}
          </button>
        </div>
      </div>
    </motion.header>
  )
}
