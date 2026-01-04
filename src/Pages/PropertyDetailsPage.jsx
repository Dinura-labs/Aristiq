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