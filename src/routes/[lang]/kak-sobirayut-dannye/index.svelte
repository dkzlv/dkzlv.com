<script lang="ts" context="module">
  import type { Post as PostModel } from 'core/types';

  export async function preload() {
    const res = await this.fetch('/ru/kak-sobirayut-dannye.json'),
      data = await res.json();

    if (res.status === 200) return { post: data };
    else this.error(res.status, data.message);
  }
</script>

<script lang="ts">
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

  export let post: PostModel;
</script>

<Post {post} />
