import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Optional: Page-specific styles

function HomePage() {
  useEffect(() => {
    // Simple animation for elements with fade-in class
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);
    
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(element => {
      observer.observe(element);
    });
    
    return () => {
      fadeElements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="fade-in">IT & Cloud Solutions for Modern Businesses</h1>
            <p className="hero-subtitle fade-in">Empowering your business with reliable, scalable, and secure IT infrastructure</p>
            <div className="hero-buttons fade-in">
              <Link to="/contact" className="btn">Get Started</Link>
              <Link to="/services" className="btn btn-outline">Explore Services</Link>
            </div>
          </div>
          <div className="hero-image fade-in">
            {/* Replace with your actual hero image */}
            <div className="placeholder-image">
              <div className="animated-element"></div>
              <div className="animated-element"></div>
              <div className="animated-element"></div>
            </div>
          </div>
        </div>
        <div className="hero-shape"></div>
      </section>

      {/* Services Section */}
      <section className="services-section section">
        <div className="container">
          <div className="section-header fade-in">
            <h2>Our Services</h2>
            <p>Comprehensive IT solutions tailored to your business needs</p>
          </div>
          
          <div className="services-grid">
            <div className="service-card fade-in">
              <div className="service-icon">
                <i className="fas fa-server"></i>
              </div>
              <h3>IT Support</h3>
              <p>24/7 technical support, maintenance, and monitoring to keep your systems running smoothly.</p>
              <Link to="/services" className="service-link">Learn More →</Link>
            </div>
            
            <div className="service-card fade-in">
              <div className="service-icon">
                <i className="fas fa-cloud"></i>
              </div>
              <h3>Cloud Services</h3>
              <p>Migration, management, and optimization of cloud infrastructure on AWS, Azure, and GCP.</p>
              <Link to="/services" className="service-link">Learn More →</Link>
            </div>
            
            <div className="service-card fade-in">
              <div className="service-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <h3>Cybersecurity</h3>
              <p>Protect your business with advanced security solutions, threat detection, and prevention.</p>
              <Link to="/services" className="service-link">Learn More →</Link>
            </div>
            
            <div className="service-card fade-in">
              <div className="service-icon">
                <i className="fas fa-cogs"></i>
              </div>
              <h3>Managed IT</h3>
              <p>End-to-end management of your IT infrastructure, allowing you to focus on your core business.</p>
              <Link to="/services" className="service-link">Learn More →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-us-section section">
        <div className="container">
          <div className="section-header fade-in">
            <h2>Why Choose Us</h2>
            <p>What sets Cyberpark IT apart from the competition</p>
          </div>
          
          <div className="features-grid">
            <div className="feature-item fade-in">
              <div className="feature-icon">
                <i className="fas fa-check-circle"></i>
              </div>
              <div className="feature-content">
                <h3>Expert Team</h3>
                <p>Our certified professionals bring years of experience in IT and cloud technologies.</p>
              </div>
            </div>
            
            <div className="feature-item fade-in">
              <div className="feature-icon">
                <i className="fas fa-check-circle"></i>
              </div>
              <div className="feature-content">
                <h3>24/7 Support</h3>
                <p>Round-the-clock assistance ensures your systems are always operational.</p>
              </div>
            </div>
            
            <div className="feature-item fade-in">
              <div className="feature-icon">
                <i className="fas fa-check-circle"></i>
              </div>
              <div className="feature-content">
                <h3>Tailored Solutions</h3>
                <p>Customized IT strategies aligned with your specific business requirements.</p>
              </div>
            </div>
            
            <div className="feature-item fade-in">
              <div className="feature-icon">
                <i className="fas fa-check-circle"></i>
              </div>
              <div className="feature-content">
                <h3>Cost-Effective</h3>
                <p>Optimize your IT spending with our efficient and scalable solutions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content fade-in">
            <h2>Ready to Transform Your IT Infrastructure?</h2>
            <p>Contact us today for a free consultation and discover how we can help your business thrive.</p>
            <Link to="/contact" className="btn">Get Started</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage; 