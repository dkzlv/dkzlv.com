import { config as dotenvConfig } from 'dotenv';
dotenvConfig();

import path from 'path';
import fs from 'fs';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import commonjs from '@rollup/plugin-commonjs';
import svelte from 'rollup-plugin-svelte';
import babel from 'rollup-plugin-babel';
import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';
import json from '@rollup/plugin-json';
import config from 'sapper/config/rollup.js';
import pkg from './package.json';
import autoPreprocess from 'svelte-preprocess';

const mode = process.env.NODE_ENV;
const dev = mode === 'development';
const legacy = !!process.env.SAPPER_LEGACY_BUILD;

const onwarn = (warning, onwarn) =>
  // Shows up after I added svelte-i18n for some reason, safe to ignore
  warning.code === 'THIS_IS_UNDEFINED' ||
  // Defaults from sapper template: https://github.com/sveltejs/sapper-template/blob/master/rollup.config.js#L14
  (warning.code === 'MISSING_EXPORT' && /'preload'/.test(warning.message)) ||
  (warning.code === 'CIRCULAR_DEPENDENCY' && /[/\\]@sapper[/\\]/.test(warning.message)) ||
  onwarn(warning);

const preprocess = autoPreprocess({
  postcss: true,
  scss: true,
  typescript: {
    transpileOnly: true,
  },
});

const commonReplace = {
  'process.env.NODE_ENV': JSON.stringify(mode),
  'process.env.API_SCHEME': JSON.stringify(process.env.API_SCHEME),
  'process.env.API_HOST': JSON.stringify(process.env.API_HOST),
  'process.env.API_PORT': JSON.stringify(process.env.API_PORT),
  'process.env.SITE_SCHEME': JSON.stringify(process.env.SITE_SCHEME),
  'process.env.SITE_HOST': JSON.stringify(process.env.SITE_HOST),
  'process.env.SITE_PORT': JSON.stringify(process.env.SITE_PORT),
  'process.env.ROOT_STATIC_PATH': JSON.stringify(process.env.ROOT_STATIC_PATH),
};

const watchPostsPlugin = {
  buildStart() {
    const files = fs.readdirSync('./src/posts/');
    files.forEach(file => this.addWatchFile('./src/posts/' + file));
  },
};

export default {
  client: {
    input: config.client.input(),
    output: config.client.output(),
    plugins: [
      watchPostsPlugin,
      replace({
        'process.browser': true,
        ...commonReplace,
      }),
      resolve({
        browser: true,
        customResolveOptions: {
          paths: [path.join(__dirname, 'src')],
        },
      }),
      commonjs(),
      typescript(),
      svelte({
        dev,
        preprocess,
        hydratable: true,
        emitCss: false,
      }),
      json(),

      legacy &&
        babel({
          extensions: ['.js', '.ts', '.mjs', '.html', '.svelte'],
          runtimeHelpers: true,
          exclude: ['node_modules/@babel/**'],
          presets: ['@babel/preset-env'],
          plugins: [
            '@babel/plugin-syntax-dynamic-import',
            [
              '@babel/plugin-transform-runtime',
              {
                useESModules: true,
              },
            ],
          ],
        }),

      !dev &&
        terser({
          module: true,
        }),
    ],

    preserveEntrySignatures: false,
    onwarn,
  },

  server: {
    input: config.server.input(),
    output: config.server.output(),
    plugins: [
      watchPostsPlugin,
      replace({
        'process.browser': false,
        ...commonReplace,
      }),
      resolve({
        customResolveOptions: {
          paths: [path.join(__dirname, 'src')],
        },
      }),
      commonjs(),
      typescript(),
      svelte({
        generate: 'ssr',
        dev,
        preprocess,
      }),
      json(),
    ],
    external: Object.keys(pkg.dependencies).concat(
      require('module').builtinModules || Object.keys(process.binding('natives')),
    ),

    preserveEntrySignatures: 'strict',
    onwarn,
  },
};
