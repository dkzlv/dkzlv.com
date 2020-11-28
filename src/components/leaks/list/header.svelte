<script lang="ts">
  import { _ } from 'svelte-i18n';

  export let hideOrg: boolean, hideSpread: boolean;
</script>

<style lang="scss">
  @import 'src/styles/importable';

  $border-style: 1px dotted rgb(184, 184, 184);

  .row {
    display: contents;
    div {
      display: flex;
      flex-direction: column;
      justify-content: center;

      position: sticky;
      top: 5px;

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
  }
</style>

<div class="row">
  <div>{$_('leaks.table.title')}</div>
  {#if !hideOrg}
    <div>{$_('leaks.table.org')}</div>
  {/if}
  {#if !hideSpread}
    <div>{$_('leaks.table.spread')}</div>
  {/if}
  <div>{$_('leaks.table.tags')}</div>
  <div>{$_('leaks.table.victims')}</div>
  <div>{$_('leaks.table.start')}</div>
  <div>{$_('leaks.table.end')}</div>
</div>
