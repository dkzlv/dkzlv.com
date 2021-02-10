<script context="module">
  import { commonPreload } from '@/core/content/post/preloadPost';

  export function preload({ params }: { params: { lang: string; slug: string } }) {
    return commonPreload(
      this.fetch.bind(this),
      this.error.bind(this),
      `/${params.lang}/${params.slug}.json`,
      'post',
    );
  }
</script>

<script>
  import type { Post as PostModel } from '@/core/content/post/types';
  import Post from 'components/post/index.svelte';

  export let post: PostModel;
</script>

<Post {post} />
