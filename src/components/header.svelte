<script>
  import Logo from "./logo.svelte";
  import Link from "./link.svelte";
  import TwitterIcon from "./twitterIcon.svelte";
  import EmailCollector from "./emailCollector.svelte";

  export let segment;
</script>

<style>
  nav {
    display: flex;
    align-items: center;
    justify-content: center;

    margin: 30px 0px;
  }

  nav > div {
    margin-right: 1.5em;
  }

  p {
    font-family: "Merriweather", serif;
    font-size: 15px;
    line-height: 11px;
    margin-bottom: 1em;
  }

  @media (max-width: 450px) {
    .newletterText {
      display: none;
    }

    nav {
      margin: 15px 0;
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
    <div>
      <a href=".">
        <Logo />
      </a>
    </div>
    <div class="newletterText">
      <p>
        Hey! Get onboard
        <span class="twitterLink">
          <Link href="https://twitter.com/d_kzlv/">
            <span class="twitterIcon">
              <TwitterIcon />
            </span>
            on Twitter
          </Link>
        </span>
        — same content, but faster.
      </p>
      <p>Or join the newsletter. One email a week if I'm not lazy.</p>
      <EmailCollector />
    </div>
  </nav>
</header>
