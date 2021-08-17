import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const rendered = render(<App />);
  expect(rendered.baseElement).toBeInTheDocument();
});
