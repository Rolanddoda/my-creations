<template>
  <Grid
    place-items="center"
    class="evitare-loader fill-height"
    ref="boxes"
    @hook:mounted="mounted"
  >
    <Grid gaf="column" class="box-wrapper">
      <div class="box" style="--index: 0"></div>
      <div class="box" style="--index: 1"></div>
      <div class="box" style="--index: 2"></div>
      <div class="box" style="--index: 3"></div>
      <div class="box" style="--index: 4"></div>
    </Grid>
  </Grid>
</template>

<script>
import { gsap } from "gsap";

export default {
  methods: {
    mounted() {
      const [box0, box1] = this.$el.querySelectorAll(".box");

      const tl = gsap.timeline();
      const duration = 2;
      const boxSize = parseInt(
        getComputedStyle(this.$el).getPropertyValue("--box-size")
      );
      const gap = boxSize / 2;

      tl.to(box0, { left: "100%", duration });
      tl.to(
        box1,
        {
          rotation: -45,
          top: -(boxSize / 1.5),
          duration: duration / 20,
          ease: "power4.out"
        },
        "<"
      );

      tl.to(
        box1,
        {
          left: boxSize + gap,
          rotation: -90,
          top: -(boxSize + gap),
          duration: duration / 20,
          ease: "power4.out"
        },
        ">"
      );

      tl.to(
        box1,
        {
          left: 0,
          rotation: -180,
          top: 0,
          duration: duration / 15,
          ease: "power4.out"
        },
        ">"
      );
    }
  }
};
</script>

<style lang="scss" scoped>
.evitare-loader {
  --box-size: 50px;
  --gap: calc(var(--box-size) / 2);

  .box-wrapper {
    position: relative;
    width: calc(var(--box-size) * 5 + 4 * var(--gap));
    height: var(--box-size);

    .box {
      position: absolute;
      width: var(--box-size);
      height: var(--box-size);
      background: #86a8e7;
      border-radius: 8px;
      left: calc((var(--gap) + var(--box-size)) * var(--index));
    }
  }
}
</style>
