<script>
  import { _, locale } from 'svelte-i18n';

  import Logo from './logo.svelte';
  import TwitterIcon from './twitterIcon.svelte';
  import EmailCollector from './emailCollector.svelte';
  import Link from './link.svelte';
</script>

<header>
  <nav>
    <div class="logo">
      <a href={$locale}>
        <Logo />
      </a>
    </div>
    <div class="newsletter-text">
      <p>
        {$_('header.onboard')}
        <Link nofollow class="twitter-link" href="https://twitter.com/d_kzlv/">
          <span class="twitterIcon">
            <TwitterIcon />
          </span>
          {$_('header.twitter')}
        </Link>
        {$_('header.sameContent')}
        <br />
        {$_('header.join')}
      </p>
      <EmailCollector />
    </div>
  </nav>
</header>

<style lang="scss">
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

    :global(.twitter-link) {
      color: $accent-color;
      text-decoration: none;
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
