<template>
  <main class="circular-mask fill-height">
    <Product
      v-for="(product, index) of products"
      :key="index"
      :product="product"
    />
  </main>
</template>

<script>
import Product from "./components/Product";

export default {
  components: {
    Product
  },

  created() {
    this.products = [
      {
        image: "https://source.unsplash.com/RECZjSWMPVI/1200x900",
        titles: ["BEEF", "WELLINGTON", "CHAIR"]
      },
      {
        image: "https://source.unsplash.com/3IX-Tz_0ZN0/1200x900",
        titles: ["SO MANY", "CHAIR", "TABLES"]
      },
      {
        image: "https://source.unsplash.com/hTPUYIIvZBY/1200x900",
        titles: ["CLOSE-UP", "OF A", "CHAIR"]
      },
      {
        image: "https://source.unsplash.com/m1JPKkCHhkc/1200x900",
        titles: ["I HAVE", "THIS", "CHAIR"]
      }
    ];
  }
};
</script>

<style lang="scss" scoped></style>
