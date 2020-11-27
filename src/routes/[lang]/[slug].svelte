<script lang="ts" context="module">
  import { commonPreload } from 'core/content/post/preloadPost.ts';

  export function preload({ params }: { params: { lang: string; slug: string } }) {
    return commonPreload(this.fetch.bind(this), params);
  }
</script>

<script lang="ts">
  import type { Post as PostModel } from 'core/content/post/types';
  import Post from 'components/post/index.svelte';

  export let post: PostModel;
</script>

<Post {post} />
