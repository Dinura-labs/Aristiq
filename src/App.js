import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import LoadingPage from './Pages/LoadingPage';
import PropertiesPage from './Pages/PropertiesPage';
import FavouritePage from './Pages/FavouritePage';
import PropertyDetailsPage from './Pages/PropertyDetailsPage';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [favouriteList, setFavouriteList] = useState([]); // Centralized state for favourites

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingPage />
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/properties"
              element={
                <PropertiesPage
                  favouriteList={favouriteList}
                  setFavouriteList={setFavouriteList} // Pass down setFavouriteList
                />
              }
            />
            <Route
              path="/favourites"
              element={
                <FavouritePage
                  favouriteList={favouriteList}
                  setFavouriteList={setFavouriteList} // Pass down setFavouriteList
                />
              }
            />
            <Route path="/properties/:id" element={<PropertyDetailsPage />} />
          </Routes>
        </Router>
      )}
    </>
  );
};

export default App;
