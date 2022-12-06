import MenuLinik from '.';

export default {
  title: 'MenuLinik',
  component: MenuLinik,
  args: {
    children: `Link`,
    link: 'https://www.google.com.br/',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Templates = (args) => {
  return (
    <div style={{ display: 'flex' }}>
      <MenuLinik {...args} />;
    </div>
  );
};
