<script>
  import { browser } from '$app/env';
  import { goto } from '$app/navigation';
  import { locales } from 'svelte-i18n';

  if (browser) goto('./' + navigator.language.slice(0, 2), { replaceState: true });
</script>

<div style="display: none">
  {#each $locales as locale}<a href={'/' + locale} rel="prefetch">{locale}</a>{/each}
</div>
