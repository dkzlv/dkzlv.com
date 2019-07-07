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

    margin: 30px 0px;
  }

  nav > div {
    margin-right: 1.5em;
  }

  p {
    font-family: "Merriweather", serif;
    font-size: 15px;
    margin-bottom: 1em;
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
    <div>
      <p>
        Hey! Get on board
        <span class="twitterLink">
          <Link href="https://twitter.com/d_kzlv/">
            <span class="twitterIcon">
              <TwitterIcon />
            </span>
            on Twitter
          </Link>
        </span>
        — same content, but faster.
      </p>
      <p>Or join the newsletter. One email a week if I'm not lazy.</p>
      <EmailCollector />
    </div>
  </nav>
</header>
