import express from 'express';
import * as sapper from '@sapper/server';

import i18nInitialize from '@/core/i18n';

i18nInitialize();

const { PORT } = process.env;

express()
  .use(express.static('static'))
  .use(sapper.middleware({}) as any)
  .listen(PORT);
