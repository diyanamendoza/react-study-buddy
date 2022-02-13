import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header>
      <Link to="/">
        <h1>React-verse</h1>
      </Link>
      <p>/* a site (in-progress) by and for the React nerds among us */</p>
      {/* <Link to="/about">
        <h3>About</h3>
      </Link> */}
    </header>
  )
}
