<script lang="ts">
  import type { LeakClient } from 'core/content/leak/types';

  import { date, _ } from 'svelte-i18n';

  import Link from 'components/link.svelte';

  import { leakPath, orgPath, locationPath, tagPath } from 'core/paths.ts';

  export let leak: LeakClient, hideOrg: boolean, hideLocation: boolean;
</script>

<style lang="scss">
  @import 'src/styles/importable';

  .cell {
    padding: 1em 0.4em;

    border-right: 1px dotted rgb(224, 224, 224);
    &:last-child {
      border-right: none;
    }
  }

  .title {
    position: relative;

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

<div class="cell title" title={leak.content.title}>
  <Link href={$leakPath(leak.content.slug)}>
    {@html leak.content.title}
  </Link>
</div>
{#if !hideOrg}
  <div class="cell">
    <Link href={$orgPath(leak.meta.organization.content.slug)}>
      {leak.meta.organization.content.title}
    </Link>
  </div>
{/if}
{#if !hideLocation}
  <div class="cell tags">
    {#each leak.meta.locations as location}
      <Link class="tag" href={$locationPath(location.content.slug)}>
        <span class="no-underline">{location.emoji} </span>{location.content.title}
      </Link>
    {/each}
  </div>
{/if}
<div class="cell tags">
  {#each leak.meta.tags as tag}
    <Link class="tag" href={$tagPath(tag.content.slug)}>{tag.content.title}</Link>
  {/each}
</div>
<div class="cell">{leak.meta.potentialVictims}</div>
<div class="cell">
  {#if leak.meta.start}
    {$date(new Date(leak.meta.start), { format: 'medium' })}
  {:else}<span class="unknown">{$_('leaks.table.unknown').toLowerCase()}</span>{/if}
</div>
<div class="cell">{$date(new Date(leak.meta.end), { format: 'medium' })}</div>
