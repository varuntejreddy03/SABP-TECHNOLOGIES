import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './CTABanner.css';

const CTABanner = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="cta-banner">
      <div className="cta-bg-circle cta-circle-1"></div>
      <div className="cta-bg-circle cta-circle-2"></div>
      
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="cta-content"
        >
          <span className="cta-tag">READY TO GET STARTED?</span>
          
          <h2 className="cta-heading">
            Let's Build Something<br/>
            <span className="gradient-word">Extraordinary Together</span>
          </h2>
          
          <p className="cta-subtext">
            Partner with SABP Technologies LLP and unlock the power of innovation, 
            training, and digital transformation for your business.
          </p>
          
          <div className="cta-buttons">
            <button className="cta-btn cta-btn-primary" onClick={() => scrollToSection('contact')}>
              Start a Project
            </button>
            <button className="cta-btn cta-btn-outline" onClick={() => scrollToSection('contact')}>
              Call Us Now
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;
