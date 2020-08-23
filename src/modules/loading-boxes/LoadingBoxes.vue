<template>
  <Grid place-items="center" class="loading-boxes fill-height">
    <div class="box-wrapper">
      <div class="box"></div>
      <div class="box"></div>
    </div>
  </Grid>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.loading-boxes {
  background: linear-gradient(to right, #45a247, #283c86);
  --box-wrapper-size: 200px;
  --box-size: calc(var(--box-wrapper-size) / 2);

  .box-wrapper {
    width: var(--box-wrapper-size);
    height: var(--box-wrapper-size);
    position: relative;

    .box {
      position: absolute;
      width: var(--box-size);
      height: var(--box-size);
      background: white;

      &:nth-child(1) {
        top: 0;
        right: 0;
        transform-origin: 0 100%;
      }

      &:nth-child(2) {
        bottom: 0;
        left: 0;
        transform-origin: 100% 0;
      }
    }
  }
}
</style>
