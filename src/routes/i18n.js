import Polyglot from 'node-polyglot'
import { langStore } from './store'

const phrases = {
  en: {
    email: {
      placeholder: 'Drop your burner-email here',
      subscribe: 'Subscribe',
    },
    posts: {
      readTime: '{{time}} minute |||| {{time}} minutes',
    },
  },
  ru: {
    email: {
      placeholder: 'Твоя почта для спама',
      subscribe: 'Подписаться',
    },
    posts: {
      readTime: '{{time}} минута |||| {{time}} минуты |||| {{time}} минут',
    },
  },
}

let polyglot = new Polyglot({ interpolation: { prefix: '{{', suffix: '}}' } })
langStore.subscribe(newLang => {
  polyglot.locale(newLang)
  polyglot.extend(phrases[newLang])
})
const t = (...args) => polyglot.t(...args)

export default t
