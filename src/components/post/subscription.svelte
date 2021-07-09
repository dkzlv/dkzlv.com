<script>
  import { _ } from 'svelte-i18n';

  import EmailCollector from '$components/emailCollector.svelte';
</script>

<div class="box">
  <div class="nested">
    <p class="size-3 bold">{$_('email.endPostEngagement.header')}</p>
    <p>
      <slot>
        {@html $_('email.endPostEngagement.text')}
      </slot>
    </p>

    <EmailCollector />
  </div>
</div>
