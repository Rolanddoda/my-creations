<template>
  <div id="gliding-gallery">
    <Images :images="images" />
    <Thumbnails :images="images" @change-active="changeActive" />
    <Articles :images="images" @change-active="changeActive" />
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
      const { images, thumbnails, articles } = elements;
      const flipping = new Flipping();

      flipping.read();

      images[activeIndex].removeAttribute("data-active");
      thumbnails[activeIndex].removeAttribute("data-active");
      articles[activeIndex].removeAttribute("data-active");

      images[newIndex].setAttribute("data-active", "");
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
      const thumbnails = this.$el.querySelectorAll(".thumbnail");
      const articles = this.$el.querySelectorAll(".article");

      newIndex = getNrInRange(0, images.length - 1, newIndex);
      this.removeAndSetDataActive({ images, thumbnails, articles }, newIndex);
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

  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
