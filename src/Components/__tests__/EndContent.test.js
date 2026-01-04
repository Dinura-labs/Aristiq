import React from 'react';
import { render, screen } from '@testing-library/react';
import EndContent from '../EndContent';

test('renders main title and contact us button', () => {
  render(<EndContent />);
  
  const titleElement = screen.getByRole('heading', { name: /Aristiq/i });
  expect(titleElement).toBeInTheDocument();

  const contactButton = screen.getByRole('button', { name: /Contact Us/i });
  expect(contactButton).toBeInTheDocument();
});
