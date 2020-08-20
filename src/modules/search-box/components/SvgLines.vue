<template>
  <svg width="100%" height="100%" xmlns:xlink="http://www.w3.org/1999/xlink">
    <line
      transform-origin="center"
      class="line line-1"
      x1="0"
      y1="0"
      x2="100%"
      y2="100%"
    />

    <line
      transform-origin="center"
      class="line line-2"
      x1="0"
      y1="0"
      x2="100%"
      y2="100%"
    />
  </svg>
</template>

<style lang="scss" scoped>
.line {
  stroke-width: var(--border-width);
  stroke: var(--color);
}
</style>
