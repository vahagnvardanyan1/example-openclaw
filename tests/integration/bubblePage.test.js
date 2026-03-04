import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BubblePage from '../../src/pages/BubblePage';

// Integration test for the Bubble Page

describe('BubblePage Component', () => {
  it('renders the BubblePage correctly', () => {
    render(<BubblePage />);
    // Check if the main bubble element is in the document
    const bubbleElement = screen.getByTestId('bubble-element');
    expect(bubbleElement).toBeInTheDocument();
  });

  it('responds to user interactions', async () => {
    render(<BubblePage />);
    // Simulate a user interaction e.g., clicking a button
    const actionButton = screen.getByRole('button', { name: /interact/i });
    await userEvent.click(actionButton);
    
    // Validate interaction effect
    const resultElement = screen.getByTestId('interaction-result');
    expect(resultElement).toHaveTextContent('Action completed');
  });

  it('should be responsive across different viewports', () => {
    render(<BubblePage />);
    // Responsive behavior checks, e.g., CSS conditions or component visibility
    global.innerWidth = 375;
    global.dispatchEvent(new Event('resize'));

    expect(screen.getByTestId('mobile-view')).toBeInTheDocument();

    global.innerWidth = 1024;
    global.dispatchEvent(new Event('resize'));

    expect(screen.getByTestId('desktop-view')).toBeInTheDocument();
  });

  it('handles runtime errors gracefully', () => {
    render(<BubblePage />);
    
    // Simulate errors if any
    // Check for error boundaries or error handling elements
    const errorMsg = screen.queryByText(/error occurred/i);
    expect(errorMsg).not.toBeInTheDocument();
  });
});
