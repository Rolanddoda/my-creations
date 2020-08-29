<template>
  <v-container>
    <v-row dense>
      <v-col v-for="route of routes" :key="route.path" :cols="3">
        <v-card shaped>
          <v-card-title>
            <div class="text-h6">{{ route.name }}</div>
          </v-card-title>

          <v-card-subtitle>Path: {{ route.path }}</v-card-subtitle>

          <v-card-actions>
            <v-btn text :to="route.path" color="deep-purple accent-4">
              Navigate
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { routes } from "@/packages/router";

export default {
  computed: {
    routes() {
      return routes.filter(route => route.path !== "/");
    }
  }
};
</script>
