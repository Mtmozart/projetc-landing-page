import { screen } from '@testing-library/react';
//import Home from './Index';
//import { renderTheme } from '../../styles/render-theme';

test('renders learn react link', () => {
  // eslint-disable-next-line prettier/prettier
  //const { debug } = renderTheme(<Home />);
  const headingContainer = screen.getByRole('heading', {
    name: 'Hello',
  }).parentElement;
  expect(headingContainer).toMatchSnapshot();
  //expect(headingContainer).toHaveStyleRule('background', 'red');
});
