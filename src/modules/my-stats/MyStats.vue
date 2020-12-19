<template>
  <div class="my-stats fill-height">
    <StatsComponent v-if="showStatsComponent" />

    <template v-else>
      <ClipPathBackgrounds />
      <Rolands2020 />
      <SeeStatsBtn @see-stats="seeStats = true" />
    </template>

    <MorphShape
      :see-stats="seeStats"
      @show-stats-component="showStatsComponent = true"
    />
  </div>
</template>

<script>
import ClipPathBackgrounds from "./components/ClipPathBackgrounds";
import Rolands2020 from "./components/Rolands2020";
import MorphShape from "./components/MorphShape";
import SeeStatsBtn from "./components/SeeStatsBtn";
import StatsComponent from "./components/stats-component/StatsComponent";

export default {
  components: {
    ClipPathBackgrounds,
    Rolands2020,
    MorphShape,
    SeeStatsBtn,
    StatsComponent
  },

  data: () => ({
    seeStats: false,
    showStatsComponent: false
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
