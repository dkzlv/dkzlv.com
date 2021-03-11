<script>
  import type { LeakClient } from '@/core/content/leak/types';

  import { _ } from 'svelte-i18n';
  import { generateLinkTags } from '@/utils/accentTags';

  export let leak: LeakClient | undefined = undefined;

  let paragraph: string;
  $: {
    const subject = leak
        ? `[${leak.content.slug}] ${$_('leaks.feedback.emailSubjectOld')}`
        : `[leaks] ${$_('leaks.feedback.emailSubjectNew')}: `,
      body = leak ? '' : $_('leaks.feedback.newStoryBody'),
      link = `mailto:dkzlv@protonmail.com?subject=${encodeURIComponent(
        subject,
      )}&body=${encodeURIComponent(body)}`,
      payload = { values: generateLinkTags(link) };

    paragraph = leak ? $_('leaks.feedback.pOld', payload) : $_('leaks.feedback.pNew', payload);
  }
</script>

<h4>{leak ? $_('leaks.feedback.headerOld') : $_('leaks.feedback.headerNew')}</h4>

<p>
  {@html paragraph}
</p>

<style>
  p {
    margin-bottom: 5em;
  }
</style>
