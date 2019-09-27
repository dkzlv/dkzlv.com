import { RequestHandler } from 'express'
import feeds from '../../core/posts/feeds'

export const get: RequestHandler = (req, res) => {
  const { lang } = req.params

  res.writeHead(200, {
    'Content-Type': 'application/rss+xml',
  })
  res.end(feeds[lang as keyof typeof feeds].rss2())
}
