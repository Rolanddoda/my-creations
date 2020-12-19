<template>
  <div class="my-stats fill-height">
    <ClipPathBackgrounds />
    <Rolands2020 />
    <MorphShape :see-stats="seeStats" />
    <SeeStatsBtn @see-stats="seeStats = true" />
  </div>
</template>

<script>
import ClipPathBackgrounds from "./components/ClipPathBackgrounds";
import Rolands2020 from "./components/Rolands2020";
import MorphShape from "./components/MorphShape";
import SeeStatsBtn from "./components/SeeStatsBtn";

export default {
  components: {
    ClipPathBackgrounds,
    Rolands2020,
    MorphShape,
    SeeStatsBtn
  },

  data: () => ({
    seeStats: false
  })
};
</script>

<style lang="scss" scoped>
.my-stats {
  background-color: #0f4551;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
