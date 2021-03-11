<script context="module">
  import { generateLinkTags } from '@/utils/accentTags';

  const payload = {
    values: {
      ...generateLinkTags(
        'https://etherscan.io/address/0x33dD3a9296319D7DFe1b0Cd22c4a7e8DC0111DBc',
        'Eth',
      ),
      ...generateLinkTags(
        'https://blockchair.com/bitcoin/address/12Q9AyNcHCXij33ciiKRKeUByTFExNMhxc?_type=address',
        'Btc',
      ),
    },
  };
</script>

<script>
  import { _ } from 'svelte-i18n';
  import { createEventDispatcher } from 'svelte';
  import { slide } from 'svelte/transition';

  const dispatch = createEventDispatcher();

  export let followUpWasScrolled = false;

  const click = () => {
    clicked = true;
    dispatch('clicked');
  };

  let clicked = false,
    text = $_('specials.freeWill.reactAtOnce', payload);

  $: if (followUpWasScrolled && !clicked) text = $_('specials.freeWill.reactDelayed', payload);
</script>

<div class="button-wrapper">
  <button class="btn btn--accent btn--fullwidth" on:click={click}
    >{$_('specials.freeWill.click')}</button>
  <div class="confession">
    {#if clicked}
      <p in:slide>
        {@html text}
      </p>
    {/if}
  </div>
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
    margin-top: 1em;
    text-align: center;
  }
</style>
