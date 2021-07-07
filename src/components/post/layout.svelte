<script>
  import type { Post } from '$core/content/getPosts';

  import Meta from '$components/Meta.svelte';
  import SeriesData from './seriesData.svelte';
  import Subscription from './subscription.svelte';

  import { locale } from 'svelte-i18n';

  export let post: Post;

  $: hasAnnouncedInSeries = post.series?.some(p => p.announced);
</script>

<Meta title={post.title} path={post.slug} description={post.description} locale={$locale} />

<article>
  <h1>{post.title}</h1>
  {#if post.series}
    <SeriesData series={post.series} fallbackTitle={post.title} />
  {/if}
  <div class="post-content">
    <slot />
  </div>
</article>

{#if post.series && hasAnnouncedInSeries}
  <SeriesData series={post.series} fallbackTitle={post.title} />
{:else}
  <Subscription
    >{#if post.emailCollectorMessage}
      {@html post.emailCollectorMessage}{/if}</Subscription>
{/if}
