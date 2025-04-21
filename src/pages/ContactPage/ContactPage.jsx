import React, { useEffect } from 'react';
import './ContactPage.css';

function ContactPage() {
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

  // Basic form handling example
  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Form submitted (logic not implemented yet)');
    // Add form submission logic here (e.g., send data to an API)
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content fade-in">
            <h1>Contact Us</h1>
            <p>We'd love to hear from you. Reach out and let's start a conversation.</p>
          </div>
        </div>
        <div className="hero-shape"></div>
      </section>

      <section className="contact-section section">
        <div className="container">
          <div className="section-header fade-in">
            <h2>Get In Touch</h2>
            <p>Have questions or need assistance? We're here to help.</p>
          </div>
          
          <div className="contact-grid">
            <div className="contact-info fade-in">
              <h3>Contact Information</h3>
              <p><i className="fas fa-map-marker-alt"></i> 123 Tech Street, IT City, State 12345</p>
              <p><i className="fas fa-phone"></i> +1 (555) 123-4567</p>
              <p><i className="fas fa-envelope"></i> support@cyberparkit.com</p>
              <p><i className="fas fa-clock"></i> Monday - Friday: 9:00 AM - 6:00 PM</p>
            </div>
            
            <form className="contact-form fade-in" onSubmit={handleSubmit}>
              <h3>Send Us a Message</h3>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" required></textarea>
              </div>
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactPage; 