import { useRef, useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Format message for WhatsApp
    const whatsappMessage = `*New Contact Form Submission*%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Email:* ${formData.email}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Message:* ${formData.message}%0A%0A` +
      `Sent from SABP Technologies website`;
    
    // WhatsApp number (replace with your actual number)
    const whatsappNumber = '919765056789'; // Remove + and spaces
    
    // Create WhatsApp URL
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappURL, '_blank');
    
    // Show success message
    setShowToast(true);
    
    // Reset form
    setFormData({ name: '', email: '', phone: '', message: '' });
    
    // Hide toast after 3 seconds
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-header">
          <span className="section-tag">REACH US</span>
          <h2 className="section-title">Get In Touch</h2>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <i className="fas fa-phone"></i>
              <h4>Phone</h4>
              <p>9765056789</p>
              <p>9704233233</p>
            </div>
            <div className="info-card">
              <i className="fas fa-envelope"></i>
              <h4>Email</h4>
              <p>sabptechnologiesllp@gmail.com</p>
            </div>
            <div className="info-card">
              <i className="fas fa-map-marker-alt"></i>
              <h4>Address</h4>
              <p>Plot No. A-222, KL Puram</p>
              <p>Satya Institute of Technology and Management</p>
              <p>Gajularega, Vizianagaram</p>
              <p>Andhra Pradesh - 535003</p>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <form className="contact-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <button type="submit" className="submit-btn">
                <i className="fab fa-whatsapp"></i>
                Send via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>

      {showToast && (
        <div className="toast">
          <i className="fab fa-whatsapp"></i>
          Redirecting to WhatsApp...
        </div>
      )}
    </section>
  );
};

export default Contact;
