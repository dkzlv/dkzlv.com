import slugify from '@sindresorhus/slugify';
import { Renderer } from 'marked';

import { rootStaticPath } from 'core/paths';

export const MarkedRenderer = new Renderer();
// Anchor link
MarkedRenderer.heading = (text, level) => {
  const { baseUrl } = MarkedRenderer.options,
    titleSlug = slugify(text);

  return `
    <a class="anchor" href="${baseUrl}#${titleSlug}" id="${titleSlug}">
      <h${level}>${text}</h${level}>
    </a>`;
};

// `target=_blank` without security issues
MarkedRenderer.link = (href, _, text) =>
  `<a href="${href}" target="_blank" rel="noopener noreferrer">${text}</a>`;

// <mark> tag
MarkedRenderer.em = text =>
  text.charAt(0) == '#' ? `<mark>${text.slice(1)}</mark>` : `<em>${text}</em>`;

// Root image path for posts. Adds "invertable" class to all images except those with
// alt-text starting with `*`
MarkedRenderer.image = (href, title, text) => {
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

const leakCountRegex = /class='leaks-db-link'/;
export const lateRenderLeakCount = (count: number, content: string) => {
  while (content.match(leakCountRegex)) {
    content = content.replace(leakCountRegex, `class='leaks-db' data-count='${count}'`);
  }
  return content;
};

const noop = () => '';
// Simplest way to leave <strong>, <em> and <header> only
export const HeaderRenderer = new Renderer();
HeaderRenderer.heading = (text, level) => (level == 1 ? text : '');
HeaderRenderer.text = text => text;
HeaderRenderer.code = noop;
HeaderRenderer.blockquote = noop;
HeaderRenderer.html = noop;
HeaderRenderer.hr = noop;
HeaderRenderer.list = noop;
HeaderRenderer.listitem = noop;
HeaderRenderer.checkbox = noop;
HeaderRenderer.paragraph = noop;
HeaderRenderer.table = noop;
HeaderRenderer.tablerow = noop;
HeaderRenderer.tablecell = noop;
HeaderRenderer.codespan = noop;
HeaderRenderer.br = noop;
HeaderRenderer.del = noop;
HeaderRenderer.link = noop;
HeaderRenderer.image = noop;
