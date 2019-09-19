<script>
  import { onMount } from 'svelte'
  import { fade } from 'svelte/transition'
  import { langStore } from '../routes/store.js'
  import t from '../routes/i18n.js'

  $: buttonText = $langStore && t('colorSwitcher')

  const attr = 'data-night-theme'
  let show = false
  let value
  $: checkboxValue = value === '1'

  /**
   * Оборачиваю это в таймаут, потому что иначе getComputedStyle перехватывает цвет в процессе анимации
   * смены цвета фона.
   */
  const setInlineHtmlBgColor = () =>
    setTimeout(
      () =>
        (document.documentElement.style.backgroundColor = window.getComputedStyle(
          document.body,
        ).backgroundColor),
      400,
    )

  onMount(() => {
    value = document.body.getAttribute(attr)
    show = true
    setInlineHtmlBgColor()
  })

  const onChange = () => {
    value = value === '0' ? '1' : '0'
    document.body.setAttribute(attr, value)
    localStorage.setItem(attr, value)
    setInlineHtmlBgColor()
  }

  let y
  $: showBeforeHiding = y <= 500
</script>

<style type="text/scss">
  @import '../styles/importable';

  .wrapper {
    position: fixed;
    bottom: 30px;
    right: 10px;

    display: flex;
    flex-direction: row;

    background-color: $background-color;
    border: $border-style $accent-color;
    border-radius: $radius-rounded;
    padding: 10px;
    z-index: z(dropdown);

    cursor: pointer;
    user-select: none;

    > p {
      font-size: ms(-1);
      margin: 0 8px 0 0;
      color: $accent-color;
    }
  }

  $width: 40px;
  $height: 20px;
  $slider-gap: 2px;
  $slider-size: $height - $slider-gap * 2;
  $translate-size: $width - $slider-size - $slider-gap * 2;

  .switch {
    position: relative;
    display: inline-block;
    width: $width;
    height: $height;
  }

  input {
    opacity: 0;
    width: 0;
    height: 0;

    &:checked + .slider {
      background-color: $accent-color;
    }

    &:checked + .slider:before {
      transform: translateX($translate-size);
    }
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: hsl(0, 0%, 80%);
    transition: 0.4s;
    border-radius: $radius-rounded;

    &:before {
      position: absolute;
      content: '';
      height: $slider-size;
      width: $slider-size;
      left: $slider-gap;
      bottom: $slider-gap;
      background-color: $background-color;
      transition: 0.3s;
      border-radius: $radius-rounded;
    }
  }
</style>

<svelte:window bind:scrollY={y} />

{#if show && showBeforeHiding}
  <div
    class="wrapper"
    in:fade={{ delay: 500, duration: 200 }}
    out:fade={{ duration: 200 }}
    on:click={onChange}>
    <p>{buttonText}</p>
    <label class="switch">
      <input
        type="checkbox"
        bind:checked={checkboxValue}
        on:change={onChange} />
      <span class="slider" />
    </label>
  </div>
{/if}
