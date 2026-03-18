import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './DroneSolutions.css';

const DroneSolutions = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="drone-solutions" className="drone-solutions">
            <div className="container">
                <motion.div
                    ref={ref}
                    className="drone-container-inner"
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-tag">DRONE SOLUTIONS</span>
                    <h2 className="section-title white-text">Drone Technology & Applications</h2>
                    
                    <div className="drone-intro-wrap">
                        <p className="drone-description">
                            SABP Technologies is an authorized sales and service provider for agricultural 
                            and industrial drones. We provide end-to-end solutions including drone acquisition, 
                            surveying, mapping, and infrastructure inspection — all backed by expert 
                            technical training and dedicated after-sales support.
                        </p>
                        
                        <div className="partner-mini-badge">
                            🤝 OFFICIAL DRONE PARTNER: Dhaksha Unmanned Systems (Est. 2019) — Backed by Coromandel International Ltd, Murugappa Group (since July 2023).
                        </div>
                    </div>

                    <div className="drone-features-grid">
                        <div className="drone-feature-item">
                            <i className="fas fa-check-circle"></i> Agricultural Drone Sales
                        </div>
                        <div className="drone-feature-item">
                            <i className="fas fa-check-circle"></i> DGCA Approved Training
                        </div>
                        <div className="drone-feature-item">
                            <i className="fas fa-check-circle"></i> Aerial Mapping & Survey
                        </div>
                        <div className="drone-feature-item">
                            <i className="fas fa-check-circle"></i> Industrial Inspection
                        </div>
                    </div>

                    <div className="drone-stats-row">
                        <div className="drone-stat">
                            <div className="drone-stat-num">500+</div>
                            <div className="drone-stat-label">Drones<br />Acquired & Serviced</div>
                        </div>
                        <div className="drone-stat">
                            <div className="drone-stat-num">1 Year</div>
                            <div className="drone-stat-label">Track<br />Record</div>
                        </div>
                        <div className="drone-stat">
                            <div className="drone-stat-num">100%</div>
                            <div className="drone-stat-label">After-Sales<br />Support</div>
                        </div>
                    </div>

                    <div className="drone-cta-btns">
                        <a href="#contact" className="btn btn-filled">🛒 Buy a Drone</a>
                        <a href="#contact" className="btn btn-outline">🔧 Service Request</a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default DroneSolutions;
