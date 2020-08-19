<template>
  <div class="search-box">
    <div
      class="input-wrapper"
      ref="input"
      data-input-opened="false"
      @click="onClick"
    >
      <input type="search" />

      <div class="close-btn">
        <span class="line"></span>
        <span class="line"></span>
      </div>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";

let state = false;

export default {
  methods: {
    onClick() {
      if (!state) this.openInput();
      else this.closeInput();
      state = !state;
    },

    openInput() {
      const input = this.$refs.input.querySelector("input");
      gsap.to(input, { visibility: "visible", duration: 0 });
      gsap.to(input, { width: "calc(var(--input-size) * 2)" });
    },

    closeInput() {
      const input = this.$refs.input.querySelector("input");
      const tl = gsap.timeline();
      tl.to(input, {
        width: "0px",
        visibility: "visible"
      });
      tl.to(input, {
        visibility: "hidden"
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

  display: grid;
  justify-content: center;
  align-items: center;
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

      .line {
        position: inherit;
        width: var(--border-width);
        height: calc(var(--input-size) / 2);
        background: var(--color);
        right: calc(-1 * var(--input-size) / 2);
        bottom: calc(-1 * var(--input-size) / 2 / 1.7 - 3px);
        transform: rotateZ(-45deg);
      }
    }
  }
}
</style>
