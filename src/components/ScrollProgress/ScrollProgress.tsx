import { motion, useScroll, useSpring } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.4,
  })

  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-50 h-1 origin-left bg-gradient-to-r from-sky-400 via-cyan-400 to-blue-500"
      style={{ scaleX }}
    />
  )
}
