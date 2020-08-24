<template>
  <div class="boxes" :style="{ '--dot-color': color, '--z': z }">
    <div class="box">
      <div v-for="item in 3" :key="item" class="dot big" v-viz></div>
    </div>

    <div class="box" style="display: none">
      <div v-for="item in 3" :key="item" class="dot sm" v-viz></div>
    </div>
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
  --dot-sm-size: 20px;
  --dot-big-size: 40px;

  position: absolute;
  width: var(--box-size);
  height: var(--box-size);
  border-right: none;
  //transform: translateZ(var(--z)) rotate(5deg);

  .dot {
    position: absolute;
    border-radius: 50%;
    background: var(--dot-color);
    left: calc(50% - var(--dot-big-size) / 2);
    top: calc(50% - var(--dot-big-size) / 2);

    &.big {
      --d-from-center: calc(var(--box-size) / 4 + var(--dot-big-size) / 2);
      --d-from-center-negative: calc(var(--d-from-center) * -1);

      width: var(--dot-big-size);
      height: var(--dot-big-size);

      &:nth-child(1) {
        //transform: translate(
        //  calc(-1 * var(--half-box-size) + var(--half-dot-size)),
        //  calc(-1 * var(--half-box-size) + var(--half-dot-size))
        //);
        transform: translate(
          var(--d-from-center-negative),
          var(--d-from-center-negative)
        );
      }

      &:nth-child(2) {
        //transform: translate(
        //  calc(var(--half-box-size) - var(--half-dot-size)),
        //  calc(-1 * var(--half-box-size) + var(--half-dot-size))
        //);
        transform: translate(
          var(--d-from-center),
          var(--d-from-center-negative)
        );
      }

      &:nth-child(3) {
        //transform: translateY(
        //  calc(var(--half-box-size) - var(--half-dot-size))
        //);
        transform: translate(0, var(--d-from-center));
      }
      //
      //&:nth-child(2) {
      //  top: calc(var(--dot-big-size) / 4);
      //  right: calc(var(--dot-big-size) / 4);
      //}
      //
      //&:nth-child(3) {
      //  left: calc(50% - var(--dot-big-size) / 2);
      //  bottom: calc(var(--dot-big-size) / 2);
      //}
    }

    &.sm {
      width: var(--dot-sm-size);
      height: var(--dot-sm-size);
    }

    //&:nth-child(even) {
    //  width: var(--dot-sm-size);
    //  height: var(--dot-sm-size);
    //}
    //
    //&:nth-child(odd) {
    //  width: var(--dot-big-size);
    //  height: var(--dot-big-size);
    //  //display: none;
    //}

    //&:nth-child(1) {
    //  top: var(--box-margin);
    //}

    //&:nth-child(2) {
    //  left: calc(50% - var(--dot-sm-size) / 2);
    //}
    //
    //&:nth-child(3) {
    //  right: 0;
    //}
    //
    //&:nth-child(4) {
    //  right: 0;
    //  bottom: calc(50% - var(--dot-sm-size) / 2);
    //}
    //
    //&:nth-child(5) {
    //  left: calc(50% - var(--dot-big-size) / 2);
    //  bottom: 0;
    //}
    //
    //&:nth-child(6) {
    //  bottom: calc(50% - var(--dot-sm-size) / 2);
    //}
  }
}
</style>
