<script>
  const classes = [
    'skull',
    'cross',
    'yggdrasil',
    'fire',
    'peace',
    'cannabis',
    'heart',
    'infinity',
    'hazard',
  ]
  let lastIndex = 0

  const setNewClass = () =>
    lastIndex + 1 === classes.length ? (lastIndex = 0) : lastIndex++

  $: extraClass = classes[lastIndex]

  classes.forEach(() => setNewClass())

  let interval
  const setFixedInterval = tm => {
    clearInterval(interval)
    interval = setInterval(setNewClass, tm)
  }
  setFixedInterval(3500)
  const onMouseOver = () => setFixedInterval(250)
  const onMouseOut = () => setFixedInterval(3500)
</script>

<style type="text/scss">
  .logo {
    width: 80px;
    user-select: none;
    mask-image: url(/img/logomask/skull.svg);
  }

  .cross {
    mask-image: url(/img/logomask/cross.svg);
  }

  .skull {
    mask-image: url(/img/logomask/skull.svg);
  }

  .fire {
    mask-image: url(/img/logomask/fire.svg);
  }

  .peace {
    mask-image: url(/img/logomask/peace.svg);
  }

  .cannabis {
    mask-image: url(/img/logomask/cannabis.svg);
  }

  .heart {
    mask-image: url(/img/logomask/heart.svg);
  }

  .infinity {
    mask-image: url(/img/logomask/infinity.svg);
  }

  .hazard {
    mask-image: url(/img/logomask/hazard.svg);
  }

  .yggdrasil {
    mask-image: url(/img/logomask/yggdrasil.svg);
  }
</style>

<div on:mouseover={onMouseOver} on:mouseout={onMouseOut}>
  <img src="/site/logo.jpg" alt="logo" class="logo {extraClass}" height="80" />
</div>
