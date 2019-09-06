<script>
  const classes = ['cross', 'skull', 'fire', 'peace', 'cannabis', 'heart']
  let lastIndex = 0

  const setNewClass = () =>
    lastIndex + 1 === classes.length ? (lastIndex = 0) : lastIndex++

  $: extraClass = classes[lastIndex]

  let interval
  const setInitialInterval = () => {
    interval = setInterval(setNewClass, 3500)
  }
  setInitialInterval()
  const onMouseOver = () => {
    clearInterval(interval)
    interval = setInterval(setNewClass, 250)
  }
  const onMouseOut = () => {
    clearInterval(interval)
    setInitialInterval()
  }
</script>

<style type="text/scss">
  .logo {
    width: 80px;
    user-select: none;
    mask-image: url(/img/skull.svg);
  }

  .cross {
    mask-image: url(/img/cross.svg);
  }

  .skull {
    mask-image: url(/img/skull.svg);
  }

  .fire {
    mask-image: url(/img/fire.svg);
  }

  .peace {
    mask-image: url(/img/peace.svg);
  }

  .cannabis {
    mask-image: url(/img/cannabis.svg);
  }

  .heart {
    mask-image: url(/img/heart.svg);
  }
</style>

<div on:mouseover={onMouseOver} on:mouseout={onMouseOut}>
  <img src="/site/logo.jpg" alt="logo" class="logo {extraClass}" height="80" />
</div>
