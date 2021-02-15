<script>
  import { onMount } from 'svelte';

  import FreeWillButton from './freeWill/button.svelte';
  import FreeWillFollowup from './freeWill/followUp.svelte';

  onMount(() => {
    const button = new FreeWillButton({
        target: document.querySelector(`.freewill`)!,
      }),
      followUp = new FreeWillFollowup({ target: document.querySelector('.freewill-followup')! });

    followUp.$on('opened', () => button.$set({ followUpWasScrolled: true }));
    button.$on('clicked', () => followUp.$set({ shouldFire: false }));

    return () => [followUp, button].forEach(cmp => cmp.$destroy());
  });
</script>
