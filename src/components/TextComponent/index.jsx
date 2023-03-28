import P from 'prop-types';
import * as Styled from './styles';
/* eslint-disable */

export const TextComponent = ({ children }) => {
    return <Styled.Container dangerouslySetInnerHTML={{ __html: children }} />;

};

TextComponent.propTypes = {
  children: P.node.isRequired,
};
