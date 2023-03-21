import { Dummy } from '.';

export default {
  title: 'Dummy',
  component: Dummy,
  args: {
    children: 'Dummy',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = () => {
  return (
    <div>
      <Dummy {...args} />
    </div>
  );
};
