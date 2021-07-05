import marked from 'marked';

import { LeakMetaFromFile } from './types';
import { HeaderRenderer, MarkedRenderer } from '$core/content/common/renderer';
import { getMetaAndContent } from '$core/content/common/getMetaAndContent';

export const convertLeak = (rawFile: string) => {
  const { meta, text } = getMetaAndContent<LeakMetaFromFile>(rawFile);

  const [ruContent, enContent] = text.split('\n---\n').map(localeText => {
    const contentWithoutTitle = localeText
      .split('\n')
      .filter(line => !line.startsWith('# '))
      .join('\n');

    return {
      title: marked(localeText, { renderer: HeaderRenderer }),
      content: marked(contentWithoutTitle, { renderer: MarkedRenderer }),
    };
  });

  return {
    content: { ru: ruContent, en: enContent },
    meta,
  };
};
