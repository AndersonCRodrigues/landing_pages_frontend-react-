import * as Styled from './styles';
import P from 'prop-types';

export default function TextComponent({ children }) {
  return <Styled.Container>{children}</Styled.Container>;
}

TextComponent.propTypes = {
  children: P.node.isRequired,
};
