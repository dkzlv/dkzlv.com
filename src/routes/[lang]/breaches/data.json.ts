import type { RequestHandler } from '@sveltejs/kit';

import { getBreaches } from '$core/content/getBreaches';

export const get: RequestHandler = async ({ params, query }) => {
  const breaches = getBreaches().filter(post => {
    let res = post.lang == params.lang;
    const org = query.get('org'),
      location = query.get('location'),
      tag = query.get('tag');
    if (org) res = res && post.organization.slug == org;
    else if (location) res = res && post.locations.some(l => l.slug == location);
    else if (tag) res = res && post.tags.some(l => l.slug == tag);

    return res;
  });

  return { body: breaches };
};
