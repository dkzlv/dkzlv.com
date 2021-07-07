import type { RequestHandler } from '@sveltejs/kit';

import { getBreaches } from '$core/content/getBreaches';

export const get: RequestHandler = async ({ params }) => {
  const breach = getBreaches().find(
    breach => breach.lang == params.lang && breach.slug == params.slug,
  );

  console.log(getBreaches(), params.slug);
  return { body: { breach: breach! } };
};
