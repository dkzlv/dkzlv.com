<script>
  import { onMount } from 'svelte';
  import { locale } from 'svelte-i18n';

  import Meta from 'components/meta.svelte';
  import SeriesData from './seriesData.svelte';
  import Subscription from './subscription.svelte';

  export let post;

  $: hasAnnounced = post.meta.series && post.meta.series.some(meta => meta && meta.announced);

  onMount(async () => {
    const elements = document.querySelectorAll('.email-collector');

    const cmps = [];
    elements.forEach(el => {
      const engagement = el.innerText || undefined;
      el.innerText = '';
      el.classList.remove('email-collector');
      cmps.push(new Subscription({ target: el, props: { engagement } }));
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
    <SeriesData postMeta={post.meta} />
  {/if}
  <div class="post-content">
    <slot>
      {@html post.content}
    </slot>
  </div>
</article>

{#if post.meta.series && hasAnnounced}
  <SeriesData postMeta={post.meta} />
{:else}
  <Subscription engagement={post.meta.emailCollectorMessage} />
{/if}
