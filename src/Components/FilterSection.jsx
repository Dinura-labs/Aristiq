import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import HouseImage from '../Assets/House.webp';
import ApartmentImage from '../Assets/Apartment.webp';
import CommercialImage from '../Assets/Commercial.webp'; // Import Commercial Image
import WarehouseImage from '../Assets/Warehouse.webp'; // Import Warehouse Image
import bgImage from '../Assets/filterbg.webp';
import properties from '../Properties.json';

const FilterSection = () => {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(10000);
  const [selectedType, setSelectedType] = useState('');
  const [minBedrooms, setMinBedrooms] = useState('');
  const [maxBedrooms, setMaxBedrooms] = useState('');
  const [minDate, setMinDate] = useState('');
  const [maxDate, setMaxDate] = useState('');
  const [location, setLocation] = useState('');
  const [postcodeArea, setPostcodeArea] = useState('');
  const navigate = useNavigate();

  const uniqueLocations = [...new Set(properties.properties.map(p => p.location))];
  const uniquePostcodeAreas = [...new Set(properties.properties.map(p => p.location.split(' ')[0]))];

  const handleMinPriceChange = (e) => {
    const newMinPrice = e.target.value;
    if (newMinPrice > maxPrice) {
      setMaxPrice(newMinPrice);
    }
    setMinPrice(newMinPrice);
  };

  const handleMaxPriceChange = (e) => {
    const newMaxPrice = e.target.value;
    if (newMaxPrice < minPrice) {
      setMinPrice(newMaxPrice);
    }
    setMaxPrice(newMaxPrice);
  };

  const handleTypeChange = (type) => {
    setSelectedType(type === selectedType ? '' : type);
  };

  const handleSearch = () => {
    const queryParams = {};

    if (selectedType) queryParams.type = selectedType;
    if (minPrice > 0) queryParams.minPrice = minPrice;
    if (maxPrice < 10000) queryParams.maxPrice = maxPrice;
    if (minBedrooms) queryParams.minBedrooms = minBedrooms;
    if (maxBedrooms) queryParams.maxBedrooms = maxBedrooms;
    if (minDate) queryParams.minDate = minDate;
    if (maxDate) queryParams.maxDate = maxDate;
    if (location) queryParams.where = location;
    if (postcodeArea) queryParams.postcodeArea = postcodeArea;

    const query = new URLSearchParams(queryParams).toString();
    navigate(`/properties?${query}`);
  };

  return (
    <StyledWrapper>
      <div className="filter-header">
        <h2>Explore Here</h2>
      </div>
      <div className="filter-container">
        <div className="property-type">
          <div className="property-cards">
            <div className="row">
              <div
                className={`property-card ${selectedType === 'House' ? 'selected' : ''}`}
                onClick={() => handleTypeChange('House')}
              >
                <img src={HouseImage} alt="House" />
                <div className="card-title">Houses</div>
              </div>
              <div
                className={`property-card ${selectedType === 'Apartment' ? 'selected' : ''}`}
                onClick={() => handleTypeChange('Apartment')}
              >
                <img src={ApartmentImage} alt="Apartment" />
                <div className="card-title">Apartments</div>
              </div>
            </div>
            <div className="row">
              <div
                className={`property-card ${selectedType === 'Commercial Space' ? 'selected' : ''}`}
                onClick={() => handleTypeChange('Commercial Space')}
              >
                <img src={CommercialImage} alt="Commercial Space" />
                <div className="card-title">Commercial Space</div>
              </div>
              <div
                className={`property-card ${selectedType === 'Warehouse' ? 'selected' : ''}`}
                onClick={() => handleTypeChange('Warehouse')}
              >
                <img src={WarehouseImage} alt="Warehouse" />
                <div className="card-title">Warehouses</div>
              </div>
            </div>
          </div>
        </div>

        <div className="preferences-container">
          <div className="preferences-item">
            <label>Location</label>
            <select onChange={(e) => setLocation(e.target.value)} value={location}>
              <option value="">Any</option>
              {uniqueLocations.map(loc => (
                <option key={loc} value={loc}>{loc}</option>
              ))}
            </select>
          </div>
          <div className="preferences-item">
            <label>Postcode Area</label>
            <select onChange={(e) => setPostcodeArea(e.target.value)} value={postcodeArea}>
              <option value="">Any</option>
              {uniquePostcodeAreas.map(area => (
                <option key={area} value={area}>{area}</option>
              ))}
            </select>
          </div>
          <div className="preferences-item">
            <label>Date Added</label>
            <div className="date-container">
              <input type="date" value={minDate} onChange={(e) => setMinDate(e.target.value)} />
              <span> to </span>
              <input type="date" value={maxDate} onChange={(e) => setMaxDate(e.target.value)} />
            </div>
          </div>
          <div className="preferences-item">
            <label>Price</label>
            <div className="price-container">
              <input
                type="number"
                value={minPrice}
                min="0"
                onChange={handleMinPriceChange}
                className="price-input"
                placeholder="Min"
              />
              <span> - </span>
              <input
                type="number"
                value={maxPrice}
                min="0"
                onChange={handleMaxPriceChange}
                className="price-input"
                placeholder="Max"
              />
            </div>
          </div>
          <div className="preferences-item">
            <label>Bedrooms</label>
            <div className="bedrooms-container">
              <select onChange={(e) => setMinBedrooms(e.target.value)} value={minBedrooms}>
                <option value="">Min</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              <span> - </span>
              <select onChange={(e) => setMaxBedrooms(e.target.value)} value={maxBedrooms}>
                <option value="">Max</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5+</option>
              </select>
            </div>
          </div>
          <div className="preferences-item-btn2">
            <button onClick={handleSearch}>Search</button>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .filter-container {
    margin-top: 80px;
    margin-left: 215px;
    margin-right: 215px;
    display: flex;
    padding:30px;
    background-image: url(${bgImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius:40px;
    gap: 20px;
  }

  .property-type {
    text-align: center;
  }

  .filter-header h2 {
    font-family: 'Afacad Flux', serif;
    font-size: 40px;
    font-weight: 500;
    margin-bottom:-50px;
    text-align: center;
  }

  .property-cards {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .row {
    display: flex;
    gap: 20px;
    justify-content: center;
  }

  .property-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    padding: 0 10px;
    text-align: center;
  }

  .property-card.selected img {
    border: 3px solid rgb(255, 255, 255);
  }

  .property-card img {
    width: 150px;
    height: 150px;
    border-radius: 30px;
    object-fit: cover;
  }

  .card-title {
    font-family: 'Afacad Flux', sans-serif;
    font-size: 20px;
    margin-top: 10px;
    font-weight: 200;
    color: white;
  }

  .preferences-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px 50px;
    justify-content: flex-start;
    font-family: 'Afacad Flux', sans-serif;
  }
  .preferences-item {
    display: flex;
    text-align: left;
    flex-direction: column;
    width: calc(50% - 25px);
  }

  .preferences-item label {
    font-size: 20px;
    color:white;
    font-weight: 200;
    margin-bottom: 15px;
  }

  .preferences-item select,
  .preferences-item input {
    padding: 10px;
    font-size: 15px;
    border: none;
    color: white;
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 10px;
    transition: all 0.3s ease;
    width: 100%;
  }

  .preferences-item input[type="date"]::-webkit-calendar-picker-indicator {
    filter: invert(1);
    cursor: pointer;
  }


  .preferences-item select:hover,
  .preferences-item select:focus,
  .preferences-item input:focus {
    color:rgb(147, 147, 147);
  }

  .price-container, .bedrooms-container, .date-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 5px;
  }

  .price-container span, .bedrooms-container span, .date-container span {
    color: white;
  }

  .price-input, .bedrooms-container select, .date-container input {
    width: 45%;
  }
  
  .preferences-item-btn2 {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
  }

  .preferences-item-btn2 button {
    padding: 10px 20px;
    background-color: #8f440eff; /* Cider Dark Orange */
    backdrop-filter: blur(10px);
    border-radius: 10px;
    color: white;
    border: none;
    cursor: pointer;
    width: auto;
  }

  .preferences-item button:hover {
    background-color: #A0522D; /* Sienna - a darker shade for hover */
  }

   @media (max-width: 768px) {
    .filter-container {
        flex-direction: column;
        margin-left: 20px;
        margin-right: 20px;
    }
    .preferences-item {
        width: 100%;
    }
    .row {
        justify-content: center;
    }
   }

   @media (max-width: 480px) { /* Mobile */
    .filter-container {
      margin-left: 20px;
      margin-right: 20px;
      flex-direction: column;
      padding: 15px;
      gap: 10px;
    }

    .row {
      flex-direction: row;
      align-items: center;
      gap: 10px;
    }

    .property-card img {
      width: 100px;
      height: 100px;
    }

    .card-title {
      font-size: 16px;
    }

    .preferences-item {
      width: 100%;
    }

    .preferences-item label {
      font-size: 14px;
    }

    .price-input, .bedrooms-container select, .date-container input {
      width: 100%;
    }

    .price-container, .bedrooms-container, .date-container {
        flex-direction: column;
        gap: 10px;
        align-items: stretch;
    }

    .preferences-item-btn2 button {
      width: 100%;
    }
  }
`;

export default FilterSection;
