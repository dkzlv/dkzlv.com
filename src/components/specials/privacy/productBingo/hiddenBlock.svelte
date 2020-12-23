<script lang="ts">
  import { fade } from 'svelte/transition';

  export let text: string;

  let showOverlay = true;
</script>

<style lang="scss">
  @import 'src/styles/importable';

  .wrapper {
    position: relative;
    padding: 0 0.5em;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    display: flex;
    place-content: center;
    place-items: center;
    cursor: pointer;

    backdrop-filter: blur(5px);
  }
</style>

<div class="wrapper">
  {@html text}

  {#if showOverlay}
    <div class="overlay" transition:fade|local on:click={() => (showOverlay = false)} role="button">
      Показать
    </div>
  {/if}
</div>
