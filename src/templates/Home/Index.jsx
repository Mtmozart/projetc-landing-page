import { GridTwoColumns } from '../../components/GridTwoColumns';
import { GridContent } from '../../components/GridContent';
import { GridText } from '../../components/GridText';
import { GridImage } from '../../components/GridImage';
import { PageNotFound } from '../PageNotFound';
import { Loading } from '../Loading';
import { useEffect, useRef, useState } from 'react';
import { Base } from '../Base';
import { mapData } from '../../api/map-data';
// eslint-disable-next-line no-unused-vars
import * as Styled from './styles';

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

  const { menu, sections, footerHtml, slug, id } = data;
  const { links, text, link, srcImg } = menu;
  console.log(sections);
  return (
    <Base
      links={links}
      footerHtml={footerHtml}
      logoData={{ text, link, srcImg }}
    >
      {sections.map((section, index) => {
        const { component } = section;
        const key = `${slug}-${index}-${id}`;

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
}

export default Home;
