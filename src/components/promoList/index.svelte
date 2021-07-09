<script>
  import Promo from '$components/breaches/promo.svelte';

  import { browser } from '$app/env';
  import { _ } from 'svelte-i18n';
  import { fade } from 'svelte/transition';

  import { fingerprintPath, breachesPath } from '$core/paths';
  let clientWidth: number,
    clientHeight: number,
    initialRun = true,
    hovered = false;

  $: run = initialRun || hovered;

  if (browser) setTimeout(() => (initialRun = false), 3000);
</script>

<div class="parent">
  <a
    class="div1"
    href={$breachesPath}
    on:mouseover={() => (hovered = true)}
    on:mouseleave={() => (hovered = false)}>
    <div class="canvas" bind:clientWidth bind:clientHeight>
      {#if clientHeight}
        <div in:fade>
          <Promo {run} width={clientWidth} height={clientHeight} />
        </div>
      {/if}
    </div>
    <p><span class="add-back">{$_('posts.breaches.title')}</span></p>
  </a>
  <a class="div2" href={$fingerprintPath}>
    <p><span class="add-back">{$_('specials.fingerprint.promoHeader')}</span></p></a>
</div>

<style lang="scss">
  .parent {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 0.5em;
    grid-row-gap: 0.5em;
  }

  a {
    padding: 0.5em 1em;
    border-radius: 3px;

    $black: hsl(0, 0%, 4%);
    text-decoration: none;

    transition: transform 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

    // Odd Safari bug: if you remove this line, canvas will not have its corners cut according
    // to border-radius rule.
    transform: scale(1);

    &:hover {
      transform: scale(1.05);
      box-shadow: 0 0.5em 2em -0.25em rgba($black, 0.1), 0 0px 1em 4px rgba($black, 0.02);
    }
  }

  span.add-back {
    background-color: white;
    padding: 3px 5px;
  }

  .div1 {
    position: relative;
    grid-area: 1 / 1 / 3 / 2;
    border-radius: 1em;
    overflow: hidden;

    .canvas {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }

    p {
      position: relative;
      font-size: 1.6rem;
    }
  }

  .div2 {
    position: relative;
    border-radius: 1em;
    overflow: hidden;

    grid-area: 1 / 2 / 3 / 3;

    background: url('./fingerprint_text_pr0n.png');
    height: 188px;
  }
</style>
