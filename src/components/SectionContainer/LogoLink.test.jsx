// import { screen } from '@testing-library/react';
import { SectionContainer } from '.';
import { renderTheme } from '../../styles/render-theme';

describe('<SectionContainer />', () => {
  it('should render text logo', () => {
    renderTheme(<SectionContainer />);
  });
});
