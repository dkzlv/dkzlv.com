import { readdirSync, existsSync } from 'fs'
import { join } from 'path'
import convertMdPost from '../../utils/convertMdPost'
import commonGet from '../../utils/commonGet'

const rootPostPath = join(process.env.PWD, 'src', 'posts')
const posts = readdirSync(rootPostPath, { withFileTypes: true })
  // returns fullpath to file and slug or nothing
  .map(dirent => {
    let slug
    let filepath

    if (dirent.isDirectory()) {
      slug = dirent.name
      filepath = join(rootPostPath, slug, 'meta.md')

      // There's no meta-file, so this folder is not a post
      if (!existsSync(filepath)) return
    } else {
      // This file is not a markdown, so we do not convert it
      if (!dirent.name.endsWith('.md')) return

      slug = dirent.name
        .split('.')
        .slice(0, -1)
        .join('.')
      filepath = join(rootPostPath, dirent.name)
    }
    return { slug, filepath }
  })
  // Filtering out files and folders that are not posts
  .filter(Boolean)
  .map(({ filepath, slug }) => convertMdPost(filepath, slug))
  // Filtering out posts, that shouldn't be shown on production (drafts)
  .filter(Boolean)
  // Sorting by date
  .sort((a, b) => new Date(b.date) - new Date(a.date))

const partialSerializer = post => {
  const copy = {
    ...post,
  }
  delete copy.html
  return copy
}

export function get(req, res, next) {
  const { slug, lang } = req.params
  let contentToSend

  if (slug === 'all')
    contentToSend = posts.filter(post => post.lang === lang).map(partialSerializer)
  else {
    const post = posts.find(post => post.slug === slug && post.lang === lang)
    if (post) {
      contentToSend = post
    }
  }

  commonGet(res, contentToSend)
}
