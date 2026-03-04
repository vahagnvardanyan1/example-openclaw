import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import QAComponent from '../main';

// Test suite for main.tsx

describe('QAComponent', () => {
  it('should render the QA Process Component', () => {
    const { getByText } = render(<QAComponent data="Sample QA data" />);
    expect(getByText('QA Process Component')).toBeInTheDocument();
  });

  it('should handle valid input data', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    render(<QAComponent data="Valid data" />);
    expect(consoleSpy).toHaveBeenCalledWith('Handling QA process with data:', 'Valid data');
    expect(consoleSpy).toHaveBeenCalledWith('QA process completed successfully.');
    consoleSpy.mockRestore();
  });

  it('should throw error for invalid input data', () => {
    const consoleErrorSpy = jest.spyOn(console, 'error');
    render(<QAComponent data={123} /> as any);
    expect(consoleErrorSpy).toHaveBeenCalledWith(expect.stringContaining('Error handling QA process:'));
    consoleErrorSpy.mockRestore();
  });

  it('should trim whitespace from input data', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    render(<QAComponent data="   Trimmed data   " />);
    expect(consoleSpy).toHaveBeenCalledWith('Handling QA process with data:', 'Trimmed data');
    consoleSpy.mockRestore();
  });
});
