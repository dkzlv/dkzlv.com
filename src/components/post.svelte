<script>
  import Meta from "./meta.svelte";

  export let post;
  export let lang;
  export let showContent = true;
</script>

<Meta
  title={post.title}
  path={post.slug}
  description={post.description}
  imagePreview={post.imagePreview}
  locale={lang} />

<h1>{post.title}</h1>

{#if showContent}
  <div class="content">
    {@html post.html}
  </div>
{/if}
