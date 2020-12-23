<script lang="ts">
  import EmailCollector from 'components/emailCollector.svelte';

  import { _ } from 'svelte-i18n';
  import { postPath } from 'core/paths.ts';
</script>

<div class="post-content">
  <h1>{$_('specials.appDb.title')}</h1>

  <p>
    {@html $_('specials.appDb.main', {
      values: {
        tagO: `<a href=${$postPath('chto-mozhno-poluchit-iz-dannyh-i-chto-delat')}>`,
        tagC: '</a>',
      },
    })}
  </p>

  <div class="box">
    <div class="nested">
      <h4>{$_('email.endPostEngagement.header')}</h4>
      <p>{$_('leaks.emailText')}</p>
      <EmailCollector />
    </div>
  </div>
</div>
