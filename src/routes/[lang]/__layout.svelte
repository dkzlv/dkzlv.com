<script context="module">
  import type { Load } from '@sveltejs/kit';

  export const load: Load = ({ page }) => {
    const cleanedLang = page.params.lang?.startsWith('ru') ? 'ru' : 'en';

    if (page.params.lang !== cleanedLang) return { status: 301, redirect: `/${cleanedLang}` };

    return {};
  };
</script>

<script>
  import Header from '$components/header.svelte';
  import Footer from '$components/footer/index.svelte';
  import ColorThemes from '$components/colorThemes.svelte';

  import { page } from '$app/stores';
  import { onMount } from 'svelte';
  import { _, locale } from 'svelte-i18n';

  import { warn } from '$core/consoleWarning';

  onMount(() => warn($_('consoleWarning')));

  $: $locale = $page.params.lang;
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
