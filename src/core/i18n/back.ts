import Polyglot from 'node-polyglot'

export type SupportedLangs = 'en' | 'ru'

const phrases = {
  en: {
    rss: {
      description: 'Me telling you where you are wrong',
      generator: 'My pretty straight hands',
      category: 'existential bullshit',
      author: 'Dan Kozlov',
    },
  },
  ru: {
    rss: {
      description: 'Рассказываю, где именно ты неправ',
      generator: 'Мои прямые ручки',
      category: 'экзистенциональное дерьмо',
      author: 'Даня Козлов',
    },
  },
}

let polyglot = new Polyglot({ interpolation: { prefix: '{{', suffix: '}}' } })
// @ts-ignore
const t = (...args: any[]) => polyglot.t(...args)

export const setLang = (lang: SupportedLangs) => {
  polyglot.locale(lang)
  polyglot.extend(phrases[lang])
}

export default t
