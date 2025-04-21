import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; // Component-specific styles

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-column">
              <h3>Cyberpark IT</h3>
              <p>Your trusted partner for IT Support and Cloud Services. We help businesses optimize their technology infrastructure.</p>
              <div className="social-links">
                <a href="https://www.linkedin.com/company/cloudonwheels" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i>
                </a>
                
              </div>
            </div>
            
            <div className="footer-column">
              <h4>Quick Links</h4>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>Services</h4>
              <ul>
                <li><Link to="/services">IT Support</Link></li>
                <li><Link to="/services">Cloud Services</Link></li>
                <li><Link to="/services">Cybersecurity</Link></li>
                <li><Link to="/services">Managed IT</Link></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>Contact Us</h4>
              <address>
                <p><i className="fas fa-map-marker-alt"></i> 123 Tech Street, IT City</p>
                <p><i className="fas fa-phone"></i> +1 (555) 123-4567</p>
                <p><i className="fas fa-envelope"></i> support@cyberparkit.com</p>
              </address>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {currentYear} Cyberpark IT. All Rights Reserved.</p>
          <div className="footer-links">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 