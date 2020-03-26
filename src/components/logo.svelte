<script>
  import { staticPath } from 'core/paths'

  const classes = [
    '',
    'cross',
    'yggdrasil',
    'fire',
    'peace',
    'cannabis',
    'heart',
    'infinity',
    'hazard',
  ]
  let currIndex = 0

  const setNewClass = () => (currIndex + 1 === classes.length ? (currIndex = 0) : currIndex++)

  // Used to force browser to pre-cache all svgs
  classes.forEach(() => setTimeout(() => setNewClass()))

  let interval
  const setFixedInterval = tm => {
    clearInterval(interval)
    interval = setInterval(setNewClass, tm)
  }
  setFixedInterval(3500)
  const onMouseOver = () => setFixedInterval(250)
  const onMouseOut = () => setFixedInterval(3500)
</script>

<style lang="scss">
  .logo {
    width: 80px;
    user-select: none;
    mask-image: url(/static/img/logomask/skull.svg);
  }

  .cross {
    mask-image: url(/static/img/logomask/cross.svg);
  }

  .fire {
    mask-image: url(/static/img/logomask/fire.svg);
  }

  .peace {
    mask-image: url(/static/img/logomask/peace.svg);
  }

  .cannabis {
    mask-image: url(/static/img/logomask/cannabis.svg);
  }

  .heart {
    mask-image: url(/static/img/logomask/heart.svg);
  }

  .infinity {
    mask-image: url(/static/img/logomask/infinity.svg);
  }

  .hazard {
    mask-image: url(/static/img/logomask/hazard.svg);
  }

  .yggdrasil {
    mask-image: url(/static/img/logomask/yggdrasil.svg);
  }
</style>

<div on:mouseover={onMouseOver} on:mouseout={onMouseOut}>
  <img
    src={`${staticPath}/img/logo.jpg`}
    class={`logo ${classes[currIndex]}`}
    alt="logo"
    height="80" />
</div>
