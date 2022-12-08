import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Menu } from '.';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';
import linksMock from '../NavLinks/mock';

const logoData = {
  text: 'logo',
  link: '#target',
};

describe('<Menu />', () => {
  it('should render logo and Main menu nav', () => {
    const { container } = renderTheme(
      <Menu link={linksMock} logoData={logoData} />,
    );

    const heading = screen.getByRole('heading', { name: 'logo' });
    const nav = screen.getByRole('navigation', { name: 'Main menu' });

    expect(heading).toBeInTheDocument();
    expect(nav).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('should render menu mobile and button for open and close the menu', () => {
    renderTheme(<Menu link={linksMock} logoData={logoData} />);

    const button = screen.getByLabelText('Open/Close menu');
    const menuContainer = button.nextSibling;
    const openMenu = screen.getByLabelText('Open menu');

    expect(button).toHaveStyleRule('display', 'none');
    expect(button).toHaveStyleRule('display', 'flex', {
      media: theme.media.lteMedium,
    });

    expect(menuContainer).toHaveStyleRule('opacity', '0', {
      media: theme.media.lteMedium,
    });
    expect(openMenu).toBeInTheDocument();

    userEvent.click(button);
    expect(menuContainer).toHaveStyleRule('opacity', '1', {
      media: theme.media.lteMedium,
    });
    expect(screen.getByLabelText('Close menu')).toBeInTheDocument();

    userEvent.click(menuContainer);
    expect(menuContainer).toHaveStyleRule('opacity', '0', {
      media: theme.media.lteMedium,
    });
    expect(screen.getByLabelText('Open menu')).toBeInTheDocument();
  });

  it('should not render links ', () => {
    const { container } = renderTheme(<Menu logoData={logoData} />);
    const nav = screen.queryByRole('navigation', {
      name: 'Main menu',
    }).firstChild;

    expect(nav).not.toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
