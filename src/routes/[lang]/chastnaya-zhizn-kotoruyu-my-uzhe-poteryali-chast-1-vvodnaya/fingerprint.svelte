<script>
  import nanoid from "nanoid";

  let text = "Хуё-моё";
  let isLoading = false;

  const onClick = async () => {
    const id = nanoid();
    isLoading = true;

    const result = await fetch(
      `https://httpbin.org/cookies/set/${id}/${encodeURI(text)}`
    );

    isLoading = false;
  };
</script>

<style type="text/scss">
  @import "../../../styles/importable.scss";

  .container {
    display: flex;
    flex-direction: column;
    margin: 20px;
  }

  .interactive {
    display: flex;

    input {
      @include mq($until: mobile) {
        min-width: 120px;
        flex: 1;
      }

      margin-right: 5px;
    }
  }
</style>

<div class="container">
  <p>Введи что-нибудь или нажми на кнопочку</p>

  <div class="interactive">
    <input class="input input--accent" bind:value={text} />
    <button
      class="btn btn--accent {isLoading && 'btn--loading'}"
      on:click={onClick}>
      Жахаем
    </button>
  </div>

</div>
