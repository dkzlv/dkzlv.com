<script lang="ts">
  import type { LeakClient } from 'core/content/leak/types';

  import { date, _ } from 'svelte-i18n';

  import Link from 'components/link.svelte';

  import { orgPath, locationPath, tagPath } from 'core/paths.ts';

  export let leak: LeakClient, hideOrg: boolean, hideLocation: boolean;
</script>

<style lang="scss">
  @import 'src/styles/importable';

  div {
    padding: 1em 0.4em;

    border-right: 1px dotted rgb(224, 224, 224);
    &:last-child {
      border-right: none;
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

<div class="title" title={leak.content.title}>{leak.content.title}</div>
{#if !hideOrg}
  <div>
    <Link href={$orgPath(leak.meta.organization.content.slug)}>
      {leak.meta.organization.content.title}
    </Link>
  </div>
{/if}
{#if !hideLocation}
  <div>
    {#each leak.meta.locations as location}
      <Link class="tag" href={$locationPath(location.content.slug)}>
        {location.emoji}
        {location.content.title}
      </Link>
    {/each}
  </div>
{/if}
<div>
  {#each leak.meta.tags as tag}
    <Link class="tag" href={$tagPath(tag.content.slug)}>{tag.content.title}</Link>
  {:else}---{/each}
</div>
<div>{leak.meta.potentialVictims}</div>
<div>
  {#if leak.meta.start}
    {$date(new Date(leak.meta.start), { format: 'medium' })}
  {:else}<span class="unknown">{$_('leaks.table.unknown').toLowerCase()}</span>{/if}
</div>
<div>{$date(new Date(leak.meta.end), { format: 'medium' })}</div>
