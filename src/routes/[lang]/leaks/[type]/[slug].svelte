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
  import type { LeakInComponent } from 'core/content/leak/types';
  import List from 'components/leaks/list/main.svelte';

  export let leaks: LeakInComponent[];
</script>

<List {leaks} hideSpread />
