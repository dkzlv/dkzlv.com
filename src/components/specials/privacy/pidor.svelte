<script context="module">
  export const classname = 'pidor';
</script>

<script>
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  import { _, json } from 'svelte-i18n';

  let pentagons: any, redSquares: any, confessionEl: HTMLDivElement;

  onMount(async () => {
    // @ts-ignore
    const mojs = (await import('@mojs/core')).default;

    pentagons = new mojs.Burst({
      radius: { 0: 1000, easing: 'cubic.out' },
      angle: { 0: 720, easing: 'quad.out' },
      left: 0,
      top: 0,
      count: 12,
      children: {
        shape: 'polygon',
        radius: { 1: 300 },
        points: 5,
        fill: ['purple', 'pink', 'yellow', 'green'],
        duration: 3000,
      },
    });

    redSquares = new mojs.Burst({
      radius: { 0: 1000, easing: 'cubic.out' },
      angle: { 360: 0, easing: 'quad.out' },
      left: 0,
      top: 0,
      count: 12,
      children: {
        shape: 'rect',
        radiusX: { 1: 1000 },
        radiusY: 50,
        points: 5,
        fill: 'none',
        stroke: { red: 'orange' },
        strokeWidth: { 5: 15 },
        delay: 500,
        duration: 3000,
      },
    });
  });

  let counter = 0,
    optsIndex = -1,
    confessionTexts: string[] = $json('specials.pidor.opts');
  $: if (
    counter === 1 ||
    counter === 2 ||
    counter === 3 ||
    counter === 5 ||
    counter === 10 ||
    counter === 28 ||
    counter === 50
  )
    optsIndex++;

  const listener = () => {
    const app = document.getElementById('app')!,
      rawCoor = confessionEl.getBoundingClientRect(),
      coor = {
        x: rawCoor.x + rawCoor.width / 2,
        y: confessionEl.offsetTop + rawCoor.height / 2,
      };

    app.classList.add('acid-background');
    setTimeout(() => {
      app.classList.remove('acid-background');
      counter++;
    }, 1500);

    pentagons.tune(coor).replay();
    redSquares.tune(coor).replay();
  };
</script>

<div class="button-wrapper">
  <div bind:this={confessionEl} class="confession">
    {#if optsIndex >= 0}
      <p in:fade>{confessionTexts[optsIndex]}</p>
    {/if}
  </div>
  <button class="btn btn--accent btn--fullwidth" on:click={listener}
    >{$_('specials.pidor.button')}</button>
</div>

<style lang="scss">
  .button-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin: 3em auto;

    @include mq($until: mobile) {
      width: 90%;
    }
    @include mq($from: mobile) {
      width: 300px;
    }
  }

  .confession {
    min-height: 45px;
  }
</style>
