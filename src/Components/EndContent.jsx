import React from 'react';
import styled from 'styled-components';
import logo from '../Assets/Aristiq logo.png';

// Importing icons from lucide-react
import { Facebook, Linkedin, Instagram } from 'lucide-react';
// Importing the circle-arrow-up icon from lucide-react
import { ChevronUp } from 'lucide-react';

const EndContent = () => {
  return (
    <StyledWrapper>
      <div className="content-container">
        <div className="title-section">
          <h1>Aristiq </h1>
          <p>Your one-stop destination for property needs</p>
        </div>
        <div className="cta-section">
          <p>Request for more information</p>
          <button>Contact Us</button>
        </div>
        <div className="nav-section">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#explore">Explore</a>
        </div>
        <div className="scroll-up">
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <ChevronUp size={32} />
          </button>
        </div>
      </div>
      <div className="footer-container">
        {/* Logo */}
        <div className="footer-logo">
          <img src={logo} alt="Logo" className="logo" />  
        </div>

        {/* Quick Links */}
        <div className="quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#houses-rent-colombo">Houses for rent in Matara</a></li>
            <li><a href="#apartments-rent-colombo">Apartments for rent in Colombo</a></li>
            <li><a href="#commercial-rent">Commercial properties for rent in Matara</a></li>
            <li><a href="#commercial-sale-unawatuna">Commercial properties for sale in Unawatuna</a></li>
            <li><a href="#houses-sale-Matara">Houses for sale in Matara</a></li>
            <li><a href="#warehouse-rent-colombo">Warehouse for rent in Colombo</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="contact-info">
          <p><strong>Address:</strong> No 67/2, Isadeen Town, Matara</p>
          <p><strong>Email:</strong> info.aristiq@gmail.com</p>
          <p><strong>Phone:</strong> +94 763 279 446</p>
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
        © 2025 Aristiq inc by Dinura Sasmitha. All rights received
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .content-container {
    margin-left: 215px;
    margin-right: 215px;
    padding: 50px;
    text-align: center;
    margin-top: -30px;
    max-width: 800px;
    font-family: 'Afacad Flux';
    margin: 0 auto;
  }

  .title-section {
    margin-bottom: 50px;
  }

  h1 {
    font-size: 55px;
    font-weight: 500;
    font-family: 'museoModerno';
    color: rgb(0, 7, 6);
  }

  p {
    font-size: 40px;
    font-weight: 300;
    color: #7f8c8d;
  }

  .cta-section {
    margin-bottom: 0px;
  }

  .cta-section p {
    font-size: 30px;
    margin-bottom: 10px;
    color: #7f8c8d;
  }

  .cta-section button {
    padding: 12px 30px;
    background-color: rgb(21, 21, 21);
    color: white;
    border: none;
    border-radius: 50px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  .cta-section button:hover {
    background-color: #2980b9;
  }

  .nav-section {
    margin-top:50px;
  }

  .nav-section a {
    margin: 0 15px;
    font-size: 18px;
    color: rgb(137, 137, 137);
    text-decoration: none;
    transition: color 0.3s ease;
  }

  .nav-section a:hover {
    color: #2980b9;
  }

  .scroll-up {
    margin-top: 30px;
    margin-bottom: -50px;
  }

  .scroll-up button {
    font-size: 24px;
    background-color: transparent;
    border: none;
    color:rgb(45, 45, 45);
    cursor: pointer;
  }

  .footer-container {
    display: flex;
    position:relative;
    margin: 0 auto;
    align-items: flex-start; /* To align items to the top */
    flex-wrap: wrap; /* Allows items to wrap on smaller screens */
    padding: 40px;
    text-align: center;
    border-top: 2px solid rgb(36, 36, 36);
    margin-top:50px;
  }

  .logo {
    width: 250px;
    height: 250px;
    margin-top: 0px
  }

  .quick-links {
    display: flex;
    margin-left: 85px;
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
    font-family: 'Afacad Flux';
  }

  .quick-links ul {
    list-style: none;
    padding: 0;
    text-align: center;
    font-family: 'Afacad Flux';
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
    font-family: 'Afacad Flux';
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
    text-align: center;
    margin-top: 40px;
    font-family: 'Afacad Flux';
    color:rgb(0, 0, 0);
    margin-bottom: 20px;
  }
  }

  /* Media Queries */
  @media (max-width: 768px) { /* Tablet */
    .content-container {
      margin-left: 50px;
      margin-right: 50px;
      padding: 30px;
    }

    h1 {
      font-size: 40px;
    }

    p {
      font-size: 30px;
    }

    .cta-section p {
      font-size: 24px;
    }

    .cta-section button {
      padding: 10px 20px;
      font-size: 14px;
    }

    .footer-container {
      flex-direction: column;
      padding: 30px;
    }

    .logo {
      width: 200px;
      height: 200px;
    }

    .quick-links h3 {
      font-size: 18px;
    }

    .quick-links ul li a {
      font-size: 14px;
    }

    .contact-info p {
      font-size: 12px;
    }
  }

  @media (max-width: 480px) { /* Mobile */
    .content-container {
      margin-left: 20px;
      margin-right: 20px;
      padding: 20px;
    }

    h1 {
      font-size: 32px;
    }

    p {
      font-size: 24px;
    }

    .cta-section p {
      font-size: 18px;
    }

    .cta-section button {
      padding: 8px 15px;
      font-size: 12px;
    }

    .footer-container {
      flex-direction: column;
      padding: 20px;
    }

    .logo {
      width: 150px;
      height: 150px;
    }

    .quick-links h3 {
      font-size: 16px;
    }

    .quick-links ul li a {
      font-size: 12px;
    }

    .contact-info p {
      font-size: 10px;
    }
  }
`;

export default EndContent;
