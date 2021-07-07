<script>
  import { _, locale } from 'svelte-i18n';

  import Logo from './logo/index.svelte';
  import EmailCollector from './emailCollector.svelte';
  import Link from './link.svelte';
</script>

<header>
  <nav>
    <div class="logo">
      <a href="/{$locale}">
        <Logo />
      </a>
    </div>
    <div class="newsletter-text">
      <p>
        {$_('header.onboard')}
        <Link nofollow class="twitter-link" href="https://twitter.com/d_kzlv/">
          <span class="twitterIcon">
            <svg
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              ><path
                d="M14.977 1.467a.5.5 0 00-.87-.301 2.559 2.559 0 01-1.226.763A3.441 3.441 0 0010.526 1a3.539 3.539 0 00-3.537 3.541v.44C3.998 4.75 2.4 2.477 1.967 1.325a.5.5 0 00-.916-.048C.004 3.373-.157 5.407.604 7.139 1.27 8.656 2.61 9.864 4.51 10.665 3.647 11.276 2.194 12 .5 12a.5.5 0 00-.278.916C1.847 14 3.55 14 5.132 14h.048c4.861 0 8.8-3.946 8.8-8.812v-.479c.363-.37.646-.747.82-1.236.193-.546.232-1.178.177-2.006z"
                fill="currentColor" /></svg>
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
