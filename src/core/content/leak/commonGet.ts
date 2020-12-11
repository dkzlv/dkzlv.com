import type { Request, Response } from 'express';

import { getLeaks } from 'core/content/leak/getLeaks';
import { LeakBackend, LeakClient } from 'core/content/leak/types';
import { lateRenderLeakCount } from '../common/renderer';

const leaks = getLeaks(),
  getEntityWithSingleLang = <Y, T extends { content: { [locale: string]: Y } }>(
    lang: string,
    ent: T,
  ): Omit<T, 'content'> & { content: Y } => {
    const { content, ...rest } = ent;
    return { ...rest, content: content[lang] };
  };

export const commonGetLeakFactory = <T>(
  getLeaks: (
    leaks: LeakBackend[],
    params: { lang: string } & T,
  ) => LeakBackend[] | LeakBackend | undefined,
) => (req: Request<{ lang: string } & T>, res: Response) => {
  const { lang } = req.params,
    mapToLocale = (leak?: LeakBackend): LeakClient | undefined => {
      if (!leak) return;

      const { organization, locations, tags, ...rest } = leak.meta;

      return {
        content: {
          ...leak.content[lang],
          content: lateRenderLeakCount(leaks.length, leak.content[lang].content),
        },
        meta: {
          ...rest,
          organization: getEntityWithSingleLang(lang, organization),
          tags: tags.map(tag => getEntityWithSingleLang(lang, tag)),
          locations: locations.map(loc => getEntityWithSingleLang(lang, loc)),
        },
      };
    },
    content = getLeaks(leaks, req.params);

  if (content) res.json(Array.isArray(content) ? content.map(mapToLocale) : mapToLocale(content));
  else
    res.status(404).json({
      message: `Not found`,
    });
};
