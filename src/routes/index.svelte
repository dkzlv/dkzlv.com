<script lang="ts">
  import { goto } from '@sapper/app';
  import { locales } from 'svelte-i18n';

  if (typeof window !== 'undefined') {
    const rawLang = navigator.language.slice(0, 2);
    goto('./' + rawLang);
  }
</script>

<div style="display: none">
  {#each $locales as locale}<a href={'/' + locale} rel="prefetch">{locale}</a>{/each}
</div>
