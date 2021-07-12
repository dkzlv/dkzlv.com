<script context="module">
  import type { Load } from '@sveltejs/kit';

  export const load: Load = async ({ fetch, page }) => {
    const res = await fetch(`/${page.params.lang}/posts.json`),
      posts = await res.json();
    return { props: { posts } };
  };
</script>

<script>
  import type { Post } from '$core/content/getPosts';

  import Meta from '$components/meta/index.svelte';
  import PromoList from '$components/promoList/index.svelte';
  import ProductPromo from '$components/productPromo/productPromo.svelte';

  import { locale, date, _ } from 'svelte-i18n';

  export let posts: Post[];
</script>

<Meta title={$_('meta.title')} description={$_('meta.description')} contentType="website" />

<div class="box">
  <div class="nested">
    <h3>{$_('specials.header')}</h3>
    <PromoList />
  </div>
</div>

{#each posts as post}
  <div>
    <a rel="prefetch" href={`${$locale}/posts/${post.slug}`}>
      <h2>{post.title}</h2>
    </a>
    <p class="meta">
      {$date(new Date(post.date), { format: 'long' })}
      <!-- 
        TODO: Couldn't come up with a simple way to calculate read time using mdsvex.
        
        •
      {$_('posts.readTime', { values: { time: 5 } })} -->
    </p>
    <div class="post-content">
      <p>
        {@html post.description}
      </p>
    </div>
  </div>
{/each}

<div class="promo">
  <ProductPromo />
</div>

<style lang="scss">
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

  .promo {
    margin: 2em 0 3em;
  }
</style>
