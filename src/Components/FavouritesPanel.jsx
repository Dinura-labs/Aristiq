import React from "react";
import styled from "styled-components";
import propertiesData from '../Properties.json';

const FavouritesPanel = ({ favouriteList, setFavouriteList }) => {
  // Function to remove a property by ID
  const removeFromFavourites = (propertyId) => {
    const updatedList = favouriteList.filter((item) => item.id !== propertyId);
    setFavouriteList(updatedList);
  };

  // Handle drag start event
  const handleDragStart = (event, propertyId) => {
    event.dataTransfer.setData("propertyId", propertyId);
  };

  // Handle drop event
  const handleDrop = (event) => {
    event.preventDefault();
    const propertyId = event.dataTransfer.getData("propertyId");
    if (propertyId) {
      const propertyToAdd = propertiesData.properties.find(p => p.id === propertyId);
      if (propertyToAdd && !favouriteList.some(p => p.id === propertyId)) {
        setFavouriteList(prev => [...prev, propertyToAdd]);
      }
    }
  };

  // Allow drop on the drop zone
  const handleDragOver = (event) => {
    event.preventDefault();
  };
  
    // Clear all favourites
  const clearFavourites = () => {
    setFavouriteList([]);
  };

  return (
    <StyledWrapper>
      <div className="favourites">
        <h3>Favourite Properties</h3>
        {favouriteList.length === 0 ? (
          <p className="empty-message">No favourites yet. Add some!</p>
        ) : (
          <>
            <div className="favourite-grid">
              {favouriteList.map((property) => (
                <div
                  key={property.id}
                  className="favourite-card"
                  draggable
                  onDragStart={(e) => handleDragStart(e, property.id)}
                >
                  <img src={property.picture} alt={property.type} />
                  <div className="card-info">
                    <h4>{property.type}</h4>
                    <p>Rs. {property.price}</p>
                  </div>
                  <button
                    className="remove-btn"
                    onClick={() => removeFromFavourites(property.id)}
                  >
                    &times;
                  </button>
                </div>
              ))}
            </div>
            {/* Clear Favourites Button */}
            <button className="clear-btn" onClick={clearFavourites}>
              Clear All
            </button>
          </>
        )}
        {/* Drop zone */}
        <div
          className="drop-zone"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          Drag here to add favourites
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  font-family: "Afacad Flux", serif;
  position: sticky;
  top: 0;
  height: 100%;

  .favourites {
    height: 100%;
    padding: 20px;
    background-color: rgba(255, 255, 255, 0.9);
    border-radius: 15px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
  }

  h3 {
    margin-bottom: 20px;
    font-size: 24px;
    text-align: center;
    color: #333;
    font-family: "Afacad Flux", serif;
  }

  .empty-message {
    text-align: center;
    color: #777;
    margin-top: 20px;
  }

  .favourite-grid {
    flex-grow: 1;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding-right: 10px; /* For scrollbar spacing */
  }

  .favourite-card {
    border: 1px solid #eee;
    border-radius: 10px;
    padding: 10px;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    transition: transform 0.2s, box-shadow 0.2s;
    display: flex;
    align-items: center;
    text-align: left;
  }

  .favourite-card:hover {
    transform: translateY(-2px);
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  }

  .favourite-card img {
    width: 80px;
    height: 60px;
    object-fit: cover;
    border-radius: 5px;
    margin-right: 15px;
  }

  .card-info {
    flex-grow: 1;
  }

  .card-info h4 {
    font-size: 16px;
    margin-bottom: 5px;
    color: #333;
  }

  .card-info p {
    margin: 0;
    font-size: 14px;
    color: #666;
  }

  .remove-btn {
    background-color: transparent;
    color: #aaa;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    font-size: 20px;
    line-height: 1;
    padding: 5px;
    margin-left: 10px;
    transition: color 0.2s;
  }

  .remove-btn:hover {
    color: #e74c3c;
  }

  .clear-btn {
    margin-top: 15px;
    padding: 10px;
    background-color: #e74c3c;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
    transition: background-color 0.3s;
  }

  .clear-btn:hover {
    background-color: #c0392b;
  }

  .drop-zone {
    margin-top: 15px;
    padding: 15px;
    background-color: #f8f8f8;
    color: #999;
    text-align: center;
    border: 2px dashed #ddd;
    border-radius: 10px;
    font-size: 16px;
    transition: background-color 0.2s, border-color 0.2s;
  }

  .drop-zone:hover {
    background-color: #f0f0f0;
    border-color: #ccc;
  }
`;

export default FavouritesPanel;
