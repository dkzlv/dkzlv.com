<script lang="ts" context="module">
  import { commonPreload } from 'core/posts/preloadPost.ts';

  export function preload({ params }: { params: { lang: string; slug: string } }) {
    return commonPreload(this.fetch.bind(this), params);
  }
</script>

<script lang="ts">
  import type { Post as PostModel } from 'core/types';
  import Post from 'components/post/index.svelte';

  export let post: PostModel;
</script>

<Post {post} />
