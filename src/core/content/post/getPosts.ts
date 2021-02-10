import { parse } from 'date-fns';

import { Post, PreprocessedSeries, UnfinishedPost } from './types';
import { calcReadTime } from './calcReadTime';
import { convertPost } from './convertPost';
import { getFilesContent } from '@/core/content/common/getFilesContent';

const rootPostSubpath = 'posts';

const getPostByFileContent = (rawFileContent: string, postUrlSlug: string): UnfinishedPost => {
  const { content, meta } = convertPost(rawFileContent, { postUrlSlug });

  return {
    content,
    meta: {
      lang: meta.lang,
      date: parse(meta.date, 'dd.MM.yyyy', new Date()),
      title: meta.title,
      slug: meta.slug || postUrlSlug,
      description: meta.description?.replace(/\\n/g, '<br />'),
      published: !!meta.published,
      announced: !!meta.anounced,
      readTime: calcReadTime(content.length),
      imagePreview: meta.imagePreview,
      emailCollectorMessage: meta.emailCollectorMessage?.replace(/\\n/g, '<br />'),
      series: meta.series,
      registerExtraComponents: meta.registerExtraComponents || [],
    },
  };
};

export const getPosts = (): Post[] => {
  const slugBasedObj = getFilesContent(rootPostSubpath)
    .map(({ fileContent, filenameSlug }) => getPostByFileContent(fileContent, filenameSlug))
    .reduce(
      (acc, post) => ((acc[post.meta.slug] = post), acc),
      {} as { [slug: string]: UnfinishedPost },
    );

  return (
    Object.values(slugBasedObj)
      // We return everything on stage.
      // We only return published on production.
      .filter(post => (process.env.NODE_ENV as string) === 'development' || post.meta.published)
      .sort((a, b) => b.meta.date.getTime() - a.meta.date.getTime())
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
