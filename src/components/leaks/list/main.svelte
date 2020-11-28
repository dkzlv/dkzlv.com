<script lang="ts">
  import type { LeakInComponent } from 'core/content/leak/types';

  import Header from './header.svelte';
  import Item from './item.svelte';

  export let leaks: LeakInComponent[];

  export let hideOrg = false,
    hideSpread = false;

  const defaultColumnSize = 'minmax(150px, 1fr)';

  $: inlineStyle =
    `--orgSize: ${hideOrg ? '' : defaultColumnSize};` +
    `--spreadSize: ${hideSpread ? '' : defaultColumnSize}`;
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
    background-color: rgb(247, 247, 247);
  }

  .wrapper {
    display: grid;
    place-items: stretch;
    grid-template-columns: minmax(300px, max-content) var(--orgSize) var(--spreadSize) repeat(
        4,
        minmax(150px, 250px)
      );

    min-width: 600px;
  }
</style>

<div class="box">
  <div class="main">
    <div class="wrapper" style={inlineStyle}>
      <Header {hideOrg} {hideSpread} />
      {#each leaks as leak, i}
        <Item {leak} {hideOrg} {hideSpread} first={i == 0} />
      {/each}
    </div>
  </div>
</div>
