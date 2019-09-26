<script>
  import Logo from './logo.svelte'
  import TwitterIcon from './twitterIcon.svelte'
  import EmailCollector from './emailCollector.svelte'

  import t from '../routes/_i18n/client.js'
  import { langStore } from '../routes/store'

  $: onboard = $langStore && t('header.onboard')
  $: twitter = $langStore && t('header.twitter')
  $: sameContent = $langStore && t('header.sameContent')
  $: join = $langStore && t('header.join')
</script>

<style type="text/scss">
  @import '../styles/importable';

  nav {
    display: flex;
    align-items: center;
    justify-content: center;

    @include mq($until: mobile) {
      margin: 15px 0px;
    }
    @include mq($from: mobile) {
      margin: 30px 0px;
    }
  }

  .logo {
    @include mq($from: mobile) {
      margin-right: 1.5em;
    }
  }

  a {
    text-decoration: none;
  }

  .newsletter-text {
    font-size: ms(-1);

    @include mq($until: mobile) {
      display: none;
    }
  }

  .twitterIcon {
    display: inline-block;
    height: 1em;
    width: 1em;
    align-self: center;
    top: 0.125em;
    position: relative;

    margin-left: 0.35em;
  }
</style>

<header>
  <nav>
    <div class="logo">
      <a href={$langStore}>
        <Logo />
      </a>
    </div>
    <div class="newsletter-text">
      <p>
        {onboard}
        <a
          href="https://twitter.com/d_kzlv/"
          rel="noreferrer nofollow"
          target="_blank">
          <span class="twitterIcon">
            <TwitterIcon />
          </span>
          {twitter}
        </a>
        {sameContent}
        <br />
        {join}
      </p>
      <EmailCollector />
    </div>
  </nav>
</header>
