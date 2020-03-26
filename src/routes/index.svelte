<script>
  import { goto } from '@sapper/app';
  import { locale, locales } from 'svelte-i18n';

  if (typeof window !== 'undefined') {
    const rawLang = (navigator.language || navigator.userLanguage).slice(0, 2);
    goto('./' + rawLang);
  }
</script>

<div style="display: none">
  {#each $locales as locale}
    <a href={'/' + locale} rel="prefetch">{locale}</a>
  {/each}
</div>
