<script lang="ts">
  import { locale } from 'svelte-i18n';
  import Link from './link.svelte';

  import { rootStaticPath } from 'core/paths.ts';
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

  footer :global(.rss) {
    margin-left: 15px;
  }
</style>

<footer>
  <p>
    2018-{new Date().getFullYear()},

    <Link href="https://twitter.com/d_kzlv">Dan Kozlov</Link>
  </p>
  <div class="right">
    {#if $locale == 'ru'}
      <Link href="/en"><img src={`${rootStaticPath}/img/footer/gb.svg`} alt="Brit's flag" /></Link>
    {:else if $locale == 'en'}
      <Link href="/ru"><img src={`${rootStaticPath}/img/footer/ru.svg`} alt="Russ' flag" /></Link>
    {/if}
    <Link class="rss" href={$locale + '/rss'}>
      <img src={`${rootStaticPath}/img/footer/rss.svg`} alt="RSS" />
    </Link>
  </div>
</footer>
