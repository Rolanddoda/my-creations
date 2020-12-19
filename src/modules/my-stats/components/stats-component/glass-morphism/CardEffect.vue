<template>
  <div class="glass-morphism-effect" :style="{ '--blur': blur + 'px' }"></div>
</template>

<script>
export default {
  props: {
    blur: {
      type: Number,
      default: 4
    }
  }
};
</script>

<style lang="scss" scoped>
.glass-morphism-effect {
  position: absolute;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(var(--blur));
  -webkit-backdrop-filter: blur(4px);
  border-radius: 10px;
  animation: fly 2s ease-in-out alternate infinite;
}

@keyframes fly {
  from {
    transform: translateY(-10px);
  }
  to {
    transform: translateY(10px);
  }
}
</style>
