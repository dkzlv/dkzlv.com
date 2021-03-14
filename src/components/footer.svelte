<script>
  import Link from './link.svelte';

  import { locale } from 'svelte-i18n';
  import { _ } from 'svelte-i18n';

  import { generateLinkTags } from '@/utils/accentTags';
  import { getLicenseUrl, repoUrl, rootStaticPath } from '@/core/paths';
</script>

<footer>
  <div class="wrapper">
    <p>
      2018-{new Date().getFullYear()}, <Link href="https://twitter.com/d_kzlv">Dan Kozlov</Link>
    </p>
    <div class="right">
      {#if $locale == 'ru'}
        <Link href="/en"
          ><img src={`${rootStaticPath}/img/footer/gb.svg`} alt="Brit's flag" /></Link>
      {:else if $locale == 'en'}
        <Link href="/ru"><img src={`${rootStaticPath}/img/footer/ru.svg`} alt="Russ' flag" /></Link>
      {/if}
      <Link class="rss" href={$locale + '/rss'}>
        <img src={`${rootStaticPath}/img/footer/rss.svg`} alt="RSS" />
      </Link>
    </div>
  </div>
  <p class="license">
    {@html $_('nav.license', {
      values: {
        ...generateLinkTags(getLicenseUrl('LICENSE_CC.md'), 'Cc'),
        ...generateLinkTags(repoUrl, 'Code'),
        ...generateLinkTags(getLicenseUrl('LICENSE_MIT.md'), 'Mit'),
      },
    })}
  </p>
</footer>

<style lang="scss">
  footer {
    @include safeAreaPaddingMixin(bottom, 20px, 0);
  }

  .wrapper {
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
  }

  .license {
    font-size: 65%;
    color: rgb(165, 165, 165);
  }

  .right {
    display: flex;
  }

  footer :global(.rss) {
    margin-left: 15px;
  }
</style>
