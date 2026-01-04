import React from 'react';
import styled from 'styled-components';
import logo from '../Assets/Aristiq logo.png';

// Importing icons from lucide-react
import { Facebook, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <StyledFooter>
      <div className="footer-container">
        {/* Logo */}
        <div className="footer-logo">
          <img src={logo} alt="Logo" className="logo" />  
        </div>

        {/* Quick Links */}
        <div className="quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#houses-rent-colombo">Houses for rent in Colombo</a></li>
            <li><a href="#apartments-rent-colombo">Apartments for rent in Colombo</a></li>
            <li><a href="#commercial-rent">Commercial properties for rent</a></li>
            <li><a href="#commercial-sale-unawatuna">Commercial properties for sale in Unawatuna</a></li>
            <li><a href="#houses-sale-Matara">Houses for sale in Matara</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="contact-info">
          <p><strong>Address:</strong> No54, Imaduwa Road, Ahangama, Matara, Sri Lanka</p>
          <p><strong>Phone:</strong> +94 012 356 789</p>
          <p><strong>Find us on</strong></p>
          <div className="social-icons">
            <a href="https://facebook.com"><Facebook size={24} strokeWidth={1.5}/></a>
            <a href="https://linkedin.com"><Linkedin size={24} strokeWidth={1.5}/></a>
            <a href="https://instagram.com"><Instagram size={24} strokeWidth={1.5}/></a>
          </div>
        </div>
      </div>

      {/* Footer Text */}
      <div className="footer-text">

        <p>2025 by Dinura Sasmitha. All rights reserved</p>
      </div>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  .footer-container {
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
    align-items: flex-start; /* To align items to the top */
    flex-wrap: wrap; /* Allows items to wrap on smaller screens */
  }

  .logo {
    width: 200px;
    height: 200px;
    margin-top: 0px
  }

  .quick-links {
    display: flex;
    flex-direction: column;
    align-items: center; /* Center the links */
    margin-top: 20px;
    text-align: center;
    flex: 1;
  }

  .quick-links h3 {
    font-size: 20px;
    font-weight: bold;
    color: #333;
    margin-top: -15px;
    margin-bottom: 5px;
  }

  .quick-links ul {
    list-style: none;
    padding: 0;
    text-align: center;
  }

  .quick-links ul li {
    margin: 10px 0;
  }

  .quick-links ul li a {
    color:rgb(124, 124, 124);
    text-decoration: none;
  }

  .quick-links ul li a:hover {
    text-decoration: underline;
  }

  .contact-info {
    text-align: right;
  }

  .contact-info p {
    font-size: 14px;
    color: #333;
    margin: 5px 0;
    text-align: right;
  }

  .social-icons a {
    color: rgb(0, 25, 42);
    text-decoration: none;
    padding: 5px;
  }

  .social-icons a:hover {
    color: #2980b9;
  }

  .footer-text {
    border-top: 1px solid rgb(12, 12, 12); /* Adding border above the footer text */
    margin-top: 20px;
    font-family: 'Afacad Flux';
    color:rgb(0, 0, 0);
    margin-bottom: -20px;
  }
`;

export default Footer;
