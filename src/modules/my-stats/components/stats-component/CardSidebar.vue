<template>
  <Grid gap="15px" align-items="start" align-content="start" class="sidebar">
    <div
      v-for="item of items"
      :key="item.name"
      :class="{ active: item.name === active }"
      class="nav-btn"
      @click="active = item.name"
    >
      <v-icon color="white">{{ item.icon }}</v-icon>
    </div>
  </Grid>
</template>

<script>
export default {
  data: () => ({
    items: [
      { name: "account", icon: "mdi-account" },
      { name: "stackoverflow", icon: "mdi-stack-overflow" },
      { name: "github", icon: "mdi-github" },
      { name: "devto", icon: "mdi-dev-to" }
    ],
    active: "account"
  }),

  watch: {
    active: {
      handler(newVal) {
        this.$emit("active", newVal);
      },
      immediate: true
    }
  }
};
</script>

<style lang="scss" scoped>
.sidebar {
  position: absolute;
  top: 0;
  transform: translateX(0);
  height: 100%;
  border-radius: 10px;
  width: 50px;
  padding: 10px 0;
  background: linear-gradient(45deg, #2c5364, #203a43, #0f2027);
  animation: show-sidebar 1s 2.5s cubic-bezier(0.45, 0, 0.55, 1) forwards;
  opacity: 0;

  .nav-btn {
    width: 80%;
    margin: 0 auto;
    padding: 5px;
    text-align: center;
    border-radius: 10px;
    box-shadow: 0 0 5px 1px #5fdec2;
    cursor: pointer;

    &.active {
      background: linear-gradient(to right, #68e4bc 0%, #4ad0d1 99%);
    }
  }
}

@keyframes show-sidebar {
  to {
    transform: translateX(-60px);
    opacity: 1;
  }
}
</style>
