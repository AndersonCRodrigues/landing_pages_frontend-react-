import { GridTwoColumns } from '../../components/GridTwoColumns';
import { GridContent } from '../../components/GridContent';
import { GridText } from '../../components/GridText';
import { GridImage } from '../../components/GridImage';

import { mapData } from '../../api/map-data';
import dataMock from '../../api/apiMock.json';

import { Base } from '../Base';
import { PageNotFound } from '../PageNotFound';
import { Loading } from '../Loading';

import { useEffect, useState } from 'react';

export const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    /*  const load = async () => {
      try {
        const endPoint =
          'http://localhost:1337/api/pages/?filters[slug]=landing-page&populate=deep';
        const data = await fetch(endPoint);
        const json = await data.json();
        const { attributes } = json.data[0];
        const pageData = mapData([attributes]);
        setData(pageData[0]);
      } catch (e) {
        console.log('deu ruim');
        setData(undefined);
      }
    };
    load(); */
    const { attributes } = dataMock.data[0];
    const pageData = mapData([attributes]);
    console.log(pageData[0]);
    setData(() => pageData[0]);
  }, []);

  if (data === undefined) {
    return <PageNotFound />;
  }

  if (data && !data.slug) {
    return <Loading />;
  }

  const { menu, sections, footerHtml, slug } = data;
  const { links, link, text, srcImg } = menu;

  return (
    <Base
      links={links}
      footerHtml={footerHtml}
      logoData={{ text, link, srcImg }}
    >
      {sections.map((section, index) => {
        const { component } = section;
        const key = `${slug}-${index}`;

        if (component === 'section.section-two-columns') {
          return <GridTwoColumns key={key} {...section} />;
        }

        if (component === 'section.section-content') {
          return <GridContent key={key} {...section} />;
        }

        if (component === 'section.section-grid-text') {
          return <GridText key={key} {...section} />;
        }

        if (component === 'section.section-grid-image') {
          return <GridImage key={key} {...section} />;
        }
      })}
    </Base>
  );
};
