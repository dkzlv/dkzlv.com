<script>
  import { fade } from 'svelte/transition'
  import { langStore } from '../routes/store.js'
  import t from '../routes/i18n.js'
  import isEmail from '../utils/validations/email.js'
  import Tooltip from './tooltip.svelte'

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
  }

  let email = ''

  $: errorCode = email && 0
  let success = false

  const onSubmit = () => {
    if (isEmail(email)) {
      // subscribe
      email = ''
      success = true
      setTimeout(() => (success = false), 5000)
    } else {
      errorCode = 102
    }
  }
</script>

<style type="text/scss">
  @import '../styles/importable';

  .form {
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
    &__trigger {
      height: 30px;
      width: 30px;
      padding: 7px;
      border-radius: $radius-rounded;

      border: 2px dotted $accent-color;
      color: $accent-color;
      background-color: $background-color;
      text-align: center;

      user-select: none;
    }

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
    margin-right: 5px;
    margin-bottom: 5px;
  }
</style>

<div class="form">
  <form novalidate on:submit|preventDefault={onSubmit}>
    <input
      type="email"
      class="input input--accent email-input"
      bind:value={email}
      {placeholder} />
    <input
      type="submit"
      class="btn btn--accent-outline subscribe-button"
      value={buttonText} />
  </form>
  <Tooltip>
    <div class="tooltip__trigger" slot="trigger">?</div>

    <div class="tooltip__content" slot="content">
      <p class="tooltip__header">{headerText}</p>
      <p class="tooltip__p">{noNudesText}</p>
      <p class="tooltip__p">{articlesText}</p>
    </div>
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
