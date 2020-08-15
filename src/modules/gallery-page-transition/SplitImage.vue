<template>
  <Grid :gtc="`repeat(${cols}, 1fr)`" class="split-image">
    <div
      v-for="index in cols"
      :key="index"
      :class="`__s-${index + 1}`"
      :style="{
        '--s-index': index + 1,
        background: 'inherit',
        visibility: 'hidden'
      }"
    >
      <div class="s__inner"></div>
    </div>
  </Grid>
</template>

<script>
export default {
  props: {
    cols: {
      type: Number,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.split-image {
  position: absolute;
  width: 100%;
  height: 100%;
  background: inherit;
  visibility: hidden;
  overflow: hidden;

  .s__inner {
    background: inherit;
    visibility: visible;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
}
</style>
