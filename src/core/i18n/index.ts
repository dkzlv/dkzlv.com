import { addMessages, init, getLocaleFromNavigator } from 'svelte-i18n';

import ru from './locales/ru.json';
import en from './locales/en.json';

export const i18nInitialize = () => {
  addMessages('en', en);
  addMessages('ru', ru);

  init({
    fallbackLocale: 'en',
    initialLocale: getLocaleFromNavigator(),
  });
};
