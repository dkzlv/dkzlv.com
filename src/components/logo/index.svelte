<script>
  import { onMount } from 'svelte';

  import logo from './logo.jpg';

  let currIndex = 0;
  const setNewClass = () => currIndex++;

  let interval: number;
  const setFixedInterval = (tm = 3500) => {
    clearInterval(interval);
    interval = window.setInterval(setNewClass, tm);
  };

  onMount(setFixedInterval);
</script>

<div on:mouseover={() => setFixedInterval(250)} on:mouseout={() => setFixedInterval()}>
  <img
    src={logo}
    class="logo"
    class:cross={currIndex % 9 == 1}
    class:fire={currIndex % 9 == 2}
    class:peace={currIndex % 9 == 3}
    class:cannabis={currIndex % 9 == 4}
    class:heart={currIndex % 9 == 5}
    class:infinity={currIndex % 9 == 6}
    class:hazard={currIndex % 9 == 7}
    class:yggdrasil={currIndex % 9 == 8}
    alt="logo"
    height="80" />
</div>

<style lang="scss">
  .logo {
    width: 80px;
    max-width: unset;
    user-select: none;
    mask-image: url(./logomask/skull.svg);

    filter: $logo-filter;
  }

  .cross {
    mask-image: url(./logomask/cross.svg);
  }

  .fire {
    mask-image: url(./logomask/fire.svg);
  }

  .peace {
    mask-image: url(./logomask/peace.svg);
  }

  .cannabis {
    mask-image: url(./logomask/cannabis.svg);
  }

  .heart {
    mask-image: url(./logomask/heart.svg);
  }

  .infinity {
    mask-image: url(./logomask/infinity.svg);
  }

  .hazard {
    mask-image: url(./logomask/hazard.svg);
  }

  .yggdrasil {
    mask-image: url(./logomask/yggdrasil.svg);
  }
</style>
