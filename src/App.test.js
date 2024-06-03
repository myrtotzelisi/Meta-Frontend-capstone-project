import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter } from 'react-router-dom';
import Header from './Components/Header';

test('renders Little Lemon text', () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
  const littleLemonElement = screen.getByText(/little lemon/i);
  expect(littleLemonElement).toBeInTheDocument();
});
