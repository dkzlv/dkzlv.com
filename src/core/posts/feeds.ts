import { Feed } from 'feed';
import { _, locale } from 'svelte-i18n';
import { get } from 'svelte/store';

import { getPosts } from './getPosts';
import { rootSitePath } from '../paths';

const t = (key: string) => get(_)(key) as string,
  feedGenerator = (lang: string) => {
    locale.set(lang);
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
      .filter(post => post.meta.lang === lang)
      .forEach(post =>
        feed.addItem({
          title: post.meta.title,
          id: post.meta.slug,
          link: `${baseLocalizedPath}/${post.meta.slug}`,
          description: post.meta.description,
          content: Array.isArray(post.content) ? post.content.join('') : post.content,
          date: post.meta.date,
          image: post.meta.imagePreview,
        }),
      );

    return feed;
  };

export const getFeeds = () => ({
  ru: feedGenerator('ru'),
  en: feedGenerator('en'),
});
