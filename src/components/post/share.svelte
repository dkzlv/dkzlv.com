<script>
  import { onMount } from 'svelte';
  import Link from '@/components/link.svelte';

  export let text: string | undefined;

  const size = 25;

  let url: string = '';
  onMount(() => (url = window.location.href));

  $: twitter = `http://twitter.com/share?url=${url}`;
  $: email = `mailto:?body=${url}`;

  let ref: HTMLParagraphElement,
    addShake = false,
    timeout: number;
  const click = () => {
    clearTimeout(timeout);
    const range = document.createRange();
    range.selectNode(ref);
    window.getSelection()?.removeAllRanges();
    window.getSelection()?.addRange(range);
    document.execCommand('copy');
    window.getSelection()?.removeAllRanges();

    addShake = true;
    timeout = window.setTimeout(() => (addShake = false), 1000);
  };
</script>

<p class="hide" bind:this={ref}>{url}</p>

<div class="wrapper">
  <p>
    {@html text}
  </p>

  <div class="buttons">
    <Link href={twitter}>
      <svg
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        ><path
          d="M14.478 1.5l.5-.033a.5.5 0 00-.871-.301l.371.334zm-.498 2.959a.5.5 0 10-1 0h1zm-6.49.082h-.5.5zm0 .959h.5-.5zm-6.99 7V12a.5.5 0 00-.278.916L.5 12.5zm.998-11l.469-.175a.5.5 0 00-.916-.048l.447.223zm3.994 9l.354.353a.5.5 0 00-.195-.827l-.159.474zm7.224-8.027l-.37.336.18.199.265-.04-.075-.495zm1.264-.94c.051.778.003 1.25-.123 1.606-.122.345-.336.629-.723 1l.692.722c.438-.42.776-.832.974-1.388.193-.546.232-1.178.177-2.006l-.998.066zm0 3.654V4.46h-1v.728h1zm-6.99-.646V5.5h1v-.959h-1zm0 .959V6h1v-.5h-1zM10.525 1a3.539 3.539 0 00-3.537 3.541h1A2.539 2.539 0 0110.526 2V1zm2.454 4.187C12.98 9.503 9.487 13 5.18 13v1c4.86 0 8.8-3.946 8.8-8.813h-1zM1.03 1.675C1.574 3.127 3.614 6 7.49 6V5C4.174 5 2.421 2.54 1.966 1.325l-.937.35zm.021-.398C.004 3.373-.157 5.407.604 7.139c.759 1.727 2.392 3.055 4.73 3.835l.317-.948c-2.155-.72-3.518-1.892-4.132-3.29-.612-1.393-.523-3.11.427-5.013l-.895-.446zm4.087 8.87C4.536 10.75 2.726 12 .5 12v1c2.566 0 4.617-1.416 5.346-2.147l-.708-.706zm7.949-8.009A3.445 3.445 0 0010.526 1v1c.721 0 1.37.311 1.82.809l.74-.671zm-.296.83a3.513 3.513 0 002.06-1.134l-.744-.668a2.514 2.514 0 01-1.466.813l.15.989zM.222 12.916C1.863 14.01 3.583 14 5.18 14v-1c-1.63 0-3.048-.011-4.402-.916l-.556.832z"
          fill="currentColor"
        /></svg
      >
    </Link>
    <Link href={email}>
      <svg
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        ><path
          d="M.5 4.5l7 4 7-4m-13-3h12a1 1 0 011 1v10a1 1 0 01-1 1h-12a1 1 0 01-1-1v-10a1 1 0 011-1z"
          stroke="currentColor"
        /></svg
      >
    </Link>

    <!-- svelte-ignore a11y-missing-attribute -->
    <a class:shake={addShake} on:click={click}>
      <svg
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        ><path
          d="M4.5 6.5L1.328 9.672a2.828 2.828 0 104 4L8.5 10.5m2-2l3.172-3.172a2.829 2.829 0 00-4-4L6.5 4.5m-2 6l6-6"
          stroke="currentColor"
        /></svg
      >
    </a>
  </div>
</div>

<style lang="scss">
  .wrapper {
    text-align: center;

    margin: 2em auto;
    @include mq($from: mobile) {
      width: 75%;
    }

    padding: 1em 0;
    $border: 2px dashed #cecece;
    border-top: $border;
    border-bottom: $border;

    > p {
      font-size: 115%;
      margin-bottom: 2em;
    }
  }

  .buttons {
    display: flex;
    place-content: center;
    place-items: center;

    > :global(*) {
      flex: 1;
    }
  }

  @keyframes shake {
    0% {
      transform: rotate(20deg) scale(1.1);
    }
    50% {
      transform: rotate(-20deg) scale(1.2);
    }
    100% {
      transform: rotate(20deg) scale(1.1);
    }
  }

  .shake {
    animation: shake 0.25s infinite ease-in-out;
  }
</style>
