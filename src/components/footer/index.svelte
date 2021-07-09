<script>
  import Link from '$components/link.svelte';

  import { locale } from 'svelte-i18n';
  import { _ } from 'svelte-i18n';

  import { generateLinkTags } from '$utils/accentTags';
  import { getLicenseUrl, repoUrl } from '$core/paths';
</script>

<footer>
  <div class="wrapper">
    <p>
      2018-{new Date().getFullYear()}, <Link href="https://twitter.com/d_kzlv">Dan Kozlov</Link>
    </p>
    <div class="right">
      {#if $locale == 'ru'}
        <Link href="/en">🇬🇧</Link>
      {:else if $locale == 'en'}
        <Link href="/ru">🇷🇺</Link>
      {/if}
      <Link class="rss" href={$locale + '/rss'}>
        <svg
          width="15"
          height="10"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1.95257e-05 6.12079V9.5578C2.24412 9.55919 4.36651 10.4407 5.95485 12.0312C7.5429 13.6168 8.42074 15.7422 8.42434 17.9938H8.42551V18H11.877C11.8743 14.726 10.5433 11.7604 8.39152 9.60723C6.23937 7.45439 3.2746 6.12284 1.95257e-05 6.12079ZM0.00629755 0V3.43534C8.02798 3.4412 14.5489 9.97148 14.5543 18H18C17.9977 13.0379 15.9807 8.54234 12.7209 5.28071C9.46004 2.02022 4.96698 0.0021343 0.00629755 0Z"
            fill="#E4B201" />
          <path
            d="M1.95257e-05 15.147C-0.0062585 13.8501 1.19131 12.3977 2.79954 12.3977C4.40778 12.3977 5.49724 13.6427 5.49724 15.147C5.49724 16.6513 4.51154 17.9875 2.79954 17.9938C1.08755 18 0.00629755 16.4438 1.95257e-05 15.147Z"
            fill="#E4B201" />
        </svg>
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

    :global(a) {
      text-decoration: none;
    }
  }

  footer :global(.rss) {
    margin-left: 15px;
  }
</style>
