import { join } from 'path'
import commonGet from '../../../utils/commonGet'
import getPost from '../../../utils/md/getPost'

const slug = 'chastnaya-zhizn-kotoruyu-my-uzhe-poteryali-chast-1-vvodnaya'
const rootPostsPath = join(process.env.PWD as string, 'src', 'posts', slug)
const converted = getPost(rootPostsPath, slug, true)

export function get(req: any, res: any) {
  const { lang } = req.params
  commonGet(res, converted)
}
