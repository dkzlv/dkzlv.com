import sveltePreprocess from 'svelte-preprocess';
import path from 'path';
import node from '@sveltejs/adapter-node';
import { mdsvex } from 'mdsvex';
import behead from 'remark-behead';
import containers from 'remark-containers';
import footnotes from 'remark-footnotes';
import slug from 'remark-slug';
import externalLinks from 'remark-external-links';

const extensions = ['.svelte', '.svx'];

export default {
  kit: {
    adapter: node(),
    vite: () => ({
      define: {
        'process.env.ROOT_DOMAIN': JSON.stringify(process.env.ROOT_DOMAIN),
      },
      resolve: {
        alias: {
          $components: path.resolve('src/components'),
          $core: path.resolve('src/core'),
          $static: path.resolve('static/static'),
          $utils: path.resolve('src/utils'),
        },
        dedupe: ['svelte'],
      },
    }),
  },
  extensions,
  preprocess: [
    sveltePreprocess({
      sourceMap: true,
      defaults: {
        script: 'typescript',
        /**
         * For now it is meaningless, because we still need to add lang='scss' to every component.
         * Reason: https://github.com/sveltejs/language-tools/issues/747
         *
         * But it is still a little simpler to remember we always have scss everywhere.
         */
        style: 'scss',
      },
      postcss: true,
      scss: {
        prependData: `@import 'src/styles/importable';`,
      },
    }),
    mdsvex({
      extensions,
      remarkPlugins: [
        // Turning h1 into h2, and so on
        [behead, { depth: 1 }],
        containers,
        footnotes,
        slug,
        externalLinks,
      ],
    }),
  ],
};
