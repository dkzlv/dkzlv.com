<script>
  import { slide } from 'svelte/transition';
  import { _, locale } from 'svelte-i18n';

  import request from 'core/service';
  import isEmail from 'utils/validations/email.js';
  import delay from 'utils/delay.js';

  import Tooltip from './tooltip.svelte';

  $: errors = {
    100: $_('email.error100'),
    101: $_('email.error101'),
    102: $_('email.error102'),
    103: $_('email.error103'),
  };

  let email = '';

  $: errorCode = email && 0;
  let success = false,
    isLoading = false;

  const onSubmit = async () => {
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
    align-items: baseline;
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
    margin-right: 3px;
  }
</style>

<div class="group">
  <form novalidate on:submit|preventDefault={onSubmit}>
    <label for="emailInput" class="hide">{$_('email.placeholder')}</label>
    <input
      type="email"
      id="emailInput"
      class="input input--accent email-input"
      bind:value={email}
      placeholder={$_('email.placeholder')} />
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
