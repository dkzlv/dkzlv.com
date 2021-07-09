import type { RequestHandler } from '@sveltejs/kit';

import { getPosts } from '$core/content/getPosts';

export const get: RequestHandler = async ({ params }) => {
  const posts = getPosts()
    .filter(post => post.lang == params.lang)
    .map(p => p);

  return { body: posts };
};
