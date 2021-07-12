<script>
  import Header from '$components/header.svelte';
  import Footer from '$components/footer/index.svelte';
  import ColorThemes from '$components/colorThemes.svelte';

  import { page } from '$app/stores';
  import { goto } from '$app/navigation';
  import { onMount } from 'svelte';
  import { locale, locales, _ } from 'svelte-i18n';

  import { warn } from '$core/consoleWarning';

  $: {
    locale.set($page.params.lang);
    if (!$locales.includes($page.params.lang as string)) goto('/en', { replaceState: true });
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
