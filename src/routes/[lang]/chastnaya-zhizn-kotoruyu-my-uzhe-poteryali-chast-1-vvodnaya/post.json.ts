import { join } from 'path'
import commonGet from '../../../utils/commonGet'
import getPost from '../../../core/posts/getPost'
import { RequestHandler } from 'express'

const slug = 'chastnaya-zhizn-kotoruyu-my-uzhe-poteryali-chast-1-vvodnaya'
const rootPostsPath = join(process.env.PWD as string, 'src', 'posts', slug)
const converted = getPost(rootPostsPath, slug, true)

export const get: RequestHandler = (_, res) => commonGet(res, converted)
