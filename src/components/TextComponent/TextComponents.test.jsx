import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';
import { TextComponent } from '.';
/* eslint-disable */
describe('<TextComponent />', () => {
  it('should render a text', () => {
    renderTheme(<TextComponent>Children</TextComponent>);
    expect(screen.getByText('Children')).toBeInTheDocument();
  });

  it('should render a text', () => {
    const { container } = renderTheme(<TextComponent>Children</TextComponent>);
    //Quando o componente é muito pequeno
    expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        font-size: 2.4rem;
      }

      <div
        class="c0"
      >
        Children
      </div>
    `);
  });
});
