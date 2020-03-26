<script>
  import { locale } from 'svelte-i18n';
  import { rootSitePath, staticPath } from 'core/paths';
</script>

<style lang="scss">
  @import 'src/styles/importable';

  footer {
    display: flex;
    justify-content: space-between;
    margin: 10px 0;

    @include safeAreaPaddingMixin(bottom, 20px, 0);
  }

  .right {
    display: flex;
  }

  .rss {
    margin-left: 15px;
  }
</style>

<footer>
  <p>
    2018-{new Date().getFullYear()},
    <a href="https://twitter.com/d_kzlv" rel="noreferrer nofollow" target="_blank">Dan Kozlov</a>
  </p>
  <div class="right">
    {#if $locale === 'ru'}
      <a href="/en">
        <img src={`${staticPath}/img/footer/gb.svg`} alt="Brit's flag" />
      </a>
    {:else if $locale === 'en'}
      <a href="/ru">
        <img src={`${staticPath}/img/footer/ru.svg`} alt="Russ' flag" />
      </a>
    {/if}
    <a href={$locale + '/rss'} class="rss" rel="prefetch">
      <img src={`${staticPath}/img/footer/rss.svg`} alt="RSS" />
    </a>
  </div>
</footer>
