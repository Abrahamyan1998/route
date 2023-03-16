import React from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.scss';

export default function Nav() {
  return (
    <nav>
        <ul>
        <li><NavLink to="/"></NavLink></li>

            <li><NavLink to="/Home">Home</NavLink></li>
            <li><NavLink to="/Cart">Cart</NavLink></li>
            <li><NavLink to="/Login">Login</NavLink></li>
            <li><NavLink to="/Register">Register</NavLink></li>

        </ul>
    </nav>
  )
}
