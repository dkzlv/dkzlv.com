<script>
  import type { Breach } from '$core/content/getBreaches';

  import { date, _ } from 'svelte-i18n';

  import Link from '$components/link.svelte';

  import { breachPath, orgPath, locationPath, tagPath } from '$core/paths';

  export let breach: Breach;
</script>

<div class="cell" title={breach.title}>
  {#if breach.isEmpty}
    <Link href={breach.source}>
      <span>{breach.title}</span>
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
  {:else}
    <Link href={$breachPath(breach.slug)}>
      {breach.title}
    </Link>
  {/if}
</div>
<div class="cell">
  <Link href={$orgPath(breach.organization.slug)}>
    {breach.organization.display}
  </Link>
</div>
<div class="cell tags">
  {#each breach.locations as location}
    <Link class="tag" href={$locationPath(location.slug)}>
      {location.display}
    </Link>
  {/each}
</div>
<div class="cell tags to-lowercase">
  {#each breach.tags as tag}
    <Link class="tag" href={$tagPath(tag.slug)}>{tag.display}</Link>
  {/each}
</div>
<div class="cell">{breach.potentialVictims}</div>
<div class="cell">
  {#if breach.start}
    {$date(new Date(breach.start), { format: 'medium' })}
  {:else}<span class="unknown">{$_('breaches.table.unknown').toLowerCase()}</span>{/if}
</div>
<div class="cell">{$date(new Date(breach.end), { format: 'medium' })}</div>

<style lang="scss">
  .cell {
    padding: 1em 0.4em;

    border-right: 1px dotted rgb(224, 224, 224);

    &.to-lowercase {
      text-transform: lowercase;
    }

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
