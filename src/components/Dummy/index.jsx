import P from 'prop-types'
import { Component } from 'react';
import * as Styled from './styles';

export const Dummy = ({children}) => {
  return(
  <Styled.Container>
    <h1>Olá mundo! mudando dummy</h1>
  </Styled.Container>;
  )
};

Dummy.protoTypes = {
  children: P.node.isRequired
}

