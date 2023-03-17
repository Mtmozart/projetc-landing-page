import { Heading } from '.';

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'Náo sei',
  },
  argsTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return <Heading {...args} />;
};
