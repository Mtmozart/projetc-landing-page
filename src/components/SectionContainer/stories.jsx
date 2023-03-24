import { SectionContainer } from '.';

export default {
  title: 'SectionContainer',
  component: SectionContainer,
  args: {
    children: (
      <div>
        <h1>Section Container</h1>
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
    children: { type: ' ' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <SectionContainer {...args} />
    </div>
  );
};
