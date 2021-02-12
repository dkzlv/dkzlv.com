<script>
  import logoPic from './logo.png';
</script>

<a href="https://safeapps.io/">
  <div class="wrapper">
    <img src={logoPic} alt="[safe] money logo" />

    <h2><span class="white-back">Безопасный на 100% трекер финансов</span></h2>
    <p><span class="white-back">Без трекеров, все данные шифруются в браузере</span></p>
    <p>
      <span class="white-back"
        >Ведите расходы, учитывайте активы, кредиты, долги и многое другое</span>
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

    &:hover {
      transform: scale(1.02);
      box-shadow: 0 1em 2em -0.4em hsla(0, 0%, 50%, 0.5);
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
