<script>
  import { _ } from 'svelte-i18n';
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
        {$_('specials.freeWill.reverse')}
      </p>
    </blockquote>
  {/if}
</div>
