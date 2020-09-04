<template>
  <div class="thumbnails">
    <div
      v-for="(image, index) of images"
      :key="image.src"
      class="thumbnail"
      tabindex="-1"
      :data-key="index"
      @click="$emit('change-active', index)"
    >
      <div class="image-wrap">
        <img :src="image.src" />
      </div>
      <div class="ui-cuticle" data-flip-key="cuticle"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.thumbnails {
  position: unset;
  width: 100%;
  background-color: #fff;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  align-items: start;
  gap: 10px;
  overflow: hidden;
  padding: 5px 5px 0 0;

  > .thumbnail {
    position: relative;
    cursor: pointer;
    height: 100%;
    width: 100%;

    > .image-wrap {
      position: relative;
      width: 100%;
      height: 90%;
      min-width: 75px;
      min-height: 50px;
      overflow: hidden;

      img {
        filter: grayscale(100%);
        position: absolute;
        width: 100%;
        height: 100%;
      }
    }

    &:active {
      img {
        transform: scale(0.9);
      }
    }

    &:focus {
      outline: none;
    }

    &[data-active],
    &:hover {
      img {
        filter: grayscale(0%);
      }
    }

    &[data-active] .ui-cuticle {
      display: block;
    }

    > .ui-cuticle {
      display: none;
      background-color: var(--gold);
      position: absolute;
      bottom: 0;
      height: 0.25rem;
      width: 100%;
    }
  }
}
</style>
