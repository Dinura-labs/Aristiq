import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import NavBar from '../Components/NavBar';
import styled from 'styled-components';
import bgImage from '../Assets/house22.webp';
import propertiesData from '../Properties.json';
import FilterSection from '../Components/FilterSection';
import FavouritesPanel from '../Components/FavouritesPanel';
import EndContent from '../Components/EndContent';
import { Heart, Bed, Bath } from 'lucide-react';

const PropertiesPage = ({ favouriteList, setFavouriteList }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [filteredProperties, setFilteredProperties] = useState([]);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const typeParam = queryParams.get('type');
    const minPriceParam = queryParams.get('minPrice');
    const maxPriceParam = queryParams.get('maxPrice');
    const bedroomsParam = queryParams.get('bedrooms');
    const bathroomsParam = queryParams.get('bathrooms');
        const tenureParam = queryParams.get('tenure');
        const dateAddedParam = queryParams.get('dateAdded');
        const whereParam = queryParams.get('where');
        const postcodeAreaParam = queryParams.get('postcodeArea');
    
        const filtered = propertiesData.properties.filter((property) => {
          const minPrice = parseInt(minPriceParam, 10);
          const maxPrice = parseInt(maxPriceParam, 10);
          const bedrooms = parseInt(bedroomsParam, 10);
          const bathrooms = parseInt(bathroomsParam, 10);
    
          return (
            (!typeParam || property.type.toLowerCase() === typeParam.toLowerCase()) &&
            (!minPriceParam || property.price >= minPrice) &&
            (!maxPriceParam || property.price <= maxPrice) &&
            (!bedroomsParam || property.bedrooms === bedrooms) &&
            (!bathroomsParam || property.bathrooms === bathrooms) &&
            (!tenureParam || property.tenure.toLowerCase().trim() === tenureParam.toLowerCase().trim()) &&
            (!dateAddedParam || checkDateAdded(property.added, dateAddedParam)) &&
            (!whereParam || property.location.toLowerCase().includes(whereParam.toLowerCase())) &&
            (!postcodeAreaParam || property.location.split(' ')[0].toLowerCase() === postcodeAreaParam.toLowerCase())
          );
        });
        setFilteredProperties(filtered);
      }, [location.search]);

  const checkDateAdded = (propertyDate, dateAdded) => {
    const dateMap = {
      'last-week': (new Date() - new Date(propertyDate)) / (1000 * 60 * 60 * 24) <= 7,
      'last-month': (new Date() - new Date(propertyDate)) / (1000 * 60 * 60 * 24) <= 30,
      'this-year': new Date().getFullYear() === new Date(propertyDate).getFullYear(),
    };
    return dateMap[dateAdded];
  };

  const isFavourite = (propertyId) => {
    return favouriteList.some((item) => item.id === propertyId);
  };

  const toggleFavourite = (property) => {
    if (isFavourite(property.id)) {
      setFavouriteList((prev) => prev.filter((item) => item.id !== property.id));
    } else {
      setFavouriteList((prev) => [...prev, property]);
    }
  };

  return (
    <StyledWrapper>
      <div className="image-background">
        <div id="section-1">
          <NavBar />
          <div className="main-topic">Explore Your Dreams
            <br />
            With Us
          </div>
        </div>
        <div id="section-2">
          <FilterSection />
          <div className="search-results-wrapper">
            <div className="search-results">Search Results</div>
          </div>
          <div className="content-wrapper">
            <div className="properties-list">
              {filteredProperties.length > 0 ? (
                filteredProperties.map((property) => (
                  <div 
                    key={property.id} 
                    className="listing-card"
                    draggable="true"
                    onDragStart={(e) => e.dataTransfer.setData("propertyId", property.id)}
                  >
                    <img src={property.picture} alt={property.type} />
                    <div className="favourite-button-container">
                      <button
                        className="favourite-btn"
                        onClick={() => toggleFavourite(property)}
                      >
                        <Heart
                          size={25}
                          strokeWidth={2.5}
                          fill={isFavourite(property.id) ? 'red' : 'white'}
                          color={isFavourite(property.id) ? 'red' : 'white'}
                        />
                      </button>
                    </div>
                    <div className="listing-info">
                      <div className='procard-title'>
                        {property.type} for {property.tenure}
                      </div>
                      <div className='card-des'>
                        {property.description}
                      </div>
                      <div className='card-loc'>
                        {property.location}
                      </div>
                      <div className='card-price'>
                        Rs.{property.price}
                      </div>
                      <div className="property-stats">
                        <span>
                          <Bed size={18} /> {property.bedrooms} Beds
                        </span>
                        <span>
                          <Bath size={18} /> {property.bathrooms} Baths
                        </span>
                      </div>
                      <LearnMoreButton onClick={() => navigate('/properties/' + property.url)}>
                        <span className="btn-txt">Learn more</span>
                      </LearnMoreButton>
                    </div>
                  </div>
                ))
              ) : (
                <p className="no-results">No properties match your search criteria.</p>
              )}
            </div>
            <div className="favourites-panel">
              <FavouritesPanel favouriteList={favouriteList} setFavouriteList={setFavouriteList} />
            </div>
          </div>
        </div>
        <EndContent />
      </div>
    </StyledWrapper>
  );
};

const LearnMoreButton = styled.button`
  background-color: black;
  border: 1px solid black;
  color: white;
  padding: 0; /* Remove padding because height/width will control size */
  height: 35px;
  width: 120px;
  border-radius: 25px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  align-self: center; /* Center the button horizontally */
  margin-top: auto; /* Pushes the button to the bottom */
  display: flex; /* Use flex to center text */
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #D2691E; /* Dark Orange */
    color: white;
    border: 1px solid #D2691E; /* Dark Orange */
  }
`;

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
    text-align: center;
  }

  #section-1 {
    text-align: center;
    position: relative;
    height: 100vh;
    width: 100%;
  }
  .image-background {
    background-image: url(${bgImage});
    background-size: cover;
    background-position: center;
    position: absolute;
    padding: 0;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }

  .main-topic {
    margin-top: 270px;
    font-size: 140px;
    font-weight: 500;
    font-family: 'Afacad Flux';
    color: rgb(255, 255, 255);
    text-align: left;
    display: inline-block;
    mix-blend-mode: overlay;
    opacity: 0;
    transform: translateY(-100%);
    animation: slideDown 3s ease forwards;
  }

  @keyframes slideDown {
    0% {
      opacity: 0;
      transform: translateY(-100%);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  #section-2 {
    margin-top: 50px;
  }

  .content-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0 50px;
    margin-top: 50px;
  }

  .properties-list {
    flex-grow: 1;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
    justify-content: center;
  }

  .favourites-panel {
    width: 400px;
    margin-left: 30px;
  }

  .search-results-wrapper {
    padding: 0 50px;
    margin-top: 100px;
  }

  .search-results {
     font-family: "Afacad Flux", serif;
     font-size:40px;
     font-weight:500;
     margin-bottom: 20px;
     text-align: left;
  }
  .listing-card {
    position: relative;
    background-color: #fff;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    text-align: left;
    transition: all 0.3s ease-in-out;
    width: 300px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.1);

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 25px rgba(0,0,0,0.15);
    }
  }

  .listing-card img {
    width: 100%;
    height: 200px;
    border-radius: 30px 30px 0 0;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  .listing-card:hover img {
    transform: scale(1.05);
  }

  .favourite-button-container {
    position: absolute;
    top: 15px;
    right: 15px;
    z-index: 10;
  }

  .favourite-btn {
    background-color: transparent;
    border: none;
    color: rgb(255, 255, 255);
    border-radius: 50%;
    padding: 10px;
    cursor: pointer;
    transition: transform 0.2s ease;
  }

  .favourite-btn:hover {
    transform: scale(1.1);
    color: rgb(255, 0, 0);
  }
    .procard-title{
    font-size: 24px;
    font-weight: 600;
     color: black;
    margin-bottom: 5px;
    }

    .card-des{
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 15px;
    color: #555;
    }
    .card-loc{
     font-size: 16px;
    font-weight: 400;
    margin-bottom: 20px;
    color: #333;
    }

    .card-price{
     font-size: 28px;
    font-weight: 700;
    margin-bottom: 15px;
    color: #D2691E;
    }
  .listing-info {
    padding: 20px;
    color: black;
    font-family: 'Afacad Flux', sans-serif;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  .listing-info h3 {
    margin-bottom: 10px;
    font-size: 24px;
    font-weight: 600;
  }

  .listing-info p {
    margin-bottom: 10px;
    font-size: 16px;
  }
      .property-stats {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    font-size: 14px;
     color: black;
  }

  .property-stats span {
    display: flex;
    align-items: center;
    gap: 5px;
  }
/* Tablet (max-width: 768px) */
  @media (max-width: 768px) {
    .properties-list {
      margin: 20px;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }

    .search-results {
      margin-left: 20px;
      font-size: 30px;
    }

    .view-favourites-btn {
      margin-right: 20px;
      font-size: 18px;
    }

    .listing-card {
      width: 250px;
    }
  }

  /* Mobile (max-width: 480px) */
  @media (max-width: 480px) {
    .properties-list {
      margin: 10px;
      grid-template-columns: 1fr;
      gap: 15px;
    }

    .search-results {
      margin-left: 10px;
      font-size: 24px;
    }

    .view-favourites-btn {
      margin-right: 10px;
      font-size: 16px;
    }

    .listing-card {
      width: 100%;
    }

    .procard-title {
      font-size: 24px;
       color: black;
    }

    .card-price {
      font-size: 20px;
       color: black;
    }
  }
  
`;

export default PropertiesPage;
