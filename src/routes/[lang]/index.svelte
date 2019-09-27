<script context="module">
  export function preload({ params }) {
    return this.fetch(`${params.lang}/all.json`)
      .then(r => r.json())
      .then(posts => ({ posts, lang: params.lang }))
  }
</script>

<script>
  import { langStore } from '../../core/store'
  import t from '../../core/i18n/client.js'

  export let posts
  export let lang

  const getReadTime = time =>
    t('posts.readTime', time).replace('{{time}}', time)

  const formatDate = dateString =>
    new Date(dateString).toLocaleString($langStore, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
</script>

<style type="text/scss">
  @import '../../styles/importable';

  div {
    margin-bottom: 37px;
  }

  a {
    text-decoration: none;
  }

  h2 {
    margin-bottom: 12px;
  }

  .meta {
    font-size: ms(-2);
    margin-bottom: 12px;

    color: $text-color--dimmed;
  }
</style>

<svelte:head>
  <title>Dan Kozlov on tech and stuff</title>
</svelte:head>

{#each posts as post}
  <div>
    <a rel="prefetch" href={`${$langStore}/${post.slug}`}>
      <h2>{post.title}</h2>
    </a>
    <p class="meta">{formatDate(post.date)} • {getReadTime(post.readTime)}</p>
    <p>
      {@html post.description}
    </p>
  </div>
{/each}
