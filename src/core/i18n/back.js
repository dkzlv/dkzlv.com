import Polyglot from 'node-polyglot';

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
};

let polyglot = new Polyglot({ interpolation: { prefix: '{{', suffix: '}}' } });
const t = (...args) => polyglot.t(...args);

export const setLang = (lang) => {
  polyglot.locale(lang);
  polyglot.extend(phrases[lang]);
};

export default t;
