import sveltePreprocess from 'svelte-preprocess';
import path from 'path';
import node from '@sveltejs/adapter-node';
import { mdsvex } from 'mdsvex';
import behead from 'remark-behead';
import containers from 'remark-containers';
import footnotes from 'remark-footnotes';
import slug from 'remark-slug';
import externalLinks from 'remark-external-links';
import { config } from 'dotenv-flow';

config();

const extensions = ['.svelte', '.svx'],
  envVars = ['SITE_SCHEME', 'SITE_HOST', 'SITE_PORT', 'MAILCHIMP_LIST_ID', 'MAILCHIMP_API_KEY'];

export default {
  kit: {
    adapter: node(),
    vite: () => ({
      define: Object.fromEntries(
        envVars.map(key => [`process.env.${key}`, JSON.stringify(process.env[key])]),
      ),
      resolve: {
        alias: {
          $components: path.resolve('src/components'),
          $core: path.resolve('src/core'),
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
