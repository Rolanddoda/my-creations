<template>
  <Grid place-items="center" gtr="auto 1fr" class="search-box">
    <Info></Info>

    <div class="input-wrapper" ref="input" @click="onClick">
      <input type="search" />

      <div class="close-btn">
        <span class="line line-1"></span>
        <span class="line line-2"></span>
      </div>
    </div>
  </Grid>
</template>

<script>
// Libraries
import gsap from "gsap";
// Components
import Info from "./components/Info";

let state = false;

export default {
  components: {
    Info
  },

  methods: {
    onClick() {
      const input = this.$refs.input.querySelector("input");
      const line1 = this.$refs.input.querySelectorAll(".line-1");
      const line2 = this.$refs.input.querySelectorAll(".line-2");

      if (!state) this.openInput(input, [line1, line2]);
      else this.closeInput(input, [line1, line2]);
      state = !state;
    },

    openInput(input, lines) {
      const [, line2] = lines;
      const tl = gsap.timeline();

      tl.to(lines, { x: 0, y: -110 });
      tl.to(input, { visibility: "visible", duration: 0 });
      tl.to(input, { width: "calc(var(--input-size) * 2)" }, "sizeInput");
      tl.to(line2, { rotateZ: 45 }, "sizeInput");
    },

    closeInput(input, lines) {
      const [, line2] = lines;
      const tl = gsap.timeline();
      tl.to(
        input,
        {
          width: "0px",
          visibility: "visible"
        },
        "sizeInput"
      );
      tl.to(line2, { rotation: -45 }, "sizeInput");
      tl.to(input, {
        visibility: "hidden",
        duration: 0
      });
      tl.to(lines, {
        x: 80,
        y: -35
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.search-box {
  --color: white;
  --input-size: 150px;
  --border-width: 3px;

  height: 100%;
  background: linear-gradient(to right, #8e2de2, #4a00e0);
  color: var(--color);

  > .input-wrapper {
    position: relative;
    cursor: pointer;

    > input {
      border-top: var(--border-width) solid var(--color);
      border-bottom: var(--border-width) solid var(--color);
      width: 0;
      height: var(--input-size);
      outline: none;
      visibility: hidden;
    }

    &:before,
    &:after {
      position: absolute;
      content: "";
      border: var(--border-width) solid;
      border-right: none;
      width: var(--input-size);
      height: var(--input-size);
      border-radius: 50% 0 0 50%;
      left: calc(var(--input-size) / -2);
      clip-path: circle(50% at 50% 50%);
    }

    &:after {
      border-left: none;
      border-right: var(--border-width) solid;
      left: unset;
      border-radius: 0 50% 50% 0;
      right: calc(var(--input-size) / -2);
    }

    .close-btn {
      position: absolute;
      right: 0;
      bottom: 0;

      .line {
        position: inherit;
        width: var(--border-width);
        height: calc(var(--input-size) / 2);
        background: var(--color);
        transform: translate(80px, -35px) rotateZ(-45deg);
      }
    }
  }
}
</style>
