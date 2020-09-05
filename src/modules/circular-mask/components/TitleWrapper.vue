<template>
  <h2 class="text-wrapper">
    <div class="text-1">
      <span>{{ titles[0] }}</span>
    </div>

    <div class="text-2 text-center">
      <span>{{ titles[1] }}</span>
    </div>

    <div class="text-3 text-right">
      <span>{{ titles[2] }}</span>
    </div>
  </h2>
</template>

<script>
export default {
  props: {
    titles: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.text-wrapper {
  position: absolute;
  bottom: 10%;
  right: 10%;
  z-index: -1;
  font-size: 2rem;
  padding: 10px;
  background: rgba(white, 0.15);
  line-height: 1;

  > div {
    overflow: hidden;
  }

  span {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-shadow: -1px 2px 5px #fff;
    transition: transform 0.5s cubic-bezier(0.83, 0, 0.17, 1);
  }

  .text-1 span,
  .text-2 span {
    transform: translateY(100%);
  }

  .text-3 span {
    transform: translateY(-100%);
  }
}
</style>
