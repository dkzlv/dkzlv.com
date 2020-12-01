<script lang="ts" context="module">
  import { commonPreload } from 'core/content/post/preloadPost.ts';

  export function preload({ params }: { params: { lang: string; type: string; slug: string } }) {
    return commonPreload(
      this.fetch.bind(this),
      this.error.bind(this),
      `/${params.lang}/leaks/${params.type}/${params.slug}.json`,
      'leaks',
    );
  }
</script>

<script lang="ts">
  import type { LeakClient } from 'core/content/leak/types';

  import { _ } from 'svelte-i18n';
  import { stores } from '@sapper/app';

  import List from 'components/leaks/list/main.svelte';
  import Breadcrumbs from 'components/breadcrumbs.svelte';

  import { leaksPath, mainPath } from 'core/paths.ts';

  const { page } = stores();

  $: hideLocation = $page.params.type == 'location';
  $: hideOrg = $page.params.type == 'org';

  export let leaks: LeakClient[];
</script>

<Breadcrumbs
  paths={[{ text: $_('nav.main'), link: $mainPath }, { text: $_('nav.leaks'), link: $leaksPath }, { text: 'С фильтром' }]} />

<List {leaks} {hideLocation} {hideOrg} />
