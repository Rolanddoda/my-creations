import Vue from "vue";
import VueRouter from "vue-router";
import { importAllRoutes } from "@/packages/router/utils/import-all-routes";

Vue.use(VueRouter);

export const routes = importAllRoutes();

const router = new VueRouter({
  routes
});

export default router;
