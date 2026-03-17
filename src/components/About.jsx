import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import './About.css';

const Counter = ({ end, label, icon, isFeatured, badge }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const increment = end / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [isInView, end]);

  return (
    <div className={`stat-card ${isFeatured ? 'featured' : ''}`} ref={ref}>
      <div className="stat-icon">
        <i className={`fas ${icon}`}></i>
      </div>
      <h3 className="stat-number">{count}+</h3>
      <p className="stat-label">{label}</p>
      {badge && <span className="stat-badge">{badge}</span>}
    </div>
  );
};

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">WHO WE ARE</span>
          <h2 className="section-title">About SABP Technologies</h2>
        </motion.div>

        <div className="about-content">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="about-left"
          >
            <div className="about-graphic">
              <i className="fas fa-laptop-code"></i>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="about-right"
          >
            <h3 className="about-subtitle">Bridging Technology, Education, and Real-World Applications</h3>
            <p className="about-text">
              SABP Technologies LLP was founded with a vision to bridge the gap between technology and real-world 
              opportunities. Our mission is to enable organizations and individuals to adapt to the rapidly 
              evolving digital world through innovation, training, and technology-driven solutions.
            </p>
            <p className="about-text">
              Established in 2022 and registered under ROC Vijayawada, we are a forward-thinking technology and 
              training company. With a team of passionate professionals and industry experts, we provide cutting-edge 
              solutions in technology development, skill training, and emerging technologies to help individuals and 
              businesses grow sustainably.
            </p>

            <div className="stats-grid">
              <Counter 
                end={50} 
                label="Projects Delivered" 
                icon="fa-briefcase" 
              />
              <Counter 
                end={3} 
                label="Years Experience" 
                icon="fa-calendar-check" 
              />
              <Counter 
                end={500} 
                label="Agricultural Drones Acquired" 
                icon="fa-paper-plane" 
                isFeatured={true}
                badge="Within 1 Year 🚁"
              />
              <Counter 
                end={100} 
                label="Client Satisfaction" 
                icon="fa-star" 
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
