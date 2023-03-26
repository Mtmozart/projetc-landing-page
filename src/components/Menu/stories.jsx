import { Menu } from '.';
import linkMock from '../NavLinks/mock';

export default {
  title: 'Menu',
  component: Menu,
  args: {
    links: linkMock,
    logoData: {
      text: 'Logo',
      link: '#target',
      srcImg: '',
    },
  },
};

export const Template = (args) => {
  return (
    <div>
      <Menu {...args} />
    </div>
  );
};
