import { readdirSync, readFileSync } from 'fs';
import { join } from 'path';

import { Post, PreprocessedSeries, UnfinishedPost } from 'core/types';
import { calcReadTime } from './calcReadTime';
import { convertFile } from './convertFile';

const rootPostPath = join(process.env.PWD as string, 'src', 'posts');

export const getPostByPath = (path: string, postUrlSlug: string): UnfinishedPost => {
  const { content, meta } = convertFile(readFileSync(path, { encoding: 'utf-8' }), {
    postUrlSlug,
  });

  return {
    content,
    meta: {
      lang: meta.lang,
      date: new Date(meta.date),
      title: meta.title,
      slug: meta.slug || postUrlSlug,
      description: meta.description?.replace(/\\n/g, '<br />'),
      published: !!meta.published,
      announced: !!meta.anounced,
      readTime: calcReadTime(content.length),
      imagePreview: meta.imagePreview,
      emailCollectorMessage: meta.emailCollectorMessage?.replace(/\\n/g, '<br />'),
      series: meta.series,
    },
  };
};

export const getPosts = (): Post[] => {
  const slugBasedObj = readdirSync(rootPostPath)
    .filter(filename => filename.endsWith('.md'))
    .reduce((acc, filename) => {
      const filenameSlug = filename.split('.').slice(0, -1).join('.'),
        filepath = join(rootPostPath, filename),
        post = getPostByPath(filepath, filenameSlug);

      acc[post.meta.slug] = post;
      return acc;
    }, {} as { [slug: string]: UnfinishedPost });

  return (
    Object.values(slugBasedObj)
      // We return everything on stage.
      // We only return published on production.
      .filter(post => process.env.NODE_ENV === 'development' || post.meta.published)
      .sort((a, b) => new Date(b.meta.date!).getTime() - new Date(a.meta.date!).getTime())
      .map(({ content, meta }) => {
        let series: PreprocessedSeries | undefined = undefined;
        if (meta.series)
          series = meta.series.map(postSlug => {
            // Referencing itself
            if (!postSlug) return;

            const postFromSeries = slugBasedObj[postSlug];
            if (!postFromSeries)
              throw new Error(`You reference an unknown post ${postSlug} in post ${meta.slug}`);

            return {
              lang: postFromSeries.meta.lang,
              slug: postFromSeries.meta.slug,
              title: postFromSeries.meta.title,
              description: postFromSeries.meta.description,
              announced: postFromSeries.meta.announced,
            };
          });

        return {
          content,
          meta: {
            ...meta,
            series,
          },
        };
      })
  );
};
