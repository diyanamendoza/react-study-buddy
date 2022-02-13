import { Link } from 'react-router-dom'
import { data } from '../data/data'
import styles from '../App.css'
import { v4 as uuidv4 } from 'uuid'
import { motion } from 'framer-motion'
import { rSlideVariants } from '../variants'
import { useState } from 'react'

export default function SubjectList() {
  const [list, setList] = useState(filterResults ? filterResults : data)
  const [filterResults, setFilterResults] = useState('')
  const [filterInput, setFilterInput] = useState('')

  const filterItems = (query) => {
    console.log(query)
    setFilterInput(query.toLowerCase())
    const results = data.filter((item) => {
      const name = item.subject.toLowerCase()
      return name.includes(query)
    })
    console.log(results)
    setFilterResults(results)
    setList(results)
  }

  // const handleClear = () => {
  //   setFilterInput('')
  //   setFilterResults('')
  //   setList(data)
  // }

  return (
    <>
      <form>
        <label htmlFor="filter-items"></label>
        <input
          id="filter-items"
          type="text"
          name="filter-items"
          value={filterInput}
          autoComplete="off"
          onChange={({ target }) => filterItems(target.value)}
        />
        {/* <button
          type="button"
          id="btn"
          className="btn-filter"
          onClick={handleClear}
        >
          CLEAR
        </button> */}
      </form>
      <motion.nav
        variants={rSlideVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {list.map((entry) => {
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
    </>
  )
}
