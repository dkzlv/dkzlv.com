<script>
  import { langStore } from '../routes/store.js'
  import t from '../routes/i18n.js'

  $: placeholder = $langStore && t('email.placeholder')
  $: buttonText = $langStore && t('email.subscribe')
</script>

<style>
  .subscribe {
    margin-top: 0.5em;
  }
</style>

<form
  action="https://gmail.us3.list-manage.com/subscribe/post?u=6bcae27c459ff5ddf457ea6d5&id=1a6b2ee6fa"
  method="post"
  target="_blank"
  novalidate>
  <input type="email" name="EMAIL" class="input input--accent" {placeholder} />
  <input
    type="submit"
    name="subscribe"
    class="btn btn--accent-outline subscribe"
    value={buttonText} />

  <div style="position: absolute; left: -5000px;" aria-hidden="true">
    <input
      type="text"
      name="b_6bcae27c459ff5ddf457ea6d5_1a6b2ee6fa"
      tabindex="-1" />
  </div>
</form>
