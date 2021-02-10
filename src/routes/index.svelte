<script>
  import { goto } from '@sapper/app';
  import { locales } from 'svelte-i18n';

  if (process.env.BROWSER) goto('./' + navigator.language.slice(0, 2), { replaceState: true });
</script>

<div style="display: none">
  {#each $locales as locale}<a href={'/' + locale} rel="prefetch">{locale}</a>{/each}
</div>
