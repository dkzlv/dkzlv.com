<script lang="ts">
  export let text: string;
</script>

<style lang="scss">
  @import 'src/styles/importable';

  .enum {
    display: grid;
    grid-row-gap: 1em;

    @include mq($until: mobile) {
      grid-template-columns: 1fr;

      &:nth-child(odd) {
        place-self: center;
      }
    }

    @include mq($from: mobile) {
      grid-template-columns: 1fr 4fr;
      grid-template-rows: 1fr;
      grid-column-gap: 1em;
    }

    :global(ul),
    :global(ol) {
      list-style-position: inside;
    }
  }
</style>

<div class="box">
  <div class="nested enum">
    {@html text}
  </div>
</div>
