import P from 'prop-types';
import * as Styled from './styles';
import { Menu } from '../../api/components/Menu';
import { Footer } from '../../api/components/Footer';
import { GoTop } from '../../api/components/GoTop';

export const Base = ({ links, logoData, footerHtml, children }) => {
  return (
    <>
      <Menu links={links} logoData={logoData} />
      <Styled.Container>
        {children}
        <Footer footerHtml={footerHtml} />
      </Styled.Container>
      <GoTop />
    </>
  );
};

Base.propTypes = {
  children: P.node.isRequired,
  ...Menu.propTypes,
  footerHtml: P.string.isRequired,
};
