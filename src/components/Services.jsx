import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './Services.css';

const services = [
  {
    icon: 'fa-laptop-code',
    title: 'Technology Solutions',
    description: 'Digital solutions and expert IT consulting to help businesses streamline operations, optimize infrastructure, and scale efficiently.',
    stat: { icon: '💻', text: '<span>10+ Tech Projects</span><br />Successfully Delivered' },
    badges: ['🖥️ IT Solutions', '☁️ IT Consulting']
  },
  {
    icon: 'fa-graduation-cap',
    title: 'Skill Development & Training',
    description: 'Industry-relevant training programs that equip students and professionals with practical, modern technology skills.',
    stat: { icon: '🎓', text: '<span>200+ Students</span><br />Trained & Placed' },
    badges: ['🎓 Live Training', '📜 Certification']
  },
  {
    icon: 'fa-globe',
    title: 'Web & App Development',
    description: 'Custom web and mobile applications designed to elevate your brand and drive digital growth.',
    stat: { icon: '🌐', text: '<span>20+ Websites & Apps</span><br />Built & Delivered' },
    badges: ['🌐 Web Dev', '📱 App Dev']
  },
  {
    icon: 'fa-building',
    title: 'Construction & Interiors',
    description: 'End-to-end solutions in construction planning and interior design. We help businesses and individuals build smarter spaces with innovative design thinking and quality execution.',
    stat: { icon: '🏗️', text: '<span>18+ Construction &</span><br />35+ Interior Projects' },
    badges: ['🏗️ Construction', '🛋️ Interiors']
  },
  {
    icon: 'fa-robot',
    title: 'Automation & Emerging Tech',
    description: 'Innovative automation solutions and emerging technologies to drive efficiency and competitive advantage.',
    stat: { icon: '🤖', text: '<span>Smart Automation</span> for<br />Businesses & Industries' },
    badges: ['🤖 Automation', '⚡ Emerging Tech']
  },
  {
    icon: 'fa-chalkboard-teacher',
    title: 'Corporate Training',
    description: 'Specialized corporate training programs to upskill your workforce with the latest industry technologies.',
    stat: { icon: '🏢', text: '<span>50+ Professionals</span><br />Upskilled & Certified' },
    badges: ['🏢 Corporate', '📊 Upskilling']
  },
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
              
              {/* Other Cards Content */}
              {service.stat && (
                <>
                  <div className="service-stat-strip">
                    <div className="service-stat-icon">{service.stat.icon}</div>
                    <div className="service-stat-text" dangerouslySetInnerHTML={{ __html: service.stat.text }}></div>
                  </div>
                  <div className="service-badges">
                    {service.badges.map(badge => (
                      <span key={badge} className="service-badge">{badge}</span>
                    ))}
                  </div>
                </>
              )}

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
