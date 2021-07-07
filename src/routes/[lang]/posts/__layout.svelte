<script context="module">
  import type { Load } from '@sveltejs/kit';
  import type { Post } from '$core/content/getPosts';

  export const load: Load = async ({ fetch, page }) => {
    // Unfortunately, we get a real path here, but do not get a slug
    const slug = page.path.split('/posts/')[1];
    const res = await fetch(`/${page.params.lang}/posts/${slug}.json`),
      post = await res.json();
    return { props: post };
  };
</script>

<script>
  import PostLayout from '$components/post/layout.svelte';

  export let post: Post;
</script>

<PostLayout {post}>
  <slot />
</PostLayout>
