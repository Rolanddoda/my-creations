<template>
  <div class="my-stats fill-height">
    <ClipPathBackgrounds />
  </div>
</template>

<script>
import ClipPathBackgrounds from "./components/ClipPathBackgrounds";

export default {
  components: {
    ClipPathBackgrounds
  }
};
</script>

<style lang="scss" scoped>
.my-stats {
  background-color: #237385;
  background-image: linear-gradient(
    45deg,
    #237385 0%,
    #510775 50%,
    #3b118d 100%
  );
}
</style>
