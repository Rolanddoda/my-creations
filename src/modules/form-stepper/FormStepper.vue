<template>
  <Grid
    class="form-stepper fill-height pa-15"
    :style="{ '--step': activeStep }"
  >
    <Grid align-items="space-between" class="steps">
      <Step
        v-for="step in totalSteps"
        :key="step"
        :step="step"
        :active="step === activeStep"
        @click.native="activeStep = step"
      />

      <LineCompletion />
    </Grid>
  </Grid>
</template>

<script>
import LineCompletion from "./components/LineCompletion";
import Step from "./components/Step";

export default {
  components: {
    LineCompletion,
    Step
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
}
</style>
