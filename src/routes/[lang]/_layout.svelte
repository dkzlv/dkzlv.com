<script>
  import Header from "../../components/header.svelte";
  import Footer from "../../components/footer.svelte";
  import Typography from "../../components/styles/typography.svelte";

  export let segment;
</script>

<style>
  @import url("https://fonts.googleapis.com/css?family=Merriweather|Roboto&display=swap");

  :global(html, body) {
    height: 100%;
    min-height: 100%;
  }

  #root {
    display: flex;
    flex-direction: column;
    height: 100%;

    margin: 0 auto;
    width: 50%;
  }

  @media (max-width: 900px) {
    #root {
      width: 95%;
    }
  }

  main {
    flex: 1;
    margin-top: 50px;
  }
</style>

<div id="root">
  <Header {segment} />
  <main>
    <slot />
  </main>
  <Footer />
</div>
