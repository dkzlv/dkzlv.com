<script>
  import { _ } from 'svelte-i18n';
</script>

<div>{$_('breaches.table.title')}</div>
<div>{$_('breaches.table.org')}</div>
<div>{$_('breaches.table.spread')}</div>
<div>{$_('breaches.table.tags')}</div>
<div>{$_('breaches.table.victims')}</div>
<div>{$_('breaches.table.start')}</div>
<div>{$_('breaches.table.end')}</div>

<style lang="scss">
  $border-style: 1px dotted rgb(184, 184, 184);

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;

    position: sticky;
    top: 0;

    padding: 0.8em 1.2em;

    border-bottom: $border-style;
    border-right: $border-style;
    text-align: center;

    text-transform: uppercase;
    font-size: 90%;
    font-weight: bold;

    &:last-child {
      border-right: none;
    }
  }
</style>
