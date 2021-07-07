<script context="module">
  import type { Load } from '@sveltejs/kit';

  export const load: Load = async ({ fetch, page }) => {
    // Unfortunately, we get a real path here, but do not get a slug
    const slug = page.path.split('/breaches/')[1];
    const res = await fetch(`/${page.params.lang}/breaches/${slug}.json`),
      breach = await res.json();
    return { props: { breach } };
  };
</script>

<script>
  import type { Breach } from '$core/content/getBreaches';

  import BreachLayout from '$components/breaches/layout.svelte';

  export let breach: Breach;
</script>

<BreachLayout {breach}>
  <slot />
</BreachLayout>
