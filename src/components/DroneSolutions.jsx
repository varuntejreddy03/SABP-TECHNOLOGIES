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
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-tag">DRONE SOLUTIONS</span>
                    <h2 className="section-title white-text">Drone Technology & Applications</h2>
                    <p className="drone-subtext">
                        Authorized sales and service provider for agricultural and industrial drones — 
                        backed by expert training and after-sales support.
                    </p>
                </motion.div>

                <div className="drone-content-grid">
                    <motion.div 
                        className="drone-info-col"
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <p className="drone-description">
                            Authorized sales and service provider for agricultural drones. We offer drone 
                            solutions for agriculture, surveying, mapping, infrastructure inspection, and 
                            aerial data collection — backed by expert training and after-sales support.
                        </p>

                        <ul className="drone-features">
                            <li><i className="fas fa-check-circle"></i> Agricultural Drone Sales & Service</li>
                            <li><i className="fas fa-check-circle"></i> DGCA Approved Pilot Training</li>
                            <li><i className="fas fa-check-circle"></i> Aerial Surveying & Mapping</li>
                            <li><i className="fas fa-check-circle"></i> Infrastructure Inspection Solutions</li>
                        </ul>

                        <div className="drone-stats-row">
                            <div className="drone-stat">
                                <div className="drone-stat-num">500+</div>
                                <div className="drone-stat-label">Drones<br />Acquired</div>
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

                    <motion.div 
                        className="dhaksha-card"
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <div className="partner-badge">🤝 OUR TECHNOLOGY PARTNER</div>
                        <h3 className="partner-name">Dhaksha Unmanned Systems</h3>
                        <div className="partner-tagline">Building credibility through world-class engineering</div>
                        
                        <div className="website-link">
                            <a href="https://dhakshadrones.com" target="_blank" rel="noopener noreferrer">
                                🌐 dhakshadrones.com
                            </a>
                        </div>
                        
                        <div className="partner-divider"></div>

                        <div className="partner-points">
                            <div className="partner-point">
                                <div className="partner-dot"></div>
                                <p>Utilizing high-end engineering founded by MIT Alumni (2019) to provide industry-leading reliability.</p>
                            </div>
                            <div className="partner-point">
                                <div className="partner-dot"></div>
                                <p>Leveraging strategic R&D and manufacturing partnerships with Anna University, Chennai.</p>
                            </div>
                            <div className="partner-point">
                                <div className="partner-dot"></div>
                                <p>All drone hardware is developed in a state-of-the-art facility at Ambattur — the hub of innovation.</p>
                            </div>
                            <div className="partner-point">
                                <div className="partner-dot"></div>
                                <p>Facilitating certified DGCA-approved pilot training programs for all our clients through CASR-RPTO.</p>
                            </div>
                            <div className="partner-point">
                                <div className="partner-dot"></div>
                                <p>Ensuring long-term project scale and support with the stability of Coromandel (Murugappa Group).</p>
                            </div>
                        </div>

                        <div className="partner-tags">
                            <span className="partner-tag">🌾 Agriculture</span>
                            <span className="partner-tag">📡 Surveying & Mapping</span>
                            <span className="partner-tag">🏗️ Infrastructure</span>
                            <span className="partner-tag">🎓 Pilot Training</span>
                            <span className="partner-tag">🤖 UAV/UAS Solutions</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default DroneSolutions;
