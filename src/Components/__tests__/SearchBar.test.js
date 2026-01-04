import React from 'react';
import { render, screen } from '@testing-library/react';
import NavBar from '../NavBar';

test('renders navigation links', () => {
  render(<NavBar />);
  
  const homeLink = screen.getByText(/Home/i);
  expect(homeLink).toBeInTheDocument();

  const propertiesLink = screen.getByText(/Properties/i);
  expect(propertiesLink).toBeInTheDocument();
});
