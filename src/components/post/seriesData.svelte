<script>
  import { _ } from 'svelte-i18n';

  import EmailCollector from 'components/emailCollector.svelte';

  export let postMeta;
  $: hasAnnounced = postMeta.series && postMeta.series.some(meta => meta && meta.announced);
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

  .short-hr {
    width: 40%;
    margin: 1em auto;

    border-color: $hr-color;
    border-style: dashed;
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
              <span class="post-content">
                {@html seriesPost.description}
              </span>
            </p>
          {:else}
            <p>
              <span class="size-1 bold">
                <a rel="prefetch" href={seriesPost.slug}>{seriesPost.title}</a>
              </span>
              <br />
              <span class="post-content">
                {@html seriesPost.description}
              </span>
            </p>
          {/if}
        </li>
      {/each}
    </ol>

    {#if hasAnnounced}
      <hr class="short-hr" />

      <p>
        {$_('posts.series.notPublished.teaser')}
        <br />
        <span class="bold">{$_('posts.series.notPublished.subscribeAsap')}</span>
        {$_('posts.series.notPublished.explain')}
      </p>
      <EmailCollector />
    {/if}
  </div>
</div>
