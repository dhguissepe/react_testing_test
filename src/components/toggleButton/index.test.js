import { render, fireEvent, screen } from '@testing-library/react';
import ToggleButton from '.';

test('shows inactive default message and active onclick event', () => {
  const active = 'Active';
  const inactive = 'Inactive';
  render(<ToggleButton />);
  expect(screen.queryByText(inactive)).toBeInTheDocument();
  expect(screen.queryByText(active)).toBeNull();
  fireEvent.click(screen.getByLabelText(/show/i));
  expect(screen.getByText(active)).toBeInTheDocument();
  expect(screen.queryByText(inactive)).toBeNull();
});
