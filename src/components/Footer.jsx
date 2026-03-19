import './Footer.css';

const Footer = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-top"></div>
      <div className="container">
        <div className="footer-content">
          <div className="footer-col">
            <img src="/sabp-logo-transparent.png" alt="SABP Technologies LLP" className="footer-logo" loading="lazy" draggable="false" />
            <p className="footer-tagline">
              Empowering Innovation. Transforming Industries.
            </p>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><a onClick={() => scrollToSection('home')}>Home</a></li>
              <li><a onClick={() => scrollToSection('about')}>About</a></li>
              <li><a onClick={() => scrollToSection('services')}>Services</a></li>
              <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact Info</h4>
            <ul>
              <li><i className="fas fa-phone"></i> 9765056789</li>
              <li><i className="fas fa-phone"></i> 9704233233</li>
              <li><i className="fas fa-envelope"></i> sabptechnologiesllp@gmail.com</li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Business Hours</h4>
            <ul>
              <li>Mon - Fri: 9:30 AM - 5:30 PM</li>
              <li>Saturday: Until 5:30 PM</li>
              <li>Sunday: Closed</li>
            </ul>
            <div className="footer-social">
              <a href="https://www.facebook.com/share/17KBhUr8di/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://www.instagram.com/sabptechnologies" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-created-by">
            Made with <span className="footer-heart">❤️</span> by
            <a
              className="staffarc-link"
              href="https://www.staffarc.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/Staffarc-logo.png"
                alt="StaffArc"
                className="staffarc-mark"
                loading="lazy"
                draggable="false"
              />
              <span className="staffarc-name">StaffArc</span>
            </a>
          </p>
          <p className="footer-copyright">
            &copy; 2026 sabptechnologies.com. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
