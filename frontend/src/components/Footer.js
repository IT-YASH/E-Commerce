import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">E-Commerce</div>
      <div className="footer-links">
        <div className="footer-section">
          <h4>Services</h4>
          <ul>
            <li>Order Tracking</li>
            <li>Customer Support</li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Others</h4>
          <ul>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
