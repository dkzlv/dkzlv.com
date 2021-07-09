<script>
  import type { Breach } from '$core/content/getBreaches';

  import Header from './header.svelte';
  import Item from './item.svelte';

  export let breaches: Breach[];

  let showOverlay = true,
    containerEl: HTMLDivElement;

  // Hiding overlay on ultrawide displays
  $: if (containerEl) showOverlay = containerEl.scrollWidth > containerEl.clientWidth;

  const scrollHandler = () =>
    (showOverlay = containerEl.scrollWidth - containerEl.scrollLeft > containerEl.clientWidth);
</script>

<div class="box">
  <div class="main" bind:this={containerEl} on:scroll={scrollHandler}>
    <div class="table">
      <div class="row">
        <Header />
      </div>
      {#each breaches as breach}
        <div class="row">
          <Item {breach} />
        </div>
      {/each}
    </div>
  </div>
  <div class="overlay hiding-overlay" class:show={showOverlay} />
  <div class="arrow hiding-overlay" class:show={showOverlay}>→</div>
</div>

<style lang="scss">
  .main {
    position: relative;
    overflow: scroll;

    @include mq($from: tablet-landscape) {
      margin: 0 auto;
      padding-left: 15vw;
    }
  }

  .hiding-overlay {
    opacity: 0;

    transition: opacity 0.25s ease-in-out;

    &.show {
      opacity: 1;
    }
  }

  $overlay-width: 80px;
  .overlay {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: $overlay-width;
    background: linear-gradient(
      90deg,
      $breaches-grid-overlay-transparent 0%,
      $breaches-grid-background 60%
    );
  }

  .arrow {
    position: absolute;
    top: 50%;
    right: 0;
    width: $overlay-width / 2;

    text-align: center;

    $base-translate-y: translateY(-50%);
    transform: $base-translate-y;

    @keyframes arrowAnim {
      from {
        transform: $base-translate-y;
      }
      to {
        transform: $base-translate-y translateX(-5px);
      }
    }

    animation: arrowAnim ease-in alternate 0.5s;
    animation-delay: 1s;
    animation-iteration-count: 6;

    color: $text-color--dimmed;
  }

  .box {
    background-color: $breaches-grid-background;
  }

  .table {
    display: grid;
    place-items: stretch;
    grid-template-columns: minmax(300px, max-content) minmax(150px, 250px) min-content repeat(
        4,
        minmax(150px, 200px)
      );

    min-width: 600px;
    line-height: 1.75;
  }

  .row {
    display: contents;

    > :global(div) {
      padding: 1em;
    }

    &:nth-child(odd) > :global(div) {
      background-color: $breaches-grid-background-odd;
    }

    &:nth-child(2) > :global(div) {
      padding-top: 1.5em;
    }
  }
</style>
