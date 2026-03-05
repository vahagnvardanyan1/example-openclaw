import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ThemeProvider } from '../context/ThemeContext';
import ToggleButton from '../components/ToggleButton';

// Wrapper to provide ThemeContext
const renderWithThemeContext = (ui, { value } = {}) => {
  return render(
    <ThemeProvider>{ui}</ThemeProvider>,
    {}
  );
};

describe('ToggleButton component', () => {
  test('renders without crashing', () => {
    renderWithThemeContext(<ToggleButton />);
    const button = screen.getByRole('button', { name: /Switch to Dark Mode/i });
    expect(button).toBeInTheDocument();
  });

  test('toggles theme from light to dark and back', () => {
    renderWithThemeContext(<ToggleButton />);
    const button = screen.getByRole('button');
    expect(document.body.className).toBe('light');
    fireEvent.click(button);
    expect(document.body.className).toBe('dark');
    fireEvent.click(button);
    expect(document.body.className).toBe('light');
  });
});