<script lang="ts">
  import { _ } from 'svelte-i18n';

  import { appRespectData, fingerprintPath, leaksPath } from 'core/paths.ts';
</script>

<div class="parent">
  <a class="div1" href={$leaksPath}><p>{$_('posts.leaks.title')}</p></a>
  <a class="div2" href={$appRespectData}
    ><p>
      {$_('specials.appDb.title')}
      <span class="tag">{$_('specials.appDb.inProgress')}</span>
    </p></a
  >
  <a class="div3" href={$fingerprintPath}><p>{$_('specials.fingerprint.promoHeader')}</p></a>
</div>

<style lang="scss">
  .parent {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  }

  a {
    padding: 0.5em 1em;
    border-radius: 3px;

    $black: hsl(0, 0%, 4%);
    text-decoration: none;

    transition: transform 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

    &:hover {
      transform: scale(1.05);
      box-shadow: 0 0.5em 2em -0.25em rgba($black, 0.1), 0 0px 1em 4px rgba($black, 0.02);
    }
  }

  .div1 {
    grid-area: 1 / 1 / 3 / 2;
  }
  .div2 {
    grid-area: 1 / 2 / 2 / 3;
  }
  .div3 {
    grid-area: 2 / 2 / 3 / 3;
  }
</style>
