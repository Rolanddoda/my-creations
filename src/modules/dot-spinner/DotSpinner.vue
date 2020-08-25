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
      const tl = gsap.timeline({
        delay: 0.5,
        repeat: -1,
        repeatDelay: 0.5
      });
      const duration = 1;

      tl.to(box1, { z: 0, duration }, 0);
      tl.to(box2, { z: 0, duration }, "<");
      tl.to(wrapper, { rotation: 175, duration, ease: "back.out(1.7)" }, "0.9");

      tl.to(box1, { z: 3, duration }, ">");
      tl.to(box2, { z: 5, duration }, "<");
      tl.to(wrapper, { rotation: 285, duration, ease: "back.out(1.7)" });
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
