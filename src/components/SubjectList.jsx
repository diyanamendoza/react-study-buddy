import { Link } from 'react-router-dom'
import { data } from '../data/data'
import styles from '../App.css'
import { v4 as uuidv4 } from 'uuid'
import { motion } from 'framer-motion'
import { rSlideVariants } from '../variants'

export default function SubjectList() {
  return (
    <motion.nav
      variants={rSlideVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {data.map((entry) => {
        let letterArr = Array.from(entry.subject)
        return (
          <Link to={`/${entry.subject}`} key={uuidv4()}>
            <div className={styles.subjcontainer}>
              {letterArr.map((letter) => {
                return (
                  <motion.div
                    whileHover={{ scale: 1.5 }}
                    transition={{
                      type: 'tween',
                      ease: 'easeIn',
                      duration: 0.3,
                    }}
                    className={styles.letter}
                    key={uuidv4()}
                  >
                    {letter}
                  </motion.div>
                )
              })}
            </div>
          </Link>
        )
      })}
    </motion.nav>
  )
}
