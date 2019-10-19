<script>
  import { baseClientPath } from 'core/config.js'

  export let title = ''
  export let description = ''
  export let path = ''
  export let contentType = 'article'
  export let imagePreview = ''
  export let locale = ''

  $: canonicalLocation = `${baseClientPath}/${path}/`
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="title" content={title} />
  <meta name="twitter:title" content={title} />
  <meta property="og:title" content={title} />

  <meta name="twitter:site" content={baseClientPath} />
  <meta property="og:site_name" content={baseClientPath} />
  <meta itemprop="name" content={baseClientPath} />

  <meta name="description" content={description} />
  <meta name="twitter:description" content={description} />
  <meta property="og:description" content={description} />
  <meta itemprop="description" content={description} />

  <meta name="twitter:image" content={imagePreview} />
  <meta property="og:image" content={imagePreview} />
  <meta itemprop="image" content={imagePreview} />

  <meta property="og:url" content={canonicalLocation} />
  <link rel="canonical" href={canonicalLocation} />

  <meta name="twitter:creator" content="@d_kzlv" />
  <meta property="og:type" content={contentType} />
  <meta property="og:locale" content={locale} />
</svelte:head>
