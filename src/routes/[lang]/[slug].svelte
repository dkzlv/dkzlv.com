<script lang="ts" context="module">
  import type { Post as PostModel } from 'core/types';

  export async function preload({ params }: { params: { lang: string; slug: string } }) {
    const res = await this.fetch(`/${params.lang}/${params.slug}.json`),
      data = await res.json();

    if (res.status === 200) {
      return { post: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script lang="ts">
  import Post from 'components/post/index.svelte';

  export let post: PostModel;
</script>

<Post {post} />
