import { Menu } from '.';
import linksMock from '../NavLinks/mock';

export default {
  title: 'Menu',
  component: Menu,
  args: {
    links: linksMock,
    logoData: {
      text: 'Logo',
      link: '#target',
      srcImg: '',
    },
  },
};

export const Templates = (args) => {
  return (
    <div>
      <Menu {...args} />;
    </div>
  );
};
