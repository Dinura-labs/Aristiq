import React from 'react';
import styled from 'styled-components';
import logo from '../Assets/Aristiq logo.png';

const LoadingPage = () => {
  return (
    <StyledWrapper>
      <div className="loader">
        <div className='loaderText'>
          Aristiq |  {/* Add space after the text */}
        </div>
        <img src={logo} alt="Logo" className="logo" />        
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;  /* Full viewport height */
  background-color: white;  /* Neutral background for the page */

  .loaderText {
    font-family: "MuseoModerno", serif;
    font-size: 1.5rem;
    font-weight: 500;
    color: #000;
    margin-right: 10px;  /* Add margin to the right of the text to create space */
    animation: blink 4s ease-in-out infinite;  /* Apply blinking animation to text */
  }  

  .loader {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .logo {
    width: 30px;  /* Adjust size of the SVG */
    height: 30px;
    animation: blink 4s ease-in-out infinite;  /* Slower blinking animation with smooth easing */
  }

  /* Smoother Blinking effect: fading in and out */
  @keyframes blink {
    0% {
      opacity: 1;
    }
    40% {
      opacity: 0;  /* Soft fade */
    }
    60% {
      opacity: 0;  /* Maintain the fade */
    }
    100% {
      opacity: 1;
    }
  }
`;

export default LoadingPage;
