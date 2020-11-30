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
  import { stores } from '@sapper/app';

  import type { LeakClient } from 'core/content/leak/types';
  import List from 'components/leaks/list/main.svelte';

  const { page } = stores();

  $: hideLocation = $page.params.type == 'location';
  $: hideOrg = $page.params.type == 'org';

  export let leaks: LeakClient[];
</script>

<List {leaks} {hideLocation} {hideOrg} />
