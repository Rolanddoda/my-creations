<template>
  <div class="my-stats fill-height">
    <ClipPathBackgrounds />
    <Rolands2020 />
  </div>
</template>

<script>
import ClipPathBackgrounds from "./components/ClipPathBackgrounds";
import Rolands2020 from "./components/Rolands2020";

export default {
  components: {
    ClipPathBackgrounds,
    Rolands2020
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
  color: white;
}
</style>
