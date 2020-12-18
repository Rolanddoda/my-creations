<template>
  <div class="start">
    <div class="shape">
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path
          v-for="(path, index) of paths"
          :id="`shape${index}`"
          :key="path.id"
          :d="path.d"
          transform="translate(100 100)"
          :style="{ visibility: index > 0 ? 'hidden' : 'visible' }"
        />
      </svg>
    </div>
  </div>
</template>

<script>
import KUTE from "kute.js";

export default {
  created() {
    this.paths = [
      {
        d:
          "M43.9,-77.7C56.5,-68.7,66.2,-56.2,73.2,-42.7C80.2,-29.2,84.5,-14.6,85.4,0.5C86.4,15.7,83.9,31.3,76.8,44.8C69.8,58.2,58.1,69.3,44.6,77.2C31,85,15.5,89.5,0.2,89.2C-15.2,88.9,-30.3,83.9,-44.4,76.3C-58.5,68.8,-71.5,58.8,-78.5,45.7C-85.5,32.5,-86.6,16.3,-85.9,0.4C-85.1,-15.4,-82.6,-30.8,-75.9,-44.7C-69.3,-58.5,-58.7,-70.9,-45.4,-79.5C-32,-88.1,-16,-93,-0.2,-92.7C15.6,-92.3,31.2,-86.7,43.9,-77.7Z",
        fill: "#0F62FE"
      },
      {
        d:
          "M45.8,-75.6C59.8,-71.2,71.9,-59.9,76.8,-46.1C81.6,-32.3,79.2,-16.2,75,-2.4C70.8,11.3,64.9,22.7,59.5,35.5C54.1,48.3,49.2,62.6,39.4,71.3C29.6,80,14.8,83.2,1.7,80.3C-11.4,77.4,-22.9,68.4,-36.3,61.8C-49.8,55.2,-65.2,50.8,-72.9,40.9C-80.7,31,-80.8,15.5,-80.6,0.1C-80.4,-15.3,-80,-30.6,-73.4,-42.6C-66.8,-54.5,-54.1,-63.1,-40.8,-67.9C-27.6,-72.7,-13.8,-73.7,1,-75.5C15.9,-77.3,31.8,-79.9,45.8,-75.6Z",
        fill: "#FF0066"
      },
      {
        d:
          "M41.3,-52.9C55.4,-46.6,70,-37.1,73.6,-24.3C77.2,-11.6,69.6,4.3,65.2,22.2C60.8,40.2,59.5,60.1,49.2,69.7C38.8,79.2,19.4,78.2,3,74.1C-13.5,70,-26.9,62.8,-38.9,53.8C-50.8,44.8,-61.3,34.1,-69.5,20C-77.7,5.8,-83.7,-11.6,-79.3,-25.9C-74.8,-40.2,-60,-51.2,-45.1,-57.2C-30.2,-63.3,-15.1,-64.3,-0.7,-63.2C13.6,-62.2,27.2,-59.2,41.3,-52.9Z",
        fill: "#24A148"
      }
    ];
  },

  mounted() {
    const firstMorph = KUTE.fromTo(
      "#shape0",
      { path: "#shape0", attr: { fill: this.paths[0].fill } },
      { path: "#shape1", attr: { fill: this.paths[1].fill } },
      {
        easing: "easingCubicOut",
        duration: 900
      }
    );

    const secondMorph = KUTE.fromTo(
      "#shape0",
      { path: "#shape1", attr: { fill: this.paths[1].fill } },
      { path: "#shape2", attr: { fill: this.paths[2].fill } },
      { easing: "easingCubicOut", duration: 900 }
    );

    const thirdMorph = KUTE.fromTo(
      "#shape0",
      { path: "#shape2", attr: { fill: this.paths[2].fill } },
      { path: "#shape0", attr: { fill: this.paths[0].fill } },
      {
        easing: "easingCubicOut",

        duration: 900
      }
    );

    function startAnimation() {
      firstMorph.chain(secondMorph);
      secondMorph.chain(thirdMorph);
      thirdMorph.chain(firstMorph);

      firstMorph.start();
    }

    startAnimation();
  }
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@800&display=swap");

.start {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "JetBrains Mono", monospace;

  .shape {
    position: fixed;
    width: 42vmin;
    height: 42vmin;
    margin-left: 45vmin;
    mix-blend-mode: difference;
    opacity: 0.4;
    transform: scale(0);
    animation: showing 0.5s ease-in forwards 5s;

    > svg {
      filter: drop-shadow(7px 6px 10px rgba(255, 255, 255, 0.2));
    }
  }
}

@keyframes showing {
  to {
    transform: scale(1);
  }
}

@keyframes flying {
  to {
    transform: translateY(-2vmin);
  }
}
</style>
