import * as Styled from './styles';
import { KeyboardArrowUp } from '@styled-icons/material-outlined/KeyboardArrowUp';

export const GoTop = () => {
  /*const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }; Se continuar errado futuramente, usar essa função com handleclick no Styled Container*/
  return (
    <Styled.Container href="#" aria-label="Go to top" title="Go to top">
      <KeyboardArrowUp />
    </Styled.Container>
  );
};
