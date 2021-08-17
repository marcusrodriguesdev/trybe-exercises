import React from 'react';
import App from './App';
import { fireEvent } from '@testing-library/react';
import renderWithRouter from "./renderWithRouter";

describe('teste de toda aplicacao', () => {
  test('deve renderizar o component app', () => {
    const { getByText } = renderWithRouter(<App />);
    const home = getByText(/Você está na página Início/);
    expect(home).toBeInTheDocument();
  });

  test('deve renderizar o component sobre', () => {
    const { getByText, history } = renderWithRouter(<App/>);
    fireEvent.click(getByText(/Sobre/i));
    const pathname = history.location.pathname;
    expect(pathname).toBe('/about');
    const aboutAll = getByText(/Você está na página Sobre/);
    expect(aboutAll).toBeInTheDocument();
  });
});
