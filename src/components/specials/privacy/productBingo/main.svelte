<script context="module">
  export const classname = 'product-bingo';
</script>

<script>
  import { onMount } from 'svelte';

  import { mountComponentToClassSelector } from '$utils/mountComponentToSelector';

  import HiddenBlock from './hiddenBlock.svelte';

  export let text: string;

  onMount(() => {
    const cmps = mountComponentToClassSelector('hide-behind-blur', HiddenBlock);
    return () => cmps.forEach(cmp => cmp.$destroy());
  });
</script>

<div class="wrapper">
  {@html text}
</div>

<style lang="scss">
  .wrapper {
    display: grid;
    grid-template-columns: 2fr 3fr;
    grid-template-rows: auto;

    margin: 2em auto;

    row-gap: 0.5em;

    &:global {
      .header {
        border-bottom: 2px dotted $hr-color;

        font-weight: bold;
        font-size: 110%;
        text-transform: uppercase;
      }
    }
  }
</style>
