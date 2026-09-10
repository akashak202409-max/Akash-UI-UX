import { useState } from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        
        {/* Header */}
        <div className="section-header contact-header">
          <div className="circles-icon">
            <span className="circle circle-white"></span>
            <span className="circle circle-yellow"></span>
            <span className="circle circle-blue"></span>
          </div>
          <div className="contact-tag">Contact Me</div>
          <h2 className="projects-title contact-title">
            <span className="highlight-blue">Let’s Talk for Your</span> <br/>
            Next Projects ✨
          </h2>
        </div>

        {/* Layout */}
        <div className="contact-content">
          
          {/* Form Side */}
          <div className="contact-form-side">
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              
              <div className="form-row">
                <div className="form-group">
                  <label>Your Name *</label>
                  <input type="text" placeholder="Ex. John Doe" required />
                </div>
                <div className="form-group">
                  <label>Email *</label>
                  <input type="email" placeholder="example@gmail.com" required />
                </div>
              </div>

              <div className="form-group full-width">
                <label>Phone *</label>
                <input type="tel" placeholder="Enter Phone Number" required />
              </div>

              <div className="form-group full-width">
                <label>Your Message *</label>
                <textarea placeholder="Enter here.." rows="5" required></textarea>
              </div>

              <button type="submit" className="contact-submit-btn">Send Message</button>
            </form>
          </div>

          {/* Info Cards Side */}
          <div className="contact-info-side">
            
            <div className="info-card dark-card">
              <div className="info-block">
                <h3>Contact</h3>
                <p>Phone : +91 8870392530</p>
                <p>Email : akashakash87223@gmail.com</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
