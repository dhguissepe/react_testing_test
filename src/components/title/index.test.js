import Title from '.';
import { render, screen } from '@testing-library/react';

test('renders text title', () => {
  const title = 'Hello World';
  render(<Title title={title} />);
  const titleText = screen.getByText(title);
  expect(titleText).toBeInTheDocument();
});
