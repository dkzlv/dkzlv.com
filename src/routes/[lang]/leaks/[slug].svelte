<script context="module">
  import { commonPreload } from '$core/content/post/preloadPost';

  export function preload({ params }: { params: { lang: string; type: string; slug: string } }) {
    return commonPreload(
      this.fetch.bind(this),
      this.error.bind(this),
      `/${params.lang}/leaks/${params.slug}.json`,
      'leak',
    );
  }
</script>

<script>
  import type { LeakClient } from '$core/content/leak/types';

  import { _ } from 'svelte-i18n';

  import Leak from '$components/leaks/leak.svelte';
  import Breadcrumbs from '$components/breadcrumbs.svelte';
  import Meta from '$components/meta.svelte';

  import { mainPath, leaksPath } from '$core/paths';

  export let leak: LeakClient;
</script>

<Meta title={leak.content.title + ` / ${$_('nav.leaks')}`} description={leak.content.content} />

<Breadcrumbs
  paths={[
    { text: $_('nav.main'), link: $mainPath },
    { text: $_('nav.leaks'), link: $leaksPath },
  ]} />

<Leak {leak} />
