<script>
  import Meta from './meta.svelte'
  import EmailCollector from './emailCollector.svelte'
  import t from '../routes/i18n.js'
  import { langStore } from '../routes/store.js'

  $: endPostEngagement = $langStore && t('email.endPostEngagement')

  export let post
  export let lang
</script>

<style type="text/scss">
  @import '../styles/importable';

  .subscription {
    background-color: $email-collector-background;
    border-radius: 5px;

    @include mq($until: mobile) {
      width: 110%;
      margin: 40px -20px 40px -20px;
      padding: 20px 40px;
    }
    @include mq($from: mobile) {
      width: 500px;
      margin: 40px auto 40px auto;
      padding: 20px 30px;

      box-shadow: 0px 0px 15px 0px $email-collector-shadow-color;
      &:hover {
        box-shadow: 0px 0px 25px 0px $email-collector-shadow-color;
      }
    }
  }
</style>

<Meta
  title={post.meta.title}
  path={post.meta.slug}
  description={post.meta.description}
  imagePreview={post.meta.imagePreview}
  locale={lang} />

<article>
  <h1>{post.meta.title}</h1>
  <div>
    <slot>
      {@html post.content}
    </slot>
  </div>
</article>

<div class="subscription">
  <p>
    {@html post.meta.emailCollectorMessage || endPostEngagement}
  </p>

  <EmailCollector />
</div>
