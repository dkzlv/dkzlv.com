<script>
  import { fade } from 'svelte/transition';
  import { _ } from 'svelte-i18n';

  let showOverlay = true;
</script>

<div class="wrapper">
  <p><slot /></p>

  {#if showOverlay}
    <div class="overlay" transition:fade|local on:click={() => (showOverlay = false)} role="button">
      {$_('specials.show')}
    </div>
  {/if}
</div>

<style lang="scss">
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
