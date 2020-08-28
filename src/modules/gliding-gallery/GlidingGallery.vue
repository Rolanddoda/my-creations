<template>
  <div id="gliding-gallery" data-state="0">
    <Images :images="images" />
    <Thumbnails :images="images" @send="send" />
    <Articles :images="images" @send="send" />
  </div>
</template>

<script>
import images from "./images-articles";
import Flipping from "flipping/dist/flipping.web";
// Components
import Images from "./components/Images";
import Thumbnails from "./components/Thumbnails";
import Articles from "./components/Articles";

const flipping = new Flipping();
let activeBoxIndex = 0;
let state = {
  photo: 0
};

export default {
  components: {
    Images,
    Thumbnails,
    Articles
  },

  data: () => ({
    flipping: null
  }),

  created() {
    this.images = images;
  },

  mounted() {
    this.send(0);
  },

  methods: {
    changeActive(box) {
      const flipping = new Flipping();
      flipping.read();
      const boxes = this.$el.querySelectorAll(".thumbnail");
      boxes[activeBoxIndex].removeAttribute("data-active");
      boxes[box].setAttribute("data-active", "");
      activeBoxIndex = box;
      flipping.flip();
    },

    send(event) {
      const elImages = Array.from(document.querySelectorAll(".image"));
      // read cuticle positions
      flipping.read();

      const elActives = document.querySelectorAll("[data-active]");

      Array.from(elActives).forEach(el => el.removeAttribute("data-active"));

      switch (event) {
        case "PREV":
          state.photo--;
          break;
        case "NEXT":
          state.photo++;
          break;
        default:
          state.photo = +event;
          break;
      }

      var len = elImages.length;
      state.photo = Math.max(0, Math.min(state.photo, len - 1));

      Array.from(
        document.querySelectorAll(`[data-key="${state.photo}"]`)
      ).forEach(el => {
        el.setAttribute("data-active", true);
      });

      // execute the FLIP animation
      flipping.flip();
    }
  }
};
</script>

<style lang="scss" scoped>
#gliding-gallery {
  width: 100%;
  height: 100%;
  overflow: hidden;
  --gold: #d4a12d;
  --purple: #493e56;
  --duration: 0.7s;
}
</style>
