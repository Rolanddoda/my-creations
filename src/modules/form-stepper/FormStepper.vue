<template>
  <Grid class="form-stepper fill-height pa-15" data-active-step="1">
    <Grid align-items="space-between" class="steps">
      <Grid
        place-items="center"
        class="step"
        v-for="step in totalSteps"
        :key="step"
      >
        {{ step }}
      </Grid>
      <div class="line">
        <div class="line-complete"></div>
      </div>
    </Grid>
  </Grid>
</template>

<script>
export default {
  computed: {
    totalSteps() {
      return 5;
    }
  }
};
</script>

<style lang="scss" scoped>
.form-stepper {
  --active-color: #3187f2;
  --inactive-color: #aaa;

  .steps {
    position: relative;
    height: 100%;
    width: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .line {
    position: absolute;
    top: 40px;
    left: calc(50% - 2.5px);
    width: 5px;
    height: calc(100% - 2 * 40px);
    background: var(--inactive-color);

    .line-complete {
      position: absolute;
      width: 100%;
      height: 100%;
      background: blue;
      transform: scaleY(calc(1 / 5 / 2));
      transform-origin: top;
    }
  }

  .step {
    position: relative;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: var(--inactive-color);
    color: white;
    z-index: 1;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      width: 130%;
      height: 130%;
      margin: -15%;
      border: solid 2px var(--inactive-color);
      border-radius: 50%;
    }
  }
}
</style>
