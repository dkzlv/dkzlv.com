import type { Request, Response } from 'express';

import { getLeaks } from 'core/content/leak/getLeaks';
import { Leak } from 'core/content/leak/types';

const leaks = getLeaks();

export const commonGetLeakFactory = <T>(
  getLeaks: (leaks: Leak[], params: { lang: string } & T) => Leak[] | Leak | undefined,
) => (req: Request<{ lang: string } & T>, res: Response) => {
  const { lang } = req.params,
    mapToLocale = (leak?: Leak) =>
      leak ? { meta: leak.meta, content: leak.content[lang] } : undefined,
    content = getLeaks(leaks, req.params);

  if (content) res.json(Array.isArray(content) ? content.map(mapToLocale) : mapToLocale(content));
  else
    res.status(404).json({
      message: `Not found`,
    });
};
