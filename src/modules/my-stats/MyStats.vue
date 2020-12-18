<template>
  <div class="my-stats fill-height">
    <ClipPathBackgrounds />
    <Rolands2020 />
    <ClickMeShape />
  </div>
</template>

<script>
import ClipPathBackgrounds from "./components/ClipPathBackgrounds";
import Rolands2020 from "./components/Rolands2020";
import ClickMeShape from "./components/ClickMeShape";

export default {
  components: {
    ClipPathBackgrounds,
    Rolands2020,
    ClickMeShape
  }
};
</script>

<style lang="scss" scoped>
.my-stats {
  background-color: #0f4551;
  color: white;
}
</style>
