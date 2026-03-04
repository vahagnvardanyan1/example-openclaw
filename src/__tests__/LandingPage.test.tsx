import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import LandingPage from '../components/LandingPage';

// Test suite for the LandingPage component
describe('LandingPage Component', () => {
  
  test('should render loading state initially', () => {
    render(<LandingPage />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  test('should render landing page with correct content', async () => {
    render(<LandingPage />);
    const heading = await screen.findByText('Welcome to Our Application');
    expect(heading).toBeInTheDocument();
    expect(screen.getByText('This is the main landing page of the application. More content will be added here soon.')).toBeInTheDocument();
  });

  test('should display error message on data fetch error', async () => {
    jest.spyOn(global, 'fetch').mockImplementation(() =>
      Promise.reject(new Error('Network Error'))
    );
    render(<LandingPage />);
    expect(await screen.findByText('Error: Network Error')).toBeInTheDocument();
    global.fetch.mockRestore();
  });

  test('should ensure button hover effect works correctly', () => {
    render(<LandingPage />);
    const button = document.querySelector('.landing-page button');
    expect(button).toHaveStyle('background-color: #0070f3');
    button?.dispatchEvent(new MouseEvent('mouseover', { bubbles: true }));
    expect(button).toHaveStyle('background-color: #005bb5');
  });

  test('should be responsive', () => {
    render(<LandingPage />);
    expect(document.body).toHaveStyle('min-height: 100vh');
  });
});
