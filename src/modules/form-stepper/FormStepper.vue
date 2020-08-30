<template>
  <Grid class="form-stepper fill-height pa-15">
    <div class="steps">
      <Grid
        place-items="center"
        class="step"
        v-for="step in totalSteps"
        :key="step"
      >
        {{ step }}
      </Grid>
      <div class="line"></div>
    </div>
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
  --color: #3187f2;

  .step {
    position: relative;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: var(--color);
    color: white;

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
      border: solid 2px var(--color);
      border-radius: 50%;
    }
  }
}
</style>
