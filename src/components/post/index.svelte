<script lang="ts">
  import type { Post } from 'core/types';

  import { onMount } from 'svelte';
  import { locale } from 'svelte-i18n';

  import Meta from 'components/meta.svelte';
  import SeriesData from './seriesData.svelte';
  import Subscription from './subscription.svelte';
  import Share from './share.svelte';

  export let post: Post;

  $: hasAnnounced = post.meta.series && post.meta.series.some(meta => meta && meta.announced);

  onMount(async () => {
    const emailCollectorEls = document.querySelectorAll('.email-collector'),
      shareEls = document.querySelectorAll('.share'),
      cmps = [...emailCollectorEls].map(el => {
        const element = el as HTMLElement,
          engagement = element.innerHTML || undefined;
        element.innerHTML = '';
        element.classList.remove('email-collector');
        return new Subscription({ target: el, props: { engagement } });
      });

    shareEls.forEach(el => {
      const element = el as HTMLElement,
        text = element.innerHTML;
      element.innerHTML = '';
      element.classList.remove('share');
      return new Share({ target: el, props: { text } });
    });

    return () => cmps.forEach(cmp => cmp.$destroy());
  });
</script>

<Meta
  title={post.meta.title}
  path={post.meta.slug}
  description={post.meta.description}
  imagePreview={post.meta.imagePreview}
  locale={$locale} />

<article>
  <h1>{post.meta.title}</h1>
  {#if post.meta.series}
    <SeriesData series={post.meta.series} fallbackTitle={post.meta.title} />
  {/if}
  <div class="post-content">
    <slot>
      {@html post.content}
    </slot>
  </div>
</article>

{#if post.meta.series && hasAnnounced}
  <SeriesData series={post.meta.series} fallbackTitle={post.meta.title} />
{:else}
  <Subscription engagement={post.meta.emailCollectorMessage} />
{/if}
