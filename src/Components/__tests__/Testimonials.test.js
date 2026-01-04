import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Testimonials from '../Testimonials';

test('renders testimonials section and changes testimonial on click', async () => {
  render(<Testimonials />);
  
  // Check if main heading is rendered
  const mainHeading = screen.getByRole('heading', { name: /Testimonials/i });
  expect(mainHeading).toBeInTheDocument();

  // Check if subheading is rendered
  const subheading = screen.getByText(/Let’s hear what our customers have to say/i);
  expect(subheading).toBeInTheDocument();

  // Check initial testimonial text
  const initialTestimonialText = screen.getByText(/"Aristiq” made finding our dream home a breeze! The seamless process and diverse listings ensured we found the perfect match for our needs. Highly recommend for anyone looking to rent or buy!/i);
  expect(initialTestimonialText).toBeInTheDocument();

  // Click on the second customer photo
  const customerPhotos = screen.getAllByRole('img', { name: /Customer/i });
  await userEvent.click(customerPhotos[1]); // Click on the second customer image

  // Check if the testimonial text has changed
  const newTestimonialText = screen.getByText(/"Aristiq” helped us find the best place for our family! Their team was amazing, guiding us through every step, and we are so happy with our new home. Highly recommend this platform for anyone in the market./i);
  expect(newTestimonialText).toBeInTheDocument();
});
