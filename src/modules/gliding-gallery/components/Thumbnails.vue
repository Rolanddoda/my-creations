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
      <img :src="image.src" />
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
  width: 100%;
  background-color: #fff;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  align-items: start;
  overflow: hidden;

  > .thumbnail {
    position: relative;
    margin-right: 0.5rem;
    padding: 0.5rem 0;
    cursor: pointer;

    &:active {
      > img {
        transform: scale(0.9);
      }
    }

    &:focus {
      outline: none;
    }

    &[data-active],
    &:hover {
      > img {
        filter: grayscale(0%);
      }
    }

    &[data-active] .ui-cuticle {
      display: block;
    }

    > img {
      filter: grayscale(100%);
      width: 100%;
      height: 110px;
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
