<template>
  <Grid :gtc="`repeat(${cols}, 1fr)`" class="split-image">
    <div
      v-for="index in cols"
      :key="index"
      :class="`__s-item-${index + 1}`"
      class="__s-item"
      :style="{
        '--s-index': index + 1,
        background: '#283c86'
      }"
    ></div>
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
  overflow: hidden;
}
</style>
