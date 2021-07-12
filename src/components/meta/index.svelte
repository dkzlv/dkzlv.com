<script>
  import { locale as localeStore } from 'svelte-i18n';
  import preview from './preview.png';

  import { rootSitePath } from '$core/paths';

  export let title = '',
    description = '',
    path = '',
    contentType = 'article',
    imagePreview = preview,
    locale = '' || $localeStore;

  $: canonPath = path ? path + '/' : '';

  $: canonicalLocation = `${rootSitePath}${canonPath}`;
  $: imageAbsolutePath = `${rootSitePath}${imagePreview}`;
  const twitterHandle = '@d_kzlv';
</script>

<svelte:head>
  <title>{title}</title>

  <link rel="canonical" href={canonicalLocation} />
  <meta name="title" content={title} />
  <meta name="description" content={description} />

  <meta itemprop="name" content={rootSitePath} />
  <meta itemprop="description" content={description} />
  <meta itemprop="image" content={imageAbsolutePath} />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:site" content={twitterHandle} />
  <meta name="twitter:creator" content={twitterHandle} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={imageAbsolutePath} />

  <meta property="og:title" content={title} />
  <meta property="og:site_name" content="dkzlv.com" />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={imageAbsolutePath} />
  <meta property="og:url" content={canonicalLocation} />
  <meta property="og:type" content={contentType} />
  <meta property="og:locale" content={locale} />
</svelte:head>
