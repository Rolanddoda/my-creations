<template>
  <Grid gap="15px" align-items="start" align-content="start" class="sidebar">
    <div class="nav-btn">
      <v-icon color="white">mdi-account</v-icon>
    </div>

    <div class="nav-btn">
      <v-icon color="white">mdi-dev-to</v-icon>
    </div>

    <div class="nav-btn">
      <v-icon color="white">mdi-github</v-icon>
    </div>

    <div class="nav-btn">
      <v-icon color="white">mdi-stack-overflow</v-icon>
    </div>
  </Grid>
</template>

<style lang="scss" scoped>
.sidebar {
  position: absolute;
  top: 0;
  transform: translateX(0);
  height: 100%;
  border-radius: 10px;
  width: 50px;
  padding: 10px 0;
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

  .nav-btn {
    width: 80%;
    margin: 0 auto;
    padding: 5px;
    text-align: center;
    border-radius: 10px;
    //background: linear-gradient(to right, #68e4bc 0%, #4ad0d1 99%);
    border: 1px solid white;
    box-shadow: 0 0 5px 1px #5fdec2;
    cursor: pointer;
  }
}

@keyframes show-sidebar {
  to {
    transform: translateX(-60px);
    opacity: 1;
  }
}
</style>
