<script>
  import type { LeakClient } from '@/core/content/leak/types';

  import Header from './header.svelte';
  import Item from './item.svelte';
  import Feedback from '../feedback.svelte';

  export let leaks: LeakClient[];

  export let hideOrg = false,
    hideLocation = false;

  $: inlineStyle =
    `--orgSize: ${hideOrg ? '' : 'minmax(150px, 250px)'};` +
    `--spreadSize: ${hideLocation ? '' : 'min-content'}`;

  let showOverlay = true,
    containerEl: HTMLDivElement;

  // Hiding overlay on ultrawide displays
  $: if (containerEl) showOverlay = containerEl.scrollWidth > containerEl.clientWidth;

  const scrollHandler = () =>
    (showOverlay = containerEl.scrollWidth - containerEl.scrollLeft > containerEl.clientWidth);
</script>

<div class="box">
  <div class="main" bind:this={containerEl} on:scroll={scrollHandler}>
    <div class="table" style={inlineStyle}>
      <div class="row">
        <Header {hideOrg} {hideLocation} />
      </div>
      {#each leaks as leak}
        <div class="row">
          <Item {leak} {hideOrg} {hideLocation} />
        </div>
      {/each}
    </div>
  </div>
  <div class="overlay hiding-overlay" class:show={showOverlay} />
  <div class="arrow hiding-overlay" class:show={showOverlay}>→</div>
</div>

<Feedback />

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
      $leaks-grid-overlay-transparent 0%,
      $leaks-grid-background 60%
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
      0% {
        transform: $base-translate-y translateX(0);
      }
      60% {
        transform: $base-translate-y translateX(-5px);
      }
      100% {
        transform: $base-translate-y translateX(0);
      }
    }

    animation: arrowAnim ease-in 1s;
    animation-delay: 1s;
    animation-iteration-count: 3;

    color: $text-color--dimmed;
  }

  .box {
    background-color: $leaks-grid-background;
  }

  .table {
    display: grid;
    place-items: stretch;
    grid-template-columns: minmax(300px, max-content) var(--orgSize) var(--spreadSize) repeat(
        4,
        minmax(150px, 200px)
      );

    min-width: 600px;
  }

  .row {
    display: contents;

    > :global(div) {
      padding: 1em;
    }

    &:nth-child(odd) > :global(div) {
      background-color: $leaks-grid-background-odd;
    }

    &:nth-child(2) > :global(div) {
      padding-top: 1.5em;
    }
  }
</style>
