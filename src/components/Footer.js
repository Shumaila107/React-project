import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; // Make sure to create this CSS file

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <Link to="/">Shumaila Tahir</Link>
        </div>
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="footer-social">
          <h3>Connect With Me</h3>
          <div className="social-icons">
            <a href="https://github.com/Shumaila107" target="_blank" rel="noopener noreferrer">GitHub</a>

          </div>
        </div>
        <div className="footer-contact">
          <h3>Contact Info</h3>
          <p>Email: shumailatahir875@gmail.com</p>
          <p>Phone: (416) 554-4934</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Shumaila Tahir. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;