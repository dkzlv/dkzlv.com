import marked from 'marked';

import { PostMetaFromFile } from './types';
import { MarkedRenderer } from '$core/content/common/renderer';
import { getMetaAndContent } from '$core/content/common/getMetaAndContent';

export const convertPost = (
  rawFile: string,
  opts: { postUrlSlug?: string; prependLangFromMeta?: boolean; lang?: string } = {},
) => {
  const { meta, text } = getMetaAndContent<PostMetaFromFile>(rawFile),
    { postUrlSlug, prependLangFromMeta = true } = opts;

  return {
    content: marked(text, {
      renderer: MarkedRenderer,
      baseUrl: prependLangFromMeta
        ? `${opts.lang || meta.lang}/${meta.slug || postUrlSlug}`
        : postUrlSlug,
    }),
    meta,
  };
};
