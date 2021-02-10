import type { Request, Response } from 'express';

import { getPosts } from '@/core/content/post/getPosts';
import { lateRenderLeakCount } from '@/core/content/common/renderer';
import { getLeaks } from '@/core/content/leak/getLeaks';

const leaks = getLeaks(),
  posts = getPosts().map(post => {
    return {
      meta: post.meta,
      content: lateRenderLeakCount(leaks.length, post.content),
    };
  });

export const get = (req: Request<{ slug: string; lang: string }>, res: Response) => {
  const { slug, lang } = req.params,
    toSend =
      slug == 'all'
        ? posts.filter(post => post.meta.lang === lang).map(post => post.meta)
        : posts.find(post => post.meta.slug === slug && post.meta.lang === lang);

  if (toSend) res.json(toSend);
  else
    res.status(404).json({
      message: `Not found`,
    });
};
