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
    return {
      html: converter.makeHtml(rawFile),
      // Dropping file extension
      slug: fileName
        .split('.')
        .slice(0, -1)
        .join('.'),
      // Enriching the post data with title and other metadata
      ...converter.getMetadata(),
    }
  })
  // Sorting by date
  .sort((a, b) => new Date(b.date) - new Date(a.date))

const partialSerializer = post => ({
  title: post.title,
  subtitle: post.subtitle,
  slug: post.slug,
  date: post.date,
  readTime: post.readTime,
})

export function get(req, res, next) {
  // the `slug` parameter is available because
  // this file is called [slug].json.js
  const { slug } = req.params

  let contentToSend
  if (slug === 'all') contentToSend = JSON.stringify(posts.map(partialSerializer))
  else {
    const post = posts.find(post => post.slug === slug)
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
