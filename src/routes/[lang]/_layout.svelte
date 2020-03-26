<script>
  import { stores, goto } from '@sapper/app';
  import { onMount } from 'svelte';
  import { locale, locales, _ } from 'svelte-i18n';

  import Header from 'components/header.svelte';
  import Footer from 'components/footer.svelte';
  import ColorThemes from 'components/colorThemes.svelte';
  import PageLoading from 'components/pageLoading.svelte';

  import warn from 'core/consoleWarning';

  const { page, preloading } = stores();

  $: {
    locale.set($page.params.lang);
    if (typeof document !== 'undefined' && $locales.indexOf($page.params.lang) === -1) goto('/en');
  }

  onMount(() => warn($_('consoleWarning')));
</script>

<style global lang="scss">
  @import 'src/styles/main.scss';
</style>

<ColorThemes />
{#if $preloading}
  <PageLoading />
{/if}
<div class="root">
  <Header />
  <main>
    <slot />
  </main>
  <Footer />
</div>
