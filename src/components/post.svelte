<script>
  import Meta from './meta.svelte'
  import EmailCollector from './emailCollector.svelte'

  export let post
  export let lang
</script>

<style type="text/scss">
  @import '../styles/importable';

  .subscription {
    background-color: rgb(255, 227, 190);
    border-radius: 5px;
    transition: box-shadow 0.3s;
    @include mq($until: mobile) {
      width: 110%;
      margin: 40px -20px 40px -20px;
      padding: 20px 40px;
    }
    @include mq($from: mobile) {
      width: 450px;
      margin: 40px auto 40px auto;
      padding: 20px 30px;

      box-shadow: 0px 0px 7px 0.1px $grey-light;

      &:hover {
        box-shadow: 0px 0px 10px 1px $grey-light;
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
    Божечки-кошечки, безумец, ты дочитал до конца. Ну тогда подпишись что-ли.
  </p>
  <EmailCollector />
</div>
