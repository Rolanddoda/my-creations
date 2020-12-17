<template>
  <Grid class="backgrounds">
    <div class="bg bg-1"></div>
    <div class="bg bg-2"></div>
    <div class="bg bg-3"></div>
  </Grid>
</template>

<style lang="scss" scoped>
@mixin linear-gradient-bg($deg) {
  background-color: #08aeea;
  background-image: linear-gradient($deg, #08aeea 0%, #2af598 100%);
}

.backgrounds {
  position: absolute;
  width: 100%;
  height: 100%;

  .bg {
    grid-area: 1 / 1;
  }

  .bg-1 {
    @include linear-gradient-bg(320deg);
    clip-path: polygon(50% 0%, 100% 0, 100% 100%, 100% 0%);
    animation: animate-bg1 0.6s cubic-bezier(0.42, 0.4, 0.53, 1.59) forwards;
    animation-delay: 4s;
  }

  .bg-2 {
    @include linear-gradient-bg(180deg);
    clip-path: polygon(50% 0, 50% 0, 95% 40%, 100% 100%, 100% 100%, 95% 40%);
    animation: animate-bg2 0.6s cubic-bezier(0.42, 0.4, 0.53, 1.59) forwards;
    animation-delay: 4.8s;
  }

  .bg-3 {
    @include linear-gradient-bg(0deg);
    clip-path: polygon(0 0, 0% 0, 0% 71%, 0% 100%, 0 100%, 0 69%);
    animation: animate-bg3 0.6s cubic-bezier(0.42, 0.4, 0.53, 1.59) forwards;
    animation-delay: 4s;
  }
}

@keyframes animate-bg1 {
  to {
    clip-path: polygon(50% 0%, 100% 0, 100% 100%, 95% 40%);
  }
}

@keyframes animate-bg2 {
  to {
    clip-path: polygon(50% 0, 50% 0, 95% 40%, 100% 100%, 100% 100%, 90% 47%);
  }
}

@keyframes animate-bg3 {
  to {
    clip-path: polygon(0 0, 20% 0, 15% 71%, 80% 100%, 0 100%, 0 69%);
  }
}
</style>
