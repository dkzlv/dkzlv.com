<script>
  import { fade } from 'svelte/transition';
</script>

<div class="loading" in:fade={{ delay: 150 }} out:fade />

<style lang="scss">
  .loading {
    position: fixed;
    height: 2em;
    width: 2em;

    @include mq($from: mobile) {
      top: 60px;
      right: 85px;
    }

    @include mq($until: mobile) {
      top: 25px;
      right: 25px;
    }

    background-color: $background-color;
  }
</style>
