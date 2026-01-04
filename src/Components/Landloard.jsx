import React from 'react';
import styled from 'styled-components';

// Import the icon from lucide-react
import { SendHorizontal } from 'lucide-react';

// Import the image (replace the placeholder path with the actual one)
import landlordImage from '../Assets/Person 07.webp';  // Adjust path as needed

const Landlord = () => {
  return (
    <StyledWrapper>
      <div className="landlord-container">
        <div className="text-section">
          <h2>Are you a landlord?</h2>
          <p>
            We will guarantee a formidable price for your property. Ready to get started? Send us an email or contact us at +94 763 279 446 to list your property today.
          </p>
          <div className="input-container">
            <input type="text" placeholder="Enter your contact info..." />
            <button>
              <SendHorizontal size={24} />
            </button>
          </div>
        </div>
        <div className="image-section">
          <img src={landlordImage} alt="Landlord" />
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .landlord-container {
    display: flex;
    padding: 50px;
    border-radius: 8px;
    margin-left: 215px;
    margin-right: 215px;
    font-family: 'Afacad Flux';
    align-items: center;
    justify-content: space-between;
    margin-top: 10px;
    margin-bottom: 50px;
  }

  .text-section {
    flex: 1;
    text-align: left;
    padding-right: 20px;
  }

  .text-section h2 {
    font-size: 40px;
    color: #333;
    font-weight: 500;
    margin-bottom: 15px;
  }

  .text-section p {
    font-size: 20px;
    color: #555;
    font-weight: 300;
    margin-bottom: 25px;
  }

  .input-container {
    display: flex;
    align-items: center;
    border: 1px solid rgb(54, 54, 54);
    border-radius: 30px;
    width: 450px;
  }

  .input-container input {
    padding: 15px;
    font-size: 15px;
    margin-left: 20px;
    width: 300px;
    border: none;
    outline: none;
    flex-grow: 1;
    border-radius: 8px;
  }

  .input-container button {
    background-color: transparent;
    color:rgb(25, 25, 25);
    font-size: 20px;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
  }

  .input-container button:hover {
    color: #45a049;
  }

  .image-section img {
    width: 250px;
    height: 250px;
    border-radius: 50%;
    object-fit: cover;
  }

  /* Media Queries */
  @media (max-width: 768px) { /* Tablet */
    .landlord-container {
      flex-direction: column;
      align-items: center;
      margin-left: 50px;
      margin-right: 50px;
      padding: 30px;
    }

    .text-section {
      text-align: center;
      padding-right: 0;
      margin-bottom: 20px;
    }

    .text-section h2 {
      font-size: 32px;
    }

    .text-section p {
      font-size: 18px;
    }

    .input-container {
      width: 100%;
      justify-content: center;
    }

    .input-container input {
      width: 70%;
    }

    .image-section img {
      width: 200px;
      height: 200px;
    }
  }

  @media (max-width: 480px) { /* Mobile */
    .landlord-container {
      flex-direction: column;
      align-items: center;
      margin-left: 20px;
      margin-right: 20px;
      padding: 20px;
    }

    .text-section {
      text-align: center;
      margin-bottom: 15px;
    }

    .text-section h2 {
      font-size: 24px;
    }

    .text-section p {
      font-size: 16px;
    }

    .input-container {
      width: 100%;
    }

    .input-container input {
      width: 65%;
      padding: 10px;
      font-size: 14px;
    }

    .image-section img {
      width: 150px;
      height: 150px;
    }
  }
`;

export default Landlord;
