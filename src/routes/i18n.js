import Polyglot from 'node-polyglot'
import { langStore } from './store'

const phrases = {
  en: {
    email: {
      placeholder: 'Drop your burner-email here',
      subscribe: 'Subscribe',
    },
    header: {
      onboard: 'Hey! Get onboard',
      twitter: 'on Twitter',
      sameContent: '— same content, but faster.',
      join: "Or join the newsletter. One email a week if I'm not lazy.",
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
    header: {
      onboard: 'Эй ты! Подписывайся',
      twitter: 'в Твиторе',
      sameContent: '— та же ересь, только 24/7.',
      join:
        'Или пользуй почту. Максимум одно письмо в неделю, если я не ленюсь.',
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
