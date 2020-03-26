<script>
  import request from 'core/service.js';
  import getFingerprintHash from './getFingerprintHash.js';
  import { onMount } from 'svelte';
  import { sample } from 'utils/random.js';

  let isLoading = false,
    justSent = false,
    message = '';

  const id = 'fingerprint-demo';

  let href, fingerprint, prevMessage;

  onMount(async () => {
    href = window.location.href + `#${id}`;
    fingerprint = await getFingerprintHash();
    try {
      prevMessage = (await (await request('POST', 'fingerprint/get', {
        fingerprint,
      })).json()).message;
    } catch (err) {}
  });

  const textVariants = [
    'Зоофилия под Бетховена',
    'BBC с ЗППП',
    'Карлики в костюмах великанов',
    'Рик и Морти',
    'Великаны в костюмах карликов',
    'Трахать горячий хачапури',
  ];

  const onClick = async () => {
    if (!message) message = sample(textVariants);

    isLoading = true;
    await request('POST', 'fingerprint/save', {
      fingerprint,
      message: message.slice(0, 200),
    });
    isLoading = false;
    justSent = true;
  };
</script>

<style lang="scss">
  @import 'src/styles/importable.scss';

  .container {
    display: flex;
    flex-direction: column;
    margin: 20px;
  }

  .interactive {
    display: flex;

    @include mq($until: mobile) {
      flex-direction: column;
    }

    input {
      @include mq($until: mobile) {
        min-width: 120px;
        flex: 1;
        margin-bottom: 5px;
        width: 100%;
      }

      margin-right: 5px;
    }
  }

  .previous {
    margin-top: 10px;
  }
</style>

<div class="container" {id}>
  <p>Признайся, киса, какой у тебя любимый жанр порно?</p>

  <div class="interactive">
    <input class="input input--accent" bind:value={message} placeholder="Не стесняйся 👉👌💦👄" />
    <button class="btn btn--accent {isLoading && 'btn--loading'}" on:click={onClick}>
      Сохранить до полуночи
    </button>
  </div>
  {#if justSent}
    <p class="previous">
      Записал. Твой ID:
      <code>{fingerprint}</code>
      . Теперь давай
      <a {href}>заходи сюда же</a>
      из анон-режима.
    </p>
  {/if}

  {#if prevMessage && !justSent}
    <p class="previous">
      Штош, я сдетектил, что твоя любимая порка — это
      <code>{prevMessage}</code>
      , а твой ID:
      <code>{fingerprint}</code>
      .
    </p>
  {/if}
</div>
