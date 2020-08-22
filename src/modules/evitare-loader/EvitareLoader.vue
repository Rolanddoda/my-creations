<template>
  <Grid
    place-items="center"
    class="evitare-loader fill-height"
    ref="boxes"
    @hook:mounted="mounted"
  >
    <button @click="pause">Pause</button>
    <Grid gaf="column" class="box-wrapper">
      <div class="box" style="--index: 0"></div>
      <div class="box" v-viz style="--index: 1;"></div>
      <div class="box" style="--index: 2"></div>
      <div class="box" style="--index: 3"></div>
      <div class="box" style="--index: 4"></div>
    </Grid>
  </Grid>
</template>

<script>
import { gsap } from "gsap";

let tl = null;
let pause = false;

export default {
  directives: {
    viz: {
      inserted(el) {
        const transformOrigin = getComputedStyle(el).getPropertyValue(
          "transform-origin"
        );
        console.log(transformOrigin);
        const [xAxis, yAxis] = transformOrigin
          .split(" ")
          .map(val => parseInt(val));

        const size = 7;
        const radius = "50%";

        const vizEl = document.createElement("span");
        vizEl.style.position = "absolute";
        vizEl.style.left = xAxis - size / 2 + "px";
        vizEl.style.top = yAxis - size / 2 + "px";
        vizEl.style.backgroundColor = "#000";
        vizEl.style.width = size + "px";
        vizEl.style.height = size + "px";
        vizEl.style.borderRadius = radius;

        el.appendChild(vizEl);
      }
    }
  },
  methods: {
    pause() {
      if (pause) tl.play();
      else tl.pause();
      pause = !pause;
    },
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
        // this.boxSecondAnim(tl, box, index + 1);
        // this.boxThirdAnim(tl, box, index + 1);
        // this.boxFourthAnim(tl, box);
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
      const { boxSize, duration, gap } = this.getPayload();
      const quarterBoxSize = boxSize / 4;

      tl.to(
        box,
        {
          rotation: -270,
          transformOrigin: `-${quarterBoxSize}px -${quarterBoxSize}px`,
          duration: duration / 4,
          ease: "none"
        },
        `${(index - 1) * (duration / 4)}`
      );
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

      tl.to(
        box,
        {
          scaleY: 0.5,
          scaleX: 1.5,
          duration: duration / (5 * 2),
          ease: "none"
        },
        ">"
      );

      tl.to(
        box,
        {
          scaleY: 1,
          scaleX: 1,
          duration: duration / (5 * 2),
          ease: "none"
        },
        ">"
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
          duration: duration / 20,
          ease: "none"
        },
        ">"
      );
    },

    boxFourthAnim(tl, box) {
      const { duration } = this.getPayload();

      // tl.set(box, { scaleY: 0 });

      // tl.to(
      //   box,
      //   {
      //     rotation: -180,
      //     scaleY: -0.5,
      //     transformOrigin: "bottom",
      //     duration: duration / 12,
      //     ease: "none"
      //   },
      //   ">"
      // );
      // tl.to(
      //   box,
      //   {
      //     scaleY: 1,
      //     transformOrigin: "center",
      //     duration: duration / 5,
      //     ease: "none"
      //   },
      //   ">"
      // );
    }
  }
};
</script>

<style lang="scss" scoped>
.evitare-loader {
  box-sizing: border-box;
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
