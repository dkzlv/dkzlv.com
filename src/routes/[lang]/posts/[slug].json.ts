import type { RequestHandler } from '@sveltejs/kit';

import { getPosts } from '$core/content/getPosts';

export const get: RequestHandler = async ({ params }) => {
  const post = getPosts().find(post => post.lang == params.lang && post.slug == params.slug);

  return { body: { post: post! } };
};
