<script context="module">
  export async function preload() {
    const res = await this.fetch(
      '/ru/chastnaya-zhizn-kotoruyu-my-uzhe-poteryali-chast-1-vvodnaya.json',
    );
    const data = await res.json();
    if (res.status === 200) return { data: data };
    else this.error(res.status, data.message);
  }
</script>

<script>
  import { onMount } from 'svelte';

  import Post from 'components/post.svelte';
  import Fingerprint from 'components/posts/privacy-pt1/fingerprint.svelte';
  import Pidor from 'components/posts/privacy-pt1/pidor.svelte';

  onMount(() => {
    const pidor = new Pidor({ target: document.querySelector('.pidor') });
    const fingerprint = new Fingerprint({ target: document.querySelector('.fingerprint') });

    return () => {
      pidor.$destroy();
      fingerprint.$destroy();
    };
  });

  export let data;
</script>

<Post post={data} />
