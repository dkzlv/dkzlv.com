<script>
  import { locale as localeStore } from 'svelte-i18n';

  import { rootSitePath } from 'core/paths';

  export let title = '',
    description = '',
    path = '',
    contentType = 'article',
    imagePreview = '',
    locale = '';

  $: canonicalLocation = `${rootSitePath}/${$localeStore}/${path}/`;
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="title" content={title} />
  <meta name="twitter:title" content={title} />
  <meta property="og:title" content={title} />

  <meta name="twitter:site" content={rootSitePath} />
  <meta property="og:site_name" content={rootSitePath} />
  <meta itemprop="name" content={rootSitePath} />

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
