import { Heading } from '.';

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'O texto está escuro',
  },
  argsTypes: {
    children: { type: 'string' },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export const Light = (args) => {
  return <Heading {...args} />;
};

export const Dark = (args) => {
  return <Heading {...args} />;
};

Light.parameters = {
  backgrounds: {
    default: ' light',
  },
};

Dark.args = {
  children: 'O texto está claro',
  colorDark: false,
  light: false,
};
