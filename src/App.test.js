import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('renders without crashing', () => {
    render(<App />);
    expect(screen.getByText(/Rahul Reddy Allu/i)).toBeInTheDocument();
  });

  test('contains navigation elements', () => {
    render(<App />);
    const navElement = screen.getByRole('navigation');
    expect(navElement).toBeInTheDocument();
  });

  test('renders main content', () => {
    render(<App />);
    const mainContent = screen.getByRole('main', { hidden: true });
    expect(mainContent).toBeInTheDocument();
  });

  test('renders footer', () => {
    render(<App />);
    const footer = screen.getByRole('contentinfo');
    expect(footer).toBeInTheDocument();
  });
});
