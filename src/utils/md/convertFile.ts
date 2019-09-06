import showdown from 'showdown'
import { IPostMeta, IPost } from './types'

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

export default (rawFile: string): IPost => ({
  content: converter.makeHtml(rawFile),
  meta: (converter.getMetadata() as unknown) as IPostMeta,
})
