const sveltePreprocess = require('svelte-preprocess')

module.exports = {
  preprocess: sveltePreprocess({
    postcss: true,
    typescript: { transpileOnly: true }
  })
}
