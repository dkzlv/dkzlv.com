<script context="module">
  export async function preload() {
    const res = await this.fetch('/ru/kak-sobirayut-dannye.json');
    const data = await res.json();
    if (res.status === 200) return { data: data };
    else this.error(res.status, data.message);
  }
</script>

<script>
  import { onMount } from 'svelte';

  import Post from 'components/post/index.svelte';
  import Fingerprint from 'components/posts/dataCollection/fingerprint.svelte';
  import Pidor from 'components/posts/dataCollection/pidor.svelte';

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
