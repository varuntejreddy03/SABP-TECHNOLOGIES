import { useEffect, useState } from 'react';
import './SocialBar.css';

const SocialBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const footer = document.querySelector('.footer');
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Hide social bar when footer comes into view
        setIsVisible(!entry.isIntersecting);
      },
      { threshold: 0.1 } // Trigger when at least 10% of footer is visible
    );

    observer.observe(footer);

    return () => {
      observer.unobserve(footer);
    };
  }, []);

  return (
    <div className={`social-bar ${!isVisible ? 'hidden' : ''}`}>
      <a href="https://www.facebook.com/share/17KBhUr8di/" target="_blank" rel="noopener noreferrer" className="social-icon">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="https://www.instagram.com/sabptechnologies" target="_blank" rel="noopener noreferrer" className="social-icon">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="https://www.linkedin.com/company/sabptechnologiesllp" target="_blank" rel="noopener noreferrer" className="social-icon">
        <i className="fab fa-linkedin-in"></i>
      </a>
    </div>
  );
};

export default SocialBar;
