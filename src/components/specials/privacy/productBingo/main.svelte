<script>
  export let header: boolean = false;
</script>

<div class="wrapper" class:header>
  <slot />
</div>

<style lang="scss">
  .wrapper {
    display: grid;
    grid-template-columns: 2fr 3fr;
    grid-template-rows: auto;

    margin: 2em auto;

    row-gap: 0.5em;

    &.header > :global(*:nth-child(-n + 2)) {
      border-bottom: 2px dotted $hr-color;

      font-weight: bold;
      font-size: 110%;
      text-transform: uppercase;
    }
  }
</style>
