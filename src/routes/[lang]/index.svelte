<script context="module">
  export function preload({ params }) {
    return this.fetch(`${params.lang}/all.json`)
      .then(r => r.json())
      .then(posts => ({ posts, lang: params.lang }));
  }
</script>

<script>
  export let posts;
  export let lang;

  export const formatDate = dateString =>
    new Date(dateString).toLocaleString(lang, {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
</script>

<style>
  div {
    margin-bottom: 37px;
  }

  a {
    text-decoration: none;
  }

  h2 {
    font-family: "Merriweather", serif;

    font-size: 31px;
    line-height: 42px;
    margin-bottom: 10px;
  }

  .meta {
    font-size: 13px;
    margin-bottom: 12px;

    color: #828282;
  }
</style>

<svelte:head>
  <title>Dan Kozlov on tech and stuff</title>
</svelte:head>

{#each posts as post}
  <div>
    <a rel="prefetch" href={`${lang}/${post.slug}`}>
      <h2>{post.title}</h2>
    </a>
    <p class="meta">{formatDate(post.date)} • {post.readTime} minutes</p>
    <p>{post.description}</p>
  </div>
{/each}
