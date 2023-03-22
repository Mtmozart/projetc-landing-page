/* eslint-disable */
import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
    Fugit, pariatur architecto! Deleniti aliquid doloribus eveniet laborum,
    iure voluptas non? Nesciunt amet commodi illo deleniti ipsa esse,
    hic minima quibusdam. Deleniti.`,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
