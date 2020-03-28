<script>
  import { _ } from 'svelte-i18n';

  import EmailCollector from 'components/emailCollector.svelte';

  export let postMeta;
  $: hasAnnounced = postMeta.series.some(meta => meta && meta.announced);
</script>

<style lang="scss">
  @import 'src/styles/importable';

  .series-header {
    font-weight: bold;
    font-size: ms(3);
  }

  .soon {
    margin-left: 5px;
  }

  ol {
    list-style: none;
    counter-reset: series;

    li {
      counter-increment: series;
      margin-bottom: 1em;

      &::before {
        content: '0' counter(series);
        float: left;
        margin-right: 0.5em;

        font-weight: bold;
        font-size: ms(2);
        line-height: 1;

        @include mq($from: mobile) {
          margin-left: -2em;
        }
      }
    }
  }
</style>

<div class="box">
  <div class="nested">
    <p class="series-header">{$_('posts.series.header')}</p>
    <ol>
      {#each postMeta.series as seriesPost}
        <li>
          {#if seriesPost === null}
            <span class="size-1 bold">{postMeta.title}</span>
            <span class="italic">{$_('posts.series.thisPost')}</span>
          {:else if seriesPost.announced}
            <p>
              <span class="size-1 bold">{seriesPost.title}</span>
              <span class="tag soon">{$_('posts.series.soon')}</span>
              <br />
              {@html seriesPost.description}
            </p>
          {:else}
            <p>
              <span class="size-1 bold">
                <a rel="prefetch" href={seriesPost.slug}>{seriesPost.title}</a>
              </span>
              <br />
              {@html seriesPost.description}
            </p>
          {/if}
        </li>
      {/each}
    </ol>

    {#if hasAnnounced}
      <p>
        {$_('posts.series.notPublished.teaser')}
        <br />
        {$_('posts.series.notPublished.subscribe')}
      </p>
      <EmailCollector />
    {/if}
  </div>
</div>
