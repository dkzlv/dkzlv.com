<script lang="ts">
  import type { LeakInComponent } from 'core/content/leak/types';

  import { date, _ } from 'svelte-i18n';

  import Link from 'components/link.svelte';

  import { orgPath, spreadPath, tagPath } from 'core/paths.ts';

  export let leak: LeakInComponent, hideOrg: boolean, hideSpread: boolean, first: boolean;
</script>

<style lang="scss">
  @import 'src/styles/importable';

  .row {
    display: contents;
    div {
      padding: 1em 0.4em;

      border-right: 1px dotted rgb(224, 224, 224);
      &:last-child {
        border-right: none;
      }
    }
    &.first > div {
      padding-top: 1.5em;
    }
  }

  .title {
    overflow-x: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .unknown {
    font-style: italic;
    color: var(--text-color--dimmed);
    font-size: 80%;
  }
</style>

<div class="row" class:first>
  <div class="title" title={leak.content.title}>{leak.content.title}</div>
  {#if !hideOrg}
    <div>
      <Link href={$orgPath(leak.meta.organization)}>{leak.meta.organization}</Link>
    </div>
  {/if}
  {#if !hideSpread}
    <div>
      {#each leak.meta.spread as spread}
        <Link class="tag" href={$spreadPath(spread)}>{spread}</Link>
      {/each}
    </div>
  {/if}
  <div>
    {#each leak.meta.tags as tag}
      <Link class="tag" href={$tagPath(tag)}>{tag}</Link>
    {:else}---{/each}
  </div>
  <div>{leak.meta.potentialVictims}</div>
  <div>
    {#if leak.meta.start}
      {$date(new Date(leak.meta.start), { format: 'medium' })}
    {:else}<span class="unknown">{$_('leaks.table.unknown').toLowerCase()}</span>{/if}
  </div>
  <div>{$date(new Date(leak.meta.end), { format: 'medium' })}</div>
</div>
