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
