import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="row">
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="fab fa-facebook" aria-label="Facebook"></a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="fab fa-instagram" aria-label="Instagram"></a>
          <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="fab fa-youtube" aria-label="YouTube"></a>
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="fab fa-twitter" aria-label="Twitter"></a>
        </div>
        
        <div className="row">
          <ul>
            <li><a href="mailto:contact@example.com">Contact us</a></li>
            <li><a href="/about">About us</a></li>
            <li><a href="/services">Our services</a></li>
            <li><a href="/privacy-policy">Privacy policy</a></li>
            <li><a href="/terms-and-agreements">Terms and agreements</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
