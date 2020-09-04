<template>
  <div class="product fill-height" :data-active="active">
    <div
      class="img"
      :style="{ background: `url(${product.image}) center / cover` }"
    ></div>
    <div class="title">
      <h2>
        <div>
          <span v-for="title of product.titles" :key="title">{{ title }}</span>
        </div>
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    active: Boolean,
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
  height: 100%;

  .img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  //&[data-active] + .product {
  //  z-index: 2;
  //  clip-path: circle(0% at 50% 50%);
  //}

  &[data-active] {
    z-index: 1;
    //.img {
    //  z-index: 1;
    //  animation: show 1s ease-in-out forwards;
    //
    //  @keyframes show {
    //    from {
    //      clip-path: circle(0% at 50% 50%);
    //    }
    //    to {
    //      clip-path: circle(100% at 50% 50%);
    //    }
    //  }
    //}
  }
}
</style>
