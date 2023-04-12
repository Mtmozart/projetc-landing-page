import { MockBase } from '../Base/mock';
import { useEffect, useRef } from 'react';
import { Base } from '../Base';
import * as Styled from './styles';
import { mapData } from '../../api/map-data';
function Home() {
  const dataRef = useRef(true);

  useEffect(() => {
    const load = async () => {
      const apiData = await fetch(
        'http://localhost:1337/api/pages/1?populate=deep',
      );
      const data = await apiData.json();
      const json = await Object.values(data);
      const { attributes } = await json[0];
      const pageData = mapData([attributes]);
      dataRef.current = false;
      console.log(pageData);
    };
    load();
  }, []);

  return <Base {...MockBase} />;
}

export default Home;
