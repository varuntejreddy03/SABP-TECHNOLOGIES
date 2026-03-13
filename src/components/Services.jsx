import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './Services.css';

const services = [
  {
    icon: 'fa-laptop-code',
    title: 'Technology Solutions',
    description: 'Digital solutions and expert IT consulting to help businesses streamline operations, optimize infrastructure, and scale efficiently.'
  },
  {
    icon: 'fa-graduation-cap',
    title: 'Skill Development & Training',
    description: 'Industry-relevant training programs that equip students and professionals with practical, modern technology skills.'
  },
  {
    icon: 'fa-globe',
    title: 'Web & App Development',
    description: 'Custom web and mobile applications designed to elevate your brand and drive digital growth.'
  },
  {
    icon: 'fa-paper-plane',
    title: 'Drone Technology & Applications',
    description: 'Training and solutions in drone technology for agriculture, surveying, mapping, infrastructure inspection, and aerial data collection.'
  },
  {
    icon: 'fa-robot',
    title: 'Automation & Emerging Tech',
    description: 'Innovative automation solutions and emerging technologies to drive efficiency and competitive advantage.'
  },
  {
    icon: 'fa-chalkboard-teacher',
    title: 'Corporate Training',
    description: 'Specialized corporate training programs to upskill your workforce with the latest industry technologies.'
  }
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="services">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">WHAT WE DO</span>
          <h2 className="section-title">Our Core Services</h2>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="service-card"
            >
              <div className="service-icon">
                <i className={`fas ${service.icon}`}></i>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href="#contact" className="service-link">
                Learn More <i className="fas fa-arrow-right"></i>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
