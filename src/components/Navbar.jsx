import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-brand">My Family Day Care</div>
      <ul>
        <li key="about"><a href="#about">About</a></li>,
        <li key="services"><a href="#services">Services</a></li>,
        <li key="contact"><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;