<style type="text/scss">
  @import "../styles/importable";

  footer {
    display: flex;
    justify-content: space-between;
    margin: 10px 0;

    @include safeAreaPaddingMixin(bottom, 20px, 0);
  }
</style>

<footer>
  <p>
    2018-{new Date().getFullYear()},
    <a
      href="https://twitter.com/d_kzlv"
      rel="noreferrer nofollow"
      target="_blank">
      Dan Kozlov
    </a>
  </p>
  <p>
    <a href="/ru">Ру</a>
    /
    <a href="/en">Eng</a>
  </p>
</footer>
