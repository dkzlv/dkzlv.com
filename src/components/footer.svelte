<script>
  import Link from "./link.svelte";

  const year = new Date().getFullYear();
</script>

<style>
  footer {
    margin: 15px 0;
  }
  p {
    font-family: "Merriweather", serif;
    font-size: 15px;
  }
</style>

<footer>
  <p>
    2015-{year},
    <Link href="https://twitter.com/d_kzlv">Dan Kozlov</Link>
  </p>
</footer>
