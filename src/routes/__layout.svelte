<script>
  import { onMount } from 'svelte';

  import { i18nInitialize } from '$core/i18n';

  let initialized = false;
  onMount(() => {
    i18nInitialize();
    initialized = true;
  });
</script>

{#if initialized}<slot />{/if}
