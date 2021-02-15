<script context="module">
  export function preload({ params }: { params: { lang: string } }) {
    return this.fetch(`${params.lang}/all.json`)
      .then((r: any) => r.json())
      .then((postsMeta: Post['meta'][]) => ({ postsMeta }));
  }
</script>

<script>
  import type { Post } from '@/core/content/post/types';

  import { locale, date, _ } from 'svelte-i18n';

  import Meta from 'components/meta.svelte';
  import PromoList from 'components/promoList.svelte';

  export let postsMeta: Post['meta'][];
</script>

<Meta title={$_('meta.title')} description={$_('meta.description')} contentType="website" />

<div class="box">
  <div class="nested">
    <h3>{$_('specials.header')}</h3>
    <PromoList />
  </div>
</div>

{#each postsMeta as post}
  <div>
    <a rel="prefetch" href={`${$locale}/${post.slug}`}>
      <h2>{post.title}</h2>
    </a>
    <p class="meta">
      {$date(new Date(post.date), { format: 'long' })}
      •
      {$_('posts.readTime', { values: { time: post.readTime } })}
    </p>
    <div class="post-content">
      <p>
        {@html post.description}
      </p>
    </div>
  </div>
{/each}

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
</style>
