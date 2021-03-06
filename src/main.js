import Vue from "vue";
import App from "./App.vue";
import router from "./packages/router";
import store from "./packages/vuex";
import vuetify from "./packages/vuetify";
import "./global-components";
import "./packages/visualize-transform-origin";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
