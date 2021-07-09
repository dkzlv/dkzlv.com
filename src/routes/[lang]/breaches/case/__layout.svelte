<script context="module">
  import type { Load } from '@sveltejs/kit';

  export const load: Load = async ({ fetch, page }) => {
    // Unfortunately, we get a real path here, but do not get a slug
    const slug = page.path.split('/case/')[1];
    const res = await fetch(`/${page.params.lang}/breaches/${slug}.json`),
      breach = await res.json();
    return { props: breach };
  };
</script>

<script>
  import type { Breach } from '$core/content/getBreaches';

  import BreachLayout from '$components/breaches/layout.svelte';
  import Breadcrumbs from '$components/breadcrumbs.svelte';

  import { _ } from 'svelte-i18n';

  import { breachesPath, mainPath } from '$core/paths';

  export let breach: Breach;
</script>

<Breadcrumbs
  paths={[
    { text: $_('nav.main'), link: $mainPath },
    { text: $_('nav.breaches'), link: $breachesPath },
  ]} />
<BreachLayout {breach}>
  <slot />
</BreachLayout>
