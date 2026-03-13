import './SocialBar.css';

const SocialBar = () => {
  return (
    <div className="social-bar">
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
