<template>
  <div class="sidebar"></div>
</template>

<style lang="scss" scoped>
.sidebar {
  position: absolute;
  top: 0;
  transform: translateX(0);
  height: 100%;
  border-radius: 10px;
  width: 50px;
  //background: linear-gradient(to right, #2c5364, #203a43, #0f2027);
  background: linear-gradient(
    33deg,
    #68e4bc 0%,
    #4ad0d1 24%,
    #2c5364 48%,
    #203a43 75%,
    #0f2027 99%
  );
  animation: show-sidebar 1s 2.5s cubic-bezier(0.45, 0, 0.55, 1) forwards;
  opacity: 0;
}

@keyframes show-sidebar {
  to {
    transform: translateX(-60px);
    opacity: 1;
  }
}
</style>
