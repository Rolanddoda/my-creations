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
      const [box0, ...boxes] = this.$el.querySelectorAll(".box");
      const { duration, boxSize, gap } = this.getPayload();

      const tl = gsap.timeline({ yoyo: true, repeat: -1, repeatDelay: 0.3 });

      tl.to(
        box0,
        { left: boxSize * 4 + 4 * gap, duration, ease: "none" },
        "start"
      );
      boxes.forEach((box, index) => {
        this.boxFirstAnim(tl, box, index + 1);
        this.boxSecondAnim(tl, box, index + 1);
        this.boxThirdAnim(tl, box, index + 1);
      });
    },

    getPayload() {
      const duration = 1;
      const boxSize = parseInt(
        getComputedStyle(this.$el).getPropertyValue("--box-size")
      );
      const gap = boxSize / 2;
      return {
        boxSize,
        duration,
        gap
      };
    },

    boxFirstAnim(tl, box, index) {
      const { boxSize, duration } = this.getPayload();

      tl.to(
        box,
        {
          rotation: -45,
          top: -(boxSize / 1.5),
          duration: duration / 12,
          ease: "none"
        },
        `${((index - 1) * duration) / 5}`
      );
    },

    boxSecondAnim(tl, box, index) {
      const { boxSize, duration, gap } = this.getPayload();

      tl.to(
        box,
        {
          left: (boxSize + gap / 2) * index,
          rotation: -90,
          top: -(boxSize + gap),
          duration: duration / 12,
          ease: "none"
        },
        ">"
      );
    },

    boxThirdAnim(tl, box, index) {
      const { boxSize, gap, duration } = this.getPayload();

      tl.to(
        box,
        {
          left: (boxSize + gap) * (index - 1),
          rotation: -180,
          top: 0,
          duration: duration / 5,
          ease: "none"
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
