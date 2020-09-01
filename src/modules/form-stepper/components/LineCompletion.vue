<template>
  <div class="line">
    <div class="line-complete"></div>
  </div>
</template>

<style lang="scss" scoped>
.line {
  position: absolute;
  left: calc(50% - var(--line-size) / 2);
  width: var(--line-size);
  height: 100%;
  background: var(--inactive-color);

  .line-complete {
    --line-completion: calc(1 / 5 * var(--step));

    position: absolute;
    width: 100%;
    height: 100%;
    background: var(--active-color);
    transform: scaleY(var(--line-completion));
    transform-origin: top;
    transition: transform 0.3s cubic-bezier(0.36, 0, 0.66, -0.56);
  }
}
</style>
