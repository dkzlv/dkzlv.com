import marked, { Renderer } from 'marked';
import yaml from 'js-yaml';
import slugify from '@sindresorhus/slugify';

import { rootStaticPath } from 'core/paths';

const metaSplitter = (rawFile) => {
  if (rawFile.slice(0, 3) !== '---') return ['', rawFile];

  var matcher = /\n(\.{3}|-{3})/g;
  var metaEnd = matcher.exec(rawFile);

  return metaEnd
    ? [rawFile.slice(0, metaEnd.index), rawFile.slice(matcher.lastIndex)]
    : ['', rawFile];
};

const renderer = new Renderer();

// Тут добавляем анкорную ссылку на этот заголовок
renderer.heading = (text, level) => {
  // @ts-ignore
  const baseUrl = renderer.options.baseUrl;
  const slug = slugify(text);
  return `
    <a class="anchor" href="${baseUrl}#${slug}" id="${slug}">
      <h${level}>${text}</h${level}>
    </a>`;
};

// Открываем ссылки в новом окне и без утекающего доступа к блогу
renderer.link = (href, _, text) =>
  `<a href="${href}" target="_blank" rel="noopener noreferrer">${text}</a>`;

// Добавляем костыльно поддержку для выделения текста жёлтым фоном
renderer.em = (text) =>
  text.charAt(0) === '#' ? `<mark>${text.slice(1)}</mark>` : `<em>${text}</em>`;

// Adding root image path for posts
renderer.image = (href, title, text) => {
  let out = `<img src="${rootStaticPath}/${href}" alt="${text}"`;
  if (title) {
    out += ` title="${title}"`;
  }
  out += '/>';
  return out;
};

export default (rawFile, opts = {}) => {
  const [rawMeta, text] = metaSplitter(rawFile);
  const { baseUrl, prependLangFromMeta = true } = opts;
  const meta = yaml.safeLoad(rawMeta);

  return {
    content: marked(text, {
      renderer,
      baseUrl: prependLangFromMeta ? `${meta.lang}/${baseUrl}` : baseUrl,
    }),
    meta,
  };
};
