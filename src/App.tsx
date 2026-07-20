import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import ScrollProgress from './components/ScrollProgress/ScrollProgress'

function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')

  useEffect(() => {
    const root = document.documentElement
    root.dataset.theme = theme
    root.style.colorScheme = theme
  }, [theme])

  return (
    <div className="min-h-screen bg-[color:var(--bg)] text-[color:var(--text)] transition-colors duration-300">
      <ScrollProgress />
      <Navbar theme={theme} onToggleTheme={() => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))} />

      <main className="mx-auto flex max-w-7xl flex-col px-4 py-6 sm:px-6 lg:px-8">
        <Hero />

        <motion.section
          id="about"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="glass-panel mb-8 mt-4 rounded-[2rem] p-8"
        >
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-slate-400">About</p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-50">Engineering with clarity, rigor, and curiosity</h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-400">
                I’m a software engineer driven by secure systems, clean architecture, and the discipline to ship well-crafted products that scale.
              </p>
            </div>
            <div className="space-y-4 rounded-[1.5rem] border border-white/10 bg-slate-950/40 p-6">
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-2xl font-semibold text-slate-50">79.14%</p>
                  <p className="mt-1 text-sm text-slate-400">Academic Performance</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-2xl font-semibold text-slate-50">450+</p>
                  <p className="mt-1 text-sm text-slate-400">DSA Problems</p>
                </div>
              </div>
              <ul className="space-y-3 text-sm text-slate-300">
                <li>• Backend engineering with a security-first mindset</li>
                <li>• Networking, operating systems, and distributed systems fundamentals</li>
                <li>• Problem solving across APIs, databases, and infrastructure</li>
              </ul>
            </div>
          </div>
        </motion.section>
      </main>
    </div>
  )
}

export default App
