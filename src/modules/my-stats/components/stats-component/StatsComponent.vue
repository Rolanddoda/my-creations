<template>
  <Grid justify-content="center" align-items="center" class="stats-component">
    <DevQuoteCard />
  </Grid>
</template>

<script>
import DevQuoteCard from "./DevQuoteCard";

export default {
  components: {
    DevQuoteCard
  }
};
</script>

<style lang="scss" scoped>
.stats-component {
  position: absolute;
  height: 100%;
  width: 100%;
  background: #0f0c29;
}
</style>
