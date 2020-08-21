<template>
  <Grid place-items="center" gtr="auto 1fr" class="search-box">
    <Info></Info>

    <div class="input-section">
      <div class="input" ref="inputWrapper" data-input="closed">
        <span class="input-before"></span>
        <input type="search" />
        <span class="input-after" @click="openOrCloseInput">
          <div class="close-btn">
            <SvgLines />
          </div>
        </span>
      </div>
    </div>
  </Grid>
</template>

<script>
import gsap from "gsap";
// Components
import Info from "./components/Info";
import SvgLines from "./components/SvgLines";

let state = false;

export default {
  components: {
    Info,
    SvgLines
  },

  methods: {
    openOrCloseInput() {
      if (!state) this.openInput();
    },

    openInput() {
      const tl = gsap.timeline();
      const closeBtn = this.$refs.inputWrapper.querySelector(".close-btn");
      const input = this.$refs.inputWrapper.querySelector("input");
      const line = this.$refs.inputWrapper.querySelector(".line");

      tl.to(closeBtn, {
        right: 40,
        bottom: 40,
        duration: 0.3,
        onComplete: () => {
          state = !state;
          this.$refs.inputWrapper.setAttribute(
            "data-input",
            state ? "opened" : "closed"
          );
        }
      });
      tl.to(
        input,
        {
          width: "calc(var(--input-size) * 2)",
          ease: "back.out(2.7)",
          duration: 0.7
        },
        "size-input"
      );
      tl.to(
        line,
        {
          rotation: 90,
          transformOrigin: "center",
          duration: 0.5,
          onComplete: () => {
            input.focus();
          }
        },
        "size-input"
      );
    }
  }
};
</script>

<style lang="scss" scoped>
@import "variables";

.search-box {
  height: 100%;
  background: linear-gradient(to right, #8e2de2, #4a00e0);
  color: var(--color);

  .input-section {
    width: 100%;
    height: 100%;
    display: grid;
    place-items: center;
  }

  .input {
    position: relative;

    > input {
      width: 0;
      border-top: var(--border-width) solid var(--color);
      border-bottom: var(--border-width) solid var(--color);
      height: var(--input-size);
      outline: none;
      visibility: visible;
      font-size: 3rem;
      color: inherit;

      &::selection {
        background: #450680;
      }
    }

    > .input-before,
    > .input-after {
      position: absolute;
      border: var(--border-width) solid;
      width: var(--input-size);
      height: var(--input-size);
    }

    > .input-before {
      pointer-events: none;
      border-right: none;
      border-radius: 50% 0 0 50%;
      left: calc(-1 * var(--input-size) / 2);
    }

    > .input-after {
      border-left: none;
      border-radius: 0 50% 50% 0;
    }
  }

  .circle {
    width: var(--input-size);
    height: var(--input-size);
    border: var(--border-width) solid;
    border-radius: 50%;
  }

  .close-btn {
    --half-input-size: calc(var(--input-size) / 2);
    --quarter-input-size: calc(var(--half-input-size) / 2);

    position: absolute;
    width: calc(var(--input-size) / 2 - 15px);
    height: calc(var(--input-size) / 2 - 15px);
    right: -40px;
    bottom: -40px;
  }

  [data-input="closed"] {
    .input-before {
      display: none;
    }

    .input-after {
      border-left: var(--border-width) solid;
      border-radius: 50%;
    }
  }
}
</style>

<!--<script>-->
<!--// Libraries-->
<!--import gsap from "gsap";-->
<!--// Components-->
<!--import Info from "./components/Info";-->
<!--import SvgLines from "./components/SvgLines";-->

<!--let isInputOpened = false;-->

<!--export default {-->
<!--  components: {-->
<!--    Info,-->
<!--    SvgLines-->
<!--  },-->

<!--  methods: {-->
<!--    getPayload() {-->
<!--      const input = this.$refs.input.querySelector("input");-->
<!--      const line1 = this.$refs.input.querySelectorAll(".line-1");-->
<!--      const line2 = this.$refs.input.querySelectorAll(".line-2");-->
<!--      const closeBtn = this.$refs.input.querySelector(".close-btn");-->

<!--      return { input, closeBtn, lines: [line1, line2] };-->
<!--    },-->

<!--    manageClick(openOrClose) {-->
<!--      if (isInputOpened && openOrClose === "open") return;-->

<!--      const input = this.$refs.input.querySelector("input");-->
<!--      const line1 = this.$refs.input.querySelectorAll(".line-1");-->
<!--      const line2 = this.$refs.input.querySelectorAll(".line-2");-->

<!--      this[`${openOrClose}Input`](input, [line1, line2]);-->

<!--      isInputOpened = !isInputOpened;-->
<!--    },-->

<!--    openInput() {-->
<!--      const { input, lines } = this.getPayload();-->
<!--      const [, line2] = lines;-->
<!--      const { closeBtn } = this.getPayload();-->
<!--      const tl = gsap.timeline();-->
<!--      const inputSize = parseInt(-->
<!--        getComputedStyle(closeBtn).getPropertyValue("&#45;&#45;input-size")-->
<!--      );-->
<!--      const halfInputSize = inputSize / 2;-->
<!--      const quarterInputSize = halfInputSize / 2;-->

<!--      const x = -1 * quarterInputSize + "px";-->
<!--      const y = -1 * halfInputSize - quarterInputSize + "px";-->

<!--      tl.to(closeBtn, { x, y });-->

<!--      // tl.to(lines, { x: 0, y: -110 });-->
<!--      tl.to(input, { visibility: "visible", duration: 0 });-->
<!--      tl.to(input, { width: "calc(var(&#45;&#45;input-size) * 2)" }, "sizeInput");-->
<!--      // tl.to(line2, { rotateZ: 45 }, "sizeInput");-->
<!--    },-->

<!--    closeInput() {-->
<!--      const { input, lines } = this.getPayload();-->
<!--      const [, line2] = lines;-->
<!--      const tl = gsap.timeline();-->
<!--      tl.to(-->
<!--        input,-->
<!--        {-->
<!--          width: "0px",-->
<!--          visibility: "visible"-->
<!--        },-->
<!--        "sizeInput"-->
<!--      );-->
<!--      tl.to(line2, { rotation: -45 }, "sizeInput");-->
<!--      tl.to(input, {-->
<!--        visibility: "hidden",-->
<!--        duration: 0-->
<!--      });-->
<!--      tl.to(lines, {-->
<!--        x: 80,-->
<!--        y: -35-->
<!--      });-->
<!--    }-->
<!--  }-->
<!--};-->
<!--</script>-->

<!--<style lang="scss" scoped>-->
<!--@import "variables";-->

<!--.search-box {-->
<!--  height: 100%;-->
<!--  background: linear-gradient(to right, #8e2de2, #4a00e0);-->
<!--  color: var(&#45;&#45;color);-->

<!--  > .input-wrapper {-->
<!--    position: relative;-->
<!--    cursor: pointer;-->

<!--    > input {-->
<!--      border-top: var(&#45;&#45;border-width) solid var(&#45;&#45;color);-->
<!--      border-bottom: var(&#45;&#45;border-width) solid var(&#45;&#45;color);-->
<!--      width: 0;-->
<!--      height: var(&#45;&#45;input-size);-->
<!--      outline: none;-->
<!--      visibility: hidden;-->
<!--    }-->

<!--    &:before,-->
<!--    &:after {-->
<!--      position: absolute;-->
<!--      content: "";-->
<!--      border: var(&#45;&#45;border-width) solid;-->
<!--      border-right: none;-->
<!--      width: var(&#45;&#45;input-size);-->
<!--      height: var(&#45;&#45;input-size);-->
<!--      border-radius: 50% 0 0 50%;-->
<!--      left: calc(var(&#45;&#45;input-size) / -2);-->
<!--      clip-path: circle(50% at 50% 50%);-->
<!--    }-->

<!--    &:after {-->
<!--      border-left: none;-->
<!--      border-right: var(&#45;&#45;border-width) solid;-->
<!--      left: unset;-->
<!--      border-radius: 0 50% 50% 0;-->
<!--      right: calc(var(&#45;&#45;input-size) / -2);-->
<!--    }-->

<!--    .close-btn {-->
<!--      &#45;&#45;half-input-size: calc(var(&#45;&#45;input-size) / 2);-->
<!--      &#45;&#45;quarter-input-size: calc(var(&#45;&#45;half-input-size) / 2);-->

<!--      position: absolute;-->
<!--      width: var(&#45;&#45;half-input-size);-->
<!--      height: var(&#45;&#45;half-input-size);-->
<!--      right: 0;-->
<!--      //top: calc(var(&#45;&#45;half-input-size) - var(&#45;&#45;quarter-input-size));-->
<!--      //left: calc(-1 * var(&#45;&#45;quarter-input-size));-->
<!--      z-index: 1;-->
<!--      border: 1px solid;-->
<!--      //transform: translate(-->
<!--      //  calc(-1 * var(&#45;&#45;quarter-input-size)),-->
<!--      //  calc(-1 * (var(&#45;&#45;half-input-size) + var(&#45;&#45;quarter-input-size)))-->
<!--      //);-->

<!--      //transform: translate(-->
<!--      //  calc(var(&#45;&#45;quarter-input-size) + var(&#45;&#45;quarter-input-size) / 4),-->
<!--      //  calc(var(&#45;&#45;quarter-input-size) / 2 * -1)-->
<!--      //);-->

<!--      //top: calc(var(&#45;&#45;input-size) - var(&#45;&#45;quarter-input-size) / 2);-->
<!--      //left: calc(var(&#45;&#45;quarter-input-size) + var(&#45;&#45;quarter-input-size) / 4);-->

<!--      //transform: translate(-->
<!--      //  calc(var(&#45;&#45;half-input-size)),-->
<!--      //  calc(var(&#45;&#45;half-input-size))-->
<!--      //);-->

<!--      transform: translate(-->
<!--        calc(var(&#45;&#45;half-input-size) - var(&#45;&#45;quarter-input-size) / 2),-->
<!--        calc(-1 * var(&#45;&#45;quarter-input-size) / 1.3)-->
<!--      );-->

<!--      //transform: translate(-->
<!--      //  calc(-1 * var(&#45;&#45;quarter-input-size)),-->
<!--      //  calc(-1 * var(&#45;&#45;half-input-size) - var(&#45;&#45;quarter-input-size))-->
<!--      //);-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</style>-->
