import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Battle log label', () => {
  render(<App />);
  const linkElement = screen.getByText(/Battle log/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Battle log label', () => {
  const app = render(<App />);
  const mockCallBack = jest.fn();

  const button = app.container.querySelector('#battle-btn');
  button.click();
  expect(mockCallBack.mock.calls.length).toEqual(1);
});
