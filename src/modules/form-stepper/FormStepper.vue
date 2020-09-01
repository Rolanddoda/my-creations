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
        @click.native="activeStep = step"
      >
        {{ step }}
      </Grid>
      <LineCompletion />
    </Grid>
  </Grid>
</template>

<script>
import LineCompletion from "./components/LineCompletion";

export default {
  components: {
    LineCompletion
  },

  props: {
    totalSteps: {
      type: Number,
      default: 5
    }
  },

  data: () => ({
    activeStep: 1
  })
};
</script>

<style lang="scss" scoped>
@import "~@/shared/styles/variables";

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
    justify-content: space-around;
  }

  .step {
    position: relative;
    width: var(--step-size);
    height: var(--step-size);
    border-radius: 50%;
    background: var(--active-color);
    color: white;
    z-index: 1;
    cursor: pointer;
    user-select: none;
    transition: background-color 0.1s $easing 0.25s;

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
      transform: scale(0.8);
      transition: transform 0.1s $easing 0.25s;
    }

    &[data-active] {
      background: var(--active-color);

      ~ .step {
        background: var(--inactive-color);

        &::before {
          border-color: var(--inactive-color);
        }
      }

      &::before {
        transform: scale(1);
        border-color: var(--active-color);
      }
    }
  }
}
</style>
