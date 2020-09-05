<template>
  <main class="circular-mask fill-height">
    <Product
      v-for="(product, index) of products"
      :key="index"
      :product="product"
      @click.native="changeActiveProduct"
    />

    <div class="mouse-tracker"></div>
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
        image: "https://source.unsplash.com/m_HRfLhgABo/1920x1080",
        titles: ["LET'S", "GET", "STARTED"]
      },
      {
        image: "https://source.unsplash.com/hpjSkU2UYSU/1920x1080",
        titles: ["EHHH", "I", "LIKE IT"]
      },
      {
        image: "https://source.unsplash.com/YlVjrBkfXt8/1920x1080",
        titles: ["OHH", "WHAT IS", "THIS"]
      },
      {
        image: "https://source.unsplash.com/dYEuFB8KQJk/1920x1080",
        titles: ["DO I", "LOOK LIKE", "THAT ?"]
      }
    ];
  },

  mounted() {
    this.changeActiveProduct();
    this.$el.addEventListener("mousemove", this.setMouseMovePosition);
  },

  methods: {
    getNextIndex() {
      return (activeIndex + 1) % this.products.length;
    },

    changeActiveProduct(e) {
      if (animationInProgress) return;
      animationInProgress = true;

      const mouseX = e ? e.clientX + "px" : "50%";
      const mouseY = e ? e.clientY + "px" : "50%";

      const products = this.$el.querySelectorAll(".product");
      const nextProduct = products[nextIndex];
      const nextImg = nextProduct.querySelector(".img");

      nextImg.style.zIndex = 2;
      nextImg.style.clipPath = `circle(0% at ${mouseX} ${mouseY})`;

      tl.to(nextImg, {
        clipPath: `circle(200% at ${mouseX} ${mouseY})`,
        duration: 0.5,
        ease: "power4.in",
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
    },

    setMouseMovePosition(e) {
      this.$el.style.setProperty("--mouseX", e.clientX);
      this.$el.style.setProperty("--mouseY", e.clientY);
    }
  }
};
</script>

<style lang="scss" scoped>
.mouse-tracker {
  --size: 70px;
  --x: calc(1px * var(--mouseX) - var(--size) / 2);
  --y: calc(1px * var(--mouseY) - var(--size) / 2);
  --translateX: calc(var(--x) + 4px);
  --translateY: calc(var(--y) + 8px);

  position: fixed;
  width: var(--size);
  height: var(--size);
  border-radius: 50%;
  border: 2px solid;
  z-index: 3;
  opacity: 0.5;
  transform: translate(var(--translateX), var(--translateY));
  pointer-events: none;
}
</style>
