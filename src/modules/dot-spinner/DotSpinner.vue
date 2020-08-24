<template>
  <Grid
    place-items="center"
    class="dot-spinner fill-height"
    @hook:mounted="mounted"
  >
    <div class="box-wrapper">
      <BoxWithDots color="#0204FC" z="0" />
      <BoxWithDots color="#FEFC09" z="3px" />
      <BoxWithDots color="#FE0208" z="5px" />
    </div>
  </Grid>
</template>

<script>
import { gsap } from "gsap";
// Components
import BoxWithDots from "./BoxWithDots";

export default {
  components: {
    BoxWithDots
  },

  methods: {
    mounted() {
      const [, box1, box2] = this.$el.querySelectorAll(".box");
      const wrapper = this.$el.querySelector(".box-wrapper");
      const tl = gsap.timeline({ delay: 0.5 });

      tl.to(wrapper, { rotation: 65, duration: 3 }, 0);
      tl.to(box1, { z: 0, duration: 2 }, 0);
      tl.to(box2, { z: 0, duration: 2 }, 0);
    }
  }
};
</script>

<style lang="scss" scoped>
.dot-spinner {
  background: #1a1031;

  .box-wrapper {
    position: relative;
    width: 200px;
    height: 200px;
    perspective: 20px;
    transform: rotate(45deg);
  }
}
</style>
