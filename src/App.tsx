import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import ScrollProgress from './components/ScrollProgress/ScrollProgress'
import AboutSection from './components/AboutSection'
import SkillsSection from './components/SkillsSection'
import ProjectsSection from './components/ProjectsSection'
import AchievementsSection from './components/AchievementsSection'
import ContactSection from './components/ContactSection'

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
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <AchievementsSection />
        <ContactSection />
      </main>
    </div>
  )
}

export default App
