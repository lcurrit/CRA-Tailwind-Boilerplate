import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders silversneakers link', () => {
  render(<App />);
  const linkElement = screen.getByText(/SilverSneakers.com/);
  expect(linkElement).toBeInTheDocument();
});
