<script context="module">
  import type { Load } from '@sveltejs/kit';

  export const load: Load = async ({ fetch, page }) => {
    const res = await fetch(`/${page.params.lang}/breaches/data.json`),
      breaches = await res.json();
    return { props: { breaches } };
  };
</script>

<script>
  import type { Breach } from '$core/content/getBreaches';

  import { _ } from 'svelte-i18n';

  import List from '$components/breaches/list/main.svelte';
  import Feedback from '$components/breaches/feedback.svelte';
  import Breadcrumbs from '$components/breadcrumbs.svelte';
  import Meta from '$components/meta.svelte';

  import { mainPath } from '$core/paths';

  export let breaches: Breach[];
</script>

<!-- 
  Немного изменятся пути в блоге:
  - /leaks/[location/org/tag]/likud.svelte — модернизированная страница конкретной сущности. Там может быть любой диз.
  - /leaks/[location/org/tag]/[slug].svelte — фоллбэк для конкретной сущности, без особых конкретик.

  Контент в сливах (названия орг, теги, локации) будут писаться плейн-текстом, а не так, как сейчас.
  Они будут "свои" для каждой локали.
 -->

<Meta title={`${$_('nav.meta.leaks.description')} / ${$_('nav.leaks')}`} />

<Breadcrumbs paths={[{ text: $_('nav.main'), link: $mainPath }, { text: $_('nav.leaks') }]} />

<h1>{$_('nav.meta.leaks.description')}</h1>

<List {breaches} />

<Feedback />
