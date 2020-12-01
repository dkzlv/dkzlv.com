<script lang="ts" context="module">
  import { commonPreload } from 'core/content/post/preloadPost.ts';

  export function preload({ params }: { params: { lang: string; type: string; slug: string } }) {
    return commonPreload(
      this.fetch.bind(this),
      this.error.bind(this),
      `/${params.lang}/leaks/${params.slug}.json`,
      'leak',
    );
  }
</script>

<script lang="ts">
  import type { LeakClient } from 'core/content/leak/types';

  import { _ } from 'svelte-i18n';

  import Leak from 'components/leaks/leak.svelte';
  import Breadcrumbs from 'components/breadcrumbs.svelte';

  import { mainPath, leaksPath } from 'core/paths.ts';

  export let leak: LeakClient;
</script>

<Breadcrumbs
  paths={[{ text: $_('nav.main'), link: $mainPath }, { text: $_('nav.leaks'), link: $leaksPath }]} />

<Leak {leak} />
