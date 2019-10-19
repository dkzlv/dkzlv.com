<script>
  import Meta from './meta.svelte'
  import Subscription from './subscription.svelte'
  import { onMount, tick } from 'svelte'
  import { langStore } from 'core/store.js'

  export let post

  onMount(async () => {
    // Тут вот бажина в Svelte: https://github.com/sveltejs/svelte/issues/3218
    // await можно будет убрать после фикса. Сейчас это выглядит плохо (моргает после первой загрузки), но
    // хотя бы работает!
    await tick()
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
