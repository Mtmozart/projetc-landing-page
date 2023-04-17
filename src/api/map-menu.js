export const mapMenu = (menu = {}) => {
  const {
    open_in_new_tab: newTab = false,
    logo_text: text = '',
    logo_link: link = '',
    /*logo: {
      data: {
        attributes: { url: srcImg = '' },
      },
    } = '',*/
    menu_links: links = [],
  } = menu;

  const srcImg =
    menu.logo && menu.logo.data.attributes.url
      ? menu.logo.data.attributes.url
      : '';
  return {
    newTab,
    text,
    link,
    srcImg,
    links: mapMenuLinks(links),
  };
};

export const mapMenuLinks = (links = []) => {
  return links.map((item) => {
    const {
      open_in_new_tab: newTab = false,
      link_text: children = '',
      url: link = '',
    } = item;

    return {
      newTab,
      children,
      link,
    };
  });
};
