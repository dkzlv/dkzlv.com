import { readFileSync } from 'fs';
import calcReadTime from './calcReadTime';
import convert from './convertFile';

/**
 * @param path Path to post file
 * @param slug Slug for the post
 */
export default function getPost(path, slug) {
  const { content, meta } = convert(readFileSync(path, { encoding: 'utf-8' }), {
    baseUrl: slug,
  });

  meta.readTime = calcReadTime(content.length);
  meta.description = meta.description.replace(/\\n/g, '<br />');
  meta.emailCollectorMessage = meta.emailCollectorMessage
    ? meta.emailCollectorMessage.replace(/\\n/g, '<br />')
    : '';
  meta.slug = slug;
  // Prifixing with global, because otherwise it causes a warning
  meta.series = global.eval(meta.series) || null;

  return { meta, content };
}
