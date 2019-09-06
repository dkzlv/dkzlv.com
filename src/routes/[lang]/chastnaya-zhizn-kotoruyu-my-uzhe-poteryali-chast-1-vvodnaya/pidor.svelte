<script>
  import { onMount } from 'svelte'

  let pentagons
  let redSquares
  let confessionEl

  onMount(async () => {
    const mojs = (await import('@mojs/core')).default

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
    })

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
    })
  })

  let counter = 0
  let confessionClasses = 'confession confession--hidden'
  $: {
    if (counter >= 1) {
      confessionClasses = 'confession'
    }

    if (counter === 2) confessionEl.innerText = 'всё еще пидор'
    else if (counter === 3) confessionEl.innerText = 'хорош уже'
    else if (counter === 5) confessionEl.innerText = ':('
    else if (counter === 10) confessionEl.innerText = 'ПАСХАЛКА'
    else if (counter === 28) confessionEl.innerText = 'ПАСХАЛКА №2'
    else if (counter === 50) confessionEl.innerText = 'А ты упорный, молодец'
  }

  function listener() {
    const rawCoor = confessionEl.getBoundingClientRect()
    const coor = {
      x: rawCoor.x + rawCoor.width / 2,
      y: confessionEl.offsetTop + rawCoor.height / 2,
    }
    document.body.classList.add('acid-background')
    setTimeout(() => {
      document.body.classList.remove('acid-background')
      counter++
    }, 1500)

    pentagons.tune(coor).replay()
    redSquares.tune(coor).replay()
  }
</script>

<style type="text/scss">
  @import '../../../styles/_importable.scss';

  :global(.acid-background) {
    background: linear-gradient(
      270deg,
      #ffffff,
      #f02020,
      #ebf020,
      #20f03a,
      #1403ff,
      #ffffff
    );
    background-size: 2000% 2000%;

    animation: BackgroundQuickChange 3s ease infinite;
    @keyframes BackgroundQuickChange {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 51%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
  }

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
    @include appearFromTransparancy;
  }
</style>

<div class="button-wrapper">
  <p class={confessionClasses} bind:this={confessionEl}>ты пидор</p>
  <button class="btn btn--accent btn--fullwidth" on:click={listener}>
    Не ссы, не убьёт
  </button>
</div>
