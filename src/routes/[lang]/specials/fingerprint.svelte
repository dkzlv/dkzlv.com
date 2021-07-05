<script>
  import Fingerprint from '$components/specials/privacy/fingerprint.svelte';

  import { _, locale } from 'svelte-i18n';

  import { rootSitePath } from '$core/paths';
  import { generateLinkTags } from '$utils/accentTags';

  $: link =
    $locale == 'ru'
      ? `${rootSitePath}/ru/kak-sobirayut-dannye/`
      : `${rootSitePath}/en/how-they-harvest-data/`;
</script>

<div class="post-content">
  <h1>{$_('specials.fingerprint.standalone.header')}</h1>

  <p>
    {@html $_('specials.fingerprint.standalone.description.withLink', {
      values: generateLinkTags(link),
    })}
  </p>
  <p>{$_('specials.fingerprint.standalone.description.knowsId')}</p>

  <Fingerprint />

  <p>{$_('specials.fingerprint.standalone.description.additional.0')}</p>
  <ol>
    <li>{$_('specials.fingerprint.standalone.description.additional.1')}</li>
    <li>{$_('specials.fingerprint.standalone.description.additional.2')}</li>
    <li>{$_('specials.fingerprint.standalone.description.additional.3')}</li>
  </ol>
</div>

<style>
  .post-content {
    margin-bottom: 5em;
  }
</style>
