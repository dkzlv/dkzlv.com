import resolve from 'rollup-plugin-node-resolve'
import replace from 'rollup-plugin-replace'
import commonjs from 'rollup-plugin-commonjs'
import svelte from 'rollup-plugin-svelte'
import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'
import config from 'sapper/config/rollup.js'
import pkg from './package.json'
import sveltePreprocess from 'svelte-preprocess'
import sass from 'rollup-plugin-sass'

const mode = process.env.NODE_ENV
const dev = mode === 'development'
const legacy = !!process.env.SAPPER_LEGACY_BUILD

const onwarn = (warning, onwarn) =>
  (warning.code === 'CIRCULAR_DEPENDENCY' && /[/\\]@sapper[/\\]/.test(warning.message)) ||
  onwarn(warning)

const preprocess = sveltePreprocess({
  postcss: true,
  scss: true,
})

export default {
  client: {
    input: config.client.input(),
    output: config.client.output(),
    plugins: [
      replace({
        'process.browser': true,
        'process.env.NODE_ENV': JSON.stringify(mode),
      }),
      resolve({
        browser: true,
      }),
      commonjs(),
      sass(),
      svelte({
        dev,
        preprocess,
        hydratable: true,
        emitCss: true,
      }),

      legacy &&
        babel({
          extensions: ['.js', '.mjs', '.html', '.svelte'],
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

    onwarn,
  },

  server: {
    input: config.server.input(),
    output: config.server.output(),
    plugins: [
      replace({
        'process.browser': false,
        'process.env.NODE_ENV': JSON.stringify(mode),
      }),
      resolve(),
      commonjs(),
      sass(),
      svelte({
        generate: 'ssr',
        dev,
        preprocess,
      }),
    ],
    external: Object.keys(pkg.dependencies).concat(
      require('module').builtinModules || Object.keys(process.binding('natives'))
    ),

    onwarn,
  },

  serviceworker: {
    input: config.serviceworker.input(),
    output: config.serviceworker.output(),
    plugins: [
      replace({
        'process.browser': true,
        'process.env.NODE_ENV': JSON.stringify(mode),
      }),
      resolve(),
      commonjs(),
      !dev && terser(),
    ],

    onwarn,
  },
}
