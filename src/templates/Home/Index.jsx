import { MockBase } from '../Base/mock';
import { useEffect, useRef, useState } from 'react';
import { Base } from '../Base';
import { mapData } from '../../api/map-data';
import { PageNotFound } from '../PageNotFound';
import { Loading } from '../Loading';

function Home() {
  const isMounted = useRef(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const load = async () => {
      try {
        const apiData = await fetch(
          'http://localhost:1337/api/pages/1?populate=deep',
        );
        const data = await apiData.json();
        const json = await Object.values(data);
        const { attributes } = await json[0];
        const pageData = await mapData([attributes]);
        //console.log(pageData);
        await setData(pageData[0]);
      } catch (er) {
        setData(undefined);
      }
    };
    if (isMounted.current === true) {
      load();
    }
    return () => {
      isMounted.current = false;
    };
  }, []);

  if (data === undefined) {
    return <PageNotFound />;
  }
  if (data && !data.slug) {
    return <Loading />;
  }

  return <Base {...MockBase} />;
}

export default Home;
