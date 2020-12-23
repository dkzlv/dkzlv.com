<script lang="ts">
  export let triggerText = '?';
</script>

<style lang="scss">
  @import 'src/styles/importable';

  .tooltip {
    position: relative;

    &__trigger {
      height: 30px;
      width: 30px;
      padding: 7px;
      border-radius: $radius-rounded;

      border: 2px dotted $tooltip-outline-color;
      color: $tooltip-outline-color;
      background-color: transparent;
      text-align: center;

      user-select: none;

      &:hover {
        border-color: $tooltip-outline-color--hover;
        color: $tooltip-outline-color--hover;
      }
    }

    &__content {
      $width: 265px;

      position: absolute;
      visibility: hidden;
      width: $width;
      top: 100%;
      left: 50%;
      padding: 15px 10px;

      z-index: z(tooltip);
      opacity: 0;
      background-color: $tooltip-bg-color;
      text-align: center;
      border-radius: 6px;

      transition: opacity 0.3s ease-in-out;

      box-shadow: 0px 0px 15px 0px $tooltip-shadow-color;

      @include mq($from: mobile) {
        /**
         * На айфоне позиционирование блока с тултипом — слева с краю экрана. Вот если центрировать
         * тултип, тогда его часть вылезает за пределы вьюпорта. Решение некрасивое, но какое есть!
         */
        margin-left: -$width / 2;
      }
    }

    &:hover &__content {
      visibility: visible;
      opacity: 1;
    }
  }
</style>

<div class="tooltip">
  <div class="tooltip__trigger">{triggerText}</div>
  <div class="tooltip__content">
    <slot />
  </div>
</div>
