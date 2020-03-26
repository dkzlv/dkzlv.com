import commonGet from 'utils/commonGet';
import posts from 'core/posts/posts';

const partialSerializer = (post) => post.meta;

export const get = (req, res) => {
  const { slug, lang } = req.params;
  let contentToSend;

  if (slug === 'all')
    contentToSend = posts.filter((post) => post.meta.lang === lang).map(partialSerializer);
  else {
    const post = posts.find((post) => post.meta.slug === slug && post.meta.lang === lang);
    if (post) {
      contentToSend = post;
    }
  }
  commonGet(res, contentToSend);
};
