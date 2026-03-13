import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './WhyChooseUs.css';

const features = [
  {
    icon: 'fa-industry',
    title: 'Industry-Focused Solutions',
    description: 'Technology solutions designed specifically for real-world industry applications and challenges.'
  },
  {
    icon: 'fa-chalkboard-teacher',
    title: 'Experienced Professionals',
    description: 'Learn from experienced trainers and industry experts with deep practical knowledge.'
  },
  {
    icon: 'fa-hands-helping',
    title: 'Hands-On Learning',
    description: 'Practical and hands-on approach to ensure real-world readiness and skill mastery.'
  },
  {
    icon: 'fa-award',
    title: 'Quality & Reliability',
    description: 'Innovation-driven culture with unwavering commitment to quality and reliability in every project.'
  }
];

const WhyChooseUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="why-choose-us">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        >
          <span className="section-tag">WHY CHOOSE US</span>
          <h2 className="section-title white">What Sets Us Apart</h2>
          <div className="why-divider"></div>
        </motion.div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
              className="feature-tile"
            >
              <div className="feature-icon">
                <i className={`fas ${feature.icon}`}></i>
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
