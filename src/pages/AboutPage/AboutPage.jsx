import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './AboutPage.css';

function AboutPage() {
  useEffect(() => {
    // Animation for fade-in elements
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
    <div className="about-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content fade-in">
            <h1>About Cyberpark IT</h1>
            <p>Your trusted partner for innovative IT solutions</p>
          </div>
        </div>
        <div className="hero-shape"></div>
      </section>

      {/* Our Story Section */}
      <section className="about-story section">
        <div className="container">
          <div className="about-grid">
            <div className="about-content fade-in">
              <h2>Our Story</h2>
              <p>Founded in 2015, Cyberpark IT began with a simple mission: to provide businesses with reliable, scalable, and secure IT solutions that drive growth and innovation.</p>
              <p>What started as a small team of passionate IT professionals has grown into a comprehensive technology partner serving clients across various industries. Our journey has been defined by our commitment to excellence, continuous learning, and client success.</p>
              <p>Today, we're proud to be at the forefront of IT support and cloud services, helping businesses navigate the complex digital landscape with confidence.</p>
            </div>
            <div className="about-image fade-in">
              <div className="image-placeholder">
                <div className="animated-element"></div>
                <div className="animated-element"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="mission-vision section">
        <div className="container">
          <div className="section-header fade-in">
            <h2>Our Mission & Vision</h2>
            <p>Guiding principles that drive everything we do</p>
          </div>
          
          <div className="mission-vision-grid">
            <div className="mission-card fade-in">
              <div className="card-icon">
                <i className="fas fa-bullseye"></i>
              </div>
              <h3>Our Mission</h3>
              <p>To provide reliable, scalable, and secure IT solutions that empower businesses to thrive in the digital age. We aim to be a true technology partner, not just a service provider.</p>
            </div>
            
            <div className="mission-card fade-in">
              <div className="card-icon">
                <i className="fas fa-eye"></i>
              </div>
              <h3>Our Vision</h3>
              <p>To be the most trusted IT partner for businesses seeking innovative technology solutions. We envision a world where technology enhances business potential rather than limiting it.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section section">
        <div className="container">
          <div className="section-header fade-in">
            <h2>Our Core Values</h2>
            <p>The principles that guide our work and relationships</p>
          </div>
          
          <div className="values-grid">
            <div className="value-item fade-in">
              <div className="value-icon">
                <i className="fas fa-handshake"></i>
              </div>
              <h3>Integrity</h3>
              <p>We operate with honesty and transparency in all our interactions.</p>
            </div>
            
            <div className="value-item fade-in">
              <div className="value-icon">
                <i className="fas fa-star"></i>
              </div>
              <h3>Excellence</h3>
              <p>We strive for the highest quality in everything we do.</p>
            </div>
            
            <div className="value-item fade-in">
              <div className="value-icon">
                <i className="fas fa-users"></i>
              </div>
              <h3>Collaboration</h3>
              <p>We work together with our clients as true partners.</p>
            </div>
            
            <div className="value-item fade-in">
              <div className="value-icon">
                <i className="fas fa-lightbulb"></i>
              </div>
              <h3>Innovation</h3>
              <p>We embrace new technologies and creative solutions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content fade-in">
            <h2>Ready to Work With Us?</h2>
            <p>Let's discuss how our IT solutions can help your business grow and succeed.</p>
            <Link to="/contact" className="btn">Get in Touch</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage; 