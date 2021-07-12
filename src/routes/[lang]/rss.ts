import type { RequestHandler } from '@sveltejs/kit';

import { getFeeds } from '$core/content/getFeed';

const feeds = getFeeds(),
  ruFeed = feeds.ru.rss2(),
  enFeed = feeds.en.rss2();

export const get: RequestHandler = ({ params }) => {
  const { lang } = params;

  return {
    body: lang == 'ru' ? ruFeed : enFeed,
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
    },
  };
};
