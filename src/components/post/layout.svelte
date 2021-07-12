<script>
  import type { Post } from '$core/content/getPosts';

  import Meta from '$components/meta/index.svelte';
  import SeriesData from './seriesData.svelte';
  import Subscription from './subscription.svelte';

  import { locale } from 'svelte-i18n';

  import { postPath } from '$core/paths';

  export let post: Post;

  $: hasAnnouncedInSeries = post.series?.some(p => p.announced);
</script>

<Meta
  title={post.title}
  path={$postPath(post.slug)}
  description={post.description}
  imagePreview={post.preview}
  locale={$locale} />

<article>
  <h1>{post.title}</h1>
  {#if post.series}
    <SeriesData series={post.series} currentSlug={post.slug} />
  {/if}
  <div class="post-content">
    <slot />
  </div>
</article>

{#if post.series && hasAnnouncedInSeries}
  <SeriesData series={post.series} currentSlug={post.slug} />
{:else}
  <Subscription
    >{#if post.emailCollectorMessage}
      {@html post.emailCollectorMessage}{/if}</Subscription>
{/if}
