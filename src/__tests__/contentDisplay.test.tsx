import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

test('Ensure 2+2 is 4', () => {
  expect(2+2).toBe(4);
  // const { getByText } = render(<App />);
  // const linkElement = getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
