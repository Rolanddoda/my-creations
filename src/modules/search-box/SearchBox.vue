<template>
  <Grid place-items="center" gtr="auto 1fr" class="search-box">
    <Info></Info>

    <div class="input-section">
      <div class="input" ref="inputWrapper" data-input="closed">
        <span class="input-before"></span>
        <input type="search" />
        <span class="input-after" @click="openInput">
          <div class="close-btn" @click.stop="closeInput">
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

let isInputOpened = false;
let animationInProgress = false;

export default {
  components: {
    Info,
    SvgLines
  },

  methods: {
    openInput() {
      if (isInputOpened || animationInProgress) return;
      animationInProgress = true;

      const tl = gsap.timeline({
        onComplete: () => (animationInProgress = false)
      });
      const closeBtn = this.$refs.inputWrapper.querySelector(".close-btn");
      const input = this.$refs.inputWrapper.querySelector("input");
      const line = this.$refs.inputWrapper.querySelector(".line");

      tl.to(closeBtn, {
        right: 40,
        bottom: 40,
        duration: 0.3,
        onComplete: () => {
          isInputOpened = true;
          this.$refs.inputWrapper.setAttribute("data-input", "opened");
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
          duration: 0.2,
          onComplete: () => {
            input.focus();
          }
        },
        "size-input"
      );
    },

    closeInput() {
      if (!isInputOpened || animationInProgress) return;

      animationInProgress = true;

      const tl = gsap.timeline({
        onComplete: () => (animationInProgress = false)
      });
      const closeBtn = this.$refs.inputWrapper.querySelector(".close-btn");
      const input = this.$refs.inputWrapper.querySelector("input");
      const line = this.$refs.inputWrapper.querySelector(".line");

      input.blur();

      tl.to(
        input,
        {
          width: 0,
          ease: "back.in(2.7)",
          duration: 0.7,
          onComplete: () => {
            isInputOpened = false;
            this.$refs.inputWrapper.setAttribute("data-input", "closed");
          }
        },
        "size-input"
      );
      tl.to(
        line,
        {
          rotation: 0,
          transformOrigin: "center",
          duration: 0.2
        },
        "size-input"
      );
      tl.to(closeBtn, {
        right: -40,
        bottom: -40,
        duration: 0.3
      });
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
