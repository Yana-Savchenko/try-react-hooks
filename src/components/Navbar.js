import React from 'react';

export const Navbar = () => (
  <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
    <div className="navbar-brand">
      Github Search
    </div>
    <ul className="navbar-nav">
      <li>
        <a href='/' className="nav-link">Home</a>
      </li>
      <li>
        <a href='/info' className="nav-link">Info</a>
      </li>
    </ul>
  </nav>
)