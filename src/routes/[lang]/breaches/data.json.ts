import type { RequestHandler } from '@sveltejs/kit';

import { getBreaches } from '$core/content/getBreaches';

export const get: RequestHandler = async ({ params }) => {
  const breaches = getBreaches().filter(post => post.lang == params.lang);

  return { body: breaches };
};
