import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [tenure, setTenure] = useState('Sale'); // Default to 'Sale'
  const navigate = useNavigate();

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (searchTerm.trim()) {
      params.append('where', searchTerm);
    }
    params.append('tenure', tenure);
    navigate(`/properties?${params.toString()}`);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <StyledWrapper>
      <div className="search-container">
        <select 
          className="search-dropdown" 
          value={tenure} 
          onChange={(e) => setTenure(e.target.value)}
        >
          <option value="Sale">For Sale</option>
          <option value="Rent">For Rent</option>
        </select>
        <input 
          type="text" 
          className="search-input" 
          placeholder="Enter an address, city, neighborhood, or ZIP code."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button className="search-button" onClick={handleSearch}>
          <i className="fas fa-search"></i> {/* FontAwesome search icon */}
        </button>
      </div>
    </StyledWrapper>
  );
};