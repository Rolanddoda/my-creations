<template>
  <v-app>
    <v-app-bar
      :class="position"
      fixed
      collapse
      color="primary"
      dark
      dense
      max-width="150px"
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-btn icon to="/">
        <v-icon>mdi-home</v-icon>
      </v-btn>

      <Grid gtc="1fr 1fr" class="arrows ml-1">
        <v-btn icon x-small @click="position = 'top-left'">
          <v-icon x-small>mdi-arrow-top-left</v-icon>
        </v-btn>

        <v-btn icon x-small @click="position = 'top-right'">
          <v-icon x-small>mdi-arrow-top-right</v-icon>
        </v-btn>

        <v-btn icon x-small @click="position = 'bottom-left'">
          <v-icon x-small>mdi-arrow-bottom-left</v-icon>
        </v-btn>

        <v-btn icon x-small @click="position = 'bottom-right'">
          <v-icon x-small>mdi-arrow-bottom-right</v-icon>
        </v-btn>
      </Grid>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    position: "top-left"
  })
};
</script>

<style lang="scss" scoped>
.v-app-bar {
  &.top-right {
    left: unset !important;
    right: 0 !important;
    border-bottom-left-radius: 24px !important;
    border-bottom-right-radius: 0 !important;
  }

  &.bottom-right {
    left: unset !important;
    top: unset !important;
    right: 0 !important;
    bottom: 0 !important;
    border-top-left-radius: 24px !important;
    border-bottom-right-radius: 0 !important;
  }

  &.bottom-left {
    top: unset !important;
    bottom: 0 !important;
    border-top-right-radius: 24px !important;
    border-bottom-right-radius: 0 !important;
  }
}
</style>
