<template>
  <div class="my-stats fill-height">
    <Grid class="backgrounds">
      <div class="bg bg-1"></div>
      <div class="bg bg-2"></div>
      <div class="bg bg-3"></div>
    </Grid>
  </div>
</template>

<style lang="scss" scoped>
.my-stats {
  background-color: #237385;
  background-image: linear-gradient(
    45deg,
    #237385 0%,
    #510775 50%,
    #3b118d 100%
  );

  .backgrounds {
    position: absolute;
    width: 100%;
    height: 100%;

    .bg {
      grid-area: 1 / 1;
    }

    .bg-1 {
      background-color: #ff9a8b;
      background-image: linear-gradient(
        45deg,
        #ff9a8b 0%,
        #ff6a88 55%,
        #ff99ac 100%
      );

      clip-path: polygon(50% 0%, 100% 0, 100% 100%, 95% 40%);
    }

    .bg-2 {
      background-color: #fbda61;
      background-image: linear-gradient(45deg, #fbda61 0%, #ff5acd 100%);

      clip-path: polygon(50% 0, 50% 0, 95% 40%, 100% 100%, 100% 100%, 90% 47%);
    }

    .bg-3 {
      background-color: #08aeea;
      background-image: linear-gradient(0deg, #08aeea 0%, #2af598 100%);
      clip-path: polygon(0 0, 20% 0, 15% 71%, 80% 100%, 0 100%, 0 69%);
    }
  }
}
</style>
