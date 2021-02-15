<script context="module">
  import { commonPreload } from '@/core/content/post/preloadPost';

  export function preload({ params }: { params: { lang: string } }) {
    return commonPreload(
      this.fetch.bind(this),
      this.error.bind(this),
      `/${params.lang}/leaks/all.json`,
      'leaks',
    );
  }
</script>

<script>
  import type { LeakClient } from '@/core/content/leak/types';

  import { _ } from 'svelte-i18n';

  import List from 'components/leaks/list/main.svelte';
  import Breadcrumbs from 'components/breadcrumbs.svelte';
  import Meta from 'components/meta.svelte';

  import { mainPath } from '@/core/paths';

  export let leaks: LeakClient[];
</script>

<Meta title={`${$_('nav.meta.leaks.description')} / ${$_('nav.leaks')}`} />

<Breadcrumbs paths={[{ text: $_('nav.main'), link: $mainPath }, { text: $_('nav.leaks') }]} />

<h1>{$_('nav.meta.leaks.description')}</h1>

<List {leaks} />
