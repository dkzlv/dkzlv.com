<script lang="ts" context="module">
  import { commonPreload } from 'core/content/post/preloadPost.ts';

  export function preload({ params }: { params: { lang: string } }) {
    return commonPreload(
      this.fetch.bind(this),
      this.error.bind(this),
      `/${params.lang}/leaks/all.json`,
      'leaks',
    );
  }
</script>

<script lang="ts">
  import type { LeakClient } from 'core/content/leak/types';

  import { _ } from 'svelte-i18n';

  import List from 'components/leaks/list/main.svelte';
  import Breadcrumbs from 'components/breadcrumbs.svelte';

  import { mainPath } from 'core/paths.ts';

  export let leaks: LeakClient[];
</script>

<Breadcrumbs paths={[{ text: $_('nav.main'), link: $mainPath }, { text: $_('nav.leaks') }]} />

<List {leaks} />
