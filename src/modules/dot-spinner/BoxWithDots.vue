<template>
  <div class="box" :style="{ '--dot-color': color, '--z': z }">
    <div
      v-for="item in 6"
      :key="item"
      class="dot"
      :style="{ '--index': item }"
    ></div>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      required: true
    },
    z: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.box {
  --box-size: 200px;
  --dot-sm-size: 30px;
  --dot-big-size: 50px;

  position: absolute;
  width: var(--box-size);
  height: var(--box-size);
  mix-blend-mode: screen;
  transform: translateZ(var(--z));

  .dot {
    position: absolute;
    border-radius: 50%;
    background: var(--dot-color);
    top: 0;
    left: 0;
    transform-origin: 100px 100px;
    transform: rotate(calc(var(--index) * 360deg / 6));

    &:nth-child(even) {
      width: var(--dot-big-size);
      height: var(--dot-big-size);
    }

    &:nth-child(odd) {
      width: var(--dot-sm-size);
      height: var(--dot-sm-size);
    }
  }
}
</style>
