<script>
  import { _, json } from 'svelte-i18n';
  import { onMount } from 'svelte';
  import { slide } from 'svelte/transition';
  import Fingerprint2 from '@fingerprintjs/fingerprintjs';

  import { sample } from '$utils/random';
  import { codeTags, generateLinkTags } from '$utils/accentTags';

  import { fingerprintPath } from '$core/paths';
  import { get, post, request } from '$core/service';

  let isLoading = false,
    justSent = false,
    message = '';

  let href: string, fingerprint: string, prevMessage: string;

  onMount(async () => {
    const fp = await Fingerprint2.load();

    href = $fingerprintPath;
    fingerprint = (await fp.get()).visitorId;
    try {
      const res = await request<{ message: string }>({
        method: get,
        path: 'fingerprint',
        queryParams: { fingerprint },
      });
      prevMessage = res.json.message;
    } catch (error) {}
  });

  const onClick = async () => {
    if (!message) message = sample($json('specials.fingerprint.form.variants'));

    isLoading = true;
    await request({
      method: post,
      path: 'fingerprint',
      data: {
        fingerprint,
        message: message.slice(0, 200),
      },
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
            values: { ...codeTags, ...generateLinkTags(href), fingerprint },
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
