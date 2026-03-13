import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './Leadership.css';

const leaders = [
  {
    name: 'Bhargav Bhushan Majji',
    role: 'Designated Partner',
    icon: 'fa-user-tie'
  },
  {
    name: 'Santosh Samrat Seethamsetty',
    role: 'Designated Partner',
    icon: 'fa-user-tie'
  }
];

const Leadership = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="leadership">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">OUR LEADERSHIP</span>
          <h2 className="section-title white">Meet Our Leaders</h2>
          <p className="leadership-intro">
            Led by visionary professionals dedicated to building impactful technological solutions. 
            Their leadership focuses on innovation, digital transformation, and empowering the next 
            generation of technology professionals.
          </p>
        </motion.div>

        <div className="leaders-grid">
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
              className="leader-card"
            >
              <div className="leader-avatar">
                <i className={`fas ${leader.icon}`}></i>
              </div>
              <h3>{leader.name}</h3>
              <p className="leader-role">{leader.role}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="commitment-box"
        >
          <h3>Our Commitment</h3>
          <p>
            At SABP Technologies LLP, we are committed to creating a future where technology empowers people, 
            businesses grow through innovation, and skills drive success.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Leadership;
