<script>
  import Header from "../components/header.svelte";
  import Footer from "../components/footer.svelte";

  export let segment;
</script>

<style>
  @import url("https://fonts.googleapis.com/css?family=Merriweather|Roboto&display=swap");

  :global(html, body) {
    height: 100%;
    min-height: 100%;
  }

  :global(#app) {
    display: flex;
    flex-direction: column;
    height: 100%;

    margin: 0 auto;
    width: 60%;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    :global(#app) {
      width: 95%;
    }
  }

  main {
    flex: 1;
    margin-top: 50px;
  }
</style>

<Header {segment} />
<main>
  <slot />
</main>
<Footer />
