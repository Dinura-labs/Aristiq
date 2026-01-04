import React from "react";
import styled from "styled-components";

const FavouritePage = ({ favouriteList, setFavouriteList }) => {
  // Function to remove a property by ID
  const removeFromFavourites = (propertyId) => {
    const updatedList = favouriteList.filter((item) => item.id !== propertyId);
    setFavouriteList(updatedList); // Update the favourites list state
  };

  // Handle drag start event
  const handleDragStart = (event, propertyId) => {
    event.dataTransfer.setData("propertyId", propertyId);
  };

  // Handle drop event
  const handleDrop = (event) => {
    event.preventDefault();
    const propertyId = parseInt(event.dataTransfer.getData("propertyId"), 10);
    if (propertyId) {
      removeFromFavourites(propertyId);
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
          <p>No favourites yet.</p>
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
                    <p>Price: Rs. {property.price}</p>
                    <p>Location: {property.location}</p>
                  </div>
                  <button
                    className="remove-btn"
                    onClick={() => removeFromFavourites(property.id)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
            {/* Clear Favourites Button */}
            <button className="clear-btn" onClick={clearFavourites}>
              Clear Favourites
            </button>
          </>
        )}
        {/* Drop zone */}
        <div
          className="drop-zone"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          Drag here to remove from favourites
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  font-family: "Afacad Flux", serif;

  .favourites {
    margin: 20px auto;
    padding: 20px;
    background-color:rgb(255, 255, 255);
    border-radius: 10px;
    max-width: 1200px;
  }

  h3 {
    margin-bottom: 20px;
    font-size: 24px;
    text-align: center;
    color: #333;
    font-family: "Afacad Flux", serif;
  }

  p {
    color: #555;
    font-family: "Afacad Flux", serif;
  }

  .favourite-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 20px;
  }

  .favourite-card {
    border: 1px solid #ddd;
    border-radius: 10px;
    padding: 20px;
    background-color: #fff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s, box-shadow 0.3s;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .favourite-card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 10px;
    margin-bottom: 15px;
  }

  .card-info h4 {
    font-size: 20px;
    margin-bottom: 10px;
    color:rgb(0, 0, 0);
    font-family: "Afacad Flux", serif;
  }

  .card-info p {
    margin: 5px 0;
    font-size: 16px;
    font-family: "Afacad Flux", serif;
  }

  .favourite-card:hover {
    transform: translateY(-5px);
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.15);
  }

  .remove-btn {
    padding: 10px 20px;
    margin-top: 15px;
    background-color:rgb(0, 0, 0);
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
    transition: background-color 0.3s ease;
    font-family: "Afacad Flux", serif;
  }

  .remove-btn:hover {
    background-color:rgb(36, 36, 36);
  }

  .clear-btn {
    margin-top: 20px;
    padding: 15px;
    background-color:rgb(0, 0, 0);
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s ease;
    display: block;
    margin-left: auto;
    margin-right: auto;
    font-family: "Afacad Flux", serif;
  }

  .clear-btn:hover {
    background-color:rgb(66, 66, 66);
  }

  .drop-zone {
    margin-top: 20px;
    padding: 20px;
    background-color:rgb(0, 0, 0);
    color:rgb(255, 255, 255);
    text-align: center;
    border: 2px dashedrgb(0, 0, 0);
    border-radius: 10px;
    font-size: 18px;
    cursor: pointer;
    font-family: "Afacad Flux", serif;
  }

  .drop-zone:hover {
    background-color:rgb(63, 63, 63);
  }
`;

export default FavouritePage;
