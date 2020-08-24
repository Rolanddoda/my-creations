<template>
  <div class="box" :style="{ '--dot-color': color }">
    <div v-for="item in 6" :key="item" class="dot"></div>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.box {
  --box-size: 200px;
  --dot-sm-size: 20px;
  --dot-big-size: 40px;

  position: absolute;
  width: var(--box-size);
  height: var(--box-size);
  border-right: none;
  transform: rotate(5deg);

  .dot {
    position: absolute;
    border-radius: 50%;
    background: var(--dot-color);
    --box-margin: calc(var(--box-size) * 0.1);

    &:nth-child(even) {
      width: var(--dot-sm-size);
      height: var(--dot-sm-size);
    }

    &:nth-child(odd) {
      width: var(--dot-big-size);
      height: var(--dot-big-size);
    }

    &:nth-child(1) {
      top: var(--box-margin);
    }

    &:nth-child(2) {
      top: calc(var(--box-margin) / 2);
      left: calc(50% - var(--dot-sm-size) / 2);
    }

    &:nth-child(3) {
      top: var(--box-margin);
      right: 0;
    }

    &:nth-child(4) {
      right: calc(var(--box-margin) / 2);
      bottom: calc(50% - var(--dot-sm-size) / 2 - var(--box-margin));
    }

    &:nth-child(5) {
      left: calc(50% - var(--dot-big-size) / 2);
      bottom: var(--box-margin);
    }

    &:nth-child(6) {
      left: calc(var(--box-margin) / 2);
      bottom: calc(50% - var(--dot-sm-size) / 2 - var(--box-margin));
    }
  }
}
</style>
