import { readdirSync, existsSync } from 'fs'
import { join } from 'path'
import getPost from './getPost'
import { IPost } from './types'

const rootPostPath = join(process.env.PWD as string, 'src', 'posts')
const posts = readdirSync(rootPostPath, { withFileTypes: true })
  .map(dirent => {
    const multiplePartitions = dirent.isDirectory()

    if (multiplePartitions) {
      const slug = dirent.name
      const filepath = join(rootPostPath, slug)

      if (!existsSync(join(filepath, 'meta.md'))) return

      return getPost(filepath, slug, true)
    } else {
      // This file is not a markdown, so we do not convert it
      if (!dirent.name.endsWith('.md')) return

      const slug = dirent.name
        .split('.')
        .slice(0, -1)
        .join('.')
      const filepath = join(rootPostPath, dirent.name)
      return getPost(filepath, slug)
    }
  })
  // Filtering out posts, that shouldn't be shown on production (drafts)
  .filter(Boolean)
  // Sorting by date
  .sort(
    (a, b) =>
      new Date((b as IPost).meta.date).getTime() -
      new Date((a as IPost).meta.date).getTime(),
  ) as IPost[]

export default posts
