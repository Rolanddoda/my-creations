<template>
  <Grid place-items="center" class="evitare-loader fill-height">
    <Grid gaf="column" class="box-wrapper">
      <div class="box" style="--index: 0"></div>
      <div class="box" style="--index: 1"></div>
      <div class="box" style="--index: 2"></div>
      <div class="box" style="--index: 3"></div>
      <div class="box" style="--index: 4"></div>
    </Grid>
  </Grid>
</template>

<style lang="scss" scoped>
.evitare-loader {
  --gap: 10px;
  --box-size: 50px;

  .box-wrapper {
    position: relative;
    width: calc(var(--box-size) * 5 + 4 * var(--gap));
    height: var(--box-size);

    .box {
      position: absolute;
      width: var(--box-size);
      height: var(--box-size);
      background: #86a8e7;
      border-radius: 8px;
      left: calc((var(--gap) + var(--box-size)) * var(--index));
    }
  }
}
</style>
