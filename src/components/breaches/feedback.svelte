<script>
  import type { Breach } from '$core/content/getBreaches';

  import EmailCollector from '$components/emailCollector.svelte';

  import { _ } from 'svelte-i18n';
  import { generateLinkTags } from '$utils/accentTags';

  export let breach: Breach | undefined = undefined;

  let payload: { values: { [key: string]: string } };
  $: {
    const subject = breach
        ? `[${breach.slug}] ${$_('breaches.feedback.emailSubjectOld')}`
        : `[breaches] ${$_('breaches.feedback.emailSubjectNew')}: `,
      body = breach ? '' : $_('breaches.feedback.newStoryBody'),
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
    <p>{$_('breaches.emailText')}</p>
    <EmailCollector />
  </div>
</div>

<h4>
  {breach ? $_('breaches.feedback.headerOld') : $_('breaches.feedback.headerNew')}
</h4>

{#if breach}
  <p class="last">
    {@html $_('breaches.feedback.pOld', payload)}
  </p>
{:else}
  <p>
    {@html $_('breaches.feedback.pNew', payload)}
  </p>
  <p class="last">{$_('breaches.feedback.pNewSources')}</p>
{/if}

<style>
  .last {
    margin-bottom: 5em;
  }
</style>
