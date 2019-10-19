import commonGet from 'utils/commonGet'
import { IPost } from 'core/posts/types'
import { RequestHandler } from 'express'
import posts from 'core/posts/posts'

const partialSerializer = (post: IPost) => post.meta

export const get: RequestHandler = (req, res) => {
  const { slug, lang } = req.params
  let contentToSend

  if (slug === 'all')
    contentToSend = posts
      .filter(post => (post as IPost).meta.lang === lang)
      .map(partialSerializer)
  else {
    const post = posts.find(
      post => post.meta.slug === slug && post.meta.lang === lang,
    )
    if (post) {
      contentToSend = post
    }
  }
  commonGet(res, contentToSend)
}
