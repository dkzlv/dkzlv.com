<script lang="ts">
  import { _ } from 'svelte-i18n';

  import Fingerprint from 'components/specials/privacy/fingerprint.svelte';
</script>

<div class="post-content">
  <h1>{$_('specials.fingerprint.standalone.header')}</h1>

  <p>{$_('specials.fingerprint.standalone.description.0')}</p>
  <p>{$_('specials.fingerprint.standalone.description.1')}</p>

  <Fingerprint />
</div>
