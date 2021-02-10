<script lang="ts" context="module">
  export const classname = 'product-bingo';
</script>

<script lang="ts">
  import { onMount } from 'svelte';

  import { mountComponentToClassSelector } from 'utils/mountComponentToSelector.ts';

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
  @import 'src/styles/importable';

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
