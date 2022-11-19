import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/volunteers">Volunteers</Link>
        </li>
        <li>
          <Link to="/organizations">Organisations</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
