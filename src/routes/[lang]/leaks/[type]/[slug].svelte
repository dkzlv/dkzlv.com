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
  import Meta from 'components/meta.svelte';

  import { leaksPath, mainPath } from 'core/paths.ts';

  const { page } = stores();

  export let leaks: LeakClient[];

  $: ({ type, slug } = $page.params);

  $: hideLocation = type == 'location';
  $: hideOrg = type == 'org';

  const getTitle = (key: 'organization' | 'tags' | 'locations') => {
    const meta = leaks[0].meta[key],
      contentEntity = Array.isArray(meta) ? meta.find(data => data.content.slug == slug)! : meta;

    return contentEntity.content.title;
  };

  let title: string;
  $: if (hideLocation) {
    const ent = leaks[0].meta.locations.find(loc => loc.content.slug == slug)!;
    title = `${ent.emoji} ${ent.content.title} — ${$_('nav.meta.leaks.locationTitle')}`;
  } else if (hideOrg) title = getTitle('organization') + ' — ' + $_('nav.meta.leaks.orgTitle');
  else title = getTitle('tags') + ' — ' + $_('nav.meta.leaks.tagTitle');
</script>

<Meta title={title + ' / ' + $_('nav.leaks')} />

<Breadcrumbs
  paths={[{ text: $_('nav.main'), link: $mainPath }, { text: $_('nav.leaks'), link: $leaksPath }, { text: $_('nav.meta.leaks.filterBreadcrumb') }]} />

<h1 class="no-gradient">{title}</h1>

<List {leaks} {hideLocation} {hideOrg} />
