<script>
  import Header from '../../components/header.svelte'
  import Footer from '../../components/footer.svelte'
  import Switcher from '../../components/colorThemes.svelte'

  export let segment
</script>

<style global type="text/scss">
  @import '../../styles/main.scss';
</style>

<Switcher />
<div class="root">
  <Header {segment} />
  <main>
    <slot />
  </main>
  <Footer />
</div>
