<template>
  <div
    class="wrapper"
    :style="{
      '--top': top !== undefined ? top + 'px' : 'unset',
      '--right': right !== undefined ? right + 'px' : 'unset',
      '--bottom': bottom !== undefined ? bottom + 'px' : 'unset',
      '--left': left !== undefined ? left + 'px' : 'unset'
    }"
  >
    <div class="text"><slot>Put text here</slot></div>
    <CardEffect class="card-effect-1" :blur="1" />
    <CardEffect class="card-effect-2" />
    <CardEffect class="card-effect-3" />
  </div>
</template>

<script>
import CardEffect from "./CardEffect";

export default {
  components: {
    CardEffect
  },

  props: {
    top: Number,
    right: Number,
    bottom: Number,
    left: Number
  }
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Leckerli+One&display=swap");

.wrapper {
  position: absolute;
  top: var(--top);
  right: var(--right);
  bottom: var(--bottom);
  left: var(--left);

  .text {
    font-family: "Leckerli One", cursive;
    font-size: 10vmin;
  }

  .card-effect-1 {
    width: 60%;
    height: 100%;
    top: 0;
    left: 20%;
  }

  .card-effect-2 {
    width: 50px;
    height: 50px;
    top: -20px;
    left: 25%;
  }

  .card-effect-3 {
    width: 80px;
    height: 80px;
    bottom: -40px;
    right: 25%;
  }
}
</style>
