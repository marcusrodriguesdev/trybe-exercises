import React from 'react';
import App from './App';
import renderWithRouter from './renderWithRouter';

test('deve renderizar o component app', () => {
  const { getByText } = renderWithRouter(<App />);
  const home = getByText(/Você está na página Início/);
  expect(home).toBeInTheDocument();
});
