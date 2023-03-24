import { SectionBackground } from '.';

export default {
  title: 'SectionBackground',
  component: SectionBackground,
  args: {
    children: (
      <div>
        <h1>Section background</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, eius
          consequuntur neque exercitationem, harum aut nihil, illo voluptates
          placeat error ducimus cumque. Perspiciatis a quasi fugiat reiciendis
          consectetur deserunt ex.
        </p>
      </div>
    ),
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <SectionBackground {...args} />
    </div>
  );
};
