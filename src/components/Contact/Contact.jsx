import { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, message } = formData;
    
    // Construct WhatsApp message
    const whatsappNumber = "918870392530";
    const text = `Hello Akash,%0A%0AI am reaching out from your portfolio website.%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Phone:* ${phone}%0A%0A*Message:*%0A${message}`;
    
    // Redirect to WhatsApp
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${text}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        
        {/* Header */}
        <div className="contact-header-left">
          <p className="contact-tag-simple">CONTACT ME</p>
          <h2 className="contact-title-main">
            <span className="highlight-blue">Let’s Talk for Your</span> <br/>
            Next Projects ✨
          </h2>
        </div>

        {/* Layout */}
        <div className="contact-content">
          
          {/* Form Side */}
          <div className="contact-form-side">
            <form className="contact-form" onSubmit={handleSubmit}>
              
              <div className="form-row">
                <div className="form-group">
                  <label>Your Name *</label>
                  <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Ex. John Doe" required />
                </div>
                <div className="form-group">
                  <label>Email *</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="example@gmail.com" required />
                </div>
              </div>

              <div className="form-group full-width">
                <label>Phone *</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter Phone Number" required />
              </div>

              <div className="form-group full-width">
                <label>Your Message *</label>
                <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Enter here.." rows="5" required></textarea>
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
