import { motion } from 'framer-motion'

export default function About() {
  return (
    <motion.article initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <p>
        This site is a work in progress by{' '}
        <a href="https://github.com/diyanamendoza" alt="D Mendoza Github">
          D. Mendoza
        </a>
        .
      </p>
    </motion.article>
  )
}
