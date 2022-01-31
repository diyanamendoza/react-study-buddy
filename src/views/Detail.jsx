import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { rSlideVariants } from '../variants'
import styles from '../App.css'
import { data } from '../data/data'
import { getHookData } from '../services/gethooks'

export default function Detail() {
  const { subject } = useParams()
  const [content, setContent] = useState('')
  const [source, setSource] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getContent = async () => {
      console.log(subject)
      const [entry] = data.filter((subj) => subj.subject === subject)

      switch (entry.category) {
        case 'hooks':
          const hooksArray = await getHookData()
          const [hook] = hooksArray.filter((hook) => hook.title === subject)
          setSource(hook.source)
          setContent(hook.explanation)
          setLoading(false)
          break
        case 'other':
          setContent(entry.explanation)
          setSource(entry.source)
          setLoading(false)
          break
        default:
          console.log(`huh?`)
      }
    }
    getContent()
  }, [])

  const backbutton = (
    <motion.svg
      whileHover={{ scale: 1.1 }}
      whileFocus={{ scale: 1.1 }}
      xmlns="http://www.w3.org/2000/svg"
      className={styles.back}
      fill="none"
      viewBox="0 0 24 24"
      stroke="rgb(225, 218, 218)"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
      />
    </motion.svg>
  )

  return (
    <motion.main variants={rSlideVariants} initial="initial" animate="animate">
      <motion.article initial={{ opacity: 0 }} animate={{ opacity: [0, 1] }}>
        <h2>{subject}</h2>
        {loading ? <p>Loading definition...</p> : <p>{content}</p>}
        <a href={source} alt={`source for ${subject}`}>
          Source
        </a>
        <Link to="/">{backbutton}</Link>
      </motion.article>
    </motion.main>
  )
}
