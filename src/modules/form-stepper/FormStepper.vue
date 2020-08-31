<template>
  <Grid
    class="form-stepper fill-height pa-15"
    :style="{ '--step': activeStep }"
  >
    <Grid align-items="space-between" class="steps">
      <Grid
        place-items="center"
        class="step"
        :data-active="step === activeStep"
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
  data: () => ({
    activeStep: 1
  }),

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
  --step-size: 40px;
  --line-size: 5px;

  .steps {
    position: relative;
    height: 100%;
    width: var(--step-size);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .line {
    position: absolute;
    top: var(--step-size);
    left: calc(50% - var(--line-size) / 2);
    width: var(--line-size);
    height: calc(100% - 2 * var(--step-size));
    background: var(--inactive-color);

    .line-complete {
      position: absolute;
      width: 100%;
      height: 100%;
      background: var(--active-color);
      transform: scaleY(calc(1 / 5 / 2));
      transform-origin: top;
    }
  }

  .step {
    position: relative;
    width: var(--step-size);
    height: var(--step-size);
    border-radius: 50%;
    background: var(--inactive-color);
    color: white;
    z-index: 1;

    &[data-active] {
      background: var(--active-color);

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
        border: solid 2px var(--active-color);
        border-radius: 50%;
      }
    }
  }
}
</style>
