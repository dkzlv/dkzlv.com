const fs = require('fs')
const path = require('path')
const showdown = require('showdown')

const converter = new showdown.Converter({
  metadata: true,
  omitExtraWLInCodeBlocks: true,
  ghCompatibleHeaderId: true,
  strikethrough: true,
  tables: true,
  simpleLineBreaks: true,
  openLinksInNewWindow: true,
  emoji: true,
})
converter.setFlavor('github')

const rootPostPath = path.join(process.env.PWD, 'src', 'posts')
const posts = fs
  .readdirSync(rootPostPath)
  .filter(fileName => fileName.endsWith('.md'))
  .map(fileName => {
    const rawFile = fs.readFileSync(path.join(rootPostPath, fileName), { encoding: 'utf-8' })
    const html = converter.makeHtml(rawFile)
    const meta = converter.getMetadata()

    const { published = '0' } = meta

    // 900 chars per minute on average.
    meta.readTime = Math.round(rawFile.length / 900) || 1

    // You need to explicitly set published to 1 to make the post available on production
    if (!parseInt(published) && process.env.NODE_ENV !== 'development') return false

    return {
      html,
      // Dropping file extension
      slug: fileName
        .split('.')
        .slice(0, -1)
        .join('.'),
      // Enriching the post data with title and other metadata
      ...meta,
    }
  })
  .filter(Boolean)
  // Sorting by date
  .sort((a, b) => new Date(b.date) - new Date(a.date))

const partialSerializer = post => ({
  title: post.title,
  description: post.description,
  slug: post.slug,
  date: post.date,
  readTime: post.readTime,
})

export function get(req, res, next) {
  const { slug, lang } = req.params

  let contentToSend
  if (slug === 'all')
    contentToSend = JSON.stringify(posts.filter(post => post.lang === lang).map(partialSerializer))
  else {
    const post = posts.find(post => post.slug === slug && post.lang === lang)
    if (post) {
      contentToSend = JSON.stringify(post)
    } else {
      res.writeHead(404, {
        'Content-Type': 'application/json',
      })

      res.end(
        JSON.stringify({
          message: `Not found`,
        })
      )
    }
  }

  res.writeHead(200, {
    'Content-Type': 'application/json',
  })
  res.end(contentToSend)
}
