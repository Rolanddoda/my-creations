<template>
  <Grid place-items="center" class="step" :data-active="active">
    {{ step }}
  </Grid>
</template>

<script>
export default {
  props: {
    active: Boolean,
    step: {
      type: Number,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@/shared/styles/variables";

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
</style>
