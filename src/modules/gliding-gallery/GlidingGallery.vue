<template>
  <Grid place-items="center" class="gliding-gallery fill-height" data-state="0">
    <div class="ui-thumbnails">
      <div
        class="ui-thumbnail"
        data-active
        tabindex="-1"
        data-key="0"
        @click="changeActive(0)"
      >
        <img src="https://picsum.photos/1200/1200/?image=1005" alt="" />
        <div class="ui-cuticle" data-flip-key="cuticle"></div>
      </div>

      <div
        class="ui-thumbnail"
        tabindex="-1"
        data-key="1"
        @click="changeActive(1)"
      >
        <img src="https://picsum.photos/1200/1200/?image=804" alt="" />
        <div class="ui-cuticle" data-flip-key="cuticle"></div>
      </div>

      <div
        class="ui-thumbnail"
        tabindex="-1"
        data-key="2"
        @click="changeActive(2)"
      >
        <img src="https://picsum.photos/1200/1200/?image=838" alt="" />
        <div class="ui-cuticle" data-flip-key="cuticle"></div>
      </div>

      <div
        class="ui-thumbnail"
        tabindex="-1"
        data-key="3"
        @click="changeActive(3)"
      >
        <img src="https://picsum.photos/1200/1200/?image=832" alt="" />
        <div class="ui-cuticle" data-flip-key="cuticle"></div>
      </div>

      <div
        class="ui-thumbnail"
        tabindex="-1"
        data-key="4"
        @click="changeActive(4)"
      >
        <img src="https://picsum.photos/1200/1200/?image=836" alt="" />
        <div class="ui-cuticle" data-flip-key="cuticle"></div>
      </div>

      <div
        class="ui-thumbnail"
        tabindex="-1"
        data-key="5"
        @click="changeActive(5)"
      >
        <img src="https://picsum.photos/1200/1200/?image=823" alt="" />
        <div class="ui-cuticle" data-flip-key="cuticle"></div>
      </div>
    </div>
  </Grid>
</template>

<script>
import Flipping from "flipping";

let activeBoxIndex = 0;

export default {
  data: () => ({
    flipping: null
  }),

  methods: {
    changeActive(box) {
      const flipping = new Flipping();
      flipping.read();

      const boxes = this.$el.querySelectorAll(".ui-thumbnail");
      boxes[activeBoxIndex].removeAttribute("data-active");
      boxes[box].setAttribute("data-active", true);
      activeBoxIndex = box;

      flipping.flip();
    }
  }
};
</script>

<style lang="scss" scoped>
$gold: #d4a12d;
$purple: #493e56;
$duration: 0.7s;
$easing: cubic-bezier(0.25, 0, 0.1, 1);

*,
*:before,
*:after {
  box-sizing: border-box;
  position: relative;
  transition-property: transform, opacity, filter;
  transition-duration: $duration, $duration, $duration;
  transition-timing-function: cubic-bezier(0.5, 0, 0.5, 1);
}

img {
  max-width: 100%;
}

.ui-thumbnails {
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0 1rem;
  padding-top: 0.5rem;
}

.ui-thumbnail {
  display: block;
  margin-right: 0.5rem;
  padding: 0.5rem 0;
  cursor: pointer;
}

.ui-cuticle {
  background-color: $gold;
  position: absolute;
  bottom: 0;
  height: 0.25rem;
  width: 100%;
}

.ui-thumbnail > img {
  width: auto;
}

/* ---------------------------------- */

.ui-thumbnail {
  > img {
    filter: grayscale(100%);
    transition-duration: $duration / 2;
  }

  &:active {
    > img {
      transform: scale(0.9);
      transition-duration: 100ms;
    }
  }

  &:focus {
    outline: none;
  }
}

.ui-cuticle {
  display: none;
}

.ui-thumbnail {
  &[data-active],
  &:hover {
    > img {
      filter: grayscale(0%);
    }
  }

  &[data-active] .ui-cuticle {
    display: block;
  }
}
//
//.boxes {
//  display: grid;
//  grid-auto-flow: column;
//  gap: 10px;
//
//  .box {
//    display: block;
//    position: relative;
//    width: 100px;
//    height: 100px;
//    border: 1px solid;
//
//    .slider {
//      position: absolute;
//      bottom: 0;
//      height: 5px;
//      width: 100%;
//      background: red;
//      display: none;
//      transition: all 1s ease-in-out;
//    }
//
//    &[data-active] {
//      border: 2px solid #0000ff;
//
//      .slider {
//        display: block;
//      }
//    }
//  }
//}
</style>
