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
let activeIndex = -1;
let nextIndex = 0;
let animationInProgress = false;

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

  mounted() {
    this.changeActiveProduct();
  },

  methods: {
    getNextIndex() {
      return (activeIndex + 1) % this.products.length;
    },

    changeActiveProduct() {
      if (animationInProgress) return;
      animationInProgress = true;

      const products = this.$el.querySelectorAll(".product");
      const nextProduct = products[nextIndex];
      const nextImg = nextProduct.querySelector(".img");

      nextImg.style.zIndex = 2;
      nextImg.style.clipPath = "circle(0% at 50% 50%)";

      tl.to(nextImg, {
        clipPath: "circle(100% at 50% 50%)",
        onComplete: () => {
          if (~activeIndex) {
            products[activeIndex].querySelector(".img").style.clipPath =
              "circle(0% at 50% 50%)";
          }
          nextImg.style.zIndex = 1;
          activeIndex = nextIndex;
          nextIndex = this.getNextIndex();
          animationInProgress = false;
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped></style>
