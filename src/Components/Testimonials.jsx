import React, { useState } from 'react';
import styled from 'styled-components';

// Sample customer images and testimonials
import customer1 from '../Assets/Person 01.webp';  // Correct path to customer1 image
import customer2 from '../Assets/Person 02.webp';  // Correct path to customer2 image
import customer3 from '../Assets/Person 03.webp';  // Correct path to customer3 image

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 0,
      text: `"Aristiq” made finding our dream home a breeze! The seamless process and diverse listings ensured we found the perfect match for our needs. Highly recommend for anyone looking to rent or buy!`,
      name: "Desy Achchi, Matara",
      image: customer1,
    },
    {
      id: 1,
      text: `"Aristiq” helped us find the best place for our family! Their team was amazing, guiding us through every step, and we are so happy with our new home. Highly recommend this platform for anyone in the market.`,
      name: "Kevin Perera, Colombo",
      image: customer2,
    },
    {
      id: 2,
      text: `"Aristiq” was fantastic in providing options that fit our budget. The user experience is great, and we found exactly what we were looking for! Highly recommend it to anyone.`,
      name: "Maneesha Fernando, Kandy",
      image: customer3,
    },
  ];

  return (
    <StyledWrapper>
      <div className="testimonial-section">
        <h2>Testimonials</h2>
        <p className="subheading">Let’s hear what our customers have to say</p>
        <div className="testimonial-card">
          <p className="testimonial-text">
            {testimonials[activeTestimonial].text}
          </p>
          <div className="customer-info">
            <p className="name">{testimonials[activeTestimonial].name}</p>
            <div className="customer-photos">
              {testimonials.map((testimonial) => (
                <img
                  key={testimonial.id}
                  src={testimonial.image}
                  alt={`Customer ${testimonial.id}`}
                  onClick={() => setActiveTestimonial(testimonial.id)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .testimonial-section {
    font-family: 'Afacad Flux';
    text-align: center;
    margin-top: 50px;
    padding: 40px;
    margin-left: 215px;
    margin-right: 215px;
    background-color:rgb(255, 255, 255);
    border-radius: 8px;
  }

  h2 {
    font-size: 50px;
    font-weight: 500;
    color: #333;
    margin-bottom: 10px;
  }

  .subheading {
    font-size: 30px;
    color: #777;
    margin-bottom: 50px;
  }

  .testimonial-card {
    padding: 20px;
    border-radius: 10px;
  }

  .testimonial-text {
    font-size: 25px;
    font-weight: 200;
    color: #555;
    margin-bottom: 10px;
    line-height: 1.5;
  }

  .customer-info {
    margin-bottom: 20px;
    font-size: 18px;
    color: #333;
  }

  .name {
    font-weight: bold;
  }

  .customer-photos {
    margin-top: 15px;
    display: flex;
    justify-content: center;
    margin-top: 20px;
    gap: 10px;
  }

  .customer-photos img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
    cursor: pointer;
    transition: transform 0.3s ease;
  }

  .customer-photos img:hover {
    transform: scale(1.1);
  }
`;

export default Testimonials;
