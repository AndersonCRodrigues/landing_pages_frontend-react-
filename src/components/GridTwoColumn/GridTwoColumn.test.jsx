import { screen } from '@testing-library/react';
import { GridTwoColumn } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<GridTwoColumn />', () => {
  it('should render content', () => {
    const { container } = renderTheme(
      <GridTwoColumn>
        <h1>children</h1>
      </GridTwoColumn>,
    );

});
