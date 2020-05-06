import React from 'react';
import { NavLink } from "react-router-dom"

export const Navbar = () => (
  <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
    <div className="navbar-brand">
      Github Search
    </div>
    <ul className="navbar-nav">
      <li>
        <NavLink exact to='/' active className="nav-link">Home</NavLink>
      </li>
      <li>
        <NavLink to='/about' className="nav-link">Info</NavLink>
      </li>
    </ul>
  </nav>
)