<template>
  <main class="circular-mask fill-height">
    <Product
      v-for="(product, index) of products"
      :key="index"
      :product="product"
      :active="index === 0"
      @click.native="changeActiveProduct"
    />
  </main>
</template>

<script>
import { gsap } from "gsap";
// Components
import Product from "./components/Product";

const tl = gsap.timeline({ delay: 0.5 });
let activeIndex = 0;
let nextIndex = 1;

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
  },

  methods: {
    getNextIndex() {
      return (activeIndex + 1) % this.products.length;
    },

    changeActiveProduct() {
      const products = this.$el.querySelectorAll(".product");
      const nextProduct = products[nextIndex];
      const nextImg = nextProduct.querySelector(".img");
      nextProduct.style.zIndex = 2;
      nextImg.style.clipPath = "circle(0% at 50% 50%)";
      tl.to(nextImg, {
        clipPath: "circle(100% at 50% 50%)",
        onComplete: () => {
          products[activeIndex].querySelector(".img").style.clipPath =
            "circle(0% at 50% 50%)";
          nextProduct.style.zIndex = 1;
          activeIndex = nextIndex;
          nextIndex = this.getNextIndex();
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped></style>
