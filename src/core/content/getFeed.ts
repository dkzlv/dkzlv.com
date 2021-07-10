import { Feed } from 'feed';
import { _ } from 'svelte-i18n';
import { get } from 'svelte/store';

import { postPath, rootSitePath } from '$core/paths';
import { getPosts } from './getPosts';
import { i18nInitialize } from '$core/i18n';

const t = (key: string) => get(_)(key) as string,
  feedGenerator = (lang: string) => {
    i18nInitialize(lang);
    const baseLocalizedPath = `${rootSitePath}/${lang}`;

    const feed = new Feed({
      title: 'dkzlv.com',
      description: t('rss.description'),
      id: rootSitePath,
      link: rootSitePath,
      language: lang,
      image: `${rootSitePath}/static/icons/rss.png`,
      favicon: `${rootSitePath}/static/icons/favicon.ico`,
      copyright: '',
      generator: t('rss.generator'),
      feedLinks: {
        rss: `${baseLocalizedPath}/rss`,
      },
      author: {
        name: t('rss.author'),
        link: rootSitePath,
      },
    });
    feed.addCategory(t('rss.category'));

    getPosts()
      .filter(post => post.lang === lang && !post.hidden)
      .forEach(post =>
        feed.addItem({
          title: post.title,
          id: post.slug,
          link: get(postPath)(post.slug),
          description: post.description,
          content: post.description,
          date: new Date(post.date),
        }),
      );

    return feed;
  };

export const getFeeds = () => ({
  ru: feedGenerator('ru'),
  en: feedGenerator('en'),
});
