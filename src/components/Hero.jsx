import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      <div className="hero-bg"></div>
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="hero-logo"
        >
          <img src="/sabp-logo-transparent.png" alt="SABP Technologies LLP" draggable="false" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Empowering Innovation. Transforming Industries.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="hero-subtitle"
        >
          Delivering innovative solutions, advanced skill development programs, and industry-focused technologies since 2022.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="hero-cta"
        >
          <button className="btn-primary" onClick={() => scrollToSection('services')}>
            Explore Services
          </button>
          <button className="btn-outline" onClick={() => scrollToSection('contact')}>
            Contact Us
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="scroll-indicator"
        >
          <i className="fas fa-chevron-down"></i>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
