<template>
  <Grid
    place-items="center"
    class="loading-boxes fill-height"
    @hook:mounted="mounted"
  >
    <div class="box-wrapper">
      <div class="box"></div>
      <div class="box"></div>
    </div>
  </Grid>
</template>

<script>
import { gsap } from "gsap";

export default {
  methods: {
    mounted() {
      const [box0, box1] = this.$el.querySelectorAll(".box");
      const tl = gsap.timeline({ repeat: -1, delay: 0.5 });

      tl.to(box0, { rotation: 90, ease: "power2.in" });
      tl.to(box1, { rotation: 180, ease: "power2.out" });
      tl.to(box0, { rotation: 180, ease: "power2.in" });
    }
  }
};
</script>

<style lang="scss" scoped>
.loading-boxes {
  background: linear-gradient(to right, #45a247, #283c86);
  --box-wrapper-size: 200px;
  --box-size: calc(var(--box-wrapper-size) / 2);

  .box-wrapper {
    width: var(--box-wrapper-size);
    height: var(--box-wrapper-size);
    position: relative;

    .box {
      position: absolute;
      width: var(--box-size);
      height: var(--box-size);
      background: white;

      &:nth-child(1) {
        top: 0;
        right: 0;
        transform-origin: 0 100%;
      }

      &:nth-child(2) {
        bottom: 0;
        left: 0;
        transform-origin: 100% 0;
      }
    }
  }
}
</style>
