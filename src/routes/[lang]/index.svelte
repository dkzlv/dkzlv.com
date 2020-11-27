<script context="module" lang="ts">
  export function preload({ params }: { params: { lang: string } }) {
    return this.fetch(`${params.lang}/all.json`)
      .then((r: any) => r.json())
      .then((postsMeta: Post['meta'][]) => ({ postsMeta }));
  }
</script>

<script lang="ts">
  import type { Post } from 'core/content/post/types';

  import { locale, date, _ } from 'svelte-i18n';

  import Meta from 'components/meta.svelte';

  export let postsMeta: Post['meta'][];
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

<Meta title={$_('meta.title')} description={$_('meta.description')} contentType="website" />

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
