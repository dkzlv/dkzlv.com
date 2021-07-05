<script>
  import type { LeakClient } from '$core/content/leak/types';

  import { date, _ } from 'svelte-i18n';

  import Link from '$components/link.svelte';

  import { leakPath, orgPath, locationPath, tagPath } from '$core/paths';

  export let leak: LeakClient, hideOrg: boolean, hideLocation: boolean;
</script>

<div class="cell" title={leak.content.title}>
  {#if leak.content.content}
    <Link href={$leakPath(leak.content.slug)}>
      {@html leak.content.title}
    </Link>
  {:else}
    <Link href={leak.meta.source}>
      <span>{@html leak.content.title}</span>
      <span class="icon">
        <svg viewBox="0 0 51 49" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M43.8925 20.4574V47H2V6.84043H30.129M21.0968 29.6064L49 2M49 2V14.5426M49 2H37.0323"
            stroke="currentcolor"
            stroke-width="4"
            stroke-linejoin="round" />
        </svg>
      </span>
    </Link>
  {/if}
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

<style lang="scss">
  .cell {
    padding: 1em 0.4em;

    border-right: 1px dotted rgb(224, 224, 224);
    &:last-child {
      border-right: none;
    }
  }

  .icon {
    align-items: center;
    display: inline-flex;
    justify-content: center;
    height: 1rem;
    width: 1rem;
    margin-left: 0.3em;
  }

  .unknown {
    font-style: italic;
    color: var(--text-color--dimmed);
    font-size: 80%;
  }
</style>
