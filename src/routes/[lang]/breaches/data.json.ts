import type { RequestHandler } from '@sveltejs/kit';

import { getBreaches } from '$core/content/getBreaches';

export const get: RequestHandler = async ({ params, query }) => {
  const breaches = getBreaches()
    .filter(post => post.lang == params.lang)
    .map(p => p);

  return { body: breaches };
};
