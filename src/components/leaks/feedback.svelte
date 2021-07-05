<script>
  import type { LeakClient } from '$core/content/leak/types';

  import EmailCollector from '$components/emailCollector.svelte';

  import { _ } from 'svelte-i18n';
  import { generateLinkTags } from '$utils/accentTags';

  export let leak: LeakClient | undefined = undefined;

  let payload: { values: { [key: string]: string } };
  $: {
    const subject = leak
        ? `[${leak.content.slug}] ${$_('leaks.feedback.emailSubjectOld')}`
        : `[leaks] ${$_('leaks.feedback.emailSubjectNew')}: `,
      body = leak ? '' : $_('leaks.feedback.newStoryBody'),
      link = `mailto:dkzlv@protonmail.com?subject=${encodeURIComponent(
        subject,
      )}&body=${encodeURIComponent(body)}`;

    payload = {
      values: {
        ...generateLinkTags(link, 'Email'),
        ...generateLinkTags('https://github.com/dkzlv/dkzlv.com/issues', 'PR'),
      },
    };
  }
</script>

<div class="box">
  <div class="nested">
    <h4>{$_('email.endPostEngagement.header')}</h4>
    <p>{$_('leaks.emailText')}</p>
    <EmailCollector />
  </div>
</div>

<h4>
  {leak ? $_('leaks.feedback.headerOld') : $_('leaks.feedback.headerNew')}
</h4>

{#if leak}
  <p class="last">
    {@html $_('leaks.feedback.pOld', payload)}
  </p>
{:else}
  <p>
    {@html $_('leaks.feedback.pNew', payload)}
  </p>
  <p class="last">{$_('leaks.feedback.pNewSources')}</p>
{/if}

<style>
  .last {
    margin-bottom: 5em;
  }
</style>
