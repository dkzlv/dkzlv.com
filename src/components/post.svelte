<script>
  import Meta from './meta.svelte'

  export let post
  export let lang
</script>

<Meta
  title={post.meta.title}
  path={post.meta.slug}
  description={post.meta.description}
  imagePreview={post.meta.imagePreview}
  locale={lang} />

<h1>{post.meta.title}</h1>

<slot>
  <div class="content">
    {@html post.content}
  </div>
</slot>
