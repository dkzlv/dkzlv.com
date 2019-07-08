<script context="module">
  export function preload() {
    return this.fetch(`all.json`)
      .then(r => r.json())
      .then(posts => ({ posts }));
  }
</script>

<script>
  export let posts;
  export const formatDate = dateString =>
    new Date(dateString).toLocaleString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
</script>

<style>
  li {
    margin-bottom: 37px;
  }

  a {
    text-decoration: none;
  }

  h2 {
    font-family: "Merriweather", serif;

    font-weight: bold;
    font-size: 31px;
    line-height: 42px;
    margin-bottom: 10px;

    color: #8088ce;
  }

  .meta {
    font-family: "Roboto", sans-serif;

    font-size: 13px;
    line-height: 15px;
    margin-bottom: 12px;

    color: #828282;
  }

  .subtitle {
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    line-height: 21px;

    color: #363636;
  }
</style>

<svelte:head>
  <title>Dan Kozlov on tech and stuff</title>
</svelte:head>

<ul>
  {#each posts as post}
    <li>
      <a rel="prefetch" href={post.slug}>
        <h2>{post.title}</h2>
        <p class="meta">{formatDate(post.date)} • {post.readTime} minutes</p>
        <p class="subtitle">{post.subtitle}</p>
      </a>
    </li>
  {/each}
</ul>
