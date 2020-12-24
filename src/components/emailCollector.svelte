<script lang="ts">
  import { slide } from 'svelte/transition';
  import { _, locale } from 'svelte-i18n';

  import { request } from 'core/service.ts';
  import { isEmail } from 'utils/validations/email.ts';
  import { delay } from 'utils/delay.ts';

  import Tooltip from './tooltip.svelte';

  $: errors = {
    100: $_('email.error100'),
    101: $_('email.error101'),
    102: $_('email.error102'),
    103: $_('email.error103'),
  };

  let email = '';

  $: placeholderMessage = $_('email.placeholder') as string;
  $: errorCode = (email && 0) as keyof typeof errors;
  let success = false,
    isLoading = false;

  const id = Math.random().toString(),
    onSubmit = async () => {
      if (!email) {
        return (errorCode = 103);
      } else if (!isEmail(email)) {
        return (errorCode = 102);
      }

      isLoading = true;
      const res = await request('POST', 'subscribe', {
        email,
        language: $locale,
      });
      isLoading = false;
      if (res.ok) {
        email = '';
        success = true;
        await delay(5000);
        success = false;
      } else {
        errorCode = (await res.json()).code;
      }
    };
</script>

<style lang="scss">
  @import 'src/styles/importable';

  .group {
    display: flex;
    align-items: stretch;
    flex-wrap: wrap;
  }

  .tooltip {
    &__header {
      font-weight: $bold;
      margin-bottom: 5px;
    }

    &__p {
      font-size: ms(-1);
      margin-bottom: 0;
    }
  }

  .email-input,
  .subscribe-button {
    margin-bottom: 5px;
  }

  form {
    display: flex;
    align-items: stretch;
    flex-wrap: wrap;

    > * {
      margin-right: 3px;
    }
  }
</style>

<div class="group">
  <form novalidate on:submit|preventDefault={onSubmit}>
    <label for={id} class="hide">{$_('email.placeholder')}</label>
    <input
      {id}
      type="email"
      class="input input--accent email-input"
      bind:value={email}
      placeholder={placeholderMessage} />
    <button
      class="btn btn--accent-outline subscribe-button"
      class:btn--loading={isLoading}
      disabled={isLoading}>
      {$_('email.subscribe')}
    </button>
  </form>
  <Tooltip>
    <p class="tooltip__header">{$_('email.tooltip.header')}</p>
    <p class="tooltip__p">{$_('email.tooltip.noNudes')}</p>
    <p class="tooltip__p">{$_('email.tooltip.articles')}</p>
  </Tooltip>
</div>

{#if errorCode}
  <p class="text--error" transition:slide={{ duration: 200 }}>{errors[errorCode]}</p>
{:else if success}
  <p class="text--success" transition:slide={{ duration: 200 }}>{$_('email.success')}</p>
{/if}
