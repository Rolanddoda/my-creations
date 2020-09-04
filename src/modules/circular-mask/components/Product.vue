<template>
  <div class="product fill-height">
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

  .img {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
}
</style>
