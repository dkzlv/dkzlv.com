<script>
  import Meta from './meta.svelte';
  import Subscription from './subscription.svelte';
  import { onMount } from 'svelte';
  import { langStore } from 'core/store.js';

  export let post;

  onMount(async () => {
    const elements = document.querySelectorAll('.email-collector');

    const cmps = [];
    elements.forEach(el => {
      const engagement = el.innerText || undefined;
      el.innerText = '';
      el.classList.remove('email-collector');
      cmps.push(new Subscription({ target: el, props: { engagement } }));
    });

    return () => cmps.forEach(cmp => cmp.$destroy());
  });
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
