import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ServicesPage.css';

function ServicesPage() {
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
    <div className="services-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <div className="page-hero-content fade-in">
            <h1>Our Services</h1>
            <p>Comprehensive IT and cloud solutions tailored to your business needs</p>
          </div>
        </div>
        <div className="hero-shape"></div>
      </section>

      {/* Services Overview */}
      <section className="services-overview section">
        <div className="container">
          <div className="section-header fade-in">
            <h2>What We Offer</h2>
            <p>Explore our range of IT and cloud services designed to optimize your business operations</p>
          </div>
          
          <div className="services-grid">
            {/* IT Support Service */}
            <div className="service-detailed-card fade-in">
              <div className="service-icon">
                <i className="fas fa-server"></i>
              </div>
              <div className="service-content">
                <h3>IT Support Services</h3>
                <p>Comprehensive support to keep your systems running smoothly. Our IT support services include:</p>
                <ul className="service-features">
                  <li><i className="fas fa-check"></i> 24/7 Helpdesk Support</li>
                  <li><i className="fas fa-check"></i> Network Monitoring & Management</li>
                  <li><i className="fas fa-check"></i> Hardware & Software Troubleshooting</li>
                  <li><i className="fas fa-check"></i> System Updates & Patch Management</li>
                  <li><i className="fas fa-check"></i> Data Backup & Recovery</li>
                </ul>
                <div className="service-cta">
                  <Link to="/contact" className="btn btn-sm">Request Service</Link>
                </div>
              </div>
            </div>
            
            {/* Cloud Services */}
            <div className="service-detailed-card fade-in">
              <div className="service-icon">
                <i className="fas fa-cloud"></i>
              </div>
              <div className="service-content">
                <h3>Cloud Support Services</h3>
                <p>Expert guidance and support for your cloud journey. Our cloud services include:</p>
                <ul className="service-features">
                  <li><i className="fas fa-check"></i> Cloud Migration & Strategy</li>
                  <li><i className="fas fa-check"></i> AWS, Azure & GCP Management</li>
                  <li><i className="fas fa-check"></i> Cloud Security & Compliance</li>
                  <li><i className="fas fa-check"></i> Cost Optimization</li>
                  <li><i className="fas fa-check"></i> Hybrid Cloud Solutions</li>
                </ul>
                <div className="service-cta">
                  <Link to="/contact" className="btn btn-sm">Request Service</Link>
                </div>
              </div>
            </div>
            
            {/* Cybersecurity */}
            <div className="service-detailed-card fade-in">
              <div className="service-icon">
                <i className="fas fa-shield-alt"></i>
              </div>
              <div className="service-content">
                <h3>Cybersecurity Services</h3>
                <p>Protect your business from evolving threats. Our cybersecurity services include:</p>
                <ul className="service-features">
                  <li><i className="fas fa-check"></i> Security Assessments & Audits</li>
                  <li><i className="fas fa-check"></i> Endpoint Protection</li>
                  <li><i className="fas fa-check"></i> Firewall Management</li>
                  <li><i className="fas fa-check"></i> Security Awareness Training</li>
                  <li><i className="fas fa-check"></i> Incident Response Planning</li>
                </ul>
                <div className="service-cta">
                  <Link to="/contact" className="btn btn-sm">Request Service</Link>
                </div>
              </div>
            </div>
            
            {/* Managed IT */}
            <div className="service-detailed-card fade-in">
              <div className="service-icon">
                <i className="fas fa-cogs"></i>
              </div>
              <div className="service-content">
                <h3>Managed IT Services</h3>
                <p>End-to-end management of your IT infrastructure. Our managed services include:</p>
                <ul className="service-features">
                  <li><i className="fas fa-check"></i> Proactive IT Management</li>
                  <li><i className="fas fa-check"></i> Strategic IT Planning</li>
                  <li><i className="fas fa-check"></i> Vendor Management</li>
                  <li><i className="fas fa-check"></i> IT Budgeting & Forecasting</li>
                  <li><i className="fas fa-check"></i> Virtual CIO Services</li>
                </ul>
                <div className="service-cta">
                  <Link to="/contact" className="btn btn-sm">Request Service</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="how-we-work section">
        <div className="container">
          <div className="section-header fade-in">
            <h2>Our Approach</h2>
            <p>How we deliver exceptional IT services to our clients</p>
          </div>
          
          <div className="process-steps">
            <div className="process-step fade-in">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Assessment</h3>
                <p>We begin by thoroughly understanding your business needs, current infrastructure, and challenges.</p>
              </div>
            </div>
            
            <div className="process-step fade-in">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Strategy</h3>
                <p>We develop a customized IT strategy aligned with your business goals and budget.</p>
              </div>
            </div>
            
            <div className="process-step fade-in">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Implementation</h3>
                <p>Our expert team deploys solutions with minimal disruption to your operations.</p>
              </div>
            </div>
            
            <div className="process-step fade-in">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Support</h3>
                <p>We provide ongoing support, monitoring, and optimization to ensure long-term success.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content fade-in">
            <h2>Ready to Optimize Your IT Infrastructure?</h2>
            <p>Contact us today for a free consultation and discover how our services can benefit your business.</p>
            <Link to="/contact" className="btn">Get Started</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ServicesPage; 