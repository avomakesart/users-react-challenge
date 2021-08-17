import { render } from '@testing-library/react';
import { Button } from '..';

describe('Components/Button', () => {
  test('should render the button component correctly with all the props', () => {
    const rendered = render(
      <Button
        onClick={() => console.log('It is working')}
        type='button'
        btnType='primary'
        disabled={false}
      >
        I am a button
      </Button>
    );

    expect(rendered.baseElement).toBeInTheDocument();
  });
});
