import { render } from '@testing-library/react';
import { Container } from '..';

describe('Component/Container', () => {
  test('should render the component correctly with all the props in it', () => {
    const rendered = render(<Container>Hello world</Container>);
    expect(rendered.baseElement).toBeInTheDocument();
  });
});
