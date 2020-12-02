<script lang="ts">
  import type { LeakClient } from 'core/content/leak/types';

  import { date, _ } from 'svelte-i18n';

  import Link from 'components/link.svelte';
  import Feedback from './feedback.svelte';
  import EmailCollector from 'components/emailCollector.svelte';

  import { orgPath, locationPath, tagPath } from 'core/paths.ts';

  export let leak: LeakClient;
</script>

<style lang="scss">
  @import 'src/styles/importable';

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

<h1>
  {@html leak.content.title}
</h1>
<p class="added">
  {$_('leaks.table.added')}:
  {$date(new Date(leak.meta.added), { format: 'medium' })}
</p>
<div class="box">
  <div class="nested main">
    <div class="row">
      <div>{$_('leaks.table.org')}</div>
      <Link href={$orgPath(leak.meta.organization.content.slug)}>
        {leak.meta.organization.content.title}
      </Link>
    </div>

    <div class="row">
      <div>{$_('leaks.table.spread')}</div>
      <div class="tags">
        {#each leak.meta.locations as location}
          <Link class="tag" href={$locationPath(location.content.slug)}>
            <span class="no-underline">{location.emoji} </span>{location.content.title}
          </Link>
        {/each}
      </div>
    </div>
    <div class="row">
      <div>{$_('leaks.table.tags')}</div>
      <div class="tags">
        {#each leak.meta.tags as tag}
          <Link class="tag" href={$tagPath(tag.content.slug)}>{tag.content.title}</Link>
        {/each}
      </div>
    </div>
    <div class="row">
      <div>{$_('leaks.table.victims')}</div>
      <div>{leak.meta.potentialVictims}</div>
    </div>
    <div class="row">
      <div>{$_('leaks.table.when')}</div>
      <div class="when">
        <div class:smol={!leak.meta.start}>
          {leak.meta.start ? $date(leak.meta.start, {
                format: 'medium',
              }) : $_('leaks.table.unknown').toLowerCase()}
        </div>
        <div>→</div>
        <div>{$date(leak.meta.end, { format: 'medium' })}</div>
      </div>
    </div>

    <div class="source">
      <Link class="tag" href={leak.meta.source}>{$_('leaks.table.source')}</Link>
    </div>
  </div>
</div>

<div class="post-content">
  {@html leak.content.content}

  <hr />

  <Feedback {leak} />

  <div class="box">
    <div class="nested">
      <h4>{$_('email.endPostEngagement.header')}</h4>
      <p>{$_('leaks.emailText')}</p>
      <EmailCollector />
    </div>
  </div>
</div>
