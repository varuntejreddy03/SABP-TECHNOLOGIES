import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './VisionMission.css';

const VisionMission = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="vision-mission">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">OUR DIRECTION</span>
          <h2 className="section-title">Vision & Mission</h2>
        </motion.div>

        <div className="vm-grid">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="vm-card vision-card"
          >
            <h4 className="vm-card-title">🎯 Our Vision</h4>
            <p>
              To become a trusted global technology partner that empowers businesses and individuals 
              through innovation, knowledge, and advanced digital solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="vm-card mission-card"
          >
            <h4 className="vm-card-title">🚀 Our Mission</h4>
            <ul>
              <li><i className="fas fa-check"></i> Deliver innovative and practical technology solutions</li>
              <li><i className="fas fa-check"></i> Provide industry-relevant training and skill development programs</li>
              <li><i className="fas fa-check"></i> Promote emerging technologies such as drones, automation, and digital platforms</li>
              <li><i className="fas fa-check"></i> Help businesses improve efficiency through smart technological solutions</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
