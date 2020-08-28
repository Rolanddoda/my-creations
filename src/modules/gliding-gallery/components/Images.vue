<template>
  <div class="images">
    <div
      class="image"
      v-for="(image, index) of images"
      :key="image.src"
      :data-key="index"
    >
      <img :src="image.src" />
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
.images {
  position: absolute;
  height: 100%;
  width: 100%;
  overflow: hidden;
  display: flex;

  > .image {
    width: 100%;
    margin-right: -100%;
    opacity: 0;
    transform: translateX(-100%);
    transition: transform 0.7s cubic-bezier(0.5, 0, 0.5, 1),
      opacity 0.7s cubic-bezier(0.5, 0, 0.5, 1);

    img {
      transform: scale(0.85);
      max-width: 100%;
      object-fit: cover;
      object-position: center 20%;
      @media (max-height: 600px) {
        object-position: center center;
      }
      width: 100%;
      height: 100%;
      display: block;
      transition: transform 0.7s cubic-bezier(0.5, 0, 0.5, 1);
    }

    &[data-active] ~ .image {
      transform: translateX(100%);
    }

    &[data-active] {
      opacity: 1;
      transform: translateX(0%);
      img {
        transform: scale(1);
      }
    }
  }
}
</style>
