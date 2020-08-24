<template>
  <Grid place-items="center" class="dot-spinner fill-height">
    <div class="box-wrapper">
      <BoxWithDots color="green" z="2px" />
      <BoxWithDots color="blue" z="5px" />
      <BoxWithDots color="red" z="8px" />
    </div>
  </Grid>
</template>

<script>
import BoxWithDots from "./BoxWithDots";

export default {
  components: {
    BoxWithDots
  }
};
</script>

<style lang="scss" scoped>
.dot-spinner {
  background: linear-gradient(to right, #ec6ead, #3494e6);

  .box-wrapper {
    position: relative;
    width: 200px;
    height: 200px;
    border: 1px solid;
  }
}
</style>
