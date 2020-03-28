<script>
  import { _ } from 'svelte-i18n';

  import EmailCollector from 'components/emailCollector.svelte';

  export let engagement;
</script>

<div class="box">
  <div class="nested">
    <p class="size-3 bold">Рещще подпишитесь!</p>
    <p>
      {@html engagement || $_('email.endPostEngagement')}
    </p>

    <EmailCollector />
  </div>
</div>
