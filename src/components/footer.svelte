<script>
  import Link from "./link.svelte";

  const year = new Date().getFullYear();
</script>

<style>
  footer {
    display: flex;
    justify-content: space-between;
    margin: 15px 0;
  }

  p {
    font-family: "Merriweather", serif;
    font-size: 15px;
  }
</style>

<footer>
  <p>
    2018-{year},
    <Link href="https://twitter.com/d_kzlv">Dan Kozlov</Link>
  </p>
  <p>
    <a href="/ru">Ру</a>
    /
    <a href="/en">Eng</a>
  </p>
</footer>
