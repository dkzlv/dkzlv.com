<script>
  import { onMount } from "svelte";

  let redCirc;
  let sparks;
  let redSparks;
  let triangles;
  let pentagons;
  let lines;
  let redSquares;

  onMount(async () => {
    const mojs = (await import("@mojs/core")).default;
    redCirc = new mojs.Shape({
      left: 0,
      top: 0,
      fill: "none",
      stroke: "red",
      radius: 15,
      strokeWidth: 10,

      duration: 100
    }).then({
      strokeWidth: 0,
      scale: { 1: 2, easing: "sin.in" },
      duration: 500
    });

    sparks = new mojs.Burst({
      left: 0,
      top: 0,
      radius: { 0: 30, easing: "cubic.out" },
      angle: { 0: 90, easing: "quad.out" },
      children: {
        shape: "cross",
        stroke: "white",
        points: 12,
        radius: 10,
        fill: "none",
        angle: { 0: 360 },
        duration: 300
      }
    });

    redSparks = new mojs.Burst({
      left: 0,
      top: 0,
      count: 8,
      radius: { 150: 350 },
      angle: { 0: 90, easing: "cubic.out" },
      children: {
        shape: "line",
        stroke: { red: "transparent" },
        strokeWidth: 5,
        scaleX: { 0.5: 0 },
        degreeShift: "rand(-90, 90)",
        radius: "rand(20, 300)",
        duration: 200,
        delay: "rand(0, 150)"
      }
    });

    triangles = new mojs.Burst({
      radius: { 0: 1000, easing: "cubic.out" },
      angle: { 1080: 0, easing: "quad.out" },
      left: 0,
      top: 0,
      count: 20,
      children: {
        shape: "polygon",
        points: 3,
        radius: { 10: 100 },
        fill: ["red", "yellow", "blue", "green"],
        duration: 3000
      }
    });

    pentagons = new mojs.Burst({
      radius: { 0: 1000, easing: "cubic.out" },
      angle: { 0: 720, easing: "quad.out" },
      left: 0,
      top: 0,
      count: 20,
      children: {
        shape: "polygon",
        radius: { 1: 300 },
        points: 5,
        fill: ["purple", "pink", "yellow", "green"],
        delay: 500,
        duration: 3000
      }
    });

    lines = new mojs.Burst({
      radius: { 0: 1000, easing: "cubic.out" },
      angle: { 0: 1440, easing: "cubic.out" },
      left: 0,
      top: 0,
      count: 50,
      children: {
        shape: "line",
        radius: { 1: 100, easing: "elastic.out" },
        fill: "none",
        stroke: ["red", "orange"],
        delay: "stagger(10)",
        duration: 1000
      }
    });

    redSquares = new mojs.Burst({
      radius: { 0: 1000, easing: "cubic.out" },
      angle: { 360: 0, easing: "quad.out" },
      left: 0,
      top: 0,
      count: 20,
      children: {
        shape: "rect",
        radiusX: { 1: 1000 },
        radiusY: 50,
        points: 5,
        fill: "none",
        stroke: { red: "orange" },
        strokeWidth: { 5: 15 },
        delay: 1000,
        duration: 3000
      }
    });
  });

  let showText = false;
  $: confessionClasses = showText ? "confession" : "confession hidden";

  let confessionEl;

  function listener(e) {
    const rawCoor = confessionEl.getBoundingClientRect();
    const coor = {
      x: rawCoor.x + rawCoor.width / 2,
      y: confessionEl.offsetTop + rawCoor.height / 2
    };
    setTimeout(() => (showText = !showText), 1500);

    redCirc.tune(coor).replay();
    sparks.tune(coor).replay();
    redSparks
      .tune(coor)
      .replay()
      .generate();
    triangles.tune(coor).replay();
    pentagons.tune(coor).replay();
    lines.tune(coor).replay();
    redSquares.tune(coor).replay();
  }
</script>

<style>
  .main {
    height: 100%;
    width: 20%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .confession {
    color: rgb(0, 0, 0);
    opacity: 1;
    transition: opacity 1s ease-in;
  }

  .clicker {
    padding: 10px 20px;
    background-color: red;
    color: white;
    border: 3px solid white;
    outline: none;
  }

  .hidden {
    opacity: 0;
  }
</style>

<div class="main">
  <p class={confessionClasses} bind:this={confessionEl}>ты пидор</p>
  <button class="clicker" on:click={listener}>Click me</button>
</div>
