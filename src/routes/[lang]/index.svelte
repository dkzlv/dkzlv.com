<script context="module">
  export function preload({ params }) {
    return this.fetch(`${params.lang}/all.json`)
      .then(r => r.json())
      .then(posts => ({ posts, lang: params.lang }));
  }
</script>

<script>
  import { _, locale, date, format } from 'svelte-i18n';

  export let posts;
  export let lang;
</script>

<style lang="scss">
  @import 'src/styles/importable';

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
    <a rel="prefetch" href={`${$locale}/${post.slug}`}>
      <h2>{post.title}</h2>
    </a>
    <p class="meta">
      {$date(new Date(post.date), { format: 'long' })} • {$format('posts.readTime', {
        values: { time: post.readTime },
      })}
    </p>
    <p>
      {@html post.description}
    </p>
  </div>
{/each}
