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
                        <div className="partner-badge">🤝 OFFICIAL DRONE PARTNER</div>
                        <h3 className="partner-name">Dhaksha Unmanned Systems</h3>
                        <div className="partner-tagline">End-To-End UAS/UAV Solution Provider</div>
                        
                        <div className="website-link">
                            <a href="https://dhakshadrones.com" target="_blank" rel="noopener noreferrer">
                                🌐 dhakshadrones.com
                            </a>
                        </div>
                        
                        <div className="partner-divider"></div>

                        <div className="partner-points">
                            <div className="partner-point">
                                <div className="partner-dot"></div>
                                <p>Founded by MIT Alumni in 2019 — a trusted independent private limited company in the drone industry.</p>
                            </div>
                            <div className="partner-point">
                                <div className="partner-dot"></div>
                                <p>Exclusive Strategic Partner of Anna University, Chennai (until 2028) — driving R&D, manufacturing, and global drone marketing.</p>
                            </div>
                            <div className="partner-point">
                                <div className="partner-dot"></div>
                                <p>World-class factory & R&D center at Ambattur, Chennai — a hub for drone innovation and excellence.</p>
                            </div>
                            <div className="partner-point">
                                <div className="partner-dot"></div>
                                <p>Partnered with CASR-RPTO (DGCA Approved) — providing certified professional drone pilot training for UAV operators.</p>
                            </div>
                            <div className="partner-point">
                                <div className="partner-dot"></div>
                                <p>Backed by Coromandel International Ltd, Murugappa Group (since July 2023) — marking a new era of scale and trust.</p>
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
