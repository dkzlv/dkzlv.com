<script context="module">
  import Meta from "../components/meta.svelte";

  export async function preload({ params }) {
    const res = await this.fetch(`/${params.slug}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { post: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  export let post;
</script>

<Meta
  title={post.title}
  path={post.slug}
  description={post.description}
  imagePreview={post.imagePreview}
  locale="en" />

<h1>{post.title}</h1>

<div class="content">
  {@html post.html}
</div>
