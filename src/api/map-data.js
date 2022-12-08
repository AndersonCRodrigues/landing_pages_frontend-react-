import { mapMenu } from './map-menu';
import { mapSections } from './map-sections';

export const mapData = (pagesData = [{}]) => {
  return pagesData.map((data) => {
    const {
      footer_text: footerHtml = '',
      slug = '',
      title = '',
      section = [],
      menu = {},
    } = data;

    return {
      footerHtml,
      slug,
      title,
      section: mapSections(section),
      menu: mapMenu(menu),
    };
  });
};
