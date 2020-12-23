import { commonGetLeakFactory } from 'core/content/leak/commonGet';

export const get = commonGetLeakFactory<{ slug: 'all' | string }>((leaks, params) => {
  const { slug, lang } = params;

  if (slug == 'all') return leaks;
  return leaks.find(leak => leak.content[lang].slug == slug);
});
