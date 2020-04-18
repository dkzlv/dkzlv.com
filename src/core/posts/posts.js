import { readdirSync } from 'fs';
import { join } from 'path';

import getPost from './getPost';

const rootPostPath = join(process.env.PWD, 'src', 'posts');
const slugBasedObj = {};
for (let filename of readdirSync(rootPostPath)) {
  if (!filename.endsWith('.md')) continue;

  const slug = filename.split('.').slice(0, -1).join('.');
  const filepath = join(rootPostPath, filename);

  const post = getPost(filepath, slug);
  slugBasedObj[post.meta.slug] = post;
}

// Need to provide components with enough data to render "Related" block
for (let [_, post] of Object.entries(slugBasedObj)) {
  if (post.meta.series) {
    post.meta.series = post.meta.series.map((slug) => {
      if (!slug) return;

      const postFromSeries = slugBasedObj[slug];
      if (!postFromSeries)
        throw new Error(`В посте ${_} ссылаешься на неизвестный мне пост ${slug}`);

      return {
        slug: postFromSeries.meta.slug,
        title: postFromSeries.meta.title,
        description: postFromSeries.meta.description,
        announced: postFromSeries.meta.announced,
      };
    });
  }
}

const posts = Object.values(slugBasedObj)
  // We return everything on stage.
  // We only return published on production.
  .filter((post) => process.env.NODE_ENV === 'development' || post.meta.published)
  .sort((a, b) => new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime());

export default posts;
