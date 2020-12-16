<template>
  <div class="product fill-height">
    <div
      class="img"
      :style="{
        background: `url('${product.image}') center / cover`
      }"
    ></div>
    <TitleWrapper :titles="product.titles" />
  </div>
</template>

<script>
import TitleWrapper from "./TitleWrapper";

export default {
  components: {
    TitleWrapper
  },

  props: {
    product: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.product {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;

  &[data-active] {
    .text-wrapper {
      z-index: 1;

      ::v-deep span {
        transform: translateY(0);
      }
    }
  }

  .img {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
}
</style>
