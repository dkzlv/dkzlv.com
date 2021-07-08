import { getFeeds } from '$core/content/post/feeds';

const feeds = getFeeds();

export const get = (req: any, res: any) => {
  const { lang } = req.params;

  res.writeHead(200, {
    'Content-Type': 'application/rss+xml; charset=utf-8',
  });
  res.end(feeds[lang as 'en' | 'ru'].rss2());
};
