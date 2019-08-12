import { readFileSync } from 'fs'
import showdown from 'showdown'
import calcReadTime from '../utils/calcReadTime'

const converter = new showdown.Converter({
  metadata: true,
  omitExtraWLInCodeBlocks: true,
  ghCompatibleHeaderId: true,
  headerLevelStart: 2,
  strikethrough: true,
  tables: true,
  simpleLineBreaks: true,
  openLinksInNewWindow: true,
  emoji: true,
})
converter.setFlavor('github')

export function convertMarkdown(rawFile) {
  return {
    html: converter.makeHtml(rawFile),
    meta: converter.getMetadata(),
  }
}

export default function convertMarkdownToPost(filepath, slug) {
  const rawFile = readFileSync(filepath, { encoding: 'utf-8' })
  const { html, meta } = convertMarkdown(rawFile)
  const { published = '0' } = meta

  meta.readTime = calcReadTime(rawFile.length)

  // You need to explicitly set published to 1 to make the post available on production
  if (!parseInt(published) && process.env.NODE_ENV !== 'development') return false

  return {
    html,
    slug,
    // Enriching the post data with title and other metadata
    ...meta,
  }
}
