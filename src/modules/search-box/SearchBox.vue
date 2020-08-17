<template>
  <div class="search-box">
    <div
      class="input-wrapper"
      ref="input"
      data-input-opened="false"
      @click="onClick"
    >
      <input type="search" />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onClick() {
      const toggle = {
        false: "true",
        true: "false"
      };

      const inputState = this.$refs.input.getAttribute("data-input-opened");
      this.$refs.input.setAttribute("data-input-opened", toggle[inputState]);
    }
  }
};
</script>

<style lang="scss" scoped>
.search-box {
  --color: white;
  --input-height: 15vh;
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
      width: 10vw;
      height: var(--input-height);
      outline: none;
      visibility: hidden;
    }

    &:before,
    &:after {
      position: absolute;
      content: "";
      border: var(--border-width) solid;
      border-right: none;
      width: var(--input-height);
      height: var(--input-height);
      border-radius: 50% 0 0 50%;
      left: 0;
      clip-path: circle(50% at 50% 50%);
    }

    &:after {
      border-left: none;
      border-right: var(--border-width) solid;
      left: unset;
      border-radius: 0 50% 50% 0;
      right: 0;
    }

    &[data-input-opened="true"] {
      > input {
        width: 10vw;
        visibility: visible;
      }

      &:before,
      &:after {
        clip-path: unset;
      }

      &:before {
        left: calc(-1 * var(--input-height) / 2);
      }

      &:after {
        right: calc(-1 * var(--input-height) / 2);
      }
    }
  }
}
</style>
