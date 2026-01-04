import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import propertiesData from '../Properties.json';
import { ArrowLeft } from 'lucide-react';
import floorplanImage from '../Assets/floorplan.webp';

const PropertyDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const property = propertiesData.properties.find((p) => p.id === id);

  if (!property) {
    return <div>Property not found</div>;
  }

  const {
    type,
    tenure,
    longDescription,
    location,
    price,
    images,
  } = property;

  const mapQuery = `https://maps.google.com/maps?q=Colombo,Sri+Lanka&t=&z=13&ie=UTF8&iwloc=&output=embed
`;

  return (
    <StyledWrapper>
      <BackButton onClick={() => navigate(-1)}>
        <ArrowLeft size={20} /> Go Back
      </BackButton>
      <Container>
        <ImageMatarary>
          {images.map((img, index) => (
            <img key={index} src={img} alt={`${type} ${index + 1}`} />
          ))}
        </ImageMatarary>

        <PropertyInfo>
          <h1>{type} for {tenure}</h1>
          <p className="price">Rs.{price}</p>
          <p className="location">{location}</p>
        </PropertyInfo>
        
        <Tabs>
          <TabList>
            <Tab>Description</Tab>
            <Tab>Floor Plan</Tab>
            <Tab>Map</Tab>
          </TabList>

          <TabPanel>
            <p>{longDescription}</p>
          </TabPanel>
          <TabPanel>
            <img src={floorplanImage} alt="Floor Plan" style={{ width: '100%' }} />
          </TabPanel>
          <TabPanel>
            <iframe
              title="Property Location Map"
              width="100%"
              height="450"
              style={{ border: 0 }}
              src={mapQuery}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </TabPanel>
        </Tabs>
      </Container>
    </StyledWrapper>
  );
};

export default PropertyDetailsPage;

const StyledWrapper = styled.div`
  background-color: #f8f9fa;
  min-height: 100vh;
`;

const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  background-color: #3f3f3fff;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  margin: 20px;
  font-size: 16px;
  font-family: 'Afacad Flux';

  &:hover {
    background-color: #000000ff;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const ImageMatarary = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-bottom: 30px;

  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    border-radius: 15px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  }
`;

const PropertyInfo = styled.div`
  margin-bottom: 30px;
  
  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    font-family: 'Afacad Flux';
    margin-bottom: 10px;
  }

  .price {
    font-size: 2rem;
    font-weight: 600;
    color: #D2691E;
    font-family: 'Afacad Flux';
    margin-bottom: 5px;
  }

  .location {
    font-size: 1.5rem;
    font-family: 'Afacad Flux';
    color: #555;
  }
`;
