<script lang="ts" context="module">
  import { commonPreload } from 'core/content/post/preloadPost.ts';

  export function preload() {
    return commonPreload(this.fetch.bind(this), {
      lang: 'ru',
      slug: 'chto-mozhno-poluchit-iz-dannyh-i-chto-delat',
    });
  }
</script>

<script lang="ts">
  import type { Post as PostModel } from 'core/content/post/types';

  import { onMount } from 'svelte';

  import Post from 'components/post/index.svelte';
  import { FreeWillButton, FreeWillFollowup } from 'components/specials/privacy/freeWill/index.ts';

  export let post: PostModel;

  onMount(() => {
    const button = new FreeWillButton({
        target: document.querySelector('.freewill'),
      }),
      followUp = new FreeWillFollowup({ target: document.querySelector('.freewill-followup') });

    followUp.$on('opened', () => button.$set({ followUpWasScrolled: true }));
    button.$on('clicked', () => followUp.$set({ shouldFire: false }));

    return () => [followUp, button].forEach(cmp => cmp.$destroy());
  });
</script>

<Post {post} />
