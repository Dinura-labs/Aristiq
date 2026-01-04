import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import propertyData from '../Properties.json'; // Import the properties JSON file
import bgImage from '../Assets/pattern4.webp';

// Importing icons from lucide-react
import { Bed, Bath, Ruler, ChevronRight } from 'lucide-react';

const SampleAds = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    // Load properties from the imported JSON data
    setProperties(propertyData.properties);
  }, []);

  return (
    <StyledWrapper>
      <div className='Trending-title'>
        Trending Listings
      </div>
      <div className="property-section">
        {/* Rent Properties */}
        <div className="property-type">
          <div className='property-type-header'>
            <div className='property-type-titles'>
              Houses for Rent
            </div>
            <a href="/properties" className="see-more">
              See more <ChevronRight size={15} />
            </a>
          </div>
          <div className="property-cards">
            {/* Display only the first 4 rent properties */}
            {properties
              .filter(prop => prop.type === 'House' && prop.tenure === 'Rent')
              .slice(0, 4)  // Limit to 4 items
              .map((property, index) => (
                <div key={index} className="property-card">
                  {/* Dynamically import image */}
                  <img src={`/PropertyImages/${property.picture}`} alt="Property" />
                  <div className="card-details">
                    <p className="price">Rs. {property.price}</p>
                    <p className="name">{property.name}</p>
                    <p className="address">{property.location}</p>
                    <div className="stats">
                      <span>
                        <Bed size={16} /> {property.bedrooms}
                      </span>
                      <span>
                        <Bath size={16} /> {property.bathrooms}
                      </span>
                      <span>
                        <Ruler size={16} /> {property.size} sq.ft
                      </span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Sale Properties */}
        <div className="property-type">
          <div className='property-type-header'>
            <div className='property-type-titles'>
              Houses for Sale
            </div>
            <a href="/all-properties" className="see-more">
              See more <ChevronRight size={15} />
            </a>
          </div>
          <div className="property-cards">
            {/* Display only the first 4 sale properties */}
            {properties
              .filter(prop => prop.type === 'House' && prop.tenure === 'Sale')
              .slice(0, 4)  // Limit to 4 items
              .map((property, index) => (
                <div key={index} className="property-card">
                  {/* Dynamically import image */}
                  <img src={`/PropertyImages/${property.picture}`} alt="Property" />
                  <div className="card-details">
                    <p className="price">Rs. {property.price}</p>
                    <p className="name">{property.name}</p>
                    <p className="address">{property.location}</p>
                    <div className="stats">
                      <span>
                        <Bed size={16} /> {property.bedrooms}
                      </span>
                      <span>
                        <Bath size={16} /> {property.bathrooms}
                      </span>
                      <span>
                        <Ruler size={16} /> {property.size} sq.ft
                      </span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .property-section {
    font-family: 'Afacad Flux';      
    display: flex;
    flex-direction: column;
    gap: 40px;
    margin-left: 215px;
    margin-right: 215px;
  }

  .Trending-title {
    margin-top: 50px;
    font-size: 40px;
    text-align: left;
    font-weight: 500;
    font-family: 'Afacad Flux';
    margin-left: 215px;
    margin-bottom: 20px;
  }

  .property-type-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .property-type-titles {
    font-size: 25px;
    text-align: left;
    font-family: 'Afacad Flux';
    margin-bottom: 10px;
    font-weight: 300;
  }

  .see-more {
    font-size: 14px;
    font-weight: 300;
    color:rgb(0, 24, 41);
    text-decoration: none;
    display: flex;
    align-items: center;
  }

  .see-more:hover {
    text-decoration: underline;
  }

  .property-cards {
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .property-card {
    width: 250px;
    background-image: url(${bgImage}); /* Using the imported bg image */    background-size: cover; /* Make sure the image covers the container */
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Avoid repeating the image */
    border-radius: 30px;
    overflow: hidden;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0);
    position: relative;
    color: white;
  }

  .property-card img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  transition: opacity 0.6s ease-in-out; /* Smooth transition for opacity change */
  opacity: 0.8; /* Default opacity (darkened image) */
}

.property-card:hover img {
  opacity: 1; /* Full opacity (original image) when hovered */
}


  .card-details {
    padding: 15px;
    text-align: left;
    font-family: 'Afacad Flux';
  }

  .price {
    font-size: 30px;
    font-weight: 600;
    font-family: 'Afacad Flux';
  }

  .name {
    font-size: 16px;
    font-weight: 500;
    font-family: 'Afacad Flux';
  }

  .address {
    font-size: 13px;
    font-weight: 300;
    margin: 10px 0;
    font-family: 'Afacad Flux';
  }

  .stats {
    display: flex;
    gap: 10px;
    font-size: 12px;
  }

  .stats span {
    display: flex;
    align-items: center;
    gap: 5px;
  }
`;

export default SampleAds;
