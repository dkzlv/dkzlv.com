<script>
  import type { Breach } from '$core/content/getBreaches';

  import Link from '$components/link.svelte';
  import Feedback from './feedback.svelte';
  import CompanyDisclosure from './companyDisclosure.svelte';

  import { date, _ } from 'svelte-i18n';

  import { orgPath, locationPath, tagPath } from '$core/paths';

  export let breach: Breach;
</script>

<h1>
  {@html breach.title}
</h1>
<p class="added">
  {$_('breaches.table.added')}:
  {$date(new Date(breach.added), { format: 'medium' })}
</p>
<div class="box">
  <div class="nested main">
    <div class="row">
      <div>{$_('breaches.table.org')}</div>
      <Link href={$orgPath(breach.organization.slug)}>
        {breach.organization.display}
      </Link>
    </div>

    <div class="row">
      <div>{$_('breaches.table.spread')}</div>
      <div class="tags">
        {#each breach.locations as location}
          <Link class="tag" href={$locationPath(location.slug)}>
            {location.display}
          </Link>
        {/each}
      </div>
    </div>
    <div class="row">
      <div>{$_('breaches.table.tags')}</div>
      <div class="tags">
        {#each breach.tags as tag}
          <Link class="tag" href={$tagPath(tag.slug)}>{tag.display}</Link>
        {/each}
      </div>
    </div>
    <div class="row">
      <div>{$_('breaches.table.victims')}</div>
      <div>{breach.potentialVictims}</div>
    </div>
    <div class="row">
      <div>{$_('breaches.table.when')}</div>
      <div class="when">
        <div class:smol={!breach.start}>
          {breach.start
            ? $date(breach.start, {
                format: 'medium',
              })
            : $_('breaches.table.unknown').toLowerCase()}
        </div>
        <div>→</div>
        <div>{$date(breach.end, { format: 'medium' })}</div>
      </div>
    </div>

    <div class="source">
      <Link class="tag" href={breach.source}>{$_('breaches.table.source')}</Link>
    </div>
  </div>
</div>

<div class="post-content">
  {#if breach.isCorporationbreach}
    <CompanyDisclosure />
  {/if}

  <slot />

  <hr />

  <Feedback {breach} />
</div>

<style lang="scss">
  .added {
    color: $text-color--dimmed;

    font-size: 70%;
    font-style: italic;
  }

  .main {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: center;

    grid-column-gap: 2em;
    grid-row-gap: 1em;
  }

  .row {
    display: contents;

    > *:first-child {
      justify-self: end;

      font-weight: bold;
      text-transform: uppercase;
      font-size: 90%;
    }
  }

  .source {
    grid-column: 1 / span 2;
    justify-self: center;
  }

  .smol {
    font-size: 90%;
    color: $text-color--dimmed;
  }

  .when {
    display: flex;
    place-items: center;

    div:nth-child(2) {
      padding: 0 0.6em;
    }
  }
</style>
