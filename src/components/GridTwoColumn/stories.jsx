import { GridTwoColumn } from '.';

export default {
  title: 'GridTwoColumn',
  component: GridTwoColumn,
  args: {
    title: 'Grid two column',
    text: `
      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      Cumque fugit distinctio voluptates, sapiente saepe eveniet tempore sed ab,
      similique autem doloremque incidunt sit deleniti architecto?
      Illum laudantium commodi aut saepe.`,
    srcImg: 'assets/images/javascript.svg',
  },
};

export const Template = (args) => {
  return (
    <div>
      <GridTwoColumn {...args} />;
    </div>
  );
};
