import { addMessages, init, getLocaleFromNavigator } from 'svelte-i18n';

import ru from './ru.json';
import en from './en.json';

const i18nInitialize = () => {
  addMessages('en', en);
  addMessages('ru', ru);

  init({
    fallbackLocale: 'en',
    initialLocale: getLocaleFromNavigator(),
  });
};

export default i18nInitialize;
