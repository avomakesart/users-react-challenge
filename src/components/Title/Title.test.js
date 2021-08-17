import { render } from '@testing-library/react';
import { Title } from '..';

describe('Components/Title', () => {
  test('should render the title component correctly', () => {
    const rendered = render(<Title>This is a cool title</Title>);

    expect(rendered.baseElement).toBeInTheDocument();
  });
});
