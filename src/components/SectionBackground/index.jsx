import * as Styled from './styles';
import P from 'prop-types';
import { SectionContainer } from '../SectionContainer';

const randon = () =>
  `id-${Math.random() * 10000}`.replace(/[â-z0-9-__]/gi, '-');

export const SectionBackground = ({
  children,
  background = false,
  sectionId = '',
}) => {
  const id = sectionId ? sectionId : randon();
  return (
    <Styled.Container background={background} id={id}>
      <SectionContainer>{children}</SectionContainer>
    </Styled.Container>
  );
};

SectionBackground.propTypes = {
  children: P.node.isRequired,
  background: P.bool,
  sectionId: P.string,
};
