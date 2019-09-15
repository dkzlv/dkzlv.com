<style type="text/scss">
  @import '../styles/importable';

  .tooltip {
    position: relative;

    &__content {
      $width: 265px;

      position: absolute;
      visibility: hidden;
      width: $width;
      top: 100%;

      left: 50%;

      padding: 15px 10px;
      z-index: z(tooltip);
      background-color: $background-color;
      text-align: center;
      border-radius: 6px;
      opacity: 0;
      transition: opacity 0.3s;

      @include stylishShadow();
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
  <div class="tooltip__trigger">
    <slot name="trigger" />
  </div>
  <div class="tooltip__content">
    <slot name="content" />
  </div>
</div>
