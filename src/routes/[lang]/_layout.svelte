<script>
  import Header from 'components/header.svelte'
  import Footer from 'components/footer.svelte'
  import ColorThemes from 'components/colorThemes.svelte'
  import PageLoading from 'components/pageLoading.svelte'
  import { stores } from '@sapper/app'
  import { langStore } from 'core/store'
  import { onMount } from 'svelte'
  import warn from 'core/consoleWarning'
  import t from 'core/i18n/client.js'

  const { page, preloading } = stores()
  $: langStore.set($page.params.lang)

  onMount(() => warn(t('consoleWarning')))
</script>

<style global type="text/scss">
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
