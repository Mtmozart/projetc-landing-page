import { Base } from '.';
import mock, { MockBase } from './mock';
import { GridText } from '../../components/GridText';

export default {
  title: 'Templates/Base',
  component: Base,
  args: MockBase,
};

export const Template = (args) => {
  return (
    <div>
      <Base {...args} />
    </div>
  );
};
