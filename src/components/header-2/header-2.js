import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../resources/black_logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="header-navbar">
        <div className="header-navbar-brand">
            <div className='logo-div'>
                <div className='logo'>
                <a href="/">
                <img src={logo} alt="Logo" className='logoImage' />
                </a>
                </div>
            </div>
        </div>
      <input type="checkbox" id="navbar-toggle" className="navbar-toggle" checked={isOpen} onChange={toggleMenu} />
      <label htmlFor="navbar-toggle" className="navbar-toggle-label">&#9776;</label>
      <ul className={`navbar-menu ${isOpen ? 'open' : ''}`}>
        <li className="navbar-item"><a href="#" className="navbar-link">Home</a></li>
        <li className="navbar-item"><a href="#" className="navbar-link">About</a></li>
        <li className="navbar-item"><a href="#" className="navbar-link">Services</a></li>
        <li className="navbar-item"><a href="#" className="navbar-link">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
