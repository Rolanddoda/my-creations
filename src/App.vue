<template>
  <v-app>
    <v-app-bar
      :class="position"
      fixed
      collapse
      color="primary"
      dark
      dense
      max-width="200px"
    >
      <v-app-bar-nav-icon
        @click="isDrawerOpen = !isDrawerOpen"
      ></v-app-bar-nav-icon>

      <v-btn icon to="/">
        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-btn
        icon
        href="https://github.com/Rolanddoda/my-creations"
        target="_blank"
        rel="noopener noreferrer"
      >
        <v-icon>mdi-github</v-icon>
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

    <v-navigation-drawer
      v-model="isDrawerOpen"
      absolute
      temporary
      :right="drawerRight"
    >
      <v-list dense>
        <v-list-item
          :to="route.path"
          v-for="route of routes"
          :key="route.name"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ route.meta.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ route.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import { routes } from "@/packages/router";

export default {
  name: "App",

  data: () => ({
    position: "top-left",
    isDrawerOpen: false
  }),

  created() {
    this.$store.dispatch("getStackoverflowData");
    this.$store.dispatch("getDevtoArticles");
  },

  computed: {
    drawerRight() {
      return this.position.includes("right");
    },

    routes() {
      return routes.filter(route => route.path !== "/");
    }
  }
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

<style>
/* Global styles */
html {
  overflow-y: auto !important;
}

*,
*:before,
*:after {
  box-sizing: border-box !important;
  position: relative;
}
</style>
