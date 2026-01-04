import React from 'react';
import styled from 'styled-components';
import VillaImage from '../Assets/main.webp';  // Import the image from the Assets folder
import SearchBar from '../Components/SearchBar'; 
import NavBar from '../Components/NavBar';  // Update the import path as needed
import WatermarkImage from '../Assets/Aristiq logo.png';
import FilterSection from '../Components/FilterSection';
import SampleAds from '../Components/SampleAds';
import Testimonials from '../Components/Testimonials';  // Update the import path as needed 
import Landloard from '../Components/Landloard';
import EndContent from '../Components/EndContent';


const HomePage = () => {
  return (
    <StyledWrapper>
        <div className="image-background"></div> {/* Separate div for image styling */}
        <div id="content-1">
          <NavBar />
          <div className="sub-topic">
            The Perfect Place to
          </div>
          <div className="main-topic">
            Discover. Dream. Dwell.
          </div>
          <div className="search-container">
            <SearchBar />
          </div>
        </div>
        <div id="content-2">
        <div className="watermark-container">
          <img src={WatermarkImage} alt="Watermark" className="watermark-image" />
        </div>
          <div className="sub-main-topic">
            Welcome to the World of Dreams
          </div>
          <div className="logo-title">
            Aristiq
          </div>
          <div className='content-type1'>
          “Aristiq” is your ultimate destination for discovering the perfect home, whether you’re looking to rent or buy. We elevate the home search journey, making it seamless, efficient, and truly stress-free. Our platform connects you with properties that reflect your dreams and desires, offering a curated range of options to suit every lifestyle. From cozy apartments in vibrant neighborhoods to spacious family homes and exclusive luxury estates, “Aristiq” offers something for everyone. Explore diverse listings, compare key features, and find your ideal home effortlessly in one place. We’re here to guide you at every step, ensuring you make the best choice for your next move. Your perfect home is just a click away with “Aristiq.”
          </div>
          <div className="stats-container">
            <div className="stat-item">
              <div className="stat-value">+50</div>
              <div className="stat-label">Sellers</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">+300</div>
              <div className="stat-label">Properties</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">+100</div>
              <div className="stat-label">Users</div>
            </div>
          </div>
          <div className="explore-container">
          <div className="explore-text">Explore the Listings</div>
      </div>  
        </div>
          <div id="content-3">
          <FilterSection /> {/* Add FilterSection here */}
          <SampleAds />
          <Testimonials /> {/* Add Testimonials here */}
          <Landloard />
          <EndContent />
         
          </div>
          <div id='content-4'>

          </div>
       
       
       </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  * {
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
  }

  body {
    font-family: "Afacad Flux", serif;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    text-align: center; /* Center the text horizontally */
  }

  #content-1 {
    text-align: center;
    position: relative;
    height: 100vh; /* Full viewport height */
    width: 100%;
  }

  .image-background {
    background-image: url(${VillaImage}); /* Apply background image */
    background-size: cover;
    background-position: center;
    position: absolute;
    padding: 0; 
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1; /* Ensures image stays behind the content */
  }

  .sub-topic {
    margin-top: 280px;
    font-size: 64px;
    font-family: 'Afacad Flux';
    color: #d9d9d9;
    mix-blend-mode: overlay;
    text-align: center;
    display: inline-block;
  }

  .main-topic {
    margin-top: -65px;
    font-size: 136px;
    font-weight: 500;
    font-family: 'Afacad Flux';
    color: rgb(255, 255, 255);
    text-align: center;
    
    display: inline-block;
    
  }

  .search-container {
    margin-top: 50px;
  }
  #content-2 {
    text-align: center;
    position: relative;
    height: 100vh; /* Full viewport height */
    width: 100%;
  }
  
  .watermark-container {
  position: absolute;
  top: 50%;  /* Centers vertically */
  left: 50%;  /* Centers horizontally */
  transform: translate(-50%, -50%);  /* Shifts it back to exact center */
  width: 100%;
  height: 100vh;
  z-index: -1;  /* Keep it behind the content */
}

.watermark-image {
  width: 50%;
  height: 100vh;
  object-fit: cover;  /* Ensure the image covers the entire container */
  opacity: 0.05;  /* Set opacity to make it a watermark */
}

.sub-main-topic {
  font-size: 50px;
  font-weight: 500;
  font-family: 'Afacad Flux';
  color:rgb(0, 0, 0);
  padding-top: 50px;
  }
  
.logo-title {
  font-family: museoModerno;
  font-weight: 500;
  font-size: 50px;
  margin-top: 100px;
  color:rgb(0, 0, 0);
}

.content-type1 {
  font-family:Afacad Flux;
  font-weight: 200;
  font-size: 20px;
  text-align: left;
  padding: 0 215px;
}

.stats-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px; /* Add margin for spacing */
    gap: 30px; /* Space between the items */
  }

  .stat-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    color:rgb(0, 0, 0);
    font-family: "Afacad Flux", serif;
  }

  .stat-value {
    font-size: 48px;
    font-weight: 700;
    color:rgb(0, 0, 0);
  }

  .stat-label {
    margin-left: 15px;
    font-size: 16px;
    font-weight: 500;
  }


   .explore-text {
    margin-top: 100px; /* Add margin for spacing */
    font-size: 20px;
    font-weight: 200;
    font-family: 'Afacad Flux', serif;
    margin-bottom: 10px; /* Add space between text and the arrow */
  }



  #content-3 {
    text-align: center;
    position: relative;
    height: 100vh; /* Full viewport height */
    width: 100%;
  }

  /* Media Queries */
  @media (max-width: 768px) { /* Tablet */
    .sub-topic {
      font-size: 48px;
    }

    .main-topic {
      font-size: 96px;
    }

    .content-type1 {
      font-size: 16px;
      padding: 0 50px;
    }

    .stat-value {
      font-size: 36px;
    }

    .stat-label {
      font-size: 14px;
    }

    .explore-text {
      font-size: 18px;
    }

    .explore-arrow {
      font-size: 40px;
    }
  }

  @media (max-width: 480px) { /* Mobile */
    .sub-topic {
      font-size: 36px;
      margin-top: 200px;
    }

    .main-topic {
      font-size: 64px;
    }

    .content-type1 {
      font-size: 14px;
      padding: 0 20px;
    }

    .stat-value {
      font-size: 24px;
    }

    .stat-label {
      font-size: 12px;
    }

    .explore-text {
      font-size: 16px;
    }


  }
`;

export default HomePage;
