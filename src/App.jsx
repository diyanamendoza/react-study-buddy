import Home from './views/Home'
import About from './views/About'
import styles from './App.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Detail from './views/Detail'
import Header from './components/Header'
import Footer from './components/Footer'

export default function App() {
  const location = useLocation()

  return (
    <div className={styles.App}>
      <Header />

      <AnimatePresence exitBeforeEnter initial={true}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/:subject" element={<Detail />} />
        </Routes>
      </AnimatePresence>

      <Footer />
    </div>
  )
}
