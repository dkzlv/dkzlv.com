<script>
  const classes = ["circle", "arrow", "cross", "border", "star", "heart"];
  let lastIndex = parseInt(Math.random() * classes.length);

  const setNewClass = () =>
    lastIndex + 1 === classes.length ? (lastIndex = 0) : lastIndex++;

  $: extraClass = classes[lastIndex];

  let interval;
  const onMouseOver = () => (interval = setInterval(setNewClass, 250));
  const onMouseOut = () => clearInterval(interval);
</script>

<style>
  .logo {
    width: 70px;
    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
  }

  .circle {
    clip-path: circle(50% at 50% 50%);
  }

  .arrow {
    clip-path: polygon(
      0% 20%,
      60% 20%,
      60% 0%,
      100% 50%,
      60% 100%,
      60% 80%,
      0% 80%
    );
  }

  .cross {
    clip-path: polygon(
      20% 0%,
      0% 20%,
      30% 50%,
      0% 80%,
      20% 100%,
      50% 70%,
      80% 100%,
      100% 80%,
      70% 50%,
      100% 20%,
      80% 0%,
      50% 30%
    );
  }

  .border {
    clip-path: polygon(
      0% 0%,
      0% 100%,
      25% 100%,
      25% 25%,
      75% 25%,
      75% 75%,
      25% 75%,
      25% 100%,
      100% 100%,
      100% 0%
    );
  }

  .star {
    clip-path: polygon(
      50% 0%,
      61% 35%,
      98% 35%,
      68% 57%,
      79% 91%,
      50% 70%,
      21% 91%,
      32% 57%,
      2% 35%,
      39% 35%
    );
  }

  .heart {
    clip-path: polygon(50% 90%, 100% 30%, 75% 0, 50% 30%, 25% 0, 0 30%);
  }
</style>

<div on:mouseover={onMouseOver} on:mouseout={onMouseOut}>
  <img src="/site/logo.jpg" alt="logo" class="logo {extraClass}" />
</div>
