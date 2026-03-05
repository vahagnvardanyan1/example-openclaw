import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';

// Integration test for the entire app

describe('App component', () => {
  test('renders app header', () => {
    render(<App />);
    const header = screen.getByText(/Hello, World!/i);
    expect(header).toBeInTheDocument();
  });

  test('dark mode can be toggled via the button', () => {
    render(<App />);
    const button = screen.getByRole('button', { name: /Toggle Theme/i });
    expect(document.body.style.backgroundColor).toBe('rgb(255, 255, 255)'); // assuming light BG
    fireEvent.click(button);
    expect(document.body.style.backgroundColor).toBe('rgb(0, 0, 0)'); // assuming dark BG
    fireEvent.click(button);
    expect(document.body.style.backgroundColor).toBe('rgb(255, 255, 255)'); // back to light BG
  });

  test('app is accessible with theme toggle', () => {
    render(<App />);
    const button = screen.getByRole('button', { name: /Toggle Theme/i });
    expect(button).toHaveAccessibleName('Toggle Theme');
  });
});
