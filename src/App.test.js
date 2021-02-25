import { render, screen } from '@testing-library/react';
import App from './App';

test('renders a headline', () => {
  render(<App />);
  const headline = screen.getByText(/Add a Product/i);
  expect(headline).toBeInTheDocument();
});
