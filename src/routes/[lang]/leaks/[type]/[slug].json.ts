import { Leak } from 'core/content/leak/types';

import { commonGetLeakFactory } from 'core/content/leak/commonGet';

export const get = commonGetLeakFactory<{ type: 'org' | 'spread' | 'tags'; slug: string }>(
  (leaks, { type, slug }) => {
    let content: Leak | Leak[] | undefined = undefined;
    switch (type) {
      case 'org':
        content = leaks.filter(leak => leak.meta.organization == slug);
        break;

      case 'spread':
      case 'tags':
        content = leaks.filter(leak => leak.meta[type].includes(slug));
        break;

      default:
        break;
    }
    return content;
  },
);
