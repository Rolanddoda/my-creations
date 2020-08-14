import Vue from "vue";
import VueRouter from "vue-router";
import { importAllRoutes } from "@/router/utils/import-all-routes";

Vue.use(VueRouter);

const routes = importAllRoutes();

const router = new VueRouter({
  routes
});

export default router;
