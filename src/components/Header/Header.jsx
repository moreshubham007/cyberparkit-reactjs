import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'; // Component-specific styles
// import logo from '../../assets/logo.png'; // Uncomment and add your logo

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const nav = document.querySelector('.main-nav');
      const toggle = document.querySelector('.mobile-menu-toggle');
      
      if (mobileMenuOpen && nav && toggle && 
          !nav.contains(event.target) && 
          !toggle.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [mobileMenuOpen]);

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo">
          {/* <img src={logo} alt="Cyberpark IT Logo" /> */}
          <Link to="/">Cyberpark IT</Link> {/* Placeholder text logo */}
        </div>
        
        <div className={`mobile-menu-toggle ${mobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        
        <nav className={`main-nav ${mobileMenuOpen ? 'open' : ''}`}>
          <ul>
            <li><NavLink to="/" onClick={() => setMobileMenuOpen(false)}>Home</NavLink></li>
            <li><NavLink to="/about" onClick={() => setMobileMenuOpen(false)}>About Us</NavLink></li>
            <li><NavLink to="/services" onClick={() => setMobileMenuOpen(false)}>Services</NavLink></li>
            <li><NavLink to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</NavLink></li>
          </ul>
          <div className="nav-cta">
            <Link to="/contact" className="btn" onClick={() => setMobileMenuOpen(false)}>Get Started</Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header; 