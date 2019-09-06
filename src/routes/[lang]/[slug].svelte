<script context="module">
  import Post from "../../components/post.svelte";

  export async function preload({ params }) {
    const res = await this.fetch(`/${params.lang}/${params.slug}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { post: data, lang: params.lang };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  import { langStore } from "../store.js";

  export let post;
  export let lang;

  $: langStore.set(lang);
</script>

<Post {post} />
