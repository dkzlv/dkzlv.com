<script lang="ts" context="module">
  const mountComponentToSelector = (
    classname: string,
    component: AConstructorTypeOf<SvelteComponent>,
  ) =>
    [...document.querySelectorAll('.' + classname)].map(el => {
      const target = el,
        text = target.innerHTML || undefined;
      target.innerHTML = '';
      target.classList.remove(classname);
      return new component({ target, props: { text } });
    });
</script>

<script lang="ts">
  import type { Post } from 'core/content/post/types';

  import { onMount, SvelteComponent } from 'svelte';
  import { locale } from 'svelte-i18n';

  import Meta from 'components/meta.svelte';
  import SeriesData from './seriesData.svelte';

  import Subscription from './subscription.svelte';
  import Share from './share.svelte';
  import Enum from './enum.svelte';

  export let post: Post;

  $: hasAnnounced = post.meta.series && post.meta.series.some(meta => meta && meta.announced);

  onMount(async () => {
    const cmps = [
      ...mountComponentToSelector('email-collector', Subscription),
      ...mountComponentToSelector('share', Share),
      ...mountComponentToSelector('enum', Enum),
    ];

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
  <Subscription text={post.meta.emailCollectorMessage} />
{/if}
