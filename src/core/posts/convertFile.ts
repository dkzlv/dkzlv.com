import marked, { Renderer } from 'marked';
import yaml from 'js-yaml';
import slugify from '@sindresorhus/slugify';

import { rootStaticPath } from 'core/paths';
import { PostMetaFromFile } from 'core/types';

const metaSplitter = (rawFile: string): [string, string] => {
  if (rawFile.slice(0, 3) !== '---') return ['', rawFile];

  const matcher = /\n(\.{3}|-{3})/g,
    metaEnd = matcher.exec(rawFile);

  return metaEnd
    ? [rawFile.slice(0, metaEnd.index), rawFile.slice(matcher.lastIndex)]
    : ['', rawFile];
};

const renderer = new Renderer();
// Anchor link
renderer.heading = (text, level) => {
  const { baseUrl } = renderer.options,
    titleSlug = slugify(text);

  return `
    <a class="anchor" href="${baseUrl}#${titleSlug}" id="${titleSlug}">
      <h${level}>${text}</h${level}>
    </a>`;
};

// `target=_blank` without security issues
renderer.link = (href, _, text) =>
  `<a href="${href}" target="_blank" rel="noopener noreferrer">${text}</a>`;

// <mark> tag
renderer.em = text =>
  text.charAt(0) == '#' ? `<mark>${text.slice(1)}</mark>` : `<em>${text}</em>`;

// Root image path for posts. Adds "invertable" class to all images except those with
// alt-text starting with `*`
renderer.image = (href, title, text) => {
  const addClass = !text.startsWith('*'),
    alt = text.startsWith('') ? text.slice(1) : text,
    url = `${rootStaticPath}/${href}`;

  return `
  <a href="${url}" target="_blank">
    <img src="${url}" alt=${alt} ${addClass ? 'class="invertable"' : ''} ${
    title ? `title=${title}` : ''
  } />
  </a>
  `;
};

export const convertFile = (
  rawFile: string,
  opts: { postUrlSlug?: string; prependLangFromMeta?: boolean; lang?: string } = {},
) => {
  const [rawMeta, text] = metaSplitter(rawFile),
    { postUrlSlug, prependLangFromMeta = true } = opts,
    meta = yaml.safeLoad(rawMeta) as PostMetaFromFile;

  return {
    content: marked(text, {
      renderer,
      baseUrl: prependLangFromMeta
        ? `${opts.lang || meta.lang}/${meta.slug || postUrlSlug}`
        : postUrlSlug,
    }),
    meta,
  };
};
