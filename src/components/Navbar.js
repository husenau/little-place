import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-brand">My Family Day Care</div>
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;