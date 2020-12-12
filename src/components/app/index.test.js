import App from '.';
import { render, screen } from '@testing-library/react';

test('renders text title', () => {
  render(<App />);
  const textElement = screen.getByText(/Hello World/i);
  expect(textElement).toBeInTheDocument();
});
