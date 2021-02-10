<script lang="ts">
  import type { LeakClient } from 'core/content/leak/types';

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

  $: paragraph = leak
    ? $_('leaks.feedback.pOld', {
        values: { link: link },
      })
    : $_('leaks.feedback.pNew', { values: { link: link } });
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
