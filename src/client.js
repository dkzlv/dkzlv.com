import * as sapper from '@sapper/app';
import i18nInitialize from 'core/i18n/index.ts';

i18nInitialize();

sapper.start({
  target: document.getElementById('app'),
});
