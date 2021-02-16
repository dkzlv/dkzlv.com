<script>
  import type { LeakClient } from '@/core/content/leak/types';

  import { _ } from 'svelte-i18n';

  export let leak: LeakClient | undefined = undefined;

  let link: string;
  $: {
    const subject = leak
        ? `[${leak.content.slug}] ${$_('leaks.feedback.emailSubjectOld')}`
        : `[leaks] ${$_('leaks.feedback.emailSubjectNew')}: `,
      body = leak ? '' : $_('leaks.feedback.newStoryBody');

    link = `mailto:dkzlv@protonmail.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  }

  $: linkTags = {
    linkO: `<a href="${link}" rel="noreferrer noopener" target="_blank">`,
    linkC: '</a>',
  };

  $: paragraph = leak
    ? $_('leaks.feedback.pOld', {
        values: linkTags,
      })
    : $_('leaks.feedback.pNew', { values: linkTags });
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
