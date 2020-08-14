import Vue from "vue";
import App from "./App.vue";
import router from "./packages/router";
import store from "./packages/vuex";
import "./packages/chakra-ui";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
