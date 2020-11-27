<script lang="ts" context="module">
  import { commonPreload } from 'core/content/post/preloadPost.ts';

  export function preload() {
    return commonPreload(this.fetch.bind(this), { lang: 'ru', slug: 'kak-sobirayut-dannye' });
  }
</script>

<script lang="ts">
  import type { Post as PostModel } from 'core/content/post/types';

  import { onMount } from 'svelte';

  import Post from 'components/post/index.svelte';
  import Fingerprint from 'components/specials/privacy/fingerprint.svelte';
  import Pidor from 'components/specials/privacy/pidor.svelte';

  onMount(() => {
    const pidor = new Pidor({ target: document.querySelector('.pidor') }),
      fingerprint = new Fingerprint({ target: document.querySelector('.fingerprint') });

    return () => {
      pidor.$destroy();
      fingerprint.$destroy();
    };
  });

  export let post: PostModel;
</script>

<Post {post} />
