import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../Footer';

test('renders footer with quick links', () => {
  render(<Footer />);
  const linkElement = screen.getByText(/Quick Links/i);
  expect(linkElement).toBeInTheDocument();
});
