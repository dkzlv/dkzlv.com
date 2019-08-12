import { readdirSync, readFileSync } from 'fs'
import { join } from 'path'
import { convertMarkdown } from '../../../utils/convertMdPost'
import commonGet from '../../../utils/commonGet'

const slug = 'chastnaya-zhizn-kotoruyu-my-uzhe-poteryali-chast-1-vvodnaya'
const rootPostsPath = join(process.env.PWD, 'src', 'posts', slug)

const convertMdWrapper = filename =>
  convertMarkdown(readFileSync(join(rootPostsPath, filename), { encoding: 'utf-8' }))

const postPartitionMatcher = /^[0-9]+\.md$/

const meta = convertMdWrapper('meta.md').meta

const postParts = readdirSync(rootPostsPath)
  .map(filename => {
    if (postPartitionMatcher.test(filename)) {
      return convertMdWrapper(filename).html
    }
  })
  .filter(Boolean)

export function get(req, res, next) {
  const { lang } = req.params
  commonGet(res, { meta, postParts })
}
