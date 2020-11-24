<script lang="ts">
  export let content: string;
</script>

<style lang="scss">
  @import 'src/styles/importable';

  .wrapper {
    display: grid;
    grid-row-gap: 1em;

    @include mq($until: mobile) {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 3fr;
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
  <div class="nested wrapper">
    {@html content}
  </div>
</div>
