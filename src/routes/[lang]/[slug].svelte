<script context="module">
  import Meta from "../../components/meta.svelte";

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
  export let post;
  export let lang;
</script>

<Meta
  title={post.title}
  path={post.slug}
  description={post.description}
  imagePreview={post.imagePreview}
  locale={lang} />

<h1>{post.title}</h1>

<div class="content">
  {@html post.html}
</div>
