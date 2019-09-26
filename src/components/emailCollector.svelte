<script>
  import { fade } from 'svelte/transition'
  import { langStore } from '../routes/store.js'
  import t from '../routes/_i18n/client.js'
  import isEmail from '../utils/validations/email.js'
  import delay from '../utils/delay.js'
  import Tooltip from './tooltip.svelte'
  import request from '../routes/service'

  $: placeholder = $langStore && t('email.placeholder')
  $: buttonText = $langStore && t('email.subscribe')
  $: successText = $langStore && t('email.success')
  $: headerText = $langStore && t('email.tooltip.header')
  $: noNudesText = $langStore && t('email.tooltip.noNudes')
  $: articlesText = $langStore && t('email.tooltip.articles')

  $: errors = $langStore && {
    100: t('email.error100'),
    101: t('email.error101'),
    102: t('email.error102'),
    103: t('email.error103'),
  }

  let email = ''

  $: errorCode = email && 0
  let success = false
  let isLoading = false

  const onSubmit = async () => {
    if (!email) {
      return (errorCode = 103)
    } else if (!isEmail(email)) {
      return (errorCode = 102)
    }

    isLoading = true
    const res = await request('POST', 'subscribe', {
      email,
      language: $langStore,
    })
    isLoading = false
    if (res.ok) {
      email = ''
      success = true
      await delay(5000)
      success = false
    } else {
      errorCode = (await res.json()).code
    }
  }
</script>

<style type="text/scss">
  @import '../styles/importable';

  .group {
    display: flex;
    align-items: baseline;
    flex-wrap: wrap;
  }

  .below-form {
    margin-top: 5px;
    min-height: 25px;

    > p {
      margin-bottom: 0;
    }
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
    <input
      type="email"
      class="input input--accent email-input"
      bind:value={email}
      {placeholder} />
    <button
      class={'btn btn--accent-outline subscribe-button ' + (isLoading && 'btn--loading')}
      disabled={isLoading}>
      {buttonText}
    </button>
  </form>
  <Tooltip>
    <p class="tooltip__header">{headerText}</p>
    <p class="tooltip__p">{noNudesText}</p>
    <p class="tooltip__p">{articlesText}</p>
  </Tooltip>
</div>

<div class="below-form">
  {#if errorCode}
    <p
      class="text--error"
      in:fade={{ duration: 200 }}
      out:fade={{ duration: 200 }}>
      {errors[errorCode]}
    </p>
  {:else if success}
    <p
      class="text--success"
      in:fade={{ duration: 200 }}
      out:fade={{ duration: 200 }}>
      {successText}
    </p>
  {/if}
</div>
