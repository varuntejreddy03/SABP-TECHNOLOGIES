import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './Technologies.css';

const techStack = {
  development: [
    { name: 'React', icon: 'fa-react' },
    { name: 'Node.js', icon: 'fa-node-js' },
    { name: 'Python', icon: 'fa-python' },
    { name: 'JavaScript', icon: 'fa-js' },
    { name: 'HTML5/CSS3', icon: 'fa-html5' },
    { name: 'MySQL', icon: 'fa-database' },
    { name: 'MongoDB', icon: 'fa-database' },
    { name: 'Git', icon: 'fa-git-alt' }
  ],
  emerging: [
    { name: 'Drone Tech', icon: 'fa-drone' },
    { name: 'IoT', icon: 'fa-microchip' },
    { name: 'AI/ML', icon: 'fa-brain' },
    { name: 'Automation', icon: 'fa-robot' },
    { name: 'Cloud', icon: 'fa-cloud' },
    { name: 'Android', icon: 'fa-android' },
    { name: 'Digital Marketing', icon: 'fa-bullhorn' },
    { name: 'MS Office', icon: 'fa-file-alt' }
  ]
};

const Technologies = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="technologies">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        >
          <span className="section-tag">OUR STACK</span>
          <h2 className="section-title">Technologies & Tools We Work With</h2>
        </motion.div>

        <div className="tech-marquee-container">
          <div className="tech-row">
            <div className="tech-track">
              {[...techStack.development, ...techStack.development].map((tech, index) => (
                <div key={index} className="tech-badge">
                  <i className={`fab ${tech.icon}`}></i>
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="tech-row tech-row-reverse">
            <div className="tech-track">
              {[...techStack.emerging, ...techStack.emerging].map((tech, index) => (
                <div key={index} className="tech-badge">
                  <i className={`fas ${tech.icon}`}></i>
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
