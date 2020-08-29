<template>
  <div id="gliding-gallery">
    <div class="bg-images">
      <div
        class="bg-image"
        v-for="image of images"
        :key="image.src"
        :style="{ backgroundImage: `url(${image.src})` }"
      ></div>
    </div>
    <Images :images="images" style="grid-area: image" />
    <Thumbnails
      :images="images"
      @change-active="changeActive"
      style="grid-area: thumbnail"
    />
    <Articles
      :images="images"
      @change-active="changeActive"
      style="grid-area: article"
    />
  </div>
</template>

<script>
import { getNrInRange } from "@/shared/functions";
import images from "./images-articles";
// Libraries
import Flipping from "flipping/dist/flipping.web";
// Components
import Images from "./components/Images";
import Thumbnails from "./components/Thumbnails";
import Articles from "./components/Articles";

let activeIndex = 0;

export default {
  components: { Images, Thumbnails, Articles },

  created() {
    this.images = images;
  },

  mounted() {
    this.changeActive(0);
  },

  methods: {
    removeAndSetDataActive(elements, newIndex) {
      const { bgImages, images, thumbnails, articles } = elements;
      const flipping = new Flipping();

      flipping.read();

      images[activeIndex].removeAttribute("data-active");
      bgImages[activeIndex].removeAttribute("data-active");
      thumbnails[activeIndex].removeAttribute("data-active");
      articles[activeIndex].removeAttribute("data-active");

      images[newIndex].setAttribute("data-active", "");
      bgImages[newIndex].setAttribute("data-active", "");
      thumbnails[newIndex].setAttribute("data-active", "");
      articles[newIndex].setAttribute("data-active", "");

      flipping.flip();
    },

    changeActive(eventOrNewIndex) {
      let newIndex = activeIndex;

      if (["PREV", "NEXT"].includes(eventOrNewIndex)) {
        newIndex += eventOrNewIndex === "PREV" ? -1 : 1;
      } else newIndex = eventOrNewIndex;

      const images = this.$el.querySelectorAll(".image");
      const bgImages = this.$el.querySelectorAll(".bg-image");
      const thumbnails = this.$el.querySelectorAll(".thumbnail");
      const articles = this.$el.querySelectorAll(".article");

      newIndex = getNrInRange(0, images.length - 1, newIndex);
      this.removeAndSetDataActive(
        { bgImages, images, thumbnails, articles },
        newIndex
      );
      activeIndex = newIndex;
    }
  }
};
</script>

<style lang="scss" scoped>
#gliding-gallery {
  --gold: #d4a12d;
  --purple: #493e56;
  --duration: 0.7s;

  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 500px;
  grid-template-rows: 1fr 15vmin;
  grid-template-areas: "image image" "thumbnail article";
  padding: 80px 150px;
  overflow: hidden;

  .bg-images {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: grid;
    grid-template: 1fr / 1fr;

    .bg-image {
      grid-area: 1 / 1 / -1/ -1;
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center;
      transform: translateX(100%);
      transition: transform var(--duration) cubic-bezier(0.5, 0, 0.5, 1);

      &[data-active] ~ .bg-image {
        transform: translateX(-100%);
      }

      &[data-active] {
        transform: translateX(0);
      }
    }
  }
}
</style>
