<template>
  <Grid
    place-items="center"
    class="evitare-loader fill-height"
    ref="boxes"
    @hook:mounted="mounted"
  >
    <Grid gaf="column" class="box-wrapper">
      <div class="box" style="--index: 0"></div>
      <div class="box" style="--index: 1;"></div>
      <div class="box" style="--index: 2"></div>
      <div class="box" style="--index: 3"></div>
      <div class="box" style="--index: 4"></div>
    </Grid>
  </Grid>
</template>

<script>
import { gsap } from "gsap";

let tl = null;

export default {
  methods: {
    mounted() {
      const [box0, ...boxes] = this.$el.querySelectorAll(".box");
      const payload = this.getPayload();

      tl = gsap.timeline({
        yoyo: true,
        repeat: -1,
        repeatDelay: 0.3
      });

      this.firstBoxFromLeftToRight(box0, payload);
      boxes.forEach((box, index) => {
        this.rotateBox(box, index + 1, payload);
        this.squashBox(box, payload);
      });
    },

    getPayload() {
      const duration = 2;
      const boxSize = parseInt(
        getComputedStyle(this.$el).getPropertyValue("--box-size")
      );
      const gap = boxSize / 2;
      const boxDuration = duration / 4;

      return {
        boxSize,
        duration,
        gap,
        boxDuration
      };
    },

    firstBoxFromLeftToRight(box, { duration, gap, boxSize }) {
      tl.to(
        box,
        { left: boxSize * 4 + 4 * gap, duration, ease: "none" },
        "start"
      );
    },

    rotateBox(box, index, { boxSize, boxDuration, duration, gap }) {
      const quarterBoxSize = boxSize / 4;

      tl.to(
        box,
        {
          rotation: -270,
          transformOrigin: `-${quarterBoxSize}px -${quarterBoxSize}px`,
          duration: duration / 1.5,
          ease: "none"
        },
        `${((index - 1) * boxDuration) / 2}`
      );

      /* Remove rotation and change transform-origin */
      tl.to(
        box,
        {
          left: (boxSize + gap) * (index - 1),
          rotation: 0,
          transformOrigin: "bottom",
          duration: 0,
          ease: "none"
        },
        ">"
      );
    },

    squashBox(box, { boxDuration }) {
      tl.to(
        box,
        {
          scaleY: 0.5,
          scaleX: 1.5,
          duration: boxDuration / 3,
          ease: "none"
        },
        ">"
      );

      tl.to(
        box,
        {
          scaleY: 1,
          scaleX: 1,
          duration: boxDuration / 3,
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
  background: linear-gradient(to right, #3c1053, #ad5389);

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

  .viz {
  }
}
</style>
