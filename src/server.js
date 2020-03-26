import sirv from 'sirv';
import express from 'express';
import compression from 'compression';
import * as sapper from '@sapper/server';

import i18nInitialize from 'core/i18n/index';

i18nInitialize();

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

const app = express()
  .use(compression({ threshold: 0 }), sirv('static', { dev }))
  .use(sapper.middleware());

app.listen(PORT, (err) => {
  if (err) console.log('error', err);
});
