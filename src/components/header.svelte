<script>
  import Logo from "./logo.svelte";
  import TwitterIcon from "./twitterIcon.svelte";
  import EmailCollector from "./emailCollector.svelte";

  export let segment;
</script>

<style type="text/scss">
  @import "../styles/importable";

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
      <a href=".">
        <Logo />
      </a>
    </div>
    <div class="newsletter-text">
      <p>
        Hey! Get onboard
        <a
          href="https://twitter.com/d_kzlv/"
          rel="noreferrer nofollow"
          target="_blank">
          <span class="twitterIcon">
            <TwitterIcon />
          </span>
          on Twitter
        </a>
        — same content, but faster.
        <br />
        Or join the newsletter. One email a week if I'm not lazy.
      </p>
      <EmailCollector />
    </div>
  </nav>
</header>
