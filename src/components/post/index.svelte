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

  import { generateString } from 'utils/random.ts';

  import Meta from 'components/meta.svelte';
  import SeriesData from './seriesData.svelte';

  import Subscription from './subscription.svelte';
  import Share from './share.svelte';
  import Enum from './enum.svelte';
  import LeakLink from './leakLink.svelte';

  export let post: Post;

  $: hasAnnounced = post.meta.series && post.meta.series.some(meta => meta && meta.announced);

  onMount(async () => {
    const cmps = [
        ...mountComponentToSelector('email-collector', Subscription),
        ...mountComponentToSelector('share', Share),
        ...mountComponentToSelector('enum', Enum),
      ],
      programmaticComponentClasses = (await Promise.all(
        (post.meta.registerExtraComponents || []).map(file => {
          switch (file) {
            case 'fingerprint':
              return import('components/specials/privacy/fingerprint.svelte');
            case 'freeWill':
              return import('components/specials/privacy/freeWill.svelte');
            case 'pidor':
              return import('components/specials/privacy/pidor.svelte');
          }
        }),
      )) as any;

    for (const cmpClass of programmaticComponentClasses) {
      const mountToClassname = cmpClass.classname || generateString(10);
      if (!cmpClass.classname) {
        const el = document.createElement('div');
        el.classList.add(mountToClassname);
        document.body.appendChild(el);
      }
      cmps.push(...mountComponentToSelector(mountToClassname, cmpClass.default));
    }

    document.querySelectorAll('.leaks-db').forEach(el => {
      const count = parseInt((el as HTMLElement).dataset.count || '0');
      cmps.push(new LeakLink({ target: el, props: { count } }));
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
  <Subscription text={post.meta.emailCollectorMessage} />
{/if}
