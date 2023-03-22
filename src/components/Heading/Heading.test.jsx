import { screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { Heading } from '.';
import { renderTheme } from '../../styles/render-theme';
import { theme } from '../../styles/theme';

describe('<Heading />', () => {
  it('should render with default vaule', () => {
    renderTheme(<Heading>Texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'Texto' });

    expect(heading).toHaveStyle({
      color: theme.colors.primaryColor,
      'font-size': theme.font.sizes.xhuge,
      'text-transform': 'none',
    });
  });

  it('should render with white color', () => {
    renderTheme(<Heading colorDark={false}>Texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'Texto' });

    expect(heading).toHaveStyle({
      color: theme.colors.white,
    });
  });

  it('should render correct heading sizes', () => {
    const { rerender } = renderTheme(<Heading size="small">Texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'Texto' });

    expect(heading).toHaveStyle({
      'font-size': theme.font.sizes.medium,
    });
    // text size medium
    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="medium">Texto</Heading>
      </ThemeProvider>,
    );
    expect(screen.getByRole('heading', { name: 'Texto' })).toHaveStyle({
      'font-size': theme.font.sizes.large,
    });
    // text size big
    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="big">Texto</Heading>
      </ThemeProvider>,
    );
    expect(screen.getByRole('heading', { name: 'Texto' })).toHaveStyle({
      'font-size': theme.font.sizes.xlarge,
    });

    //huge
    rerender(
      <ThemeProvider theme={theme}>
        <Heading size="huge">Texto</Heading>
      </ThemeProvider>,
    );
    expect(screen.getByRole('heading', { name: 'Texto' })).toHaveStyle({
      'font-size': theme.font.sizes.xhuge,
    });
  });

  it('should render corrects font-sizes when using mobile', () => {
    // eslint-disable-next-line no-unused-vars
    const { rerender } = renderTheme(<Heading size="huge">Texto</Heading>);
    // eslint-disable-next-line no-unused-vars
    const heading = screen.getByRole('heading', { name: 'Texto' });

    expect(screen.getByRole('heading', { name: 'Texto' })).toHaveStyleRule(
      'font-size',
      theme.font.sizes.xlarge,
      {
        media: theme.media.lteMedium,
      },
    );
  });

  it('should render with uppercase letters', () => {
    renderTheme(<Heading uppercase>Texto</Heading>);
    const heading = screen.getByRole('heading', { name: 'Texto' });

    expect(heading).toHaveStyle({
      'text-transform': 'uppercase',
    });
  });

  it('should render correct heading element', () => {
    const { container } = renderTheme(<Heading as="h6">Texto</Heading>);
    // eslint-disable-next-line no-unused-vars
    const heading = screen.getByRole('heading', { name: 'Texto' });
    const h6 = container.querySelector('h6');
    expect(h6.tagName.toLowerCase()).toBe('h6');
  });
});
