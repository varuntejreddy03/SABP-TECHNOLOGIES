import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import './Contact.css';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowToast(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
    setTimeout(() => setShowToast(false), 3000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">REACH US</span>
          <h2 className="section-title">Get In Touch</h2>
        </motion.div>

        <div className="contact-content">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="contact-info"
          >
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="contact-form-wrapper"
          >
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
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {showToast && (
        <div className="toast">
          <i className="fas fa-check-circle"></i>
          Message sent successfully!
        </div>
      )}
    </section>
  );
};

export default Contact;
