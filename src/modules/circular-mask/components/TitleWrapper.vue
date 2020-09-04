<template>
  <h2 class="text-wrapper">
    <div class="text-1">
      <span>Text 1</span>
    </div>

    <div class="text-2">
      <span>Text 2</span>
    </div>

    <div class="text-3">
      <span>Text 3</span>
    </div>
  </h2>
</template>

<style lang="scss" scoped>
.text-wrapper {
  width: 100px;
  height: 100px;

  > div {
    overflow: hidden;
  }

  span {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    transition: transform 1s ease-in-out;
  }

  .text-1 span,
  .text-2 span {
    transform: translateY(100%);
  }

  .text-3 span {
    transform: translateY(-100%);
  }

  &:hover {
    span {
      transform: translateY(0);
    }
  }
}
</style>
