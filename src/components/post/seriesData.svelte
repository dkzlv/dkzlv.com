<script>
  import type { Post } from '@/core/content/post/types';

  import { _ } from 'svelte-i18n';

  import EmailCollector from 'components/emailCollector.svelte';

  export let series: Exclude<Post['meta']['series'], undefined>, fallbackTitle: string;
  $: hasAnnounced = series && series.some(meta => meta && meta.announced);
</script>

<div class="box">
  <div class="nested">
    <p class="series-header">{$_('posts.series.header')}</p>
    <ol>
      {#each series as seriesPost}
        <li>
          {#if !seriesPost}
            <span class="size-1 bold">{fallbackTitle}</span>
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
                <a rel="prefetch" href={`${seriesPost.lang}/${seriesPost.slug}`}
                  >{seriesPost.title}</a>
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

<style lang="scss">
  .series-header {
    font-weight: bold;
    font-size: ms(3);
  }

  .soon {
    display: inline-block;
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
