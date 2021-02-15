<script context="module">
  const chars = '｢｣ｦｧｨｩｪｫｬｭｮｯｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ｢｣ｦｧｨｩｪｫｬｭｮｯｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ｢｣ｦｧｨｩｪｫｬｭｮｯｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ123456789123456789123456789123456789123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(
    '',
  );
</script>

<script>
  import { onDestroy } from 'svelte';
  import { range } from '@/utils/range';

  export let height: number, width: number, run: boolean;

  let canvas: HTMLCanvasElement;

  const font_size = 15,
    drops = range(Math.round(width / font_size)).map(() => Math.random() * 50 - 50),
    text: string[] = [];

  const draw = (context: CanvasRenderingContext2D) => {
    // Black background with 0.1 opacity to show the trail
    context.font = font_size + "px 'Consolas', 'Lucida Console', monospace";
    context.fillStyle = 'rgba(0, 0, 0, 0.1)';
    context.fillRect(0, 0, width, height);

    //Set the previous line to green so that the trail would remain green
    context.fillStyle = '#6D2';
    drops.forEach((drop, i) => context.fillText(text[i], i * font_size, drop * font_size));

    // Generate new characters and display them in white
    context.fillStyle = '#FFF';
    for (let i = 0; i < drops.length; i++) {
      drops[i]++;
      text[i] = chars[Math.floor(Math.random() * chars.length)];
      // Parameters - text, x-pos, y-pos
      context.fillText(text[i], i * font_size, drops[i] * font_size);

      // Sending the drop to the top randomly, after it has crossed the screen
      if (drops[i] * font_size > height) drops[i] = Math.random() * 100 - 100;
    }
  };

  $: ctx = canvas?.getContext('2d');
  // Filling initial black background
  $: if (ctx) {
    ctx.fillStyle = 'rgb(0, 0, 0)';
    ctx.fillRect(0, 0, width, height);
  }

  let interval = 0;
  const destroy = () => clearInterval(interval);

  $: if (ctx && run) interval = window.setInterval(() => draw(ctx!), 75);
  else destroy();

  onDestroy(destroy);
</script>

<canvas {height} {width} bind:this={canvas} />
