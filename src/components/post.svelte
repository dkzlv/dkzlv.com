<script>
  import Meta from './meta.svelte'
  import Subscription from './subscription.svelte'
  import { onMount } from 'svelte'
  import { langStore } from 'core/store.js'

  export let post

  onMount(async () => {
    const el = document.querySelector('.email-collector')
    if (!el) return

    const engagement = el.innerText || undefined
    el.innerText = ''
    el.classList.remove('email-collector')
    const cmp = new Subscription({ target: el, props: { engagement } })
    return () => cmp.$destroy()
  })
</script>

<Meta
  title={post.meta.title}
  path={post.meta.slug}
  description={post.meta.description}
  imagePreview={post.meta.imagePreview}
  locale={$langStore} />

<article>
  <h1>{post.meta.title}</h1>
  <div>
    <slot>
      {@html post.content}
    </slot>
  </div>
</article>

<Subscription engagement={post.meta.emailCollectorMessage} />
