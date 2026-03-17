import React, { useEffect, useRef } from 'react';
import './Leadership.css';
import bhargavImg from '../assets/team/bhargav-majji.jpg';
import samratImg from '../assets/team/samrat-seethamsetty.jpg';

const teamData = [
  {
    id: 1,
    name: "Bhargav Majji",
    role: "Founder & CEO",
    bio: "Bhargav Majji is the Founder & CEO of SABP, known for driving strategic growth and innovation. With strong expertise in marketing, brand development, and digital strategy, he focuses on building impactful solutions and expanding business opportunities in a rapidly evolving market.",
    photo: bhargavImg,
    alt: "Bhargav Majji - Founder & CEO, SABP Technologies LLP",
    tags: ["Strategic Growth", "Brand Development", "Digital Strategy"],
    delay: "0s"
  },
  {
    id: 2,
    name: "Samrat Seethamsetty",
    role: "Co-Founder & Managing Director",
    bio: "Samrat Seethamsetty leads SABP with expertise in construction, interiors, and digital marketing. Known for his strong communication and business development skills, he focuses on building lasting client relationships and bringing new opportunities to the organization while driving innovation and growth across its diverse business sectors.",
    photo: samratImg,
    alt: "Samrat Seethamsetty - Co-Founder & MD, SABP Technologies LLP",
    tags: ["Construction & Interiors", "Business Development", "Digital Marketing", "Client Relations"],
    delay: "0.15s"
  }
];

const Leadership = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section id="leadership" className="leadership">
      <div className="leadership-container">
        <div className="leadership-header">
          <span className="section-tag">OUR LEADERSHIP</span>
          <h2>The Minds Behind SABP</h2>
          <p className="subtext">
            Visionary leaders driving innovation, growth, and digital transformation.
          </p>
        </div>

        <div className="team-grid">
          {teamData.map((person, index) => (
            <div 
              key={person.id}
              className="team-card"
              ref={el => cardsRef.current[index] = el}
              style={{ transitionDelay: person.delay }}
            >
              <div className="team-photo-wrap">
                <img 
                  src={person.photo} 
                  alt={person.alt} 
                  loading="lazy"
                />
              </div>
              
              <div className="team-card-body">
                <h3 className="team-name">{person.name}</h3>
                <div className="team-role-badge">{person.role}</div>
                
                <div className="team-divider"></div>
                
                <p className="team-bio">{person.bio}</p>
                
                <div className="team-tags">
                  {person.tags.map(tag => (
                    <span key={tag} className="team-tag">{tag}</span>
                  ))}
                </div>

                {/* LinkedIn Icon (Reserved for later)
                <div className="team-social">
                  <a href="#" className="linkedin-link">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
                */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
