<script>
  import { createEventDispatcher } from 'svelte';
  import { slide } from 'svelte/transition';

  const dispatch = createEventDispatcher();

  export let followUpWasScrolled = false;

  const click = () => {
      clicked = true;
      dispatch('clicked');
    },
    commonCryptoText =
      'все свои <a href="https://etherscan.io/address/0x33dD3a9296319D7DFe1b0Cd22c4a7e8DC0111DBc" target="_blank" rel="noopener noreferrer nofollow">эфиры сюда</a>, а <a href="https://blockchair.com/bitcoin/address/12Q9AyNcHCXij33ciiKRKeUByTFExNMhxc?_type=address" target="_blank" rel="noopener noreferrer nofollow">битки — сюда</a>';

  let clicked = false,
    text = `Ну и о какой свободе воли идёт речь, если вы просто слушаетесь первого же приказа? Давайте тогда переводите ${commonCryptoText}.`;

  $: if (followUpWasScrolled && !clicked)
    text = `Ндааа, дружище. Самостоятельность на высоте. Давайте вы не будете переводить ${commonCryptoText}? Прошу вас, не надо.`;
</script>

<div class="button-wrapper">
  <button class="btn btn--accent btn--fullwidth" on:click={click}>Нажми меня!</button>
  <div class="confession">
    {#if clicked}
      <p in:slide>
        {@html text}
      </p>
    {/if}
  </div>
</div>

<style lang="scss">
  @import 'src/styles/_importable.scss';

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
