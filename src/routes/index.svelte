<script>
  import { browser } from '$app/env';
  import { goto } from '$app/navigation';
  import { locale } from 'svelte-i18n';

  if (browser) goto(`${locale}`, { replaceState: true });
</script>
