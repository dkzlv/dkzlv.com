<script>
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  import { _ } from 'svelte-i18n';

  const attr = 'data-night-theme';

  let show = false;
  let value: string;
  $: checkboxValue = value === '1';

  onMount(() => {
    value = document.body.getAttribute(attr)!;
    show = true;
  });

  const onChange = () => {
    value = value === '0' ? '1' : '0';
    document.body.setAttribute(attr, value);
    localStorage.setItem(attr, value);
  };

  let y: number;
  $: showBeforeHiding = y <= 500;
</script>

<svelte:window bind:scrollY={y} />

{#if show && showBeforeHiding}
  <div
    class="wrapper"
    in:fade={{ delay: 500, duration: 200 }}
    out:fade={{ duration: 200 }}
    on:click={onChange}
  >
    <label class="p label" for="switch">{$_('colorSwitcher')}</label>
    <div class="switch">
      <input id="switch" type="checkbox" bind:checked={checkboxValue} on:change={onChange} />
      <span class="slider" />
    </div>
  </div>
{/if}

<style lang="scss">
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

    > .label {
      font-size: ms(-1);
      margin: 0 8px 0 0;
      color: $accent-color;
      cursor: pointer;
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
