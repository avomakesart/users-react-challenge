import { render } from '@testing-library/react';
import { Grid } from '..';

describe('Components/Grid', () => {
  test('should the grid works correctly', () => {
    const rendered = render(
      <Grid>
        <p>Item</p>
        <p>Item</p>
        <p>Item</p>
      </Grid>
    );

    expect(rendered.baseElement).toBeInTheDocument();
  });
});
