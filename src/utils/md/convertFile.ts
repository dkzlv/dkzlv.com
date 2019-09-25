import { IPostMeta, IPost } from './types'
import marked from 'marked'
import yaml from 'js-yaml'

const metaSplitter = (rawFile: string): [string, string] => {
  if (rawFile.slice(0, 3) !== '---') return ['', rawFile]

  var matcher = /\n(\.{3}|-{3})/g
  var metaEnd = matcher.exec(rawFile)

  return metaEnd
    ? [rawFile.slice(0, metaEnd.index), rawFile.slice(matcher.lastIndex)]
    : ['', rawFile]
}

export default (rawFile: string): IPost => {
  const [meta, text] = metaSplitter(rawFile)

  return {
    content: marked(text),
    meta: yaml.safeLoad(meta) as IPostMeta,
  }
}
