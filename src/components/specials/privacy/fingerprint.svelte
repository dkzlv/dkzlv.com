<script context="module">
  export const classname = 'fingerprint';

  const codeTags = { codeO: '<code>', codeC: '</code>' };
</script>

<script>
  import { _, json } from 'svelte-i18n';
  import { onMount } from 'svelte';
  import { slide } from 'svelte/transition';

  import { sample } from '@/utils/random';

  import { request } from '@/core/service';
  import { getFingerprintHash } from '@/core/dataCollection/fingerprint';

  let isLoading = false,
    justSent = false,
    message = '';

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

  const onClick = async () => {
    if (!message) message = sample($json('specials.fingerprint.form.variants'));

    isLoading = true;
    await request('POST', 'fingerprint/save', {
      fingerprint,
      message: message.slice(0, 200),
    });
    isLoading = false;
    justSent = true;
  };
</script>

<div class="box">
  <div class="nested">
    <div class="container">
      <p>{$_('specials.fingerprint.header')}</p>

      <div class="interactive">
        <label for="demoInput" class="hide">{$_('specials.fingerprint.form.label')}</label>
        <input
          class="input input--accent"
          id="demoInput"
          bind:value={message}
          placeholder={$_('specials.fingerprint.form.placeholder')} />
        <button class="btn btn--accent {isLoading && 'btn--loading'}" on:click={onClick}>
          {$_('specials.fingerprint.form.button')}
        </button>
      </div>
      {#if justSent}
        <p class="previous" in:slide>
          {@html $_('specials.fingerprint.result.success', {
            values: { ...codeTags, linkO: `<a href="${href}">`, linkC: '</a>', fingerprint },
          })}
        </p>
      {/if}

      {#if prevMessage && !justSent}
        <p class="previous" in:slide>
          {@html $_('specials.fingerprint.result.guess', {
            values: { ...codeTags, fingerprint, prevMessage },
          })}
        </p>
      {/if}
    </div>
  </div>
</div>

<style lang="scss">
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
