<script context="module">
  import type { Load } from '@sveltejs/kit';

  export const load: Load = async ({ fetch, page }) => {
    const res = await fetch(`/${page.params.lang}/breaches/data.json?${page.query.toString()}`),
      breaches = await res.json();
    return { props: { breaches } };
  };
</script>

<script>
  import type { Breach } from '$core/content/getBreaches';

  import List from '$components/breaches/list/main.svelte';
  import Feedback from '$components/breaches/feedback.svelte';
  import Breadcrumbs from '$components/breadcrumbs.svelte';
  import Meta from '$components/meta.svelte';

  import { _ } from 'svelte-i18n';
  import { page } from '$app/stores';

  import { italicTags } from '$utils/accentTags';
  import { mainPath, breachesPath } from '$core/paths';

  export let breaches: Breach[];

  $: hasSearch = $page.path && location.search;

  let title: string;
  $: if ($page.path && $page.query.has('org')) {
    const name = breaches[0]?.organization.display || '';
    title = $_('nav.meta.breaches.orgTitle', {
      values: { ...italicTags, name },
    });
  } else if ($page.query.has('location')) {
    const name =
      breaches[0]?.locations.find(l => l.slug == $page.query.get('location'))?.display || '';
    title = $_('nav.meta.breaches.locationTitle', {
      values: {
        ...italicTags,
        name,
      },
    });
  } else if ($page.query.has('tag')) {
    const name = breaches[0]?.tags.find(l => l.slug == $page.query.get('tag'))?.display || '';
    title = $_('nav.meta.breaches.tagTitle', {
      values: {
        ...italicTags,
        name,
      },
    });
  } else title = $_('nav.meta.breaches.description');
</script>

<Meta title={`${$_('nav.meta.breaches.description')} / ${$_('nav.breaches')}`} />

<Breadcrumbs
  paths={[
    { text: $_('nav.main'), link: $mainPath },
    { text: $_('nav.breaches'), link: hasSearch ? $breachesPath : undefined },
  ]} />

<h1>{@html title}</h1>

<List {breaches} />

<Feedback />
