<template>
  <div class="thumbnails">
    <div
      v-for="(image, index) of images"
      :key="image.src"
      class="thumbnail"
      tabindex="-1"
      :data-key="index"
      @click="$emit('send', index)"
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
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0.5rem calc(45% + 0.5rem) 0 1rem;

  > .thumbnail {
    position: relative;
    display: block;
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
      width: auto;
      max-width: 100%;
      filter: grayscale(100%);
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
