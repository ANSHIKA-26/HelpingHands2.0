import React from 'react';
import './Navbar.css'; // Create this file to add styles specific to Navbar

const Navbar = () => {
  return (
    <header className="navbarContainer">
      <span className="logo">Helping hands</span>
      <nav className="navbar">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact-us-footer">Contact Us</a>
        <div id="google_translate_element"></div>
      </nav>
      <button className="btn btn-primary" onClick={() => window.location.href='green.html'}>
        Register
      </button>
    </header>
  );
};

export default Navbar;
