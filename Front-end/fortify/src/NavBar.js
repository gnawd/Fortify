import React from 'react'
import logo from './images/logo.png'
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <img src={logo} alt=""/>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/volunteers">Volunteers</Link>
        </li>
        <li>
          <Link to="/organisations">Organisations</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
