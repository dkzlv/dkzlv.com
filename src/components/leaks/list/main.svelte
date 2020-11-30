<script lang="ts">
  import type { LeakClient } from 'core/content/leak/types';

  import Header from './header.svelte';
  import Item from './item.svelte';

  export let leaks: LeakClient[];

  export let hideOrg = false,
    hideLocation = false;

  const defaultColumnSize = 'minmax(150px, 1fr)';

  $: inlineStyle =
    `--orgSize: ${hideOrg ? '' : defaultColumnSize};` +
    `--spreadSize: ${hideLocation ? '' : defaultColumnSize}`;
</script>

<style lang="scss">
  @import 'src/styles/importable';

  .main {
    position: relative;
    overflow: scroll;

    @include mq($from: tablet-landscape) {
      max-width: 80vw;
      margin: 0 auto;
    }
  }

  .box {
    background-color: hsl(0, 0%, 97%);
  }

  .table {
    display: grid;
    place-items: stretch;
    grid-template-columns: minmax(300px, max-content) var(--orgSize) var(--spreadSize) repeat(
        4,
        minmax(150px, 250px)
      );

    min-width: 600px;
  }

  .row {
    display: contents;

    > :global(div) {
      padding: 1em;
    }

    &:nth-child(odd) > :global(div) {
      background-color: hsl(0, 0%, 95%);
    }

    &:nth-child(2) > :global(div) {
      padding-top: 1.5em;
    }
  }
</style>

<div class="box">
  <div class="main">
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
</div>
