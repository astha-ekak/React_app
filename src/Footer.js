import React, { useState } from 'react';
import './Footer.css'; 
import axios from 'axios';
import { Link } from 'react-router-dom';
import NewsletterForm from './NewsletterForm'; // Import the NewsletterForm component

const Footer = () => {
  const footerStyle = { fontFamily: "'Poppins', sans-serif" };
  const lineStyle = { borderTop: '1px solid #ccc', margin: '20px 0' };
  const copyrightStyle = { textAlign: 'right', marginTop: '10px', fontSize: '16px', color: '#333' };
  return (
    <footer className="footer-container">
      <div className="line"></div>
      <div className="footer-content">
        <div className="footer-column">
      
          
          {/* Replace the previous subscription form with NewsletterForm */}
          <NewsletterForm />
          
        </div>
        <div className="footer-column pl-5">
          <h3>Site Map</h3>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/career">Career</Link>
          <a target='_blank' href="https://medium.com/@EkakInn">Blog</a> 
          <Link to="/team">Teams</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="footer-column pl-5">
          <h3>Social</h3>
          <a href="https://www.linkedin.com/company/ekakinn/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://www.facebook.com/EkakInn?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://www.instagram.com/ekak1nn?igsh=d3FhdnRtZTU1NDhw" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://x.com/Ekak1nn?t=TG0nec2gKkL6SNQCh6XFwg&s=09" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
        <div className="footer-column pl-5">
          <h3>Get In Touch</h3>
          <ul style={{ listStyleType: 'none', padding: 0, margin: 0, color: 'black' }}>
            <li>113/216-A Swaroop Nagar,<br />Kanpur,Uttar Pradesh,<br />India-208002</li>
            <li className='emailclass'><span className='spanclass'>Email- </span>contact@ekak.in</li>
          </ul>
        </div>
      </div>

      <div style={lineStyle}></div>
      {/* Add the copyright text */}
      <div style={copyrightStyle}>
        &copy; {new Date().getFullYear()} All rights reserved. Ekak Innovations
      </div>
    </footer>
  );
};

export default Footer;
