<script lang="ts">
  import Link from './link.svelte';

  export let paths: { text: string; link?: string }[];
</script>

{#if paths.length}
  <div class="crumbs">
    {#each paths as { text, link }, i}
      {#if i}
        <div class="divider" />
      {/if}
      {#if link}
        <Link class="path" href={link}>{text}</Link>
      {:else}{text}{/if}
    {/each}
  </div>
{/if}

<style lang="scss">
  @import 'src/styles/importable';

  .crumbs {
    display: flex;
  }

  .divider {
    padding: 0 0.75em;

    &::before {
      content: '\0002f';
      color: $text-color--dimmed;
    }
  }
</style>
