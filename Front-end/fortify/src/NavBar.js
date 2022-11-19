import React from 'react'
import logo from './images/logo.png'
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <img src={logo} alt="" class="center"/>
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
        <li>
          <Link to="/signin">Sign In</Link>
        </li>
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
