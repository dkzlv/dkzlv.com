import Polyglot from 'node-polyglot'
import { langStore } from './store'

const phrases = {
  en: {
    email: {
      placeholder: 'Drop your burner-email here',
      subscribe: 'Subscribe',
      error100: 'STOP HACKING ME',
      error101: "Smth went wrong. Maybe I'll someday fix. Probably not",
      error102: "Cmon, we both know it's not your email",
      success:
        "All done. Confirm your email and you'll get your portion of spam soon",
      endPostEngagement:
        "Holy shit, you've read it to the very end. Care to subscribe?",
      tooltip: {
        header: "What you'll get?",
        noNudes: 'No nudes or dickpicks, I promise 🤞',
        articles:
          "I'll send you my articles and summaries of other's that I like",
      },
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
      error100: 'Хорош меня хакать, шакал',
      error101:
        'Ой, чёт не сработало. Не знаю, в чём проблема, давай в другой раз',
      error102: 'Да брось, это не твоя почта, чего ты гонишь',
      success: 'Готовченко. Подтверди почту и вскоре получишь уже первый спам',
      endPostEngagement:
        'Божечки-кошечки, безумец, ты дочитал до конца. Ну тогда подпишись что-ли.',
      tooltip: {
        header: 'Что я буду присылать?',
        noNudes: 'Никаких нюдсов и дикпиков, обещаю 🤞',
        articles:
          'Буду присылать свои статьи и иногда сводку чужих, которые мне нравятся',
      },
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
