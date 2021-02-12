<script>
  import logoPic from './logo.png';

  import { _ } from 'svelte-i18n';
</script>

<a href="https://safeapps.io/" target="_blank">
  <div class="wrapper">
    <img src={logoPic} alt="[safe] money logo" />

    <h2><span class="white-back">{$_('nav.productPromo.title')}</span></h2>
    <p><span class="white-back">{$_('nav.productPromo.lead')}</span></p>
    <p>
      <span class="white-back">{$_('nav.productPromo.features')}</span>
    </p>
  </div>
</a>

<style lang="scss">
  a {
    text-decoration: none;
  }

  .wrapper {
    position: relative;
    overflow: hidden;

    padding: 1em 0;

    background: no-repeat center url('/static/img/footer/back.png');
    background-size: cover;

    border-radius: 2em;
    text-align: center;

    transition: transform 0.3s, box-shadow 0.3s;

    $black: hsl(0, 0%, 4%);

    &:hover {
      transform: scale(1.02);
      box-shadow: 0 0.5em 2em -0.25em rgba($black, 0.1), 0 0px 1em 4px rgba($black, 0.02);
    }
  }

  img {
    margin: 1em auto;
    padding: 0 2em;
  }

  .white-back {
    padding: 3px 5px;
    background-color: white;
  }

  p {
    margin-bottom: -3px;
    line-height: 1.6;
  }
</style>
