import { LeakBackend } from '$core/content/leak/types';

import { commonGetLeakFactory } from '$core/content/leak/commonGet';

export const get = commonGetLeakFactory<{ type: 'org' | 'location' | 'tag'; slug: string }>(
  (leaks, { type, slug, lang }) => {
    let content: LeakBackend[] | undefined = undefined;
    switch (type) {
      case 'org':
        content = leaks.filter(leak => leak.meta.organization.content[lang]?.slug == slug);
        break;

      case 'location':
        content = leaks.filter(leak =>
          leak.meta.locations.map(ent => ent.content[lang].slug).includes(slug),
        );
        break;

      case 'tag':
        content = leaks.filter(leak =>
          leak.meta.tags.map(ent => ent.content[lang].slug).includes(slug),
        );
        break;

      default:
        break;
    }
    return content;
  },
);
