import { useEffect, useState } from 'react';
import { mapData } from '../../api/map-data';
import { Base } from '../Base';
import { mockBase } from '../Base/mock';
import { PageNotFound } from '../PageNotFound';

export const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const load = async () => {
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
    load();
  }, []);

  if (data === undefined) {
    return <PageNotFound />;
  }

  if (data && !data.slug) {
    return <h1>Carregando...</h1>;
  }

  return <Base {...mockBase} />;
};
