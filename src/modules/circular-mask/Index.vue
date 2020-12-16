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

export default {
  components: {
    Product
  },

  created() {
    this.products = [
      {
        image: require("./images/image1.jpg"),
        titles: ["LET'S", "GET", "STARTED"]
      },
      {
        image: require("./images/image2.jpg"),
        titles: ["THIS", "SEEMS EASY", "CHEESE"]
      },
      {
        image: require("./images/image3.jpg"),
        titles: ["LET'S", "DO SOME CODING", "NOW"]
      },
      {
        image: require("./images/image4.jpg"),
        titles: ["AFTER", "MANY HOURS OF", "TRYING"]
      }
    ];
    this.activeIndex = -1;
    this.nextIndex = 0;
    this.animationInProgress = false;
    this.tl = gsap.timeline({ delay: 0.5 });
  },

  mounted() {
    this.products = this.$el.querySelectorAll(".product");
    this.changeActiveProduct();
    this.$el.addEventListener("mousemove", this.setMouseMovePosition);
  },

  methods: {
    getNextIndex() {
      return (this.activeIndex + 1) % this.products.length;
    },

    getNextImg() {
      return this.products[this.nextIndex].querySelector(".img");
    },

    getCurrentImg() {
      return this.products[this.activeIndex].querySelector(".img");
    },

    changeActiveProduct(e) {
      if (this.animationInProgress) return;
      this.animationInProgress = true;

      const mouseX = e ? e.clientX + "px" : "50%";
      const mouseY = e ? e.clientY + "px" : "50%";
      const nextImg = this.getNextImg();

      nextImg.style.zIndex = 2;
      nextImg.style.clipPath = `circle(0% at ${mouseX} ${mouseY})`;
      this.animateNextImg(mouseX, mouseY);
    },

    animateNextImg(mouseX, mouseY) {
      const nextImg = this.getNextImg();

      this.tl.to(nextImg, {
        clipPath: `circle(200% at ${mouseX} ${mouseY})`,
        duration: 0.5,
        ease: "power4.in",
        onComplete: this.onAnimationComplete
      });
    },

    onAnimationComplete() {
      const nextImg = this.getNextImg();
      if (~this.activeIndex) {
        this.getCurrentImg().style.clipPath = "circle(0% at 50% 50%)";
        this.products[this.activeIndex].removeAttribute("data-active", "");
      }
      this.products[this.nextIndex].setAttribute("data-active", "");
      nextImg.style.zIndex = 1;
      this.activeIndex = this.nextIndex;
      this.nextIndex = this.getNextIndex();
      this.animationInProgress = false;
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
  z-index: 3;
  transform: translate(var(--translateX), var(--translateY));
  pointer-events: none;
  background: rgba(white, 0.5);
  filter: brightness(0.7);
}
</style>
