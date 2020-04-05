import { Feed } from 'feed';
import { get } from 'svelte/store';
import { _, locale, dictionary } from 'svelte-i18n';

import posts from './posts';
import { rootSitePath } from '../paths';

// const t = (key) => get(_(key));

console.log(get(dictionary));

const feedGenerator = (lang) => {
  locale.set(lang);
  const baseLocalizedPath = `${rootSitePath}/${lang}`;

  const feed = new Feed({
    title: 'dkzlv.com',
    // description: t('rss.description'),
    id: rootSitePath,
    link: rootSitePath,
    language: lang,
    image: `${rootSitePath}/static/icons/rss.png`,
    favicon: `${rootSitePath}/static/icons/favicon.ico`,
    // generator: t('rss.generator'),
    feedLinks: {
      rss: `${baseLocalizedPath}/rss`,
    },
    author: {
      // name: t('rss.author'),
      link: rootSitePath,
    },
  });
  // feed.addCategory(t('rss.category'));

  posts
    .filter((post) => post.meta.lang === lang)
    .forEach((post) =>
      feed.addItem({
        title: post.meta.title,
        id: post.meta.slug,
        link: `${baseLocalizedPath}/${post.meta.slug}`,
        description: post.meta.description,
        content: Array.isArray(post.content) ? post.content.join('') : post.content,
        date: new Date(post.meta.date),
        image: post.meta.imagePreview,
      }),
    );

  return feed;
};

const feeds = {
  ru: feedGenerator('ru'),
  en: feedGenerator('en'),
};

export default feeds;
