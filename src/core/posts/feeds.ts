import posts from './posts'
import { Feed } from 'feed'
import t, { setLang, SupportedLangs } from '../i18n/back'
// @ts-ignore
import { baseClientPath } from '../config.js'

const feedGenerator = (lang: SupportedLangs) => {
  setLang(lang)
  const baseLocalizedPath = `${baseClientPath}/${lang}`

  const feed = new Feed({
    title: 'dkzlv.com',
    description: t('rss.description'),
    id: baseClientPath,
    link: baseClientPath,
    language: lang,
    image: `${baseClientPath}/icons/rss.png`,
    favicon: `${baseClientPath}/icons/favicon.ico`,
    generator: t('rss.generator'),
    copyright: '©©©',
    feedLinks: {
      rss: `${baseLocalizedPath}/rss`,
      atom: `${baseLocalizedPath}/atom`,
    },
    author: {
      name: t('rss.author'),
      link: baseClientPath,
    },
  })
  feed.addCategory(t('rss.category'))

  posts
    .filter(post => post.meta.lang === lang)
    .forEach(post =>
      feed.addItem({
        title: post.meta.title,
        id: post.meta.slug,
        link: `${baseLocalizedPath}/${post.meta.slug}`,
        description: post.meta.description,
        content: Array.isArray(post.content)
          ? post.content.join('')
          : post.content,
        date: new Date(post.meta.date),
        image: post.meta.imagePreview,
      }),
    )

  return feed
}

const feeds = {
  ru: feedGenerator('ru'),
  en: feedGenerator('en'),
}

export default feeds
