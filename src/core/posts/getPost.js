import { readFileSync, readdirSync } from 'fs'
import calcReadTime from './calcReadTime'
import convert from './convertFile'
import { join } from 'path'

const postPartitionMatcher = /^[0-9]+\.md$/

const getPostPartitions = (rootPostsPath, lang, slug) =>
  readdirSync(rootPostsPath)
    .map((filename) => {
      if (postPartitionMatcher.test(filename)) {
        return convert(readFileSync(join(rootPostsPath, filename), { encoding: 'utf-8' }), {
          baseUrl: `/${lang}/${slug}`,
          prependLangFromMeta: false,
        }).content
      }
    })
    .filter(Boolean)

/**
 * @param path If multiplePartitions is false, then it's the path to post file. If multiplePartitions is true,
 *             then it's the path to the folder, containing post data
 * @param slug Slug for the post
 * @param multiplePartitions Defines if the passed path is to a meta-file, meaning the post has multiple partitions
 */
export default function getPost(path, slug, multiplePartitions = false) {
  let content, meta

  if (multiplePartitions) {
    meta = convert(readFileSync(join(path, 'meta.md'), { encoding: 'utf-8' })).meta
    content = getPostPartitions(path, meta.lang, slug)
  } else {
    const converted = convert(readFileSync(path, { encoding: 'utf-8' }), {
      baseUrl: slug,
    })
    content = converted.content
    meta = converted.meta
  }

  const { published = '0' } = meta
  meta.readTime = calcReadTime(
    Array.isArray(content)
      ? content.reduce((acc, curr) => {
          acc += curr.length
          return acc
        }, 0)
      : content.length,
  )
  meta.description = meta.description.replace(/\\n/g, '<br />')
  meta.emailCollectorMessage = meta.emailCollectorMessage
    ? meta.emailCollectorMessage.replace(/\\n/g, '<br />')
    : ''
  meta.slug = slug

  // You need to explicitly set published to 1 to make the post available on production
  if (!parseInt(published) && process.env.NODE_ENV !== 'development') return false

  return { meta, content }
}
