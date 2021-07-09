<div class="box">
  <div class="nested enum">
    <slot />
  </div>
</div>

<style lang="scss">
  .enum {
    display: grid;

    @include mq($until: mobile) {
      grid-template-columns: 1fr;

      &:nth-child(odd) {
        place-self: center;
      }
    }

    @include mq($from: mobile) {
      grid-template-columns: 1fr 4fr;
      grid-template-rows: 1fr;
    }

    :global(ul),
    :global(ol) {
      list-style-position: inside;
    }

    :global(img) {
      margin: 0;
    }

    > :global(*) {
      padding: 1em 0;
      padding-right: 1em;

      &:nth-child(odd) {
        padding-left: 1em;
      }

      &:nth-child(4n + 3),
      &:nth-child(4n + 4) {
        background-color: $box-odd-background;
      }
    }
  }
</style>
