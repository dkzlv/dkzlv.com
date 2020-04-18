import feeds from 'core/posts/feeds';

export const get = (req, res) => {
  const { lang } = req.params;

  res.writeHead(200, {
    'Content-Type': 'application/rss+xml; charset=utf-8',
  });
  res.end(feeds[lang].rss2());
};
