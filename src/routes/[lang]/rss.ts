import type { RequestHandler } from '@sveltejs/kit';

import { getFeeds } from '$core/content/getFeed';

const feeds = getFeeds();

export const get: RequestHandler = ({ params }) => {
  const { lang } = params;

  return {
    body: feeds[lang as 'en' | 'ru'].rss2(),
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
    },
  };
};
