<script>
  import { createEventDispatcher } from 'svelte';
  import { slide } from 'svelte/transition';

  const dispatch = createEventDispatcher();

  export let shouldFire = true;

  let el: HTMLDivElement | undefined,
    scrollY: number,
    show = false;

  $: if (el && !show && shouldFire) {
    // Turning it on once and for all
    if (scrollY >= el.offsetTop - 150) {
      dispatch('opened');
      show = true;
    }
  }
</script>

<svelte:window bind:scrollY />
<div bind:this={el}>
  {#if shouldFire && show}
    <blockquote transition:slide|local>
      <p>
        К слову, о какой свободе воли и непредсказуемости идёт речь, если с вами как с малыми детьми
        работает реверсивная психология? Сказал жать кнопку, а вы прямо специально, аж назло не
        нажали.
      </p>
    </blockquote>
  {/if}
</div>
