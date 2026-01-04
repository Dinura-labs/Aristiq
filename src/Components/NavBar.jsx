import React from 'react';
import styled from 'styled-components';

const NavBar = () => {
  
  return (
    <StyledNavbar>
      <div className="navbar-container">
        <div className="brand">Aristiq</div>
        <div className="nav-links">
        <div className='nav-links-main'>
          <a href="/" className="nav-item">Home</a>
          <a href="/properties" className="nav-item">About</a>
          <a href="/properties" className="nav-item">Properties</a>
          <a href="#contact" className="nav-item">Contact Us</a>
        </div>  
          <button className="btn-login">Login</button>
          <button className="btn-create-account">Create an account</button>
        </div>
      </div>
    </StyledNavbar>
  );
};

const StyledNavbar = styled.div`
  .navbar-container {
    height: 50px;
    width: 1250px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 30px;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 50px;
    backdrop-filter: blur(10px);
    position: relative;
    top: 20px;
    left: 20px;
    right: 20px;
    z-index: 100;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    left: 50%;  /* Center the container */
    transform: translateX(-50%); /* Shift it back by 50% of its width */
  }

  .brand {
    font-family: 'MuseoModerno', serif;
    font-size: 1.5rem;
    font-weight: 500;
    color: white;
  }
 .brand a {
    text-decoration: none;
    color: white;
  }
  .nav-links {
    display: flex;
    gap: 20px;
    align-items: center;
  }

  .nav-links-main {
    align-items: center;
    gap: 20px;
    display: flex;
    margin-right: 200px;
}

  .nav-item {
    font-family: "Comfortaa", serif;
    font-size: 1rem;
    font-weight: 200;
    color: white;
    text-decoration: none;
    cursor: pointer;
  }

  .nav-item:hover {
    color:rgba(187, 130, 7, 1);
  }

  .dropdown {
    position: relative;
  }

  .dropdown-btn {    
    font-family: "Comfortaa", serif;
    font-size: 1rem;
    font-weight: 200;
    background: none;
    border: none;
    color: white;
    cursor: pointer;
  }

  .dropdown-content {
    font-family: "Comfortaa", serif;
    font-size: 1rem;
    font-weight: 200;
    display: none;
    position: absolute;
    background-color: #fff;
    min-width: 160px;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  .dropdown:hover .dropdown-content {
    display: block;
  }

  .dropdown-content a {
    padding: 12px 16px;
    text-decoration: none;
    color: #333;
    display: block;
  }

  .dropdown-content a:hover {
    background-color: #ddd;
  }

  .btn-login,
  .btn-create-account {
    font-family: "Comfortaa", serif;
    font-size: 0.8rem;
    font-weight: 200;
    padding: 8px 20px;
    border-radius: 25px;
    cursor: pointer;
  }

  .btn-login {
    border: 1px solid white;
    color: white;
    background: none;
  }

  .btn-login:hover {
    background-color: #333;
    color: #fff;
  }

  .btn-create-account {
    background-color: transparent;
    color: white;
    border: none;
  }

  .btn-create-account:hover {
    color: #444;
  }
`;

export default NavBar;
