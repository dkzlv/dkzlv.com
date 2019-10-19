<script context="module">
  import { goto } from '@sapper/app'
  import { langStore, setCurrentLang } from 'core/store'

  if (typeof window !== 'undefined') {
    const lang = setCurrentLang()
    goto('./' + lang)
  }
</script>

<div style="display: none">
  <a href="/ru" rel="prefetch">ru</a>
  <a href="/en" rel="prefetch">en</a>
</div>
