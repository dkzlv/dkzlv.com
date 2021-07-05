<script>
  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  import { browser } from '$app/env';
  import { onMount } from 'svelte';
  import { locale, locales, _ } from 'svelte-i18n';

  import Header from '$components/header.svelte';
  import Footer from '$components/footer.svelte';
  import ColorThemes from '$components/colorThemes.svelte';

  import { warn } from '$core/consoleWarning';

  $: {
    locale.set($page.params.lang);
    if (browser && $locales.indexOf($page.params.lang) === -1) goto('/en');
  }

  onMount(() => warn($_('consoleWarning')));
</script>

<ColorThemes />
<div class="root">
  <Header />
  <main>
    <slot />
  </main>

  <Footer />
</div>

<style global lang="scss">
  @import 'src/styles/main.scss';
</style>
