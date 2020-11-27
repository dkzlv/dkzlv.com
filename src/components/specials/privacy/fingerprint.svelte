<script lang="ts">
  import { onMount } from 'svelte';
  import { slide } from 'svelte/transition';

  import { sample } from 'utils/random.ts';

  import { request } from 'core/service.ts';
  import { getFingerprintHash } from 'core/dataCollection/fingerprint.ts';

  let isLoading = false,
    justSent = false,
    message = '';

  // Оно повторяется в тексте поста!
  const id = 'fingerprint-demo';

  let href: string, fingerprint: string, prevMessage: string;

  onMount(async () => {
    href = location.href.replace(location.hash, '') + `#${id}`;
    fingerprint = await getFingerprintHash();
    try {
      prevMessage = (
        await (
          await request('POST', 'fingerprint/get', {
            fingerprint,
          })
        ).json()
      ).message;
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

<div class="box">
  <div class="nested">
    <div class="container">
      <p>Признайся, киса, какой у тебя любимый жанр порно?</p>

      <div class="interactive">
        <label for="demoInput" class="hide">Любимое порно</label>
        <input
          class="input input--accent"
          id="demoInput"
          bind:value={message}
          placeholder="Не стесняйся 👉👌💦👄" />
        <button class="btn btn--accent {isLoading && 'btn--loading'}" on:click={onClick}>
          Сохранить до полуночи
        </button>
      </div>
      {#if justSent}
        <p class="previous" in:slide>
          Записал. Твой ID:
          <code>{fingerprint}</code>
          . Теперь давай
          <a {href}>заходи сюда же</a>
          из анон-режима.
        </p>
      {/if}

      {#if prevMessage && !justSent}
        <p class="previous" in:slide>
          Штош, я сдетектил, что твоя любимая порка — это
          <code>{prevMessage}</code>
          , а твой ID:
          <code>{fingerprint}</code>
          .
        </p>
      {/if}
    </div>
  </div>
</div>