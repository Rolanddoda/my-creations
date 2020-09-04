<template>
  <div
    class="product fill-height"
    :style="{ background: `url(${product.image}) center / cover` }"
  >
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
  mask-image: radial-gradient(circle, #000 0%, transparent 70%);
}
</style>
