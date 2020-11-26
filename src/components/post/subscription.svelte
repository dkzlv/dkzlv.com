<script lang="ts">
  import { _ } from 'svelte-i18n';

  import EmailCollector from 'components/emailCollector.svelte';

  export let text: string;
</script>

<div class="box">
  <div class="nested">
    <p class="size-3 bold">{$_('email.endPostEngagement.header')}</p>
    <p>
      {@html text || $_('email.endPostEngagement.text')}
    </p>

    <EmailCollector />
  </div>
</div>
